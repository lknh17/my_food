import { publicPath } from "./publicPath";

export function assetUrl(path: string): string {
  return publicPath(path);
}
