import type { SpecialTopicPack } from "../types";

export const seasonalFeastPack: SpecialTopicPack = {
  "id": "seasonal-feast",
  "index": "专题九",
  "title": "二十四节气四时寻味历 · 不时不食的东方风物",
  "kicker": "SEASONAL SOLAR TERMS CULINARY CALENDAR",
  "subtitle": "春尝江鲜山笋、夏食野菌小龙虾、秋品金蟹桂花鸭、冬围铜锅腊味合蒸",
  "lede": "孔子云「不时不食」。中国人的味觉日历严格追随着二十四节气的物候流转：惊蛰春分咬一口鲜掉眉毛的春笋腌笃鲜与艾草青团；芒种夏至赴云南雨季寻觅野生菌，或在苏州啜一碗夏令限定的枫镇大肉面；白露秋分持螯赏菊品阳澄湖大闸蟹与金陵桂花鸭；立冬大雪则围炉涮铜锅羊肉、蒸一钵柴火湘西腊味。",
  "metrics": [
    {
      "label": "四时节令",
      "value": "春夏秋冬 · 16 道时令绝味",
      "note": "顺应二十四节气物候流转"
    },
    {
      "label": "赏味期限",
      "value": "最短仅 20 天（明前江刀/春笋）",
      "note": "错过一季再等一年"
    },
    {
      "label": "饮食哲学",
      "value": "春生 · 夏长 · 秋收 · 冬藏",
      "note": "药食同源与自然节律共鸣"
    },
    {
      "label": "覆盖风土",
      "value": "江南 · 云贵 · 岭南 · 京华",
      "note": "南北四时截然不同的餐桌风景"
    }
  ],
  "subGroups": [
    {
      "id": "spring-fresh",
      "title": "春生 · 江南烟雨春笋与野蔬之鲜",
      "subtitle": "立春 · 雨水 · 惊蛰 · 春分 · 清明 · 谷雨",
      "regionBadge": "上海 · 江苏 · 浙江 · 山东",
      "description": "春雷一响，万物萌发。天目山雷笋破土、田间马兰头与艾草青翠欲滴，江南人的春天从一口山野河鲜开始。",
      "items": [
        {
          "id": "sf-sh-yanduxian",
          "title": "江南春笋咸肉腌笃鲜",
          "cityId": "shanghai",
          "cityName": "上海/杭州",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "惊蛰春分第一鲜汤",
          "flavorProfile": "汤白汁浓 · 笋脆肉酥",
          "soulIngredient": "天目山带泥早春雷笋、江南农家咸五花肉、鲜猪小排、手工百叶结",
          "craftHighlight": "咸肉鲜肉砂锅文火「笃」煮两小时 / 下滚刀春笋与百叶结同煨",
          "famousShop": "上海老吉士酒家 / 杭州知味观",
          "description": "沪杭人家春季餐桌的头号仪式。「腌」指暴腌咸肉，「鲜」指鲜排骨与刚出土的雷笋，「笃」则是江南吴语中砂锅微沸慢炖之声；咸肉之醇、鲜肉之腴与春笋之清甜在乳白浓汤中完美合一。",
          "coord": [
            121.4425,
            31.2015
          ],
          "wiki": "腌笃鲜",
          "query": "上海 腌笃鲜 春笋 实拍",
          "photoUrl": "/photos/sf-sh-yanduxian.jpg"
        },
        {
          "id": "sf-sz-yangcheng-qingtuan",
          "title": "清明麦青汁流心蛋黄肉松青团",
          "cityId": "suzhou",
          "cityName": "苏州/上海",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "寒食清明节令图腾",
          "flavorProfile": "草香清冽 · 软糯流沙",
          "soulIngredient": "江南水磨糯米粉、鲜榨麦青/艾草汁、高邮咸蛋黄与肉松或细沙",
          "craftHighlight": "野生艾草石灰水焯煮捣泥和粉 / 包馅旺火短蒸刷熟菜油",
          "famousShop": "上海王家沙点心店 / 苏州黄天源",
          "description": "只卖清明前后的江南限定春味。采摘鲜嫩艾草或麦青榨取碧绿原汁，撞入滚沸水磨糯米粉揉成柔韧青皮，既可包入细腻玫瑰豆沙，亦可填入流油高邮咸蛋黄与酥松肉松。",
          "coord": [
            120.6258,
            31.3125
          ],
          "wiki": "青团",
          "query": "江南 清明 艾草青团 实拍",
          "photoUrl": "/photos/sf-sz-yangcheng-qingtuan.jpg"
        },
        {
          "id": "sf-yz-jiutou-chun",
          "title": "谷雨香椿头拌淮北内酯豆腐",
          "cityId": "yangzhou",
          "cityName": "扬州/南京",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "谷雨前树尖第一口春香",
          "flavorProfile": "椿香浓郁 · 清爽滑嫩",
          "soulIngredient": "头茬紫红香椿嫩芽、卤水嫩豆腐、小磨麻油",
          "craftHighlight": "香椿芽沸水闪焯变翠绿切末 / 拌入嫩豆腐淋麻油",
          "famousShop": "扬州趣园茶社 / 南京绿柳居",
          "description": "俗谚云「雨前椿芽嫩无丝，雨后椿芽生木质」。专取谷雨前刚萌发的紫红头茬香椿芽，沸水焯烫五秒激出奇异芬芳并转为碧绿，切碎后与雪白嫩豆腐、小磨香油同拌，是春天最风雅的冷盘。",
          "coord": [
            119.4215,
            32.4082
          ],
          "wiki": "香椿豆腐",
          "query": "香椿拌豆腐 春菜 实拍",
          "photoUrl": "/photos/sf-yz-jiutou-chun.jpg"
        }
      ]
    },
    {
      "id": "summer-cool",
      "title": "夏长 · 雨季山珍菌子与消暑夜宴",
      "subtitle": "立夏 · 小满 · 芒种 · 夏至 · 小暑 · 大暑",
      "regionBadge": "云南 · 湖北 · 江苏 · 福建",
      "description": "盛夏酷暑与西南雨季同步降临，云南高原松茸鸡枞破土而出，长江流域小龙虾称霸夜市，江南冰镇绿豆汤与苏式冷拌面沁人心脾。",
      "items": [
        {
          "id": "sf-km-jizong",
          "title": "云南雨季干巴菌炒青椒与松茸刺生",
          "cityId": "kunming",
          "cityName": "昆明",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "夏至小暑高原山野奇珍",
          "flavorProfile": "菌香霸道 · 脆嫩回甜",
          "soulIngredient": "滇中松林野生干巴菌、香格里拉鲜松茸、云贵小青椒",
          "craftHighlight": "手工择洗万次泥沙 / 猪油青椒猛火干煸干巴菌",
          "famousShop": "昆明篆新农贸市场菌子馆 / 翠湖滇菜名店",
          "description": "每年六至八月雨水落地，云南人便进入一年一度的「吃菌季」。貌不惊人的野生干巴菌经耐性撕丝择洗，配青椒丝与火腿丁用猪油猛火煸炒，散发浓郁松脂异香，一勺即可下三碗米饭。",
          "coord": [
            102.7055,
            25.0395
          ],
          "wiki": "干巴菌",
          "query": "云南 干巴菌 炒青椒 野生菌 实拍",
          "photoUrl": "/photos/sf-km-jizong.jpg"
        },
        {
          "id": "sf-qj-xiaolongxia",
          "title": "湖北潜江蒜蓉与十三香油焖大虾",
          "cityId": "jingzhou",
          "cityName": "潜江/武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "夏夜全国宵夜霸主",
          "flavorProfile": "麻辣鲜香 · 虾黄饱满",
          "soulIngredient": "江汉平原稻田青壳小龙虾、潜江二十味秘制香料、紫苏啤酒",
          "craftHighlight": "活虾剪头抽筋热油炸红 / 啤酒香料猛火焖烧三十分钟",
          "famousShop": "潜江虾皇总店 / 武汉靓靓蒸虾",
          "description": "盛夏江城与全国夜市的绝对顶流。精选江汉平原虾稻共作的腮白腹净青壳大虾，先入菜籽热油炸至通体鲜红脆壳，再下潜江草本香料、郫县豆瓣与整瓶啤酒大火焖收，剥壳蘸汤汁再拌一份碱水面。",
          "coord": [
            112.8985,
            30.4015
          ],
          "wiki": "小龙虾",
          "query": "潜江 油焖大虾 小龙虾 实拍",
          "photoUrl": "/photos/sf-qj-xiaolongxia.jpg"
        },
        {
          "id": "sf-sz-sanxiamian",
          "title": "苏州夏令三虾拌面",
          "cityId": "suzhou",
          "cityName": "苏州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "小满芒种江南奢侈面食",
          "flavorProfile": "虾籽醇鲜 · 虾脑馥郁",
          "soulIngredient": "太湖抱卵母河虾（虾仁、虾籽、虾脑）、苏式细面",
          "craftHighlight": "手工拆出虾仁虾脑与虾籽 / 上浆滑炒盖浇葱油拌面",
          "famousShop": "苏州裕兴记面馆 / 同得兴",
          "description": "仅在初夏太湖河虾抱卵的一两个月内供应。熟练女工耗费数小时将鲜活抱卵河虾拆分为晶莹虾仁、橘红虾籽与金黄虾脑「三虾」，分别烹制后浇于一碗葱油细面上，拌匀后每一口皆是太湖极鲜。",
          "coord": [
            120.6195,
            31.3085
          ],
          "wiki": "三虾面",
          "query": "苏州 三虾面 实拍",
          "photoUrl": "/photos/sf-sz-sanxiamian.jpg"
        }
      ]
    },
    {
      "id": "autumn-crab",
      "title": "秋收 · 金风玉露持螯赏桂之宴",
      "subtitle": "立秋 · 处暑 · 白露 · 秋分 · 寒露 · 霜降",
      "regionBadge": "江苏 · 浙江 · 广东",
      "description": "秋风起，蟹脚痒；桂花开，鸭肥美。九雌十雄的大闸蟹、金陵桂花盐水鸭与西湖桂花糖藕，写尽江南与岭南的丰收秋韵。",
      "items": [
        {
          "id": "sf-sz-dazhaxie",
          "title": "阳澄湖清蒸金爪黄毛大闸蟹",
          "cityId": "suzhou",
          "cityName": "苏州/昆山",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "秋分寒露江南第一至味",
          "flavorProfile": "膏红似火 · 脂白如玉",
          "soulIngredient": "阳澄湖青背白肚金爪黄毛大闸蟹、紫苏叶、镇江香醋姜丝",
          "craftHighlight": "草绳捆扎紫苏铺笼肚朝上清蒸十五分钟 / 蟹八件拆食",
          "famousShop": "昆山巴城阳澄湖蟹舫 / 苏州松鹤楼",
          "description": "「九月团脐十月尖，持螯饮酒菊花天」。阳澄湖水草丰茂、湖底坚硬，养出的清水大闸蟹膏满黄肥；不施任何多余调料，仅垫紫苏叶清蒸锁住蟹黄油膏，蘸镇江陈醋与姜末，配一壶温热花雕酒。",
          "coord": [
            120.7855,
            31.4215
          ],
          "wiki": "阳澄湖大闸蟹",
          "query": "阳澄湖 清蒸大闸蟹 实拍",
          "photoUrl": "/photos/sf-sz-dazhaxie.jpg"
        },
        {
          "id": "sf-hz-guihua-tangou",
          "title": "西湖金秋桂花糯米糖藕",
          "cityId": "hangzhou",
          "cityName": "杭州",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "寒露霜降湖山甜香",
          "flavorProfile": "软糯拉丝 · 桂香蜜甜",
          "soulIngredient": "杭州塘栖九孔粉藕、江南圆糯米、满觉陇金桂、红糖冰糖",
          "craftHighlight": "莲藕灌满生糯米竹签封口 / 红糖冰糖铜锅文火慢煨四小时",
          "famousShop": "杭州楼外楼 / 知味观",
          "description": "采满觉陇秋日新打的金桂，配西湖周边九孔粉白莲藕。将浸泡好的圆糯米灌满藕孔，入大锅加红糖、冰糖文火慢煨数小时至通体枣红软糯，切片后淋上浓稠桂花蜜汁，甜润暖心。",
          "coord": [
            120.1415,
            30.2518
          ],
          "wiki": "桂花藕",
          "query": "杭州 桂花糯米糖藕 实拍",
          "photoUrl": "/photos/sf-hz-guihua-tangou.jpg"
        },
        {
          "id": "sf-gd-lameifan",
          "title": "广府秋风古法瓦煲腊味饭",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "秋风起食腊味 · 岭南秋补",
          "flavorProfile": "腊香渗米 · 锅巴金黄",
          "soulIngredient": "广式东莞/皇上皇腊肠、腊肉、润肠、增城丝苗米",
          "craftHighlight": "瓦煲生米煮沸后铺满三味腊味 / 沿煲边淋猪油转火烘出金黄饭焦",
          "famousShop": "广州向群饭店 / 民记煲仔饭",
          "description": "广东谚语「秋风起，食腊味」。干燥北风吹起时，用高粱酒与白糖腌制风干的广式腊肠、腊肉、鸭肝润肠铺在半熟的增城丝苗米上，油脂随蒸汽渗入每粒米心，底部烘出嘎嘣脆的黄金锅巴。",
          "coord": [
            113.2615,
            23.1205
          ],
          "wiki": "煲仔饭",
          "query": "广州 广式腊味煲仔饭 实拍",
          "photoUrl": "/photos/sf-gd-lameifan.jpg"
        }
      ]
    },
    {
      "id": "winter-warmth",
      "title": "冬藏 · 围炉鼎沸与岁末腊味团圆",
      "subtitle": "立冬 · 小雪 · 大雪 · 冬至 · 小寒 · 大寒",
      "regionBadge": "四川 · 北京 · 湖南 · 广东",
      "description": "天寒地冻之时，成都人喝简阳奶白羊肉汤过冬至，北方人围坐铜锅与铁锅，南方人则将晒透的腊肉香肠端上团圆桌。",
      "items": [
        {
          "id": "sf-cd-jianyang-yangtang",
          "title": "冬至成都简阳大耳奶白羊肉汤",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川人冬至第一民俗",
          "flavorProfile": "汤白如乳 · 鲜香暖身",
          "soulIngredient": "简阳大耳山羊肉与羊杂、鲫鱼猪骨底汤、青花椒香菜小米辣蘸水",
          "craftHighlight": "鲫鱼羊骨猛火冲出浓白奶汤 / 羊肉羊杂爆炒后入锅同煮",
          "famousShop": "成都小关庙羊肉汤一条街 / 简阳马厚德羊肉汤",
          "description": "每年冬至，成都全城飘满羊肉汤香。精选龙泉山脉放养的简阳大耳山羊，先用猪骨、羊骨与鲜活鲫鱼熬出浓白似牛乳的高汤，再将熟羊肉、羊肚下锅大火翻滚，蘸腐乳小米辣香菜碟，寒气顿消。",
          "coord": [
            104.0795,
            30.6785
          ],
          "wiki": "羊肉汤",
          "query": "成都 简阳羊肉汤 实拍",
          "photoUrl": "/photos/sf-cd-jianyang-yangtang.jpg"
        },
        {
          "id": "sf-bj-dongzhi-jiaozi",
          "title": "北方冬至手工三鲜白菜水饺",
          "cityId": "beijing",
          "cityName": "北京/沈阳",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "冬至不端饺子碗冻掉耳朵没人管",
          "flavorProfile": "皮薄馅满 · 汁水鲜甜",
          "soulIngredient": "霜打大白菜或韭菜、黑猪肉馅、渤海大对虾仁、老陈醋腊八蒜",
          "craftHighlight": "手擀中间厚边缘薄水饺皮 / 三开三点冷水煮至肚皮圆鼓",
          "famousShop": "北京馅老满 / 沈阳老边饺子馆",
          "description": "北方冬至与除夕雷打不动的饮食信仰。霜降后的大白菜甜脆多汁，混合三分肥七分瘦的猪肉馅与整颗虾仁包成元宝形水饺，配翠绿如翡翠的腊八蒜与山西老陈醋，一口一个热气腾腾。",
          "coord": [
            116.4185,
            39.9415
          ],
          "wiki": "饺子",
          "query": "北方 手工水饺 饺子 实拍",
          "photoUrl": "/photos/sf-bj-dongzhi-jiaozi.jpg"
        },
        {
          "id": "sf-gd-yangnanbao",
          "title": "广式冬令枝竹马蹄古法羊腩煲",
          "cityId": "guangzhou",
          "cityName": "广州/香港",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "岭南大寒街头炭炉暖煲",
          "flavorProfile": "酱香浓郁 · 连皮带肉软糯",
          "soulIngredient": "带皮黑草羊腩、柱侯酱南乳腐乳、炸枝竹、清甜马蹄、生菜",
          "craftHighlight": "甘蔗垫底炭炉瓦煲慢焖 / 蘸柠檬叶腐乳酱配生菜烫食",
          "famousShop": "广州百岁羊庄 / 香港庙街炭火羊腩煲",
          "description": "每逢寒流南下，广州与香港街头的炭炉瓦煲便香气四溢。带皮黑草羊腩用柱侯酱、南乳、当归、竹蔗同焖至羊皮胶质软糯Q弹，炸枝竹吸饱肉汁，清脆马蹄化解油腻，最后下唐生菜烫食。",
          "coord": [
            113.2515,
            23.1125
          ],
          "wiki": "羊腩煲",
          "query": "广式 枝竹羊腩煲 实拍",
          "photoUrl": "/photos/sf-gd-yangnanbao.jpg"
        }
      ]
    }
  ]
};
