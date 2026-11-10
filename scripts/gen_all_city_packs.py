#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate all 6 CityFoodPack TypeScript batches and src/content/cities/index.ts.

Usage:
  python3 scripts/gen_all_city_packs.py
"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from pack_builder import build_city_pack, write_ts_file
from city_expand import expand
from catalogs_b1 import B1
from catalogs_b2 import B2
from catalogs_b3 import B3
from catalogs_b4 import B4
from catalogs_b5 import B5
from catalogs_b6 import B6

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "content" / "cities"

BATCHES = [
    ("batch1_southwest.ts", "batch1SouthwestCities", B1),
    ("batch2_south_maritime.ts", "batch2SouthMaritimeCities", B2),
    ("batch3_jiangnan_east.ts", "batch3JiangnanEastCities", B3),
    ("batch4_central.ts", "batch4CentralCities", B4),
    ("batch5_north_central.ts", "batch5NorthCentralCities", B5),
    ("batch6_north_west_northeast.ts", "batch6NorthWestNortheastCities", B6),
]


def write_index(total_cities: int) -> None:
    content = '''import type { CityFoodPack } from "../types";
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
'''
    path = OUT / "index.ts"
    path.write_text(content, encoding="utf-8")
    print(f"Wrote {path} ({total_cities} cities in allCityFoodPacks)")


def validate(packs: list) -> None:
    ids = [p["id"] for p in packs]
    assert len(ids) == len(set(ids)), "duplicate city ids"
    for p in packs:
        assert len(p["volumes"]) == 5, p["id"]
        for v in p["volumes"]:
            assert len(v["cards"]) == 3, f"{p['id']} {v['id']}"
        assert p["stapleType"] in {
            "面食帝国", "嗦粉天堂", "米食百味", "粉面双绝", "山海兼备"
        }, p["id"]
        assert p["eightCuisine"] in {
            "chuan", "yue", "su", "lu", "zhe", "min", "xiang", "hui", "local"
        }, p["id"]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    all_packs = []
    for filename, export_var, catalog in BATCHES:
        specs = [expand(cfg) for cfg in catalog]
        packs = [build_city_pack(spec) for spec in specs]
        validate(packs)
        write_ts_file(str(OUT / filename), export_var, packs)
        all_packs.extend(packs)
        print(f"  -> {export_var}: {len(packs)} cities")

    validate(all_packs)
    write_index(len(all_packs))

    provinces = sorted({p["province"] for p in all_packs})
    print(f"\nDONE: {len(all_packs)} cities, {len(provinces)} provinces covered")
    print("Provinces:", ",".join(provinces))
    cards = sum(len(v["cards"]) for p in all_packs for v in p["volumes"])
    print(f"Total dish cards: {cards}")


if __name__ == "__main__":
    main()
