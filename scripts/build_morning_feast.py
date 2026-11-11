#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build expanded Topic 2: morningFeast.ts (8 regional subgroups, 66 iconic Chinese breakfasts)."""
from gen_special_topics import write_topic_ts
from morning_part_a import SUBGROUPS_A
from morning_part_b import SUBGROUPS_B

MORNING_FEAST_PACK = {
    "id": "morning-feast",
    "index": "专题二",
    "title": "碳水早点与早茶文化 · 清晨六点的中国烟火",
    "kicker": "MORNING FEAST & TEAHOUSE CULTURE",
    "subtitle": "从广府一盅两件、武汉过早、淮扬早茶到京津硬核早点与中原胡辣汤、巴蜀小面、西北早茶的全国清晨碳水全书",
    "lede": "中国人的一天从滚烫的碳水与茶香开始。广州西关茶楼里虾饺皇、烧卖、凤爪与艇仔粥的「一盅两件」；武汉街头热干面、三鲜豆皮、面窝与糊汤粉泡油条的「过早」交响；扬州富春的三丁包、翡翠烧卖与大煮烫干丝；上海弄堂的生煎小笼与四大金刚；天津煎饼果子嘎巴菜与老北京豆汁儿焦圈炒肝；开封逍遥镇胡辣汤配水煎包、洛阳头锅牛肉汤与西安腊汁肉夹馍；再到重庆板凳豌杂小面、乐山豆腐脑、海口骑楼老爸茶、宁夏吴忠八宝早茶与拉萨八廓街甜茶藏面——清晨六点，神州大地的灶火同时亮起。",
    "metrics": [
        {"label": "早点流派", "value": "8 大地域谱系 · 66 款名点", "note": "粤港早茶、武汉过早、淮扬江南、京津冀鲁、中原秦晋、巴蜀云贵、湘赣闽琼台、西北藏蒙"},
        {"label": "黄金搭档", "value": "一盅两件 · 豆皮面窝 · 胡辣汤两掺 · 烧饼豆浆", "note": "各地约定俗成的清晨碳水CP"},
        {"label": "黄金时段", "value": "凌晨 5:00 — 上午 10:30", "note": "赶头锅高汤与第一笼蒸点是行家铁律"},
        {"label": "覆盖名城", "value": "40+ 座早点重镇", "note": "从岭南骑楼茶居到塞上早茶店"},
    ],
    "subGroups": SUBGROUPS_A + SUBGROUPS_B,
}

if __name__ == "__main__":
    write_topic_ts("morningFeast.ts", "morningFeastPack", MORNING_FEAST_PACK)
