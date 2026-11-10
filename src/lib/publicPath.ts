/** 静态资源路径，兼容挂到中枢子路径与独立根路径部署。 */
export function publicPath(path: string): string {
  if (!path) return path;
  if (/^(https?:|data:)/i.test(path)) return path;
  const metaEnv = (import.meta as { env?: { BASE_URL?: string } }).env;
  const rawBase = metaEnv?.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const clean = path.replace(/^\/+/, "");
  const baseNoSlash = base.replace(/^\/+|\/+$/g, "");
  if (baseNoSlash && (clean === baseNoSlash || clean.startsWith(`${baseNoSlash}/`))) {
    return `/${clean}`;
  }
  return `${base}${clean}`;
}
