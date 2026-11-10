import type { SpecialTopicPack } from "../types";

export const morningFeastPack: SpecialTopicPack = {
  "id": "morning-feast",
  "index": "专题五",
  "title": "碳水早点与早茶文化 · 清晨六点的中国烟火",
  "kicker": "MORNING FEAST & TEAHOUSE CULTURE",
  "subtitle": "从广府一盅两件、淮扬早茶到武汉过早与北方硬核早点的全国清晨地图",
  "lede": "中国人的一天从碳水开始。广州茶楼里虾饺烧卖配一盅老火汤；扬州富春的三丁包与烫干丝；武汉街头热干面豆皮面窝的过早交响；天津煎饼果子与北京豆汁焦圈；开封胡辣汤配水煎包与西安肉夹馍——清晨六点，全国灶火同时亮起。",
  "metrics": [
    {
      "label": "早点流派",
      "value": "4 大谱系 · 20 款名点",
      "note": "早茶、过早、北方硬核、淮扬精细"
    },
    {
      "label": "经典组合",
      "value": "一盅两件 · 面窝豆皮 · 胡辣汤水煎包",
      "note": "各地固定搭配的清晨仪式"
    },
    {
      "label": "时段密码",
      "value": "凌晨5点—上午11点",
      "note": "错过头锅就错过灵魂"
    },
    {
      "label": "覆盖城市",
      "value": "12+ 座",
      "note": "从岭南茶楼到中原汤摊"
    }
  ],
  "subGroups": [
    {
      "id": "cantonese-yumcha",
      "title": "广府一盅两件早茶",
      "subtitle": "虾饺烧卖凤爪肠粉 · 茶楼里的岭南社交",
      "regionBadge": "广州 · 香港",
      "description": "广府早茶是饮茶与点心的结合，讲究一盅两件，虾饺、烧卖、凤爪、肠粉轮番上桌，茶楼里的粤语喧哗即是市井烟火。",
      "items": [
        {
          "id": "mf-gz-xiagao",
          "title": "晶莹虾饺皇",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "广府点心之王",
          "flavorProfile": "皮透如玉 · 虾脆笋爽",
          "soulIngredient": "澄面、鲜虾仁、笋丁、猪油",
          "craftHighlight": "澄面皮十二道褶 / 大火蒸制",
          "famousShop": "广州点都德 / 陶陶居",
          "description": "澄面皮薄透见虾，十二道褶为满分工艺，整颗虾仁爽脆，笋丁提鲜，是广府早茶的绝对C位。",
          "coord": [
            113.2442,
            23.1092
          ],
          "wiki": "虾饺",
          "query": "广州 虾饺皇 实拍",
          "photoUrl": "/photos/mf-gz-xiagao.jpg"
        },
        {
          "id": "mf-gz-shaomai",
          "title": "干蒸烧卖",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "茶楼标配烧卖",
          "flavorProfile": "肉馅鲜香 · 鱼子点睛",
          "soulIngredient": "猪肉馅、虾仁、鱼子、烧卖皮",
          "craftHighlight": "皮捏花袋形 / 蒸熟点鱼子",
          "famousShop": "广州莲香楼 / 香港添好运",
          "description": "烧卖皮包肉馅呈花袋形，顶点橙色鱼子，肉馅鲜香多汁，与虾饺并称早茶双璧。",
          "coord": [
            113.2595,
            23.1185
          ],
          "wiki": "烧卖",
          "query": "广州 干蒸烧卖 实拍",
          "photoUrl": "/photos/mf-gz-shaomai.jpg"
        },
        {
          "id": "mf-gz-fengzhua",
          "title": "豉汁蒸凤爪",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "茶楼软糯经典",
          "flavorProfile": "豉香软糯 · 胶原丰盈",
          "soulIngredient": "鸡爪、豆豉、蒜蓉、椒丝",
          "craftHighlight": "先炸后焖再蒸 / 豉汁入味",
          "famousShop": "广州炳胜 / 茶楼点心部",
          "description": "鸡爪经油炸焖煮后再蒸，软糯入味，豉汁蒜蓉香气浓郁，胶原丰盈，是茶桌上停不下来的小食。",
          "coord": [
            113.2685,
            23.1255
          ],
          "wiki": "凤爪",
          "query": "广州 豉汁凤爪 实拍",
          "photoUrl": "/photos/mf-gz-fengzhua.jpg"
        },
        {
          "id": "mf-gz-changfen-zaocha",
          "title": "金莎红米肠",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "早茶版肠粉变奏",
          "flavorProfile": "米香浓郁 · 馅料丰富",
          "soulIngredient": "红米浆、叉烧/虾仁、甜酱油",
          "craftHighlight": "红米浆蒸卷 / 淋甜酱油",
          "famousShop": "广州肠粉专门店",
          "description": "红米肠粉米香更浓，卷入叉烧或虾仁，淋甜酱油，是布拉肠粉之外的早茶新宠。",
          "coord": [
            113.2715,
            23.1285
          ],
          "wiki": "肠粉",
          "query": "广州 红米肠 实拍",
          "photoUrl": "/photos/mf-gz-changfen-zaocha.jpg"
        },
        {
          "id": "mf-gz-chashaobao",
          "title": "叉烧包",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "叉烧甜咸包点",
          "flavorProfile": "包身开裂 · 叉烧甜香",
          "soulIngredient": "发酵面皮、蜜汁叉烧馅",
          "craftHighlight": "面种发酵 / 蒸至包顶自然裂开",
          "famousShop": "广州陶陶居 / 香港莲香",
          "description": "面皮发酵至蒸后自然开裂露馅，蜜汁叉烧甜咸交织，是广式包点的经典代表。",
          "coord": [
            113.2555,
            23.1165
          ],
          "wiki": "叉烧包",
          "query": "广州 叉烧包 实拍",
          "photoUrl": "/photos/mf-gz-chashaobao.jpg"
        }
      ]
    },
    {
      "id": "huaiyang-jiangnan",
      "title": "淮扬与江南早茶早点",
      "subtitle": "三丁包、烫干丝、生煎小笼与四大金刚",
      "regionBadge": "扬州 · 上海 · 南京",
      "description": "淮扬早茶精细雅致，三丁包与烫干丝见刀工；上海生煎小笼与四大金刚则是弄堂清晨的烟火气。",
      "items": [
        {
          "id": "mf-yz-sandingbao",
          "title": "扬州三丁包",
          "cityId": "yangzhou",
          "cityName": "扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "淮扬茶点之冠",
          "flavorProfile": "鸡丁肉丁笋丁 · 皮薄馅丰",
          "soulIngredient": "鸡丁、猪肉丁、冬笋丁、发酵面皮",
          "craftHighlight": "三丁精细切配 / 发酵包蒸制",
          "famousShop": "扬州富春茶社 / 冶春",
          "description": "鸡丁、肉丁、笋丁细切同馅，鲜香脆嫩层次分明，是富春茶社镇店包点，淮扬早茶必点。",
          "coord": [
            119.4215,
            32.4082
          ],
          "wiki": "三丁包",
          "query": "扬州 三丁包 实拍",
          "photoUrl": "/photos/mf-yz-sandingbao.jpg"
        },
        {
          "id": "mf-yz-feicui-shaomai",
          "title": "翡翠烧卖",
          "cityId": "yangzhou",
          "cityName": "扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "青菜肉馅雅点",
          "flavorProfile": "皮透见绿 · 清鲜软糯",
          "soulIngredient": "青菜茸、猪肉、烧卖皮",
          "craftHighlight": "青菜榨水剁茸拌馅 / 蒸制",
          "famousShop": "扬州富春茶社",
          "description": "青菜茸与肉馅同包，蒸后皮透翠绿如翡翠，清鲜不腻，是淮扬点心中的雅致代表。",
          "coord": [
            119.4368,
            32.3945
          ],
          "wiki": "翡翠烧卖",
          "query": "扬州 翡翠烧卖 实拍",
          "photoUrl": "/photos/mf-yz-feicui-shaomai.jpg"
        },
        {
          "id": "mf-yz-tanggansi",
          "title": "大煮烫干丝",
          "cityId": "yangzhou",
          "cityName": "扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "淮扬刀工代表早点",
          "flavorProfile": "丝细如发 · 鸡汤鲜醇",
          "soulIngredient": "大白干、鸡汤、虾籽、姜丝",
          "craftHighlight": "干丝批切极细 / 鸡汤烫煮",
          "famousShop": "扬州富春 / 共和春",
          "description": "一块豆腐干批切成千丝，鸡汤烫煮后拌虾籽姜丝，刀工与汤鲜并重，是扬州早茶的灵魂菜。",
          "coord": [
            119.4285,
            32.4015
          ],
          "wiki": "干丝",
          "query": "扬州 烫干丝 实拍",
          "photoUrl": "/photos/mf-yz-tanggansi.jpg"
        },
        {
          "id": "mf-sh-shengjian",
          "title": "上海生煎馒头",
          "cityId": "shanghai",
          "cityName": "上海",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "海派煎包经典",
          "flavorProfile": "底脆汤汁 · 肉馅鲜香",
          "soulIngredient": "半发酵面皮、猪肉馅、芝麻葱花",
          "craftHighlight": "平底锅煎至底部金黄 / 浇水焖熟",
          "famousShop": "上海小杨生煎 / 大壶春",
          "description": "半发酵皮包肉馅，平底锅煎至底部焦脆，浇水焖熟上部松软，咬开汤汁丰盈，撒芝麻葱花，是上海弄堂的清晨招牌。",
          "coord": [
            121.4692,
            31.2235
          ],
          "wiki": "生煎",
          "query": "上海 生煎馒头 实拍",
          "photoUrl": "/photos/mf-sh-shengjian.jpg"
        },
        {
          "id": "mf-sh-nanxiang",
          "title": "南翔小笼包",
          "cityId": "shanghai",
          "cityName": "上海",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "小笼灌汤鼻祖",
          "flavorProfile": "皮薄汤多 · 馅心鲜美",
          "soulIngredient": "面粉皮、猪肉皮冻馅",
          "craftHighlight": "皮冻入馅蒸化成汤 / 小笼蒸制",
          "famousShop": "南翔馒头店 / 豫园南翔小笼",
          "description": "皮薄近乎透明，猪肉与皮冻同馅，蒸后化汤，蘸姜丝醋食用，是上海豫园与南翔的骄傲。",
          "coord": [
            121.4925,
            31.2275
          ],
          "wiki": "小笼包",
          "query": "上海 南翔小笼 实拍",
          "photoUrl": "/photos/mf-sh-nanxiang.jpg"
        },
        {
          "id": "mf-sh-sida-jingang",
          "title": "上海四大金刚",
          "cityId": "shanghai",
          "cityName": "上海",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "弄堂早餐组合",
          "flavorProfile": "咸甜搭配 · 豆浆油条",
          "soulIngredient": "大饼、油条、糍饭、豆浆",
          "craftHighlight": "固定四件套组合 / 咸甜豆浆可选",
          "famousShop": "上海弄堂早餐铺",
          "description": "大饼、油条、糍饭糕、豆浆合称四大金刚，是老上海人最经典的早餐组合，咸豆浆配油条蘸糖更是一绝。",
          "coord": [
            121.4755,
            31.2305
          ],
          "wiki": "四大金刚",
          "query": "上海 四大金刚 早餐 实拍",
          "photoUrl": "/photos/mf-sh-sida-jingang.jpg"
        }
      ]
    },
    {
      "id": "wuhan-guozao",
      "title": "武汉过早王国",
      "subtitle": "热干面、三鲜豆皮、面窝与糊米酒",
      "regionBadge": "武汉",
      "description": "武汉人把吃早餐叫「过早」，热干面、豆皮、面窝、糊米酒构成江城清晨的味觉交响，边走边吃是过早的正确姿势。",
      "items": [
        {
          "id": "mf-wh-reganmian",
          "title": "蔡林记热干面",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "过早之王",
          "flavorProfile": "酱香筋道 · 萝卜丁酸豆角",
          "soulIngredient": "碱水面、芝麻酱、萝卜丁、酸豆角",
          "craftHighlight": "掸面摊晾 / 沸水烫后淋麻酱",
          "famousShop": "武汉蔡林记",
          "description": "武汉过早第一名片。碱水面掸油摊晾，吃时沸水快速烫热，淋浓稠芝麻酱，配卤水汁、萝卜丁与酸豆角。",
          "coord": [
            114.2985,
            30.5842
          ],
          "wiki": "热干面",
          "query": "武汉 热干面 实拍",
          "photoUrl": "/photos/mf-wh-reganmian.jpg"
        },
        {
          "id": "mf-wh-doupi",
          "title": "老通城三鲜豆皮",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "过早蛋皮糯米经典",
          "flavorProfile": "外酥内软 · 三鲜馅香",
          "soulIngredient": "绿豆糊、鸡蛋、糯米、肉丁丁香菇",
          "craftHighlight": "豆皮摊制包糯米三鲜 / 煎至外焦",
          "famousShop": "武汉老通城",
          "description": "绿豆糊摊成豆皮，裹入糯米与肉丁香菇等三鲜馅，煎至外酥内软，是武汉过早的重量级选手。",
          "coord": [
            114.3055,
            30.5925
          ],
          "wiki": "豆皮",
          "query": "武汉 三鲜豆皮 实拍",
          "photoUrl": "/photos/mf-wh-doupi.jpg"
        },
        {
          "id": "mf-wh-mianwo",
          "title": "面窝",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "过早炸制圆环",
          "flavorProfile": "外脆内软 · 中间薄脆",
          "soulIngredient": "大米绿豆浆、芝麻",
          "craftHighlight": "特制窝模油炸 / 边缘厚中间薄",
          "famousShop": "武汉街头面窝摊",
          "description": "米浆倒入特制铁模油炸，边缘厚实中间薄脆，撒芝麻，趁热食用外脆内软，是过早的平价王牌。",
          "coord": [
            114.3125,
            30.5785
          ],
          "wiki": "面窝",
          "query": "武汉 面窝 实拍",
          "photoUrl": "/photos/mf-wh-mianwo.jpg"
        },
        {
          "id": "mf-wh-humijiu",
          "title": "孝感糊米酒配蛋",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "过早甜汤收尾",
          "flavorProfile": "酒香甜糯 · 蛋花润滑",
          "soulIngredient": "糯米酒酿、鸡蛋、糊米",
          "craftHighlight": "酒酿冲沸水 / 打入鸡蛋",
          "famousShop": "武汉糊米酒摊",
          "description": "孝感米酒冲成糊米酒，打入鸡蛋花，酒香甜糯暖胃，是武汉过早常见的甜汤收尾。",
          "coord": [
            114.2895,
            30.5955
          ],
          "wiki": "米酒",
          "query": "武汉 糊米酒 实拍",
          "photoUrl": "/photos/mf-wh-humijiu.jpg"
        },
        {
          "id": "mf-wh-nuomi-youtiao",
          "title": "糯米包油条",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "过早糯米卷",
          "flavorProfile": "软糯焦香 · 油条酥脆",
          "soulIngredient": "糯米饭、油条、香干肉松海苔",
          "craftHighlight": "热糯米包裹油条 / 卷香干肉松",
          "famousShop": "武汉过早摊",
          "description": "热糯米饭压扁裹住一根油条，再卷香干丝、肉松或海苔，软糯与酥脆同在，是过早的便携组合。",
          "coord": [
            114.3015,
            30.5815
          ],
          "wiki": "糯米包油条",
          "query": "武汉 糯米包油条 实拍",
          "photoUrl": "/photos/mf-wh-nuomi-youtiao.jpg"
        }
      ]
    },
    {
      "id": "north-hardcore",
      "title": "北方硬核早点江湖",
      "subtitle": "煎饼果子、豆汁焦圈、胡辣汤水煎包与肉夹馍",
      "regionBadge": "天津 · 北京 · 河南 · 陕西 · 山东",
      "description": "北方早点硬核实在：天津煎饼果子嘎巴菜，北京豆汁焦圈炒肝，开封胡辣汤配水煎包，西安腊汁肉夹馍，济南甜沫油旋。",
      "items": [
        {
          "id": "mf-tj-jianbing",
          "title": "天津绿豆面煎饼果子",
          "cityId": "tianjin",
          "cityName": "天津",
          "province": "tj",
          "provinceLabel": "天津市",
          "schoolOrStyle": "津门早点之王",
          "flavorProfile": "酥脆咸香 · 果子或油条",
          "soulIngredient": "绿豆面糊、鸡蛋、果子/油条、面酱辣椒",
          "craftHighlight": "摊糊打蛋 / 卷果子刷酱",
          "famousShop": "天津果仁张 / 街头煎饼摊",
          "description": "绿豆面糊摊成薄饼，打入鸡蛋，刷面酱辣椒，卷入果子或油条，酥脆咸香，是天津人的清晨信仰。",
          "coord": [
            117.2008,
            39.0842
          ],
          "wiki": "煎饼果子",
          "query": "天津 煎饼果子 实拍",
          "photoUrl": "/photos/mf-tj-jianbing.jpg"
        },
        {
          "id": "mf-tj-gabacai",
          "title": "锅巴菜（嘎巴菜）",
          "cityId": "tianjin",
          "cityName": "天津",
          "province": "tj",
          "provinceLabel": "天津市",
          "schoolOrStyle": "津门卤汁锅巴",
          "flavorProfile": "卤香软糯 · 麻酱提香",
          "soulIngredient": "绿豆煎饼切丝、卤汁、麻酱香菜",
          "craftHighlight": "煎饼切丝浇卤 / 淋麻酱",
          "famousShop": "天津锅巴菜老店",
          "description": "绿豆煎饼切丝，浇上卤汁与麻酱，软糯入味，是天津独有、外地少见的经典早点。",
          "coord": [
            117.2155,
            39.0915
          ],
          "wiki": "锅巴菜",
          "query": "天津 嘎巴菜 实拍",
          "photoUrl": "/photos/mf-tj-gabacai.jpg"
        },
        {
          "id": "mf-bj-douzhi",
          "title": "老北京豆汁焦圈炒肝",
          "cityId": "beijing",
          "cityName": "北京",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "京味早点三件套",
          "flavorProfile": "酸涩开胃 · 焦圈酥脆",
          "soulIngredient": "发酵绿豆汁、焦圈、炒肝",
          "craftHighlight": "豆汁发酵微酸 / 配焦圈腌菜",
          "famousShop": "北京南城豆汁店 / 门框胡同",
          "description": "豆汁发酵后微酸略涩，配酥脆焦圈与辣咸菜，再加一碗炒肝，是老北京最硬核的早餐考验。",
          "coord": [
            116.3875,
            39.8895
          ],
          "wiki": "豆汁",
          "query": "北京 豆汁 焦圈 实拍",
          "photoUrl": "/photos/mf-bj-douzhi.jpg"
        },
        {
          "id": "mf-kf-hulatang",
          "title": "开封逍遥镇胡辣汤配水煎包",
          "cityId": "kaifeng",
          "cityName": "开封",
          "province": "ha",
          "provinceLabel": "河南省",
          "schoolOrStyle": "中原早点黄金搭档",
          "flavorProfile": "胡椒浓郁 · 水煎包底脆",
          "soulIngredient": "胡椒粉条花生面筋、水煎包",
          "craftHighlight": "胡辣汤慢熬 / 水煎包煎焖",
          "famousShop": "开封第一楼周边 / 胡辣汤老店",
          "description": "胡椒浓郁的胡辣汤配底部焦脆的水煎包，是河南人清晨的黄金搭档，暖胃开胃。",
          "coord": [
            114.3415,
            34.7975
          ],
          "wiki": "胡辣汤",
          "query": "开封 胡辣汤 水煎包 实拍",
          "photoUrl": "/photos/mf-kf-hulatang.jpg"
        },
        {
          "id": "mf-xa-roujiamo",
          "title": "西安樊记腊汁肉夹馍",
          "cityId": "xian",
          "cityName": "西安",
          "province": "sn",
          "provinceLabel": "陕西省",
          "schoolOrStyle": "关中手掌点心",
          "flavorProfile": "腊汁醇香 · 白吉馍酥软",
          "soulIngredient": "腊汁猪肉、白吉馍",
          "craftHighlight": "腊汁慢炖 / 白吉馍炙烤夹肉",
          "famousShop": "西安樊记腊汁肉 / 老孙家",
          "description": "白吉馍烤至外酥内软，夹入慢炖的腊汁猪肉，肥瘦相间、汁香不腻，一手握住走着吃，是西安的城市名片。",
          "coord": [
            108.9402,
            34.2658
          ],
          "wiki": "肉夹馍",
          "query": "西安 腊汁肉夹馍 实拍",
          "photoUrl": "/photos/mf-xa-roujiamo.jpg"
        },
        {
          "id": "mf-jn-tianmo",
          "title": "济南甜沫配油旋",
          "cityId": "jinan",
          "cityName": "济南",
          "province": "sd",
          "provinceLabel": "山东省",
          "schoolOrStyle": "泉城经典早点",
          "flavorProfile": "小米菜蔬香 · 油旋层层酥",
          "soulIngredient": "小米面糊、菠菜花生、油旋",
          "craftHighlight": "甜沫慢熬 / 油旋烤制",
          "famousShop": "济南甜沫店 / 油旋老铺",
          "description": "小米面糊熬成的甜沫配菠菜花生米，配层层酥香的油旋，是济南人温暖实在的清晨组合。",
          "coord": [
            117.0009,
            36.6758
          ],
          "wiki": "甜沫",
          "query": "济南 甜沫 油旋 实拍",
          "photoUrl": "/photos/mf-jn-tianmo.jpg"
        }
      ]
    }
  ]
};
