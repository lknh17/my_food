import type { SpecialTopicPack } from "../types";

export const hotpotJianghuPack: SpecialTopicPack = {
  "id": "hotpot-jianghu",
  "index": "专题四",
  "title": "火锅江湖图谱 · 围炉鼎沸的中国温度",
  "kicker": "HOTPOT JIANGHU ATLAS",
  "subtitle": "从重庆牛油九宫格到潮汕鲜切牛肉、京派铜锅涮肉与云贵酸汤菌锅的全国围炉地图",
  "lede": "火锅是中国人围桌社交的终极形式。重庆九宫格牛油锅麻辣滚烫，成都清油锅香辣层次分明；潮汕十八秒鲜切牛肉追求本鲜极致；老北京铜锅涮羊肉炭火翻滚；贵州红酸汤与云南菌火锅则把山野发酵与菌香带入鼎中。一锅一江湖，一桌一天下。",
  "metrics": [
    {
      "label": "火锅流派",
      "value": "4 大谱系 · 18 锅名锅",
      "note": "麻辣、铜锅、鲜切清汤、酸汤菌野"
    },
    {
      "label": "锅底灵魂",
      "value": "牛油 · 清油 · 酸汤 · 菌汤 · 椰青",
      "note": "一方水土一方锅底"
    },
    {
      "label": "涮煮哲学",
      "value": "七上八下 · 十八秒 · 干碟蘸料",
      "note": "火候与蘸碟决定一切"
    },
    {
      "label": "围炉名城",
      "value": "15+ 座",
      "note": "从山城到草原的火锅版图"
    }
  ],
  "subGroups": [
    {
      "id": "chuanyu-mala",
      "title": "川渝麻辣红油系",
      "subtitle": "九宫格牛油、清油麻辣与盐帮兔火锅",
      "regionBadge": "重庆 · 成都 · 自贡",
      "description": "川渝火锅以牛油或清油为底，石柱红辣椒与茂汶花椒铸就麻辣灵魂。重庆偏重牛油醇厚，成都偏重清油香辣，自贡盐帮则另辟兔火锅蹊径。",
      "items": [
        {
          "id": "hp-cq-jiugongge",
          "title": "重庆九宫格牛油老火锅",
          "cityId": "chongqing",
          "cityName": "重庆",
          "province": "cq",
          "provinceLabel": "重庆市",
          "schoolOrStyle": "火锅江湖盟主",
          "flavorProfile": "麻辣醇厚 · 牛油翻滚",
          "soulIngredient": "纯牛油、石柱红辣椒、茂汶花椒、醪糟老姜",
          "craftHighlight": "牛油凝脂九宫格 / 毛肚七上八下",
          "famousShop": "重庆老火锅博物馆餐厅 / 大龙燚",
          "description": "重庆火锅以纯牛油为魂，九宫格分区涮煮，毛肚七上八下脆嫩化渣，干碟芝麻香油解辣，是山城夜生活的绝对主角。",
          "coord": [
            106.5768,
            29.5579
          ],
          "wiki": "重庆火锅",
          "query": "重庆 九宫格牛油火锅 实拍",
          "photoUrl": "/photos/hp-cq-jiugongge.jpg"
        },
        {
          "id": "hp-cd-qingyou",
          "title": "成都清油麻辣火锅",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "蓉城香辣层次锅",
          "flavorProfile": "香辣分明 · 清油不腻",
          "soulIngredient": "菜籽清油、郫县豆瓣、干辣椒、花椒",
          "craftHighlight": "清油炒料熬锅 / 配菜丰富蘸油碟",
          "famousShop": "成都小龙坎 / 大妙火锅",
          "description": "成都清油火锅相对重庆更重香辣层次与菜品丰富度，锅底香而不燥，适合久涮，芝麻油碟配蒜泥香菜是标配。",
          "coord": [
            104.0665,
            30.5728
          ],
          "wiki": "成都火锅",
          "query": "成都 清油火锅 实拍",
          "photoUrl": "/photos/hp-cd-qingyou.jpg"
        },
        {
          "id": "hp-zg-yanbang-tu",
          "title": "自贡盐帮兔火锅",
          "cityId": "zigong",
          "cityName": "自贡",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "小河帮特色锅",
          "flavorProfile": "麻辣鲜香 · 兔肉细嫩",
          "soulIngredient": "鲜兔肉、盐帮辣酱、刀口辣椒",
          "craftHighlight": "兔肉鲜涮或预炸 / 盐帮复合辣锅",
          "famousShop": "自贡盐帮兔火锅店",
          "description": "自贡盐帮菜入锅：鲜兔肉细嫩，锅底融合盐帮复合辣味，麻辣鲜香，是小河帮火锅的独特代表。",
          "coord": [
            104.7784,
            29.339
          ],
          "wiki": "兔火锅",
          "query": "自贡 盐帮兔火锅 实拍",
          "photoUrl": "/photos/hp-zg-yanbang-tu.jpg"
        }
      ]
    },
    {
      "id": "north-copper",
      "title": "北派炭火铜锅与酸菜系",
      "subtitle": "景泰蓝涮肉、酸菜白肉血肠与草原冰煮羊",
      "regionBadge": "北京 · 东北 · 内蒙古 · 山西",
      "description": "北方火锅以炭火铜锅为经典形制，涮羊肉讲究肉薄汤清；东北酸菜白肉血肠铜锅暖意浓厚；内蒙古冰煮羊则把草原羊肉的鲜甜发挥到极致。",
      "items": [
        {
          "id": "hp-bj-tongguo",
          "title": "老北京景泰蓝铜锅涮羊肉",
          "cityId": "beijing",
          "cityName": "北京",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "京华冬日图腾",
          "flavorProfile": "汤清肉鲜 · 炭火翻滚",
          "soulIngredient": "锡盟羔羊肉、口蘑高汤、麻酱韭菜花虾油",
          "craftHighlight": "炭火铜锅翻滚 / 肉片薄如纸入汤即熟",
          "famousShop": "北京东来顺 / 聚宝源",
          "description": "老北京涮肉以炭火景泰蓝铜锅为器，锡盟羔羊手切薄片，口蘑汤清澈，蘸麻酱、韭菜花、腐乳、虾油，鲜香不膻。",
          "coord": [
            116.4105,
            39.9385
          ],
          "wiki": "涮羊肉",
          "query": "北京 铜锅涮羊肉 实拍",
          "photoUrl": "/photos/hp-bj-tongguo.jpg"
        },
        {
          "id": "hp-ne-suancai",
          "title": "东北酸菜白肉血肠铜锅",
          "cityId": "shenyang",
          "cityName": "沈阳",
          "province": "ln",
          "provinceLabel": "辽宁省",
          "schoolOrStyle": "关东暖冬锅",
          "flavorProfile": "酸香解腻 · 血肠软嫩",
          "soulIngredient": "酸菜、五花白肉、猪肉血肠、粉条",
          "craftHighlight": "酸菜熬汤 / 白肉血肠同涮",
          "famousShop": "沈阳老边火锅 / 哈尔滨铜锅",
          "description": "东北冬日必备。酸菜熬出的酸香汤底解腻开胃，五花白肉肥而不腻，血肠软嫩，粉条吸汤，炭火铜锅热气腾腾。",
          "coord": [
            123.4315,
            41.8055
          ],
          "wiki": "酸菜白肉火锅",
          "query": "东北 酸菜白肉血肠铜锅 实拍",
          "photoUrl": "/photos/hp-ne-suancai.jpg"
        },
        {
          "id": "hp-datong-tonghuoguo",
          "title": "大同什锦铜火锅",
          "cityId": "datong",
          "cityName": "大同",
          "province": "sx",
          "provinceLabel": "山西省",
          "schoolOrStyle": "塞北铜锅盛宴",
          "flavorProfile": "汤醇料丰 · 炭火保温",
          "soulIngredient": "牛羊肉、丸子、豆腐、青菜、粉条",
          "craftHighlight": "铜锅分层码放 / 炭火慢涮",
          "famousShop": "大同铜火锅老店",
          "description": "大同铜火锅料丰汤醇，牛羊肉丸子豆腐粉条分层码放，炭火保温，适合多人围坐分享，是塞北冬日的热情。",
          "coord": [
            113.3001,
            40.0768
          ],
          "wiki": "铜火锅",
          "query": "大同 铜火锅 实拍",
          "photoUrl": "/photos/hp-datong-tonghuoguo.jpg"
        },
        {
          "id": "hp-nm-bingzhuyang",
          "title": "内蒙古草原冰煮羊",
          "cityId": "hohhot",
          "cityName": "呼和浩特",
          "province": "nm",
          "provinceLabel": "内蒙古自治区",
          "schoolOrStyle": "草原鲜切奇锅",
          "flavorProfile": "肉鲜似冰 · 本味至甜",
          "soulIngredient": "乌珠穆沁羊、清水或轻骨汤、生蘸料",
          "craftHighlight": "羊肉冷冻薄切 / 沸水快速涮煮",
          "famousShop": "呼和浩特冰煮羊餐厅",
          "description": "将草原羊肉冷冻后刨成薄片，沸水中快速涮熟，最大程度保留羊肉的鲜甜本味，蘸料简单，是内蒙古火锅的新贵。",
          "coord": [
            111.7495,
            40.8425
          ],
          "wiki": "冰煮羊",
          "query": "内蒙古 冰煮羊 实拍",
          "photoUrl": "/photos/hp-nm-bingzhuyang.jpg"
        }
      ]
    },
    {
      "id": "south-fresh",
      "title": "南派本鲜清汤与粥底系",
      "subtitle": "潮汕十八秒牛肉、顺德毋米粥底与海南椰子鸡",
      "regionBadge": "广东 · 海南",
      "description": "南派火锅追求食材本味：潮汕牛肉讲究现切与秒数；顺德粥底火锅以米粥为锅；海南椰子鸡则用椰青清甜汤底滋养文昌鸡。",
      "items": [
        {
          "id": "hp-chaoshan-niurou",
          "title": "潮汕十八秒鲜切牛肉火锅",
          "cityId": "shantou",
          "cityName": "汕头",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "本鲜牛肉巅峰",
          "flavorProfile": "鲜甜脆嫩 · 沙茶提香",
          "soulIngredient": "潮汕黄牛不同部位、牛骨清汤、沙茶酱",
          "craftHighlight": "现宰现切 / 各部位精准涮秒",
          "famousShop": "汕头八合里牛肉火锅 / 焰遇",
          "description": "潮汕牛肉火锅将黄牛拆分为吊龙、匙仁、胸口等数十部位，各有最佳涮煮秒数，牛骨清汤本鲜，沙茶酱与牛肉丸是灵魂伴侣。",
          "coord": [
            116.6825,
            23.3545
          ],
          "wiki": "潮汕牛肉火锅",
          "query": "潮汕 牛肉火锅 实拍",
          "photoUrl": "/photos/hp-chaoshan-niurou.jpg"
        },
        {
          "id": "hp-shunde-zhoudi",
          "title": "顺德毋米粥底火锅",
          "cityId": "shunde",
          "cityName": "顺德",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "凤城粥底奇锅",
          "flavorProfile": "粥香米甜 · 涮海鲜河鲜",
          "soulIngredient": "碎米熬粥、鲜鱼片虾蟹、时蔬",
          "craftHighlight": "米粥为锅底 / 河海鲜现涮",
          "famousShop": "顺德粥底火锅名店",
          "description": "顺德人用毋米粥作火锅底，米香清甜，涮鱼片、虾蟹与时蔬，粥越涮越稠越香，体现凤城对米与水的极致理解。",
          "coord": [
            113.2935,
            22.8045
          ],
          "wiki": "粥底火锅",
          "query": "顺德 粥底火锅 实拍",
          "photoUrl": "/photos/hp-shunde-zhoudi.jpg"
        },
        {
          "id": "hp-hainan-yeziji",
          "title": "海南文昌椰子鸡火锅",
          "cityId": "sanya",
          "cityName": "文昌/三亚",
          "province": "hi",
          "provinceLabel": "海南省",
          "schoolOrStyle": "椰香本鸡清补锅",
          "flavorProfile": "椰青清甜 · 鸡肉滑嫩",
          "soulIngredient": "文昌鸡、新鲜椰青、椰肉、姜片",
          "craftHighlight": "椰青水为汤 / 文昌鸡分部位涮",
          "famousShop": "海南椰子鸡专门店",
          "description": "以新鲜椰青水为锅底，文昌鸡分部位涮煮，椰香清甜与鸡肉鲜嫩交融，是海南最具辨识度的火锅，老少咸宜。",
          "coord": [
            109.5115,
            18.2525
          ],
          "wiki": "椰子鸡",
          "query": "海南 椰子鸡火锅 实拍",
          "photoUrl": "/photos/hp-hainan-yeziji.jpg"
        }
      ]
    },
    {
      "id": "southwest-acid-fungi",
      "title": "西南酸汤与山野菌系",
      "subtitle": "苗家红酸汤、野生菌锅、腊排骨与糟粕醋",
      "regionBadge": "贵州 · 云南 · 海南 · 西藏",
      "description": "云贵高原与热带海岛贡献了酸汤、菌香、腊香与糟醋等多种火锅底色，把山野与海洋的风味带入围炉。",
      "items": [
        {
          "id": "hp-kaili-hongsuantang",
          "title": "凯里苗家红酸汤鱼火锅",
          "cityId": "kaili",
          "cityName": "凯里",
          "province": "gz",
          "provinceLabel": "贵州省",
          "schoolOrStyle": "苗岭酸汤锅",
          "flavorProfile": "酸香开胃 · 鱼嫩汤红",
          "soulIngredient": "番茄辣椒发酵红酸汤、鲜鱼、木姜子",
          "craftHighlight": "红酸汤熬开 / 鲜鱼入锅",
          "famousShop": "凯里苗家酸汤鱼火锅",
          "description": "苗家红酸汤入锅涮鱼，酸香浓郁、木姜子提香，鱼肉嫩滑，是黔东南最具代表性的火锅。",
          "coord": [
            107.9775,
            26.5825
          ],
          "wiki": "酸汤鱼",
          "query": "凯里 红酸汤鱼火锅 实拍",
          "photoUrl": "/photos/hp-kaili-hongsuantang.jpg"
        },
        {
          "id": "hp-yn-yeshengjun",
          "title": "云南野生菌火锅",
          "cityId": "kunming",
          "cityName": "昆明",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "雨季山野菌宴",
          "flavorProfile": "菌香复合 · 鲜甜浓郁",
          "soulIngredient": "松茸牛肝菌青头菌等多种野生菌、鸡汤",
          "craftHighlight": "菌菇分层下锅 / 高汤慢涮",
          "famousShop": "昆明野生菌火锅店",
          "description": "雨季云南人的顶级享受。多种野生菌在鸡汤中释放复合菌香，鲜甜浓郁，需注意菌类食用禁忌，是高原山野的味觉盛宴。",
          "coord": [
            102.7122,
            25.0405
          ],
          "wiki": "野生菌火锅",
          "query": "云南 野生菌火锅 实拍",
          "photoUrl": "/photos/hp-yn-yeshengjun.jpg"
        },
        {
          "id": "hp-lijiang-lapaigu",
          "title": "丽江腊排骨火锅",
          "cityId": "lijiang",
          "cityName": "丽江",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "纳西腊香锅",
          "flavorProfile": "腊香浓郁 · 排骨软糯",
          "soulIngredient": "丽江腊排骨、洋芋、豆腐、山茅野菜",
          "craftHighlight": "腊排骨熬汤 / 配菜同涮",
          "famousShop": "丽江腊排骨火锅店",
          "description": "纳西族腊排骨熬出的汤底腊香浓郁，配洋芋、豆腐与山野菜，软糯咸香，是丽江古城冬日必吃的暖锅。",
          "coord": [
            100.2335,
            26.8725
          ],
          "wiki": "腊排骨火锅",
          "query": "丽江 腊排骨火锅 实拍",
          "photoUrl": "/photos/hp-lijiang-lapaigu.jpg"
        },
        {
          "id": "hp-wenchang-zaopocu",
          "title": "文昌糟粕醋海鲜火锅",
          "cityId": "haikou",
          "cityName": "文昌",
          "province": "hi",
          "provinceLabel": "海南省",
          "schoolOrStyle": "琼北发酵酸醋锅",
          "flavorProfile": "酸香独特 · 海鲜爽脆",
          "soulIngredient": "糟粕醋、海鲜、牛肉、蔬菜",
          "craftHighlight": "糟粕醋兑汤 / 海鲜快速涮煮",
          "famousShop": "文昌糟粕醋火锅店",
          "description": "海南特有的糟粕醋经发酵呈独特酸香，入锅涮海鲜与牛肉，酸香开胃、解腻提鲜，是琼北特色火锅。",
          "coord": [
            110.7245,
            19.6125
          ],
          "wiki": "糟粕醋火锅",
          "query": "文昌 糟粕醋火锅 实拍",
          "photoUrl": "/photos/hp-wenchang-zaopocu.jpg"
        },
        {
          "id": "hp-lhasa-maoniurou",
          "title": "藏式牦牛肉土火锅",
          "cityId": "lhasa",
          "cityName": "拉萨",
          "province": "xz",
          "provinceLabel": "西藏自治区",
          "schoolOrStyle": "雪域高原暖锅",
          "flavorProfile": "肉香醇厚 · 高原滋补",
          "soulIngredient": "牦牛肉、高原蔬菜、酥油或清汤",
          "craftHighlight": "牦牛骨汤 / 牦牛肉慢涮",
          "famousShop": "拉萨藏餐火锅店",
          "description": "高原牦牛肉入锅，汤醇肉香，配高原蔬菜，是藏地冬日围炉的滋补选择，体现雪域饮食的厚重与温暖。",
          "coord": [
            91.1145,
            29.6445
          ],
          "wiki": "牦牛肉火锅",
          "query": "拉萨 牦牛肉火锅 实拍",
          "photoUrl": "/photos/hp-lhasa-maoniurou.jpg"
        }
      ]
    }
  ]
};
