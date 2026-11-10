import type { SpecialTopicPack } from "../types";

export const pastriesSweetSoupsPack: SpecialTopicPack = {
  "id": "pastries-sweet-soups",
  "index": "专题七",
  "title": "传统糕点与糖水铺 · 东方四时风雅甜食",
  "kicker": "PASTRIES & SWEET SOUPS",
  "subtitle": "苏式糕团、广式糖水、闽台冰品与京津宫廷饽饽的四时甜味地图",
  "lede": "中华甜食不止西点。苏州定胜糕与青团标记节令；顺德双皮奶与港式杨枝甘露是岭南糖水巅峰；泉州四果汤与台湾芋圆烧仙草清凉消夏；北京豌豆黄驴打滚与天津麻花传承宫廷与市井；成都冰粉三大炮与云南鲜花饼则是西南的甜蜜名片。",
  "metrics": [
    {
      "label": "甜食品类",
      "value": "4 大谱系 · 20 款名点",
      "note": "糕团、糖水、冰品、饽饽"
    },
    {
      "label": "四时节令",
      "value": "青团 · 元宵 · 月饼 · 花糕",
      "note": "节令甜食贯穿全年"
    },
    {
      "label": "地域风味",
      "value": "江南清甜 · 岭南香滑 · 北派豆香",
      "note": "甜度与质地南北各异"
    },
    {
      "label": "老铺名店",
      "value": "15+ 家",
      "note": "百年糕团铺与糖水名店"
    }
  ],
  "subGroups": [
    {
      "id": "jiangnan-gaotuan",
      "title": "江南苏式巧果与糕团",
      "subtitle": "定胜糕、荷花酥、青团与桂花糖芋苗",
      "regionBadge": "江苏 · 浙江 · 上海",
      "description": "江南糕团讲究米香与节令，定胜糕寓意高中，青团祭扫清明，桂花糖芋苗则是秋日南京的甜蜜。",
      "items": [
        {
          "id": "ps-sz-dingsheng",
          "title": "苏州定胜糕",
          "cityId": "suzhou",
          "cityName": "苏州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "状元糕点",
          "flavorProfile": "米香清甜 · 红豆沙馅",
          "soulIngredient": "糯米粉粳米粉、红豆沙、红曲",
          "craftHighlight": "模具蒸制 / 定胜字形",
          "famousShop": "苏州黄天源 / 采芝斋",
          "description": "定胜糕色粉红，印「定胜」字样，寓意科考高中，米香清甜，红豆沙馅，是苏州传统糕团代表。",
          "coord": [
            120.6258,
            31.3125
          ],
          "wiki": "定胜糕",
          "query": "苏州 定胜糕 实拍",
          "photoUrl": "/photos/ps-sz-dingsheng.jpg"
        },
        {
          "id": "ps-hz-hehuasu",
          "title": "杭州荷花酥",
          "cityId": "hangzhou",
          "cityName": "杭州",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "层酥花形点心",
          "flavorProfile": "层层酥香 · 甜馅清雅",
          "soulIngredient": "油酥面、豆沙或莲蓉",
          "craftHighlight": "酥皮层层起酥 / 捏成荷花形",
          "famousShop": "杭州知味观",
          "description": "油酥层层起酥捏成荷花形，甜馅清雅，是杭帮点心中的精致代表。",
          "coord": [
            120.1555,
            30.2365
          ],
          "wiki": "荷花酥",
          "query": "杭州 荷花酥 实拍",
          "photoUrl": "/photos/ps-hz-hehuasu.jpg"
        },
        {
          "id": "ps-jn-qingtuan",
          "title": "清明艾草青团",
          "cityId": "shanghai",
          "cityName": "江南各地",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "清明节令糕团",
          "flavorProfile": "艾香清新 · 豆沙软糯",
          "soulIngredient": "艾草汁糯米粉、豆沙或咸蛋肉松",
          "craftHighlight": "艾汁和面 / 包馅蒸制",
          "famousShop": "上海沈大成 / 苏州黄天源",
          "description": "艾草汁和糯米粉包豆沙或咸蛋黄肉松，清香软糯，是清明时节江南统一的味觉记忆。",
          "coord": [
            121.4755,
            31.2305
          ],
          "wiki": "青团",
          "query": "江南 青团 实拍",
          "photoUrl": "/photos/ps-jn-qingtuan.jpg"
        },
        {
          "id": "ps-nj-tangyumiao",
          "title": "南京桂花糖芋苗",
          "cityId": "nanjing",
          "cityName": "南京",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "秋日秦淮甜品",
          "flavorProfile": "芋香软糯 · 桂花蜜甜",
          "soulIngredient": "小芋苗、桂花糖、淀粉勾芡",
          "craftHighlight": "芋苗煮软勾芡 / 洒桂花",
          "famousShop": "南京夫子庙糖芋苗",
          "description": "小芋苗煮至软糯，桂花糖汁勾芡，香甜暖胃，是南京秋冬秦淮河畔的经典甜品。",
          "coord": [
            118.7895,
            32.0215
          ],
          "wiki": "糖芋苗",
          "query": "南京 桂花糖芋苗 实拍",
          "photoUrl": "/photos/ps-nj-tangyumiao.jpg"
        },
        {
          "id": "ps-hz-jiuniang",
          "title": "酒酿赤豆元宵",
          "cityId": "hangzhou",
          "cityName": "杭州/江南",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "酒酿甜汤圆",
          "flavorProfile": "酒香豆香 · 软糯香甜",
          "soulIngredient": "酒酿、赤豆、元宵或小圆子",
          "craftHighlight": "酒酿冲制 / 配赤豆元宵",
          "famousShop": "江南甜品店",
          "description": "酒酿配赤豆与小元宵，酒香甜糯，是江南冬日与节令常见的暖甜汤品。",
          "coord": [
            120.1685,
            30.2368
          ],
          "wiki": "酒酿圆子",
          "query": "江南 酒酿赤豆元宵 实拍",
          "photoUrl": "/photos/ps-hz-jiuniang.jpg"
        }
      ]
    },
    {
      "id": "lingnan-tangshui",
      "title": "岭南与港澳传统糖水",
      "subtitle": "双皮奶、姜撞奶、杨枝甘露与陈皮红豆沙",
      "regionBadge": "广东 · 香港 · 澳门",
      "description": "岭南糖水讲究香滑与火候，顺德双皮奶与姜撞奶是奶品巅峰，港式杨枝甘露风靡全球，陈皮红豆沙则见广府药食同源。",
      "items": [
        {
          "id": "ps-sd-shuangpinai",
          "title": "顺德大良双皮奶",
          "cityId": "shunde",
          "cityName": "顺德",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "奶品糖水之王",
          "flavorProfile": "双层奶皮 · 香滑甜润",
          "soulIngredient": "水牛奶、蛋清、糖",
          "craftHighlight": "两次结皮工艺 / 冷热皆宜",
          "famousShop": "顺德仁信双皮奶 / 民信",
          "description": "水牛奶蒸出第一层奶皮，倒出奶液再蒸结第二层，形成双皮，香滑甜润，是顺德糖水的绝对王牌。",
          "coord": [
            113.2935,
            22.8045
          ],
          "wiki": "双皮奶",
          "query": "顺德 双皮奶 实拍",
          "photoUrl": "/photos/ps-sd-shuangpinai.jpg"
        },
        {
          "id": "ps-gz-jiangzhuangnai",
          "title": "番禺沙湾姜撞奶",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "姜汁撞出嫩奶",
          "flavorProfile": "姜辣奶香 · 凝固如豆腐",
          "soulIngredient": "水牛奶、老姜汁、糖",
          "craftHighlight": "热奶冲姜汁自然凝固",
          "famousShop": "广州沙湾姜撞奶",
          "description": "热牛奶冲入老姜汁，姜蛋白酶使牛奶凝固如嫩豆腐，姜辣与奶香交织，暖胃驱寒。",
          "coord": [
            113.3185,
            22.9015
          ],
          "wiki": "姜撞奶",
          "query": "广州 姜撞奶 实拍",
          "photoUrl": "/photos/ps-gz-jiangzhuangnai.jpg"
        },
        {
          "id": "ps-hk-yangzhi",
          "title": "香港杨枝甘露",
          "cityId": "hongkong",
          "cityName": "香港",
          "province": "hk",
          "provinceLabel": "香港特别行政区",
          "schoolOrStyle": "港式糖水国际名片",
          "flavorProfile": "芒果香滑 · 柚子清香",
          "soulIngredient": "芒果、西柚、椰浆、西米",
          "craftHighlight": "芒果蓉配柚肉西米椰浆",
          "famousShop": "香港许留山 / 糖水店",
          "description": "芒果蓉与西柚果肉、椰浆、西米同碗，香甜清爽，由港式糖水走向全球，是香港甜品的国际名片。",
          "coord": [
            114.1695,
            22.3195
          ],
          "wiki": "杨枝甘露",
          "query": "香港 杨枝甘露 实拍",
          "photoUrl": "/photos/ps-hk-yangzhi.jpg"
        },
        {
          "id": "ps-gz-chenpi-hongdou",
          "title": "新会陈皮红豆沙",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "广府药食糖水",
          "flavorProfile": "豆沙细腻 · 陈皮幽香",
          "soulIngredient": "红豆、新会陈皮、糖",
          "craftHighlight": "红豆慢熬碾沙 / 陈皮提香",
          "famousShop": "广州茶楼糖水部",
          "description": "红豆慢熬成细腻豆沙，加入新会陈皮丝，幽香解腻，体现广府药食同源的糖水智慧。",
          "coord": [
            113.2555,
            23.1165
          ],
          "wiki": "红豆沙",
          "query": "广州 陈皮红豆沙 实拍",
          "photoUrl": "/photos/ps-gz-chenpi-hongdou.jpg"
        },
        {
          "id": "ps-gz-xingrenhu",
          "title": "杏仁糊",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "杏香稠滑糖水",
          "flavorProfile": "杏香浓郁 · 口感稠滑",
          "soulIngredient": "杏仁、米或淀粉、糖",
          "craftHighlight": "杏仁磨浆熬煮",
          "famousShop": "广州港式糖水店",
          "description": "杏仁磨浆熬成稠滑糊状，杏香浓郁，可热可冻，是岭南与港式糖水的常青款。",
          "coord": [
            113.2645,
            23.1295
          ],
          "wiki": "杏仁糊",
          "query": "杏仁糊 糖水 实拍",
          "photoUrl": "/photos/ps-gz-xingrenhu.jpg"
        }
      ]
    },
    {
      "id": "mintai-bingpin",
      "title": "闽台古早冰品甜汤",
      "subtitle": "四果汤、花生汤、芋泥、芋圆烧仙草与凤梨酥",
      "regionBadge": "福建 · 台湾",
      "description": "闽台甜品清凉古早：泉州四果汤、厦门花生汤、福州芋泥、台湾芋圆烧仙草与凤梨酥，各有海岛与侨乡风情。",
      "items": [
        {
          "id": "ps-qz-siguotang",
          "title": "泉州石花膏四果汤",
          "cityId": "quanzhou",
          "cityName": "泉州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "刺桐古早冰品",
          "flavorProfile": "清凉消暑 · 配料丰富",
          "soulIngredient": "石花膏、水果、芋圆粉圆、糖水",
          "craftHighlight": "石花膏凝固切块 / 配水果糖水",
          "famousShop": "泉州四果汤老店",
          "description": "石花膏清凉，配水果、芋圆、粉圆与糖水，是泉州夏日街头最受欢迎的古早冰品。",
          "coord": [
            118.5865,
            24.9082
          ],
          "wiki": "四果汤",
          "query": "泉州 四果汤 实拍",
          "photoUrl": "/photos/ps-qz-siguotang.jpg"
        },
        {
          "id": "ps-xm-huashengtang",
          "title": "厦门黄则和花生汤",
          "cityId": "xiamen",
          "cityName": "厦门",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "鹭岛花生甜汤",
          "flavorProfile": "花生软烂 · 汤甜润肺",
          "soulIngredient": "花生、糖",
          "craftHighlight": "花生慢煮至软烂",
          "famousShop": "厦门黄则和",
          "description": "花生慢煮至软烂香甜，汤清味润，是厦门中山路与黄则和的招牌甜汤，也可配炸物。",
          "coord": [
            118.0895,
            24.4455
          ],
          "wiki": "花生汤",
          "query": "厦门 花生汤 实拍",
          "photoUrl": "/photos/ps-xm-huashengtang.jpg"
        },
        {
          "id": "ps-fz-yuni",
          "title": "福州芋泥",
          "cityId": "fuzhou",
          "cityName": "福州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "闽都宴席甜品",
          "flavorProfile": "绵密香甜 · 猪油提香",
          "soulIngredient": "槟榔芋、糖、猪油",
          "craftHighlight": "芋头蒸熟碾泥 / 浇热猪油",
          "famousShop": "福州聚春园 / 安泰楼",
          "description": "槟榔芋蒸熟碾成细泥，加糖与热猪油，绵密香甜，是福州宴席与家常的经典甜品，看似平凡实则火候讲究。",
          "coord": [
            119.2965,
            26.0745
          ],
          "wiki": "芋泥",
          "query": "福州 芋泥 实拍",
          "photoUrl": "/photos/ps-fz-yuni.jpg"
        },
        {
          "id": "ps-tw-yuyuan",
          "title": "台湾九份芋圆烧仙草",
          "cityId": "taipei",
          "cityName": "新北/台北",
          "province": "tw",
          "provinceLabel": "台湾省",
          "schoolOrStyle": "宝岛芋圆冰",
          "flavorProfile": "芋香软Q · 烧仙草微苦甜",
          "soulIngredient": "芋圆地瓜圆、烧仙草、花生糖水",
          "craftHighlight": "芋圆手工搓制 / 配烧仙草",
          "famousShop": "九份阿柑姨 / 台北冰店",
          "description": "手工芋圆软Q，配微苦甜的烧仙草与花生糖水，是台湾山城与冰店的清凉招牌。",
          "coord": [
            121.8445,
            25.1095
          ],
          "wiki": "芋圆",
          "query": "台湾 芋圆 烧仙草 实拍",
          "photoUrl": "/photos/ps-tw-yuyuan.jpg"
        },
        {
          "id": "ps-tw-fenglis",
          "title": "凤梨酥",
          "cityId": "taipei",
          "cityName": "台北",
          "province": "tw",
          "provinceLabel": "台湾省",
          "schoolOrStyle": "伴手礼之王",
          "flavorProfile": "外酥内甜 · 凤梨馅香",
          "soulIngredient": "酥皮、凤梨馅（或凤梨冬瓜馅）",
          "craftHighlight": "酥皮包馅烘烤 / 方形模具",
          "famousShop": "台北凤梨酥名店",
          "description": "酥皮包凤梨甜馅烘烤成方块，外酥内甜，是台湾最具代表性的伴手礼与茶点。",
          "coord": [
            121.5298,
            25.0325
          ],
          "wiki": "凤梨酥",
          "query": "台湾 凤梨酥 实拍",
          "photoUrl": "/photos/ps-tw-fenglis.jpg"
        }
      ]
    },
    {
      "id": "north-southwest-sweet",
      "title": "北派宫廷饽饽与西南甜食",
      "subtitle": "豌豆黄、驴打滚、麻花、冰粉三大炮与鲜花饼",
      "regionBadge": "北京 · 天津 · 成都 · 云南",
      "description": "北派饽饽有宫廷与市井两脉；西南则以冰粉、三大炮和云南鲜花饼展现另一番甜蜜。",
      "items": [
        {
          "id": "ps-bj-wandouhuang",
          "title": "北京豌豆黄",
          "cityId": "beijing",
          "cityName": "北京",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "宫廷清明糕点",
          "flavorProfile": "豆香细腻 · 入口即化",
          "soulIngredient": "豌豆、糖",
          "craftHighlight": "豌豆煮烂过筛凝固 / 切块",
          "famousShop": "北京仿膳 / 护国寺小吃",
          "description": "豌豆煮烂过筛加糖凝固，细腻香甜入口即化，原为清代宫廷清明糕点，后传入市井。",
          "coord": [
            116.3975,
            39.9185
          ],
          "wiki": "豌豆黄",
          "query": "北京 豌豆黄 实拍",
          "photoUrl": "/photos/ps-bj-wandouhuang.jpg"
        },
        {
          "id": "ps-bj-lvdaagun",
          "title": "驴打滚",
          "cityId": "beijing",
          "cityName": "北京",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "滚黄豆面的糯米卷",
          "flavorProfile": "豆香糯软 · 红豆馅甜",
          "soulIngredient": "糯米饭、红豆沙、黄豆面",
          "craftHighlight": "糯米卷豆沙 / 滚黄豆面",
          "famousShop": "北京小吃摊 / 仿膳",
          "description": "糯米卷红豆沙，外滚熟黄豆面，如驴打滚扬起灰尘而得名，豆香糯软，是北京著名小吃。",
          "coord": [
            116.3875,
            39.8895
          ],
          "wiki": "驴打滚",
          "query": "北京 驴打滚 实拍",
          "photoUrl": "/photos/ps-bj-lvdaagun.jpg"
        },
        {
          "id": "ps-tj-mahua",
          "title": "天津十八街麻花",
          "cityId": "tianjin",
          "cityName": "天津",
          "province": "tj",
          "provinceLabel": "天津市",
          "schoolOrStyle": "津门麻花传奇",
          "flavorProfile": "酥脆香甜 · 什锦夹馅",
          "soulIngredient": "面粉、糖、什锦馅料",
          "craftHighlight": "多股拧制油炸 / 夹馅",
          "famousShop": "天津桂发祥十八街",
          "description": "多股面拧制油炸，可夹什锦馅，酥脆香甜，是天津最著名的伴手礼与茶点。",
          "coord": [
            117.2008,
            39.0842
          ],
          "wiki": "天津麻花",
          "query": "天津 十八街麻花 实拍",
          "photoUrl": "/photos/ps-tj-mahua.jpg"
        },
        {
          "id": "ps-cd-bingfen",
          "title": "成都红糖冰粉",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "蜀中消夏神器",
          "flavorProfile": "凉爽滑嫩 · 红糖花生",
          "soulIngredient": "冰粉籽或凉粉、红糖、花生芝麻",
          "craftHighlight": "冰粉凝结 / 淋红糖撒花生",
          "famousShop": "成都街头冰粉摊",
          "description": "冰粉滑嫩凉爽，淋红糖汁撒花生芝麻，是成都夏日街头随处可见的消暑神器。",
          "coord": [
            104.0665,
            30.5728
          ],
          "wiki": "冰粉",
          "query": "成都 红糖冰粉 实拍",
          "photoUrl": "/photos/ps-cd-bingfen.jpg"
        },
        {
          "id": "ps-cd-sandaopao",
          "title": "三大炮",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "砸出来的糯米甜品",
          "flavorProfile": "软糯黄豆面 · 红糖香",
          "soulIngredient": "糯米、黄豆面、红糖",
          "craftHighlight": "糯米团砸进黄豆面 / 淋红糖",
          "famousShop": "成都宽窄巷子 / 街头三大炮",
          "description": "热糯米团砸进铜盘黄豆面中发出「炮声」，淋红糖，软糯香甜，是成都极具表演性的传统甜品。",
          "coord": [
            104.0555,
            30.5615
          ],
          "wiki": "三大炮",
          "query": "成都 三大炮 实拍",
          "photoUrl": "/photos/ps-cd-sandaopao.jpg"
        },
        {
          "id": "ps-yn-xianhuabing",
          "title": "云南现烤玫瑰鲜花饼",
          "cityId": "kunming",
          "cityName": "昆明",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "滇式鲜花入饼",
          "flavorProfile": "花香酥皮 · 玫瑰馅甜",
          "soulIngredient": "酥皮、食用玫瑰花馅",
          "craftHighlight": "酥皮包花馅现烤",
          "famousShop": "昆明嘉华鲜花饼",
          "description": "酥皮包食用玫瑰花馅现烤，花香与酥皮交融，是云南最具代表性的伴手礼与茶点。",
          "coord": [
            102.7122,
            25.0405
          ],
          "wiki": "鲜花饼",
          "query": "云南 玫瑰鲜花饼 实拍",
          "photoUrl": "/photos/ps-yn-xianhuabing.jpg"
        }
      ]
    }
  ]
};
