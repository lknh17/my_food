#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Shared builder and serializer for generating CityFoodPack TypeScript files.
"""

import json
import os
from typing import Any, Dict, List, Optional, Tuple

from city_expand import (
    EIGHT_CUISINE_LABELS,
    build_cohesive_essay,
    build_eating_tip,
    build_pairing_tip,
)

PROVINCE_LABELS = {
    "sc": "四川省",
    "cq": "重庆市",
    "yn": "云南省",
    "gz": "贵州省",
    "gd": "广东省",
    "gx": "广西壮族自治区",
    "fj": "福建省",
    "hi": "海南省",
    "hk": "香港特别行政区",
    "mo": "澳门特别行政区",
    "tw": "台湾省",
    "js": "江苏省",
    "zj": "浙江省",
    "ah": "安徽省",
    "sh": "上海市",
    "hn": "湖南省",
    "hb": "湖北省",
    "jx": "江西省",
    "sd": "山东省",
    "ha": "河南省",
    "sx": "山西省",
    "sn": "陕西省",
    "bj": "北京市",
    "tj": "天津市",
    "he": "河北省",
    "gs": "甘肃省",
    "qh": "青海省",
    "nx": "宁夏回族自治区",
    "xj": "新疆维吾尔自治区",
    "xz": "西藏自治区",
    "nm": "内蒙古自治区",
    "ln": "辽宁省",
    "jl": "吉林省",
    "hl": "黑龙江省",
}

VOLUME_DEFAULTS = {
    "dacai": {
        "index": "卷一",
        "title": "镇桌大菜",
        "subtitle": "宴席压轴与百年庖厨火候巅峰",
    },
    "xiaochi": {
        "index": "卷二",
        "title": "街头小吃",
        "subtitle": "市井巷陌里的晨昏烟火与手艺传承",
    },
    "zhushi": {
        "index": "卷三",
        "title": "粉面碳水",
        "subtitle": "一日三餐的灵魂汤头、浇头与碳水信仰",
    },
    "fengwu": {
        "index": "卷四",
        "title": "道地风物",
        "subtitle": "山川气候孕育的地理标志食材与发酵智慧",
    },
    "shijie": {
        "index": "卷五",
        "title": "寻味老街与名店",
        "subtitle": "百年老字号堂口、夜市食街与地标食肆巡礼",
    },
}


def card(
    id: str,
    title: str,
    flavorProfile: str,
    cookingMethod: str,
    mainIngredients: str,
    tagline: str,
    body: str,
    spots: List[Tuple[str, str, str]],
    wiki: str,
    query: Optional[str] = None,
    originEra: str = "清末民初传统名作",
    heritageTag: str = "省市级非遗 / 地标名馔",
    cuisineStyle: Optional[str] = None,
    coord: Optional[List[float]] = None,
    eatingTip: Optional[str] = None,
    pairingTip: Optional[str] = None,
) -> Dict[str, Any]:
    famous_spots = [
        {"name": s[0], "addressHint": s[1], "note": s[2]} for s in spots
    ]
    out: Dict[str, Any] = {
        "id": id,
        "title": title,
        "flavorProfile": flavorProfile,
        "cookingMethod": cookingMethod,
        "mainIngredients": mainIngredients,
        "originEra": originEra,
        "heritageTag": heritageTag,
        "tagline": tagline,
        "body": body,
        "famousSpots": famous_spots,
        "wiki": wiki,
    }
    if eatingTip:
        out["eatingTip"] = eatingTip
    if pairingTip:
        out["pairingTip"] = pairingTip
    if query:
        out["query"] = query
    if cuisineStyle:
        out["cuisineStyle"] = cuisineStyle
    if coord:
        out["coord"] = coord
    return out


def build_body(
    city_name: str,
    title: str,
    cat: str,
    origin_era: str,
    heritage_tag: str,
    cuisine_style: str,
    flavor_profile: str,
    cooking_method: str,
    main_ingredients: str,
    essay_core: str,
    spot1_name: str,
    spot1_addr: str,
    spot2_name: str = "",
) -> str:
    """
    Ensure every DishCard body is a single, cohesive, vivid, non-repetitive 190-250 char culinary essay.
    If essay_core was already built by build_cohesive_essay (190-250 chars), return it directly without
    duplicating ingredients, cookingMethod, flavorProfile, or famousSpots.
    """
    core = essay_core.strip()
    if 190 <= len(core) <= 250 and spot1_name in core:
        return core
    return build_cohesive_essay(
        city_name=city_name,
        title=title,
        cat=cat,
        cuisine_style=cuisine_style,
        origin_era=origin_era,
        heritage_tag=heritage_tag,
        flavor_profile=flavor_profile,
        cooking_method=cooking_method,
        main_ingredients=main_ingredients,
        spot1_name=spot1_name,
        spot1_addr=spot1_addr,
        spot2_name=spot2_name or f"{city_name}{title}传习老铺",
    )


def build_city_pack(spec: Dict[str, Any]) -> Dict[str, Any]:
    cid = spec["id"]
    name = spec["name"]
    prov = spec["province"]
    prov_label = PROVINCE_LABELS[prov]
    center = spec["center"]
    eight = spec["eightCuisine"]
    cuisine_tag = spec["cuisineTag"]
    dom_flavor = spec["dominantFlavor"]
    staple_type = spec["stapleType"]

    volumes_out: List[Dict[str, Any]] = []
    sig_dishes: List[str] = spec.get("signatureDishes", [])

    offsets = [
        (0.008, 0.006),
        (-0.011, 0.007),
        (0.013, -0.008),
        (-0.007, -0.011),
        (0.005, 0.014),
        (-0.015, 0.004),
        (0.016, 0.009),
        (-0.009, 0.015),
        (0.011, -0.014),
        (-0.014, -0.007),
        (0.004, -0.016),
        (-0.006, 0.012),
        (0.018, -0.004),
        (-0.017, -0.012),
        (0.009, 0.017),
    ]

    card_idx = 0
    for cat_id in ["dacai", "xiaochi", "zhushi", "fengwu", "shijie"]:
        vol_spec = spec["volumes"][cat_id]
        v_def = VOLUME_DEFAULTS[cat_id]
        cards_out: List[Dict[str, Any]] = []

        for item in vol_spec["cards"]:
            dx, dy = offsets[card_idx % len(offsets)]
            card_coord = item.get(
                "coord",
                [round(center[0] + dx, 4), round(center[1] + dy, 4)],
            )
            card_idx += 1

            item_id = item["id"]
            item_title = item["title"]
            c_style = item.get("cuisineStyle", cuisine_tag)
            f_prof = item["flavorProfile"]
            c_meth = item["cookingMethod"]
            m_ing = item["mainIngredients"]
            o_era = item.get("originEra", "清末民初传统名作")
            h_tag = item.get("heritageTag", "地方非遗 / 城市名片")
            tagline = item["tagline"]
            spots = item["famousSpots"]
            spot2_name = spots[1]["name"] if len(spots) > 1 else f"{name}{item_title}传习老铺"

            body = build_body(
                city_name=name,
                title=item_title,
                cat=cat_id,
                origin_era=o_era,
                heritage_tag=h_tag,
                cuisine_style=c_style,
                flavor_profile=f_prof,
                cooking_method=c_meth,
                main_ingredients=m_ing,
                essay_core=item["body"],
                spot1_name=spots[0]["name"],
                spot1_addr=spots[0]["addressHint"],
                spot2_name=spot2_name,
            )

            eating_tip = item.get("eatingTip") or build_eating_tip(
                cat_id, item_title, f_prof, c_meth, m_ing
            )
            pairing_tip = item.get("pairingTip") or build_pairing_tip(
                cat_id, item_title, f_prof, item.get("eightCuisine", eight), staple_type
            )

            card_obj = {
                "id": item_id,
                "title": item_title,
                "category": cat_id,
                "cuisineStyle": c_style,
                "eightCuisine": item.get("eightCuisine", eight),
                "flavorProfile": f_prof,
                "cookingMethod": c_meth,
                "mainIngredients": m_ing,
                "originEra": o_era,
                "heritageTag": h_tag,
                "tagline": tagline,
                "body": body,
                "eatingTip": eating_tip,
                "pairingTip": pairing_tip,
                "famousSpots": spots,
                "coord": card_coord,
                "wiki": item["wiki"],
                "query": item.get("query", f"{name} {item_title} 实拍"),
                "photoUrl": f"/photos/{item_id}.jpg",
            }
            cards_out.append(card_obj)

        volumes_out.append(
            {
                "id": cat_id,
                "index": v_def["index"],
                "title": v_def["title"],
                "subtitle": vol_spec.get("subtitle", v_def["subtitle"]),
                "lede": vol_spec["lede"],
                "cards": cards_out,
            }
        )

    if not sig_dishes:
        sig_dishes = [
            volumes_out[0]["cards"][0]["title"],
            volumes_out[0]["cards"][1]["title"],
            volumes_out[1]["cards"][0]["title"],
            volumes_out[2]["cards"][0]["title"],
            volumes_out[3]["cards"][0]["title"],
            volumes_out[4]["cards"][0]["title"],
        ]

    raw_ov = spec["overview"]
    chains_out = []
    for idx, ch in enumerate(raw_ov.get("causalityChains", [])):
        ch_coord = ch.get(
            "coord",
            [round(center[0] + 0.005 * (idx + 1), 4), round(center[1] - 0.004 * (idx + 1), 4)],
        )
        chains_out.append(
            {
                "no": ch.get("no", f"0{idx + 1}"),
                "title": ch["title"],
                "detail": ch["detail"],
                "spotName": ch["spotName"],
                "coord": ch_coord,
            }
        )

    zhushi_c = volumes_out[2]["cards"][0]
    dacai_c = volumes_out[0]["cards"][0]
    xiaochi_c = volumes_out[1]["cards"][0]
    shijie_c = volumes_out[4]["cards"][0]

    day_route = raw_ov.get("dayRoute") or [
        {
            "meal": "卯辰 · 清晨过早 (06:30–09:00)",
            "time": "06:30–09:00",
            "title": f"晨光头汤 · {zhushi_c['title']}唤醒味蕾",
            "dishName": zhushi_c["title"],
            "shopName": f"{zhushi_c['famousSpots'][0]['name']}（{zhushi_c['famousSpots'][0]['addressHint']}）",
            "desc": (
                f"清晨赶头锅走进{zhushi_c['famousSpots'][0]['name']}，点上一碗地道的「{zhushi_c['title']}」。"
                f"以「{zhushi_c['cookingMethod']}」呈现的「{zhushi_c['flavorProfile']}」风味，是{name}人开启一天的碳水仪式。"
            ),
        },
        {
            "meal": "午时 · 正席大菜 (11:30–13:30)",
            "time": "11:30–13:30",
            "title": f"午间正席 · 镇桌名馔{dacai_c['title']}",
            "dishName": dacai_c["title"],
            "shopName": f"{dacai_c['famousSpots'][0]['name']}（{dacai_c['famousSpots'][0]['addressHint']}）",
            "desc": (
                f"午间落座名店{dacai_c['famousSpots'][0]['name']}，品鉴镇桌硬菜「{dacai_c['title']}」。"
                f"严选{dacai_c['mainIngredients']}经「{dacai_c['cookingMethod']}」细烹，尽显{name}「{dacai_c['flavorProfile']}」的庖厨功底。"
            ),
        },
        {
            "meal": "申时 · 午后茶食 (15:00–17:00)",
            "time": "15:00–17:00",
            "title": f"申时茶歇 · 街巷慢品{xiaochi_c['title']}",
            "dishName": xiaochi_c["title"],
            "shopName": f"{xiaochi_c['famousSpots'][0]['name']}（{xiaochi_c['famousSpots'][0]['addressHint']}）",
            "desc": (
                f"午后漫步{xiaochi_c['famousSpots'][0]['addressHint']}，寻访{xiaochi_c['famousSpots'][0]['name']}尝一碟「{xiaochi_c['title']}」。"
                f"「{xiaochi_c['flavorProfile']}」的精巧滋味佐以一盏清茶，最得{name}市井闲情。"
            ),
        },
        {
            "meal": "戌亥 · 夜市宵夜 (20:00–24:00)",
            "time": "20:00–24:00",
            "title": f"戌亥夜宴 · {shijie_c['title']}烟火寻味",
            "dishName": shijie_c["title"],
            "shopName": f"{shijie_c['famousSpots'][0]['name']}（{shijie_c['famousSpots'][0]['addressHint']}）",
            "desc": (
                f"华灯初上后直奔{shijie_c['famousSpots'][0]['name']}，在「{shijie_c['title']}」的升腾烟火中"
                f"遍尝{shijie_c['mainIngredients']}，于「{shijie_c['flavorProfile']}」的夜色香气里圆满收官。"
            ),
        },
    ]

    facts_out = []
    for f in raw_ov["culinaryFacts"]:
        val = f[1]
        if f[0] == "八大菜系" and val in EIGHT_CUISINE_LABELS:
            val = EIGHT_CUISINE_LABELS[val]
        facts_out.append({"label": f[0], "value": val, "detail": f[2]})

    overview = {
        "subtitle": raw_ov["subtitle"],
        "leadParagraphs": raw_ov["leadParagraphs"],
        "flavorRadar": [
            {"label": r[0], "score": r[1], "note": r[2]}
            for r in raw_ov["flavorRadar"]
        ],
        "culinaryFacts": facts_out,
        "dayRoute": day_route,
        "causalityChains": chains_out,
    }

    return {
        "id": cid,
        "name": name,
        "province": prov,
        "provinceLabel": prov_label,
        "regionGroup": spec["regionGroup"],
        "center": center,
        "defaultZoom": spec.get("defaultZoom", 12),
        "cuisineTag": cuisine_tag,
        "eightCuisine": eight,
        "dominantFlavor": dom_flavor,
        "stapleType": staple_type,
        "heroHeadline": spec["heroHeadline"],
        "heroDek": spec["heroDek"],
        "signatureDishes": sig_dishes,
        "overview": overview,
        "volumes": volumes_out,
    }


def write_ts_file(filepath: str, export_var: str, packs: List[Dict[str, Any]]) -> None:
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    json_str = json.dumps(packs, ensure_ascii=False, indent=2)
    content = (
        'import type { CityFoodPack } from "../types";\n\n'
        f"export const {export_var}: CityFoodPack[] = {json_str};\n"
    )
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    total_cards = sum(len(v["cards"]) for p in packs for v in p["volumes"])
    print(f"Wrote {filepath} ({len(packs)} cities, {total_cards} cards)")
