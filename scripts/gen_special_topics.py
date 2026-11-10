#!/usr/bin/env python3
"""
Generate the 7 Chinese Culinary Special Topic packs and src/content/topics/index.ts.
Part 1: Initializer & Topic 1 (eightCuisines) + Topic 2 (noodlesCompendium)
"""
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOPICS_DIR = ROOT / "src" / "content" / "topics"
TOPICS_DIR.mkdir(parents=True, exist_ok=True)


def item(
    id_: str,
    title: str,
    cityId: str,
    cityName: str,
    province: str,
    provinceLabel: str,
    schoolOrStyle: str,
    flavorProfile: str,
    soulIngredient: str,
    craftHighlight: str,
    famousShop: str,
    description: str,
    coord: list[float],
    wiki: str,
    query: str,
) -> dict:
    return {
        "id": id_,
        "title": title,
        "cityId": cityId,
        "cityName": cityName,
        "province": province,
        "provinceLabel": provinceLabel,
        "schoolOrStyle": schoolOrStyle,
        "flavorProfile": flavorProfile,
        "soulIngredient": soulIngredient,
        "craftHighlight": craftHighlight,
        "famousShop": famousShop,
        "description": description,
        "coord": coord,
        "wiki": wiki,
        "query": query,
        "photoUrl": f"/photos/{id_}.jpg",
    }


def write_topic_ts(filename: str, export_var: str, pack_data: dict) -> None:
    json_str = json.dumps(pack_data, ensure_ascii=False, indent=2)
    content = (
        'import type { SpecialTopicPack } from "../types";\n\n'
        f"export const {export_var}: SpecialTopicPack = {json_str};\n"
    )
    out_path = TOPICS_DIR / filename
    out_path.write_text(content, encoding="utf-8")
    total_items = sum(len(sg["items"]) for sg in pack_data["subGroups"])
    print(f"Wrote {out_path.relative_to(ROOT)} ({len(pack_data['subGroups'])} subGroups, {total_items} items)")
