import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const hubBase = process.env.HUB_BASE_PATH?.replace(/\/$/, "");
const base = hubBase ? `${hubBase}/` : "/";

const TILES_CACHE_ROOT = path.resolve(process.cwd(), "public", "tiles-cache");
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

function upstreamTileUrls(mode: string, z: number, y: number, x: number): string[] {
  if (mode === "street") {
    return [
      `https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${z}`,
      `https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${z}`,
    ];
  }
  if (mode === "satellite") {
    return [
      `https://webst02.is.autonavi.com/appmaptile?style=6&x=${x}&y=${y}&z=${z}`,
      `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`,
    ];
  }
  if (mode === "ref") {
    return [
      `https://webst02.is.autonavi.com/appmaptile?style=8&x=${x}&y=${y}&z=${z}`,
      `https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/${z}/${y}/${x}`,
    ];
  }
  // mode === "topo"
  if (z >= 14) {
    return [
      `https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${z}`,
      `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`,
    ];
  }
  return [
    `https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}`,
    `https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${z}`,
  ];
}

async function fetchValidTileBuffer(mode: string, z: number, y: number, x: number): Promise<Buffer | null> {
  const urls = upstreamTileUrls(mode, z, y, x);
  for (const url of urls) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6500);
      const resp = await fetch(url, {
        headers: { "User-Agent": UA },
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!resp.ok) continue;
      const arr = await resp.arrayBuffer();
      const buf = Buffer.from(arr);
      if (z >= 8 && buf.length <= 3600 && url.includes("arcgisonline.com")) {
        continue;
      }
      if (buf.length > 400) {
        return buf;
      }
    } catch {
      // try next fallback URL
    }
  }
  return null;
}

function attachShiweiMiddleware(middlewares: {
  use: (fn: (req: any, res: any, next: () => void) => void) => void;
}) {
  const baseNoSlash = base.replace(/\/$/, "");
  middlewares.use(async (req, res, next) => {
    if (!req.url) return next();
    if (baseNoSlash && req.url.startsWith(`${baseNoSlash}${baseNoSlash}/`)) {
      req.url = req.url.replace(new RegExp(`^${baseNoSlash}${baseNoSlash}/`), base);
    } else if (req.url.startsWith("/my_food/my_food/")) {
      req.url = req.url.replace(/^\/my_food\/my_food\//, base);
    } else if (base === "/" && (req.url.startsWith("/food/") || req.url.startsWith("/my_food/"))) {
      req.url = req.url.replace(/^\/(my_)?food\//, "/") || "/";
    } else if (
      base !== "/" &&
      (req.url.startsWith("/photos/") ||
        req.url.startsWith("/data/") ||
        req.url.startsWith("/tiles-cache/"))
    ) {
      req.url = `${baseNoSlash}${req.url}`;
    }

    // Local disk-caching tile proxy: /(my_food/)?tiles-cache/:mode/:z/:y/:x.jpg
    const cleanUrl = req.url.split("?")[0];
    const tileMatch = cleanUrl.match(/\/tiles-cache\/(topo|satellite|street|ref)\/(\d+)\/(\d+)\/(\d+)\.jpg$/);
    if (tileMatch) {
      const [, mode, zStr, yStr, xStr] = tileMatch;
      const z = Number(zStr);
      const y = Number(yStr);
      const x = Number(xStr);
      const diskPath = path.join(TILES_CACHE_ROOT, mode, zStr, yStr, `${xStr}.jpg`);

      if (fs.existsSync(diskPath)) {
        const stat = fs.statSync(diskPath);
        if (stat.size > 400 && !(z >= 8 && stat.size === 2521)) {
          res.setHeader("Content-Type", "image/jpeg");
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          fs.createReadStream(diskPath).pipe(res);
          return;
        }
      }

      const buf = await fetchValidTileBuffer(mode, z, y, x);
      if (buf) {
        try {
          fs.mkdirSync(path.dirname(diskPath), { recursive: true });
          fs.writeFileSync(diskPath, buf);
        } catch {
          // ignore write errors
        }
        res.setHeader("Content-Type", "image/jpeg");
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        res.end(buf);
        return;
      }
    }

    next();
  });
}

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: "shiwei-dual-base-and-tile-cache",
      configureServer(server) {
        attachShiweiMiddleware(server.middlewares);
      },
      configurePreviewServer(server) {
        attachShiweiMiddleware(server.middlewares);
      },
    },
  ],
  server: {
    host: process.env.HOST ?? "::",
    port: Number(process.env.PORT ?? 5196),
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: process.env.HOST ?? "127.0.0.1",
    port: Number(process.env.PORT ?? 4176),
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 6500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/maplibre-gl")) {
            return "vendor-maplibre";
          }
          if (id.includes("node_modules/react")) {
            return "vendor-react";
          }
          const cityMatch = id.match(/\/src\/content\/cities\/([a-z0-9_]+)/);
          if (cityMatch) {
            const slug = cityMatch[1];
            const bucket = slug.charCodeAt(0) % 16;
            return `cities-data-${bucket.toString(16)}`;
          }
          return undefined;
        },
      },
    },
  },
});
