#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Expand compact city catalogs into full build_city_pack specs."""
from __future__ import annotations

from typing import Any, Dict, List, Sequence, Tuple

# Compact dish: (suffix, title, flavor, method, ingredients, shop, addr, wiki [, note, shop2, addr2])
Dish = Tuple

EIGHT_CUISINE_LABELS: Dict[str, str] = {
    "chuan": "川菜体系",
    "lu": "鲁菜体系",
    "yue": "粤菜体系",
    "su": "苏菜体系",
    "zhe": "浙菜体系",
    "min": "闽菜体系",
    "xiang": "湘菜体系",
    "hui": "徽菜体系",
    "local": "地域特色风味",
}

GENERIC_SHOPS = {
    "面馆", "粉店", "粥店", "早餐店", "早餐", "早点", "早点店", "早点摊",
    "烧烤店", "小吃店", "小吃摊", "夜市", "甜品店", "甜品摊", "茶馆",
    "菜馆", "海鲜餐厅", "渔港", "市场", "菜市场", "作坊", "特产店",
    "糕点店", "糕团店", "汤馆", "汤店", "饼店", "卤味店", "火锅店",
}


def _normalize_shop1(city_name: str, title: str, shop: str, addr: str) -> str:
    s = shop.strip()
    if s in GENERIC_SHOPS or len(s) <= 2:
        clean_title = title.split("/")[0].replace(city_name, "").strip() or title
        return f"{city_name}{clean_title}老字号"
    return s


def _derive_shop2(city_name: str, title: str, cat: str, shop1: str, addr: str) -> str:
    clean_title = title.split("/")[0].replace(city_name, "").strip() or title
    clean_addr = addr.split("/")[0].strip()
    if cat == "dacai":
        cand = f"{city_name}{clean_title}传习酒楼"
    elif cat == "xiaochi":
        cand = f"{clean_addr}{clean_title}百年老铺"
    elif cat == "zhushi":
        cand = f"{city_name}{clean_title}传习老铺"
    elif cat == "fengwu":
        cand = f"{city_name}{clean_title}非遗工坊"
    else:
        cand = f"{clean_addr}百年老字号分店"
    if cand == shop1:
        cand = f"{city_name}{clean_title}传习老铺"
    return cand


def build_eating_tip(
    cat: str,
    title: str,
    flavor: str,
    method: str,
    ingredients: str,
) -> str:
    if any(k in title for k in ("汤包", "小笼", "灌汤", "生煎")):
        return "遵循「轻轻提、慢慢移、先开窗、后喝汤」口诀，先吸尽鲜醇肉汁，再佐姜丝香醋品味薄皮嫩馅"
    if cat == "zhushi":
        if any(k in title or k in method for k in ("拌", "燃", "热干", "炸酱", "油泼", "干捞", "干拌", "格拉条", "凉粉", "酿皮", "冷粉")):
            return "上桌后趁热气或红油未凝时迅速从碗底翻拌均匀，使每根粉面挂满浓香酱汁与碎料，大口嗦入最见功力"
        if "泡馍" in title or "泡" in title:
            return "讲究先将馍块细掰匀称使滚汤充分渗透，吃时贴碗边「蚕食」切忌翻搅，配糖蒜辣酱始终汤热味浓"
        if any(k in title for k in ("粉", "米线", "粿条", "面线")):
            return "先轻啜一口滚烫原汤感受骨汤底味，再夹粉佐以酸笋、酸豆角或鲜切浇头同食，滑爽弹牙层次分明"
        return "先饮头口原汤唤醒味蕾，再趁面条筋骨爽弹时连浇头同食，中途添少许当地陈醋或油辣子风味更佳"
    if cat == "dacai":
        if any(k in title or k in method for k in ("火锅", "涮", "汤锅", "铜锅")):
            return "遵循「先荤后素、七上八下」涮烫法则，鲜切部位入沸汤轻涮即起，裹满地道蘸碟趁热入口"
        if any(k in title or k in method for k in ("烤鸭", "烧鹅", "乳鸽", "烤", "烧", "酥")):
            return "趁热先夹带皮酥脆部位细品焦香脂汁，再佐薄饼、葱丝或酸梅解腻酱料同食，外酥里嫩毫不腻口"
        if any(k in title or k in ingredients for k in ("鱼", "蟹", "虾", "海参", "海肠", "蚝", "蚌")):
            return "先夹取鱼腹或膏黄最肥美处细品本味鲜甜，再以盘中浓醇汤汁浇淋热白米饭，鲜味丝毫不浪费"
        return "趁热夹取酥嫩部位先尝原汁，再佐锅中汤卤与辅料同食，待味蕾打开后配热饭细嚼，层次最为丰满"
    if cat == "xiaochi":
        if any(k in method or k in title for k in ("炸", "煎", "烙", "烤", "火烧", "锅盔", "饼", "锅贴")):
            return "务必在刚出锅黄金三分钟内趁热咬开酥脆外皮，小心内里滚烫汁水，外焦里嫩的口感反差最为惊艳"
        return "现点现做现食方得精髓，第一口先尝食材本味与米麦清香，再依喜好轻蘸特制红油、蒜醋或甜酱"
    if cat == "fengwu":
        return "可先细嗅其自然发酵或山海原产清香，入馔时宜在猛火爆香或起锅点睛阶段下入，最能激发道地风味"
    return "建议避开正午高峰，于清晨头锅或华灯初上时分漫步寻味，采取「每店小份、连尝数家」策略遍尝街区招牌"


def build_pairing_tip(
    cat: str,
    title: str,
    flavor: str,
    eight: str,
    staple: str,
) -> str:
    if "麻" in flavor or ("辣" in flavor and eight == "chuan"):
        return "宜配冰镇红糖冰粉、唯怡豆奶、酸梅汤或川渝老鹰茶解辣清口"
    if eight == "yue" or any(k in title for k in ("海鲜", "虾", "蟹", "蚝", "鹅", "双皮奶")):
        return "宜配一盅陈年普洱、潮州凤凰单丛或广府老火例汤刮油提鲜"
    if eight in ("su", "zhe") or "甜" in flavor:
        return "宜配明前碧螺春、西湖龙井清茶或温热三年陈绍兴花雕黄酒解腻增香"
    if eight == "xiang" or "酸辣" in flavor or "酸" in flavor:
        return "宜配冰镇甜酒酿、绿豆沙或山泉清茶，以温润甘甜平衡酸辣冲击"
    if eight == "min":
        return "宜配武夷岩茶大红袍、安溪铁观音或冰镇石花膏四果汤清润回甘"
    if eight == "hui":
        return "宜配黄山毛峰、祁门红茶或温润米酒，以山岳茗香衬托醇厚酱韵"
    if eight == "lu" or staple == "面食帝国" or cat == "zhushi":
        return "宜配本地手工陈醋、紫皮糖蒜、爽口酱菜或一碗原汤化原食"
    return "宜配当地特色清茶、时令酸甜泡菜或热骨汤同享，荤素相宜更显地道"


def build_cohesive_essay(
    city_name: str,
    title: str,
    cat: str,
    cuisine_style: str,
    origin_era: str,
    heritage_tag: str,
    flavor_profile: str,
    cooking_method: str,
    main_ingredients: str,
    spot1_name: str,
    spot1_addr: str,
    spot2_name: str,
) -> str:
    """
    Build a single, cohesive, vivid, non-repetitive 190-250 char culinary essay
    covering: (1) local culinary status & cultural origin, (2) authentic ingredients &
    key craft, (3) tasting layers, and (4) time-honored restaurant recommendation.
    """
    if cat == "dacai":
        essay = (
            f"「{title}」乃{city_name}极具代表性的镇桌名馔，源起{origin_era}（{heritage_tag}），"
            f"深植于{cuisine_style}的筵席传统之中。庖厨严选{main_ingredients}为材，"
            f"恪守「{cooking_method}」之古法火候，将食材本味与复合汤卤融于一炉。"
            f"成菜尽显「{flavor_profile}」的风味层次，入口醇厚馥郁、回味悠长。"
            f"老饕寻味常赴{spot1_name}（{spot1_addr}）或{spot2_name}，于堂前热气升腾间一探{city_name}庖厨的看家功底。"
        )
    elif cat == "xiaochi":
        essay = (
            f"「{title}」是镌刻在{city_name}街巷肌理中的市井名点，承袭{origin_era}手艺（{heritage_tag}），"
            f"浓缩了{cuisine_style}的民间饮食智慧。匠人精选{main_ingredients}，"
            f"凭「{cooking_method}」之老练手法现做现呈，火候拿捏分毫不差。"
            f"出锅时「{flavor_profile}」交织扑鼻，齿颊生津而富于市井张力。"
            f"本地食客首推{spot1_name}（{spot1_addr}）与{spot2_name}，趁热品尝最能领略{city_name}晨昏不息的烟火温情。"
        )
    elif cat == "zhushi":
        essay = (
            f"「{title}」撑起了{city_name}人一日三餐的碳水信仰，渊源可溯至{origin_era}（{heritage_tag}），"
            f"堪称{cuisine_style}主食谱系的灵魂坐标。店家讲究以{main_ingredients}入馔，"
            f"经「{cooking_method}」悉心烹调，令米麦筋骨饱吸汤卤精华。"
            f"入口尽展「{flavor_profile}」之妙，抚慰肚肠且余韵绵密。"
            f"街头寻味必访{spot1_name}（{spot1_addr}）及{spot2_name}，在一碗热气腾腾的滋味里读懂{city_name}的日常底色。"
        )
    elif cat == "fengwu":
        essay = (
            f"「{title}」系{city_name}山川水土孕育的风物结晶，自{origin_era}起便享誉一方（{heritage_tag}），"
            f"奠定了{cuisine_style}的味觉底盘。当地依托道地{main_ingredients}，"
            f"遵循「{cooking_method}」的时令法则与传统工序，锁住自然鲜醇。"
            f"其风味独具「{flavor_profile}」之特质，入菜佐餐皆能提味点睛。"
            f"欲觅正宗原产风物，宜赴{spot1_name}（{spot1_addr}）或{spot2_name}细加甄选，体悟一方水土的造物馈赠。"
        )
    else:
        essay = (
            f"「{title}」汇聚了{city_name}最具代表性的饮食记忆，自{origin_era}绵延至今（{heritage_tag}），"
            f"是体察{cuisine_style}活态演进的鲜活剧场。街区与堂口云集{main_ingredients}等看板名物，"
            f"以「{cooking_method}」串联起沿街食肆的鼎沸人声。"
            f"漫步其间，「{flavor_profile}」的香气弥漫街巷，昼夜皆有食客闻香而至。"
            f"沿着{spot1_name}（{spot1_addr}）与{spot2_name}一路寻味，最能感受{city_name}酣畅淋漓的美食江湖。"
        )

    if len(essay) < 192:
        essay += f"这一口传承数代的地道风味，至今仍是远近食客造访{city_name}必尝的味觉名片。"
    if len(essay) > 248:
        trimmed = essay[:245]
        for sep in ("。", "；", "，"):
            idx = trimmed.rfind(sep)
            if idx >= 192:
                essay = trimmed[:idx] + "。"
                break
        else:
            essay = trimmed[:244] + "。"
    return essay


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

    origin_era = cfg.get("era", "清末民初传统名作")
    heritage_tag = cfg.get("heritage", "地方非遗 / 城市名片")

    for cat in ("dacai", "xiaochi", "zhushi", "fengwu", "shijie"):
        cards = []
        for d in dishes[cat]:
            suffix, title, flavor, method, ingredients, raw_shop, addr, wiki = d[:8]
            note = d[8] if len(d) > 8 else "本地名店"
            shop = _normalize_shop1(name, title, raw_shop, addr)
            if len(d) > 9 and d[9] and "老街区相关店" not in d[9]:
                shop2 = d[9]
            else:
                shop2 = _derive_shop2(name, title, cat, shop, addr)
            addr2 = d[10] if len(d) > 10 else addr

            body_text = build_cohesive_essay(
                city_name=name,
                title=title,
                cat=cat,
                cuisine_style=tag,
                origin_era=origin_era,
                heritage_tag=heritage_tag,
                flavor_profile=flavor,
                cooking_method=method,
                main_ingredients=ingredients,
                spot1_name=shop,
                spot1_addr=addr,
                spot2_name=shop2,
            )

            cards.append(
                {
                    "id": f"{cfg['id']}-{suffix}",
                    "title": title,
                    "flavorProfile": flavor,
                    "cookingMethod": method,
                    "mainIngredients": ingredients,
                    "tagline": _tagline(title, flavor),
                    "body": body_text,
                    "eatingTip": build_eating_tip(cat, title, flavor, method, ingredients),
                    "pairingTip": build_pairing_tip(cat, title, flavor, eight, staple),
                    "famousSpots": [
                        {"name": shop, "addressHint": addr, "note": note},
                        {"name": shop2, "addressHint": addr2, "note": "口碑传习名店"},
                    ],
                    "wiki": wiki,
                    "query": f"{name} {title} 实拍",
                    "originEra": origin_era,
                    "heritageTag": heritage_tag,
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
    eight_label = EIGHT_CUISINE_LABELS.get(eight, "地域特色风味")
    facts = cfg.get("facts") or [
        ("所属菜系", tag, f"{name}主流风味归属"),
        ("主导味型", dom, "日常与宴席主调"),
        ("碳水类型", staple, "粉面米食结构"),
        ("八大菜系", eight_label, "菜系脉络归属"),
        ("代表招牌", "、".join(cfg["sig"][:3]), "城市必吃名片"),
        ("寻味提示", cfg.get("region", name), "风味文化街区"),
    ]

    zhushi_c = volumes["zhushi"]["cards"][0]
    dacai_c = volumes["dacai"]["cards"][0]
    xiaochi_c = volumes["xiaochi"]["cards"][0]
    shijie_c = volumes["shijie"]["cards"][0]

    day_route = cfg.get("dayRoute") or [
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

    chains = cfg.get("chains") or [
        {
            "no": "01",
            "title": "风土→物产",
            "detail": f"{cfg.get('region', name)}的气候水土塑造了{name}核心食材与调味底色。",
            "spotName": volumes["fengwu"]["cards"][0]["famousSpots"][0]["name"],
        },
        {
            "no": "02",
            "title": "技法→味型",
            "detail": f"以{dom}为代表的味型，在宴席大菜与街头小吃中反复出现并定型。",
            "spotName": volumes["dacai"]["cards"][0]["famousSpots"][0]["name"],
        },
        {
            "no": "03",
            "title": "市井→街区",
            "detail": f"老字号与夜市把{name}的粉面小吃写成可打卡的空间叙事。",
            "spotName": volumes["shijie"]["cards"][0]["famousSpots"][0]["name"],
        },
    ]

    leads = cfg.get("leads") or [
        f"{name}地处{cfg.get('region', '')}，饮食脉络属「{tag}」，主导味型「{dom}」，碳水信仰为「{staple}」。",
        f"从镇桌大菜到街头小吃，从粉面碳水到道地风物，{name}以百年老字号与晨昏食街承载一方饮食文化记忆。",
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
            "dayRoute": day_route,
            "causalityChains": chains,
        },
        "volumes": volumes,
    }
