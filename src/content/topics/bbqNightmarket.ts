import type { SpecialTopicPack } from "../types";

export const bbqNightmarketPack: SpecialTopicPack = {
  "id": "bbq-nightmarket",
  "index": "专题六",
  "title": "烧烤与夜市江湖 · 暗夜炭火与市井灵魂",
  "kicker": "BBQ & NIGHT MARKET ATLAS",
  "subtitle": "从东北拌肉锦州串、淄博小饼烤肉到西北红柳大串与西南把把烧烙锅",
  "lede": "夜幕降临，炭火与烟火气升腾。锦州烧烤与齐齐哈尔拌肉定义东北夜生活；淄博小饼小葱烤肉一夜成名；新疆红柳大串与烤全羊是丝路炙烤的巅峰；宜宾把把烧、西昌火盆与贵阳烙锅烤脑花构成西南夜市的狂野；湛江生蚝与潮汕夜糜则是华南宵夜的鲜美收尾。",
  "metrics": [
    {
      "label": "烧烤谱系",
      "value": "4 大流派 · 16 款炙烤",
      "note": "东北、齐鲁西北、西南、华南"
    },
    {
      "label": "炭火哲学",
      "value": "果木炭 · 红柳 · 电烤 · 火盆",
      "note": "不同燃料塑造不同风味"
    },
    {
      "label": "夜市时段",
      "value": "傍晚7点—凌晨2点",
      "note": "城市另一张美味名片"
    },
    {
      "label": "网红与经典",
      "value": "淄博烤肉 · 锦州串 · 喀什红柳",
      "note": "传统与潮流并存"
    }
  ],
  "subGroups": [
    {
      "id": "northeast-bbq",
      "title": "关东重工烧烤与拌肉系",
      "subtitle": "锦州小串、齐市拌肉、沈阳鸡架与延边串店",
      "regionBadge": "辽宁 · 黑龙江 · 吉林",
      "description": "东北烧烤量大实在，锦州小串腌制入味，齐齐哈尔家庭拌肉自己烤，沈阳鸡架与延边串店各有拥趸。",
      "items": [
        {
          "id": "bbq-jinzhou",
          "title": "锦州小串烧烤",
          "cityId": "shenyang",
          "cityName": "锦州/沈阳",
          "province": "ln",
          "provinceLabel": "辽宁省",
          "schoolOrStyle": "辽西烧烤标杆",
          "flavorProfile": "腌制入味 · 炭火焦香",
          "soulIngredient": "猪肉牛肉羊肉小串、秘制腌料",
          "craftHighlight": "小串密实穿制 / 果木炭烤",
          "famousShop": "锦州夜市烧烤 / 沈阳仿锦州串",
          "description": "锦州烧烤以小串密实、腌制入味著称，炭火烤至外焦里嫩，是辽宁乃至东北烧烤的重要源头。",
          "coord": [
            121.1355,
            41.1195
          ],
          "wiki": "锦州烧烤",
          "query": "锦州 烧烤 实拍",
          "photoUrl": "/photos/bbq-jinzhou.jpg"
        },
        {
          "id": "bbq-qqhe-banrou",
          "title": "齐齐哈尔家庭拌肉烤肉",
          "cityId": "harbin",
          "cityName": "齐齐哈尔",
          "province": "hl",
          "provinceLabel": "黑龙江省",
          "schoolOrStyle": "自己动手烤的拌肉",
          "flavorProfile": "肉香原味 · 蘸料丰富",
          "soulIngredient": "新鲜牛猪肉片、干料蘸盘",
          "craftHighlight": "肉片拌料 / 电烤盘自助烤",
          "famousShop": "齐齐哈尔拌肉餐厅",
          "description": "齐齐哈尔人把新鲜肉片拌好，用桌用电烤盘自己烤，蘸干料，肉香原汁原味，是黑龙江独特的烤肉文化。",
          "coord": [
            123.9185,
            47.3545
          ],
          "wiki": "齐齐哈尔烤肉",
          "query": "齐齐哈尔 拌肉 实拍",
          "photoUrl": "/photos/bbq-qqhe-banrou.jpg"
        },
        {
          "id": "bbq-sy-xita",
          "title": "沈阳西塔泥炉烤肉与烤鸡架",
          "cityId": "shenyang",
          "cityName": "沈阳",
          "province": "ln",
          "provinceLabel": "辽宁省",
          "schoolOrStyle": "盛京夜市双绝",
          "flavorProfile": "泥炉炭香 · 鸡架入味",
          "soulIngredient": "牛肉猪肉、鸡架、朝鲜族调料",
          "craftHighlight": "泥炉炭火 / 鸡架烤至焦香",
          "famousShop": "沈阳西塔美食街",
          "description": "西塔朝鲜族美食街的泥炉烤肉与烤鸡架是沈阳夜宵名片，炭香肉嫩，鸡架外焦里入味。",
          "coord": [
            123.3985,
            41.8125
          ],
          "wiki": "沈阳鸡架",
          "query": "沈阳 西塔 烤肉 实拍",
          "photoUrl": "/photos/bbq-sy-xita.jpg"
        },
        {
          "id": "bbq-yanbian-chuan",
          "title": "延边炭火串店",
          "cityId": "yanbian",
          "cityName": "延吉",
          "province": "jl",
          "provinceLabel": "吉林省",
          "schoolOrStyle": "朝族调味炭火串",
          "flavorProfile": "辣酱提香 · 炭火焦香",
          "soulIngredient": "猪肉牛肉串、朝鲜族辣酱",
          "craftHighlight": "炭火慢烤 / 辣酱刷制",
          "famousShop": "延吉串店一条街",
          "description": "延边串店带有朝鲜族调味特色，辣酱与炭火结合，肉香辣香并存，是延吉夜生活的重要组成部分。",
          "coord": [
            129.5089,
            42.8912
          ],
          "wiki": "延边烧烤",
          "query": "延吉 烧烤 实拍",
          "photoUrl": "/photos/bbq-yanbian-chuan.jpg"
        }
      ]
    },
    {
      "id": "qilu-northwest-bbq",
      "title": "齐鲁与西北大漠炙烤系",
      "subtitle": "淄博小饼烤肉、红柳大串、烤全羊与烤包子",
      "regionBadge": "山东 · 新疆 · 甘肃",
      "description": "淄博小饼小葱卷烤肉开创烧烤新吃法；新疆红柳大串与烤全羊是丝路炙烤巅峰；河西与敦煌亦有烤羊肉传统。",
      "items": [
        {
          "id": "bbq-zibo",
          "title": "淄博小饼小葱烤肉",
          "cityId": "zibo",
          "cityName": "淄博",
          "province": "sd",
          "provinceLabel": "山东省",
          "schoolOrStyle": "现象级烧烤吃法",
          "flavorProfile": "饼卷烤肉 · 小葱提香",
          "soulIngredient": "五花肉等烤肉、淄博小饼、小葱蒜蓉酱",
          "craftHighlight": "肉烤熟卷小饼配葱 / 蒜蓉酱",
          "famousShop": "淄博烧烤店",
          "description": "淄博烧烤因「小饼+小葱+烤肉」的组合吃法一夜全国闻名，肉香饼香葱香交融，亲切好入口。",
          "coord": [
            118.0545,
            36.8135
          ],
          "wiki": "淄博烧烤",
          "query": "淄博 小饼烤肉 实拍",
          "photoUrl": "/photos/bbq-zibo.jpg"
        },
        {
          "id": "bbq-kashi-hongliu",
          "title": "喀什红柳枝烤羊肉串",
          "cityId": "urumqi",
          "cityName": "喀什/乌鲁木齐",
          "province": "xj",
          "provinceLabel": "新疆维吾尔自治区",
          "schoolOrStyle": "丝路炙烤图腾",
          "flavorProfile": "红柳清香 · 外焦里嫩",
          "soulIngredient": "羊肉串、红柳枝、孜然辣椒",
          "craftHighlight": "红柳枝穿肉 / 炭火炙烤撒孜然",
          "famousShop": "喀什老城烧烤 / 乌市大巴扎",
          "description": "以红柳枝穿羊肉，炭火炙烤，红柳清香渗入肉中，撒孜然与辣椒面，是新疆烧烤的灵魂象征。",
          "coord": [
            75.9895,
            39.4705
          ],
          "wiki": "羊肉串",
          "query": "新疆 红柳烤肉串 实拍",
          "photoUrl": "/photos/bbq-kashi-hongliu.jpg"
        },
        {
          "id": "bbq-kashi-quanyang",
          "title": "喀什坑炉烤全羊",
          "cityId": "urumqi",
          "cityName": "喀什",
          "province": "xj",
          "provinceLabel": "新疆维吾尔自治区",
          "schoolOrStyle": "节庆炙烤盛宴",
          "flavorProfile": "外皮金黄 · 肉质鲜嫩",
          "soulIngredient": "整羊、坑炉、香料盐",
          "craftHighlight": "整羊入坑炉焖烤 / 外皮焦香",
          "famousShop": "喀什烤全羊店",
          "description": "整羊经调味后入土坑炉焖烤，外皮金黄酥脆、羊肉鲜嫩，是新疆节庆与待客的最高规格炙烤。",
          "coord": [
            75.9895,
            39.4705
          ],
          "wiki": "烤全羊",
          "query": "新疆 烤全羊 实拍",
          "photoUrl": "/photos/bbq-kashi-quanyang.jpg"
        },
        {
          "id": "bbq-hetian-kaobaozi",
          "title": "和田烤包子",
          "cityId": "urumqi",
          "cityName": "和田/乌鲁木齐",
          "province": "xj",
          "provinceLabel": "新疆维吾尔自治区",
          "schoolOrStyle": "坑炉烤制包子",
          "flavorProfile": "皮脆馅香 · 羊肉洋葱",
          "soulIngredient": "死面皮、羊肉丁、皮牙子",
          "craftHighlight": "死面包馅 / 坑炉烤制",
          "famousShop": "和田烤包子店 / 乌市夜市",
          "description": "死面皮包羊肉丁与洋葱，入坑炉烤至外皮金黄酥脆，馅汁鲜香，是新疆街头与夜市的经典。",
          "coord": [
            79.9225,
            37.1145
          ],
          "wiki": "烤包子",
          "query": "新疆 烤包子 实拍",
          "photoUrl": "/photos/bbq-hetian-kaobaozi.jpg"
        }
      ]
    },
    {
      "id": "southwest-bbq",
      "title": "西南把把烧与火盆烙锅系",
      "subtitle": "宜宾把把烧、西昌火盆、昭通小肉串与贵阳烙锅",
      "regionBadge": "四川 · 云南 · 贵州",
      "description": "西南烧烤形式多样：宜宾把把烧以竹签大串为特色；西昌彝族火盆烧烤氛围感拉满；昭通小肉串与贵阳烙锅烤脑花是夜市硬菜。",
      "items": [
        {
          "id": "bbq-yibin-baba",
          "title": "宜宾把把烧",
          "cityId": "yibin",
          "cityName": "宜宾",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "竹签大串烧烤",
          "flavorProfile": "量大实在 · 酱香炭香",
          "soulIngredient": "猪肉牛肉大串、秘制酱料",
          "craftHighlight": "长竹签穿大串 / 炭火刷酱",
          "famousShop": "宜宾把把烧夜市",
          "description": "宜宾把把烧以长竹签穿大串为特色，炭火烤制刷酱，量大实在，是川南夜市的独特风景。",
          "coord": [
            104.6432,
            28.7518
          ],
          "wiki": "把把烧",
          "query": "宜宾 把把烧 实拍",
          "photoUrl": "/photos/bbq-yibin-baba.jpg"
        },
        {
          "id": "bbq-xichang-huopen",
          "title": "西昌彝族火盆烧烤",
          "cityId": "xichang",
          "cityName": "西昌",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "火盆围坐炙烤",
          "flavorProfile": "氛围感强 · 肉香炭香",
          "soulIngredient": "牛羊肉、火盆炭火、蘸料",
          "craftHighlight": "火盆炭火自助烤 / 彝族蘸料",
          "famousShop": "西昌火盆烧烤店",
          "description": "围着火盆自己烤，彝族风味蘸料，氛围感极强，是西昌夜生活与旅游体验的招牌。",
          "coord": [
            102.2645,
            27.8945
          ],
          "wiki": "火盆烧烤",
          "query": "西昌 火盆烧烤 实拍",
          "photoUrl": "/photos/bbq-xichang-huopen.jpg"
        },
        {
          "id": "bbq-zhaotong",
          "title": "昭通小肉串",
          "cityId": "kunming",
          "cityName": "昭通",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "滇东北夜市小串",
          "flavorProfile": "小串密实 · 麻辣鲜香",
          "soulIngredient": "猪肉小串、辣椒孜然",
          "craftHighlight": "小串炭烤 / 辣椒面孜然",
          "famousShop": "昭通夜市小肉串",
          "description": "昭通小肉串小而密实，炭烤后撒辣椒面，麻辣鲜香，是滇东北夜市的人气小吃。",
          "coord": [
            103.7175,
            27.3385
          ],
          "wiki": "昭通小肉串",
          "query": "昭通 小肉串 实拍",
          "photoUrl": "/photos/bbq-zhaotong.jpg"
        },
        {
          "id": "bbq-gy-laoguo",
          "title": "贵阳烙锅与烤脑花",
          "cityId": "guiyang",
          "cityName": "贵阳",
          "province": "gz",
          "provinceLabel": "贵州省",
          "schoolOrStyle": "黔味烙烤双绝",
          "flavorProfile": "烙锅焦香 · 脑花嫩滑",
          "soulIngredient": "烙锅豆腐豆干荤菜、烤脑花",
          "craftHighlight": "烙锅煎烤 / 脑花炭烤或烤箱",
          "famousShop": "贵阳夜市烙锅 / 烤脑花店",
          "description": "贵阳烙锅将豆腐豆干荤菜在特制烙锅上煎烤；烤脑花则嫩滑鲜香，配辣椒，是贵州夜市的胆量与美味考验。",
          "coord": [
            106.6302,
            26.647
          ],
          "wiki": "烙锅",
          "query": "贵阳 烙锅 烤脑花 实拍",
          "photoUrl": "/photos/bbq-gy-laoguo.jpg"
        }
      ]
    },
    {
      "id": "south-night",
      "title": "华南夜茶海鲜与夜市系",
      "subtitle": "湛江生蚝、潮汕夜糜、长沙夜宵与台北夜市",
      "regionBadge": "广东 · 湖南 · 台湾",
      "description": "华南宵夜鲜美多样：湛江炭烤生蚝、潮汕夜糜打冷、长沙夜宵烤串小龙虾、台北夜市蚵仔煎与大肠包小肠。",
      "items": [
        {
          "id": "bbq-zhanjiang-shenghao",
          "title": "湛江炭烤生蚝",
          "cityId": "zhanjiang",
          "cityName": "湛江",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "中国生蚝之都宵夜",
          "flavorProfile": "蚝肉肥美 · 蒜蓉炭香",
          "soulIngredient": "湛江生蚝、蒜蓉粉丝",
          "craftHighlight": "炭火烤蚝 / 蒜蓉粉丝铺顶",
          "famousShop": "湛江生蚝大排档",
          "description": "湛江生蚝肥美鲜甜，炭火烤制铺蒜蓉粉丝，是粤西宵夜与全国生蚝爱好者的朝圣地。",
          "coord": [
            110.3595,
            21.2705
          ],
          "wiki": "烤生蚝",
          "query": "湛江 炭烤生蚝 实拍",
          "photoUrl": "/photos/bbq-zhanjiang-shenghao.jpg"
        },
        {
          "id": "bbq-chaoshan-yemi",
          "title": "潮汕夜糜打冷",
          "cityId": "shantou",
          "cityName": "汕头",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "潮汕夜宵粥局",
          "flavorProfile": "粥香配卤味 · 清补收尾",
          "soulIngredient": "白糜（白粥）、卤水拼盘、小菜",
          "craftHighlight": "白粥配卤味打冷 / 宵夜清补",
          "famousShop": "汕头夜糜店",
          "description": "潮汕夜糜即夜宵白粥，配卤水鹅、炸物与小菜「打冷」，清淡收尾又有味道，是潮汕独特的宵夜文化。",
          "coord": [
            116.6825,
            23.3545
          ],
          "wiki": "夜糜",
          "query": "潮汕 夜糜 打冷 实拍",
          "photoUrl": "/photos/bbq-chaoshan-yemi.jpg"
        },
        {
          "id": "bbq-cs-yexiao",
          "title": "长沙夜宵烤串与小龙虾",
          "cityId": "changsha",
          "cityName": "长沙",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "星城不夜天",
          "flavorProfile": "辣香浓烈 · 口味虾霸气",
          "soulIngredient": "烤串、口味虾、啤酒",
          "craftHighlight": "炭烤刷辣酱 / 小龙虾香辣或蒜香",
          "famousShop": "长沙坡子街 / 文和友",
          "description": "长沙夜宵以辣著称，烤串与口味虾配啤酒，坡子街与各大夜宵一条街灯火通明，是星城的夜生活名片。",
          "coord": [
            112.9765,
            28.1915
          ],
          "wiki": "口味虾",
          "query": "长沙 夜宵 小龙虾 实拍",
          "photoUrl": "/photos/bbq-cs-yexiao.jpg"
        },
        {
          "id": "bbq-tp-nightmarket",
          "title": "台北夜市蚵仔煎与大肠包小肠",
          "cityId": "taipei",
          "cityName": "台北",
          "province": "tw",
          "provinceLabel": "台湾省",
          "schoolOrStyle": "宝岛夜市双绝",
          "flavorProfile": "蚵仔鲜嫩 · 香肠糯米香",
          "soulIngredient": "蚵仔煎、香肠、糯米肠",
          "craftHighlight": "地瓜粉摊煎蚵仔 / 香肠剖开夹糯米肠",
          "famousShop": "台北宁夏夜市 / 士林夜市",
          "description": "蚵仔煎鲜嫩挂浆，大肠包小肠（香肠夹糯米肠）甜咸搭配，是台湾夜市最具代表性的小吃组合。",
          "coord": [
            121.5205,
            25.0565
          ],
          "wiki": "蚵仔煎",
          "query": "台北 夜市 蚵仔煎 实拍",
          "photoUrl": "/photos/bbq-tp-nightmarket.jpg"
        }
      ]
    }
  ]
};
