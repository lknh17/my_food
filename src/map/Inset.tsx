import { useEffect, useState } from "react";
import { publicPath } from "../lib/publicPath";

const WEST = 107.2;
const EAST = 123.4;
const SOUTH = 2.6;
const NORTH = 23.8;
const WIDTH = 148;
const HEIGHT = 188;

interface RingGeom {
  type: string;
  coordinates: number[][][] | number[][][][];
}

function project(lng: number, lat: number): [number, number] {
  const x = ((lng - WEST) / (EAST - WEST)) * WIDTH;
  const y = ((NORTH - lat) / (NORTH - SOUTH)) * HEIGHT;
  return [x, y];
}

function ringPath(ring: number[][]): string {
  let path = "";
  for (let index = 0; index < ring.length; index += 1) {
    const [x, y] = project(ring[index][0], ring[index][1]);
    path += `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return `${path}Z`;
}

function ringsOf(geometry: RingGeom): number[][][] {
  if (geometry.type === "Polygon") return geometry.coordinates as number[][][];
  if (geometry.type === "MultiPolygon") return (geometry.coordinates as number[][][][]).flat();
  return [];
}

function isDash(properties: Record<string, unknown>): boolean {
  return properties.adchar === "JD" || properties.adcode === "100000_JD";
}

export function SouthChinaSea({ visible }: { visible: boolean }) {
  const [art, setArt] = useState<{ land: string; dash: string } | null>(null);

  useEffect(() => {
    let cancel = false;
    fetch(publicPath("/data/china-100000-full.json"))
      .then((response) => response.json())
      .then((data: { features: { properties: Record<string, unknown>; geometry: RingGeom }[] }) => {
        if (cancel) return;
        let land = "";
        let dash = "";
        for (const feature of data.features) {
          const target = isDash(feature.properties) ? "dash" : "land";
          for (const ring of ringsOf(feature.geometry)) {
            if (ring.length < 3) continue;
            const path = ringPath(ring);
            if (target === "dash") dash += path;
            else land += path;
          }
        }
        setArt({ land, dash });
      })
      .catch(() => undefined);
    return () => {
      cancel = true;
    };
  }, []);

  if (!visible) return null;

  return (
    <figure className="inset" data-testid="scs-inset" aria-label="南海诸岛">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img">
        <rect width={WIDTH} height={HEIGHT} className="inset-water" />
        {[110, 115, 120].map((lng) => {
          const [x] = project(lng, 10);
          return (
            <g key={lng}>
              <line x1={x} y1={0} x2={x} y2={HEIGHT} stroke="#9bb7c7" strokeWidth="0.4" strokeDasharray="2 2" />
              <text x={x + 2} y={10} className="inset-grid-lbl">
                {lng}°E
              </text>
            </g>
          );
        })}
        {[10, 20].map((lat) => {
          const [, y] = project(110, lat);
          return (
            <g key={lat}>
              <line x1={0} y1={y} x2={WIDTH} y2={y} stroke="#9bb7c7" strokeWidth="0.4" strokeDasharray="2 2" />
              <text x={3} y={y - 2} className="inset-grid-lbl">
                {lat}°N
              </text>
            </g>
          );
        })}
        {art && <path d={art.land} className="inset-land" />}
        {art && <path d={art.dash} className="inset-dash" />}
        <rect x="1.5" y="1.5" width={WIDTH - 3} height={HEIGHT - 3} fill="none" stroke="#1c1916" strokeWidth="0.8" />
        <rect x={WIDTH - 64} y={HEIGHT - 22} width="58" height="16" rx="2" fill="rgba(250, 246, 240, 0.92)" />
        <text x={WIDTH - 35} y={HEIGHT - 11} textAnchor="middle" className="inset-label">
          南海诸岛
        </text>
      </svg>
    </figure>
  );
}
