# 食味 · 中华风味图志

全国 **34 省级行政区**美食地图与七大中华美食专题全集。借鉴「城因」的地图交互、单列深度阅读流与高清图片语义巡检架构，呈现镇桌大菜、街头小吃、粉面碳水、道地风物与寻味老字号，并支持「吃过 / 想吃」双维打卡与个人美食护照。

## 功能亮点

- **全国美食地图门户**：34 省交互地图，支持八大菜系、味型分布、南粉北面、打卡点亮四种着色模式
- **城市美食图志长卷**：城市风味总论 + 五大分卷（大菜 / 小吃 / 粉面 / 风物 / 老街）纯单列宽幅阅读
- **七大中华美食专题馆**：八大菜系全席、中华面全集、中华粉全集、火锅江湖、碳水早点、烧烤夜市、糕点糖水
- **美食护照打卡**：每道菜「吃过 / 想吃」、点亮城市与省份、八大菜系解锁进度
- **寻味地图沙盘**：MapLibre GL 老店与美食街定位联动
- **美图语义巡检**：`scripts/food_photo_audit.py` 抓取维基/Commons 高清实拍并写入 `semantic-ledger.json`

## 技术栈

- React 18 + TypeScript + Vite 6
- MapLibre GL
- 本地瓦片磁盘缓存（兼容 dili 的 tiles-cache 软链）

## 本地开发

```bash
npm install
npm run dev        # 默认 http://localhost:5196
npm run build
npm run preview
```

### 美食图片抓取

```bash
python3 scripts/food_photo_audit.py --limit 40 --only-missing
python3 scripts/food_photo_audit.py --only-missing   # 继续补全
```

### 重新生成城市 / 专题数据

```bash
python3 scripts/gen_all_city_packs.py
cd scripts && python3 gen_topic_1_eight_cuisines.py && python3 gen_topic_2_noodles.py \
  && python3 gen_topic_3_4_rice_hotpot.py && python3 gen_topic_5_6_7_and_index.py
```

## 数据规模

- **78** 座核心美食名城，覆盖全部 **34** 省级行政区
- 每城 5 卷 × 3 词条 ≈ **1170** 道城市菜品词条
- 七大专题合计 **160+** 道跨省策展名录
- 「丹砂宣纸 · 烟火食单」东方美食视觉体系

## 美学

宣纸白 `#FAF6F0` · 朱砂红 `#B91C1C` · 琥珀金 `#B45309` · 青花蓝 `#1E3A5F` · 山野绿 `#15803D`
