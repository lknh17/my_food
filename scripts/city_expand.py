#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Expand compact city catalogs into full build_city_pack specs."""
from __future__ import annotations

from typing import Any, Dict, List, Sequence, Tuple

# Compact dish: (suffix, title, flavor, method, ingredients, shop, addr, wiki [, note])
Dish = Tuple


def _body(name: str, title: str, flavor: str, method: str, ingredients: str, shop: str) -> str:
    core = (
        f"{title}是{name}餐桌上的风味坐标。"
        f"严选{ingredients}，以「{method}」成菜，突出「{flavor}」。"
        f"本地人常荐{shop}一品地道火候。"
    )
    # keep ~80-120 han chars
    if len(core) > 120:
        core = core[:118] + "。"
    return core


def _tagline(title: str, flavor: str) -> str:
    return f"{title} · {flavor.split('·')[0].strip()}"


def expand(cfg: Dict[str, Any]) -> Dict[str, Any]:
    name = cfg["name"]
    eight = cfg["eight"]
    staple = cfg["staple"]
    dom = cfg["dom"]
    tag = cfg["tag"]
    dishes: Dict[str, Sequence[Dish]] = cfg["dishes"]

    volumes: Dict[str, Any] = {}
    ledes = cfg.get("ledes") or {
        "dacai": f"{name}镇桌大菜以{dom}立骨，宴席与家常并重。",
        "xiaochi": f"街头巷陌之间，{name}小吃写尽市井烟火。",
        "zhushi": f"粉面碳水是{name}一日三餐的信仰，底色属「{staple}」。",
        "fengwu": f"山川气候孕育{name}的地理标志食材与发酵调味。",
        "shijie": f"老字号与夜市食街，构成{name}可步行的寻味地图。",
    }

    for cat in ("dacai", "xiaochi", "zhushi", "fengwu", "shijie"):
        cards = []
        for d in dishes[cat]:
            suffix, title, flavor, method, ingredients, shop, addr, wiki = d[:8]
            note = d[8] if len(d) > 8 else "本地名店"
            shop2 = d[9] if len(d) > 9 else f"{name}老街区相关店"
            addr2 = d[10] if len(d) > 10 else addr
            cards.append(
                {
                    "id": f"{cfg['id']}-{suffix}",
                    "title": title,
                    "flavorProfile": flavor,
                    "cookingMethod": method,
                    "mainIngredients": ingredients,
                    "tagline": _tagline(title, flavor),
                    "body": _body(name, title, flavor, method, ingredients, shop),
                    "famousSpots": [
                        {"name": shop, "addressHint": addr, "note": note},
                        {"name": shop2, "addressHint": addr2, "note": "备选寻味点"},
                    ],
                    "wiki": wiki,
                    "query": f"{name} {title} 实拍",
                    "originEra": cfg.get("era", "清末民初传统名作"),
                    "heritageTag": cfg.get("heritage", "地方非遗 / 城市名片"),
                    "eightCuisine": eight,
                }
            )
        volumes[cat] = {"lede": ledes[cat], "cards": cards}

    radar = cfg.get("radar") or [
        (dom[:2] if len(dom) >= 2 else "鲜香", 90, f"{name}主味"),
        ("鲜香", 82, "本味与高汤"),
        ("烟火", 88, "市井密度"),
        ("复合", 75, "调味层次"),
        ("清鲜", 68, "时令调节"),
        ("醇厚", 70, "酱香卤香"),
    ]
    facts = cfg.get("facts") or [
        ("所属菜系", tag, f"{name}主流风味归属"),
        ("主导味型", dom, "日常与宴席主调"),
        ("碳水类型", staple, "粉面米食结构"),
        ("八大菜系", eight, "菜系标签"),
        ("代表招牌", "、".join(cfg["sig"][:3]), "城市必吃"),
        ("寻味提示", cfg.get("region", name), "区域饮食地理"),
    ]
    chains = cfg.get("chains") or [
        {
            "no": "01",
            "title": f"风土→物产",
            "detail": f"{cfg.get('region', name)}的气候水土塑造了{name}核心食材与调味底色。",
            "spotName": dishes["fengwu"][0][5],
        },
        {
            "no": "02",
            "title": f"技法→味型",
            "detail": f"以{dom}为代表的味型，在宴席大菜与街头小吃中反复出现并定型。",
            "spotName": dishes["dacai"][0][5],
        },
        {
            "no": "03",
            "title": f"市井→街区",
            "detail": f"老字号与夜市把{name}的粉面小吃写成可打卡的空间叙事。",
            "spotName": dishes["shijie"][0][5],
        },
    ]

    leads = cfg.get("leads") or [
        f"{name}位于{cfg.get('region', '')}，饮食底色为「{tag}」，主导味型「{dom}」，碳水结构属「{staple}」。",
        f"从镇桌大菜到街头小吃，从粉面碳水到道地风物，{name}以真实老店与市井街区承载一方风味记忆。",
    ]

    return {
        "id": cfg["id"],
        "name": name,
        "province": cfg["province"],
        "regionGroup": cfg.get("region", name),
        "center": cfg["center"],
        "defaultZoom": cfg.get("zoom", 11),
        "cuisineTag": tag,
        "eightCuisine": eight,
        "dominantFlavor": dom,
        "stapleType": staple,
        "heroHeadline": cfg["head"],
        "heroDek": cfg["dek"],
        "signatureDishes": cfg["sig"],
        "overview": {
            "subtitle": cfg.get("ov_sub") or f"{name} · {dom}与{staple}的风味样本",
            "leadParagraphs": leads,
            "flavorRadar": radar,
            "culinaryFacts": facts,
            "causalityChains": chains,
        },
        "volumes": volumes,
    }
