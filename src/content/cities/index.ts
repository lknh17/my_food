import type { CityFoodPack } from "../types";
import { batch1SouthwestCities } from "./batch1_southwest";
import { batch2SouthMaritimeCities } from "./batch2_south_maritime";
import { batch3JiangnanEastCities } from "./batch3_jiangnan_east";
import { batch4CentralCities } from "./batch4_central";
import { batch5NorthCentralCities } from "./batch5_north_central";
import { batch6NorthWestNortheastCities } from "./batch6_north_west_northeast";

export const allCityFoodPacks: CityFoodPack[] = [
  ...batch1SouthwestCities,
  ...batch2SouthMaritimeCities,
  ...batch3JiangnanEastCities,
  ...batch4CentralCities,
  ...batch5NorthCentralCities,
  ...batch6NorthWestNortheastCities,
];

export const cityFoodPacksById: Record<string, CityFoodPack> = Object.fromEntries(
  allCityFoodPacks.map((pack) => [pack.id, pack]),
);

export function getCityFoodPack(id?: string): CityFoodPack {
  if (id && cityFoodPacksById[id]) return cityFoodPacksById[id];
  return cityFoodPacksById["chengdu"] ?? allCityFoodPacks[0];
}

export {
  batch1SouthwestCities,
  batch2SouthMaritimeCities,
  batch3JiangnanEastCities,
  batch4CentralCities,
  batch5NorthCentralCities,
  batch6NorthWestNortheastCities,
};
