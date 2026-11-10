import type { SpecialTopicPack } from "../types";

export const riceNoodlesCompendiumPack: SpecialTopicPack = {
  "id": "rice-noodles-compendium",
  "index": "专题三",
  "title": "中华粉全集 · 南方稻作与发酵酸香的嗦粉江湖",
  "kicker": "COMPENDIUM OF CHINESE RICE NOODLES",
  "subtitle": "从八桂嗦粉、云贵米线酸汤粉到湘赣拌炒粉、岭南粿条肠粉的完整稻作碳水图谱",
  "lede": "如果说北方是面的帝国，南方则是粉的天堂。从桂林漓江边的卤菜米粉、柳州酸笋螺蛳粉，到蒙自菊花过桥米线、贵阳花溪牛肉粉；从常德津市牛肉粉、南昌瓦罐汤拌粉，到广州干炒牛河、潮汕鲜切牛肉粿条与海南抱罗粉——每一碗粉背后，都是湿热稻作文明对谷物淀粉的极致驯化与天然发酵智慧。",
  "metrics": [
    {
      "label": "收录粉食谱系",
      "value": "5 大谱系 · 28 碗名粉",
      "note": "米粉、米线、粿条、肠粉、滤粉全覆盖"
    },
    {
      "label": "发酵灵魂调料",
      "value": "酸笋 · 红酸汤 · 糟粕醋 · 酸嘢",
      "note": "南方湿热气候催生的天然酸香"
    },
    {
      "label": "粉体工艺",
      "value": "榨粉 / 切粉 / 卷粉 / 滤粉",
      "note": "湿磨与干榨两种技法并行"
    },
    {
      "label": "嗦粉圣地城市",
      "value": "18+ 座",
      "note": "一日三餐皆可嗦粉的南方日常"
    }
  ],
  "subGroups": [
    {
      "id": "guangxi-fen",
      "title": "八桂嗦粉王国",
      "subtitle": "漓江卤菜、柳州酸笋、老友柠檬与北部湾猪脚",
      "regionBadge": "广西",
      "description": "广西人一天可以嗦三顿粉。桂林卤菜米粉以马肉、烧鸭与秘制卤水闻名；柳州螺蛳粉以酸笋腐竹炸花生征服全国；南宁老友粉以酸辣开胃著称；钦州猪脚粉则是北部湾的醇厚代表。",
      "items": [
        {
          "id": "rn-guilin-halufen",
          "title": "桂林卤菜马肉米粉",
          "cityId": "guilin",
          "cityName": "桂林",
          "province": "gx",
          "provinceLabel": "广西壮族自治区",
          "schoolOrStyle": "八桂米粉鼻祖",
          "flavorProfile": "卤香醇厚 · 粉细软滑",
          "soulIngredient": "漓江大米湿磨圆粉、马肉/烧鸭卤水、油炸黄豆花生酸豆角",
          "craftHighlight": "湿磨吊浆榨粉 / 陈年卤水卤制马肉烧鸭",
          "famousShop": "桂林阿毛米粉 / 味香馆",
          "description": "桂林人清晨第一碗信仰。大米经浸泡湿磨吊浆后榨成细圆粉，烫软后浇上陈年卤水，盖上切片马肉或烧鸭、油炸黄豆、花生米与酸豆角，卤香深入粉心。",
          "coord": [
            110.2902,
            25.2736
          ],
          "wiki": "桂林米粉",
          "query": "桂林 卤菜米粉 实拍",
          "photoUrl": "/photos/rn-guilin-halufen.jpg"
        },
        {
          "id": "rn-liuzhou-luosifen",
          "title": "柳州原味螺蛳粉",
          "cityId": "liuzhou",
          "cityName": "柳州",
          "province": "gx",
          "provinceLabel": "广西壮族自治区",
          "schoolOrStyle": "酸笋腐竹炸花生之王",
          "flavorProfile": "酸辣鲜香 · 螺香浓郁",
          "soulIngredient": "干制圆米粉、石螺高汤、酸笋、腐竹、油炸花生、木耳、酸豆角",
          "craftHighlight": "干米粉复水煮软 / 螺蛳骨汤兑酸笋汤底",
          "famousShop": "柳州阿懂螺蛳粉 / 螺霸王原汤店",
          "description": "以酸笋臭香与石螺高汤征服全国的现象级名粉。干米粉煮软后浇入用石螺、猪骨熬制并兑入酸笋汤的红亮汤底，铺满炸腐竹、花生、木耳、酸豆角与青菜，酸辣开胃、回味悠长。",
          "coord": [
            109.4155,
            24.3142
          ],
          "wiki": "螺蛳粉",
          "query": "柳州 螺蛳粉 实拍",
          "photoUrl": "/photos/rn-liuzhou-luosifen.jpg"
        },
        {
          "id": "rn-nanning-laoyoufen",
          "title": "南宁酸辣老友粉",
          "cityId": "nanning",
          "cityName": "南宁",
          "province": "gx",
          "provinceLabel": "广西壮族自治区",
          "schoolOrStyle": "绿城醒酒开胃神器",
          "flavorProfile": "酸辣醒神 · 豆豉蒜香",
          "soulIngredient": "湿圆米粉、酸笋、豆豉、蒜头、辣椒、猪肉末或牛肉",
          "craftHighlight": "蒜头豆豉酸笋猛火爆香 / 冲汤烫粉",
          "famousShop": "南宁老友记 / 中山路老友粉",
          "description": "传说源于一位南宁老板娘为宿醉老友特制的醒酒粉。蒜头、豆豉、酸笋与干辣椒猛火爆出浓香，下猪肉末炒香后冲入高汤，粉条吸满酸辣汤汁，配上酸嘢更是一绝。",
          "coord": [
            108.32,
            22.824
          ],
          "wiki": "老友粉",
          "query": "南宁 老友粉 实拍",
          "photoUrl": "/photos/rn-nanning-laoyoufen.jpg"
        },
        {
          "id": "rn-qinzhou-zhujiaofen",
          "title": "钦州猪脚粉",
          "cityId": "beihai",
          "cityName": "钦州/北海",
          "province": "gx",
          "provinceLabel": "广西壮族自治区",
          "schoolOrStyle": "北部湾醇厚名粉",
          "flavorProfile": "胶质丰盈 · 卤香软糯",
          "soulIngredient": "湿切粉或圆粉、卤水猪脚、花生、酸萝卜",
          "craftHighlight": "猪脚慢卤至软烂脱骨 / 切粉烫软浇卤汁",
          "famousShop": "钦州猪脚粉老店 / 北部湾美食街",
          "description": "北部湾城市的早餐图腾。猪脚经秘制卤水慢焖至皮糯肉烂、胶质丰盈，切厚片盖在烫软的米粉上，浇上浓稠卤汁，配炸花生与爽脆酸萝卜，咸香不腻。",
          "coord": [
            108.6242,
            21.9665
          ],
          "wiki": "猪脚粉",
          "query": "钦州 猪脚粉 实拍",
          "photoUrl": "/photos/rn-qinzhou-zhujiaofen.jpg"
        },
        {
          "id": "rn-yulin-shengliaofen",
          "title": "玉林生料粉",
          "cityId": "nanning",
          "cityName": "玉林/南宁",
          "province": "gx",
          "provinceLabel": "广西壮族自治区",
          "schoolOrStyle": "桂东南特色生烫粉",
          "flavorProfile": "鲜甜爽脆 · 汤清粉滑",
          "soulIngredient": "湿圆粉、生猪肉片/猪肝/腰花、花生芝麻酱",
          "craftHighlight": "生肉片沸汤瞬间烫熟 / 配芝麻酱花生碎",
          "famousShop": "玉林生料粉老字号",
          "description": "玉林独创的「生料」吃法：将新鲜薄切猪肉片、猪肝、腰花放入滚烫高汤中瞬间烫至刚好断生，保持极致鲜嫩，再与米粉、花生碎、芝麻酱同碗，鲜甜清爽。",
          "coord": [
            110.1545,
            22.6315
          ],
          "wiki": "玉林生料粉",
          "query": "玉林 生料粉 实拍",
          "photoUrl": "/photos/rn-yulin-shengliaofen.jpg"
        },
        {
          "id": "rn-binyang-suanfen",
          "title": "宾阳酸粉",
          "cityId": "nanning",
          "cityName": "宾阳/南宁",
          "province": "gx",
          "provinceLabel": "广西壮族自治区",
          "schoolOrStyle": "酸嘢之乡特色粉",
          "flavorProfile": "酸爽开胃 · 粉韧汤鲜",
          "soulIngredient": "发酵酸粉、酸笋酸豆角、花生碎、肉臊",
          "craftHighlight": "大米发酵后榨粉 / 酸汤或干拌皆可",
          "famousShop": "宾阳酸粉非遗馆",
          "description": "宾阳人以「酸」立城。大米经自然发酵后榨成带淡淡酸香的粉条，可配酸汤或干拌，佐以本地酸笋、酸豆角与花生碎，酸香层层递进，开胃消暑。",
          "coord": [
            108.8112,
            23.2185
          ],
          "wiki": "宾阳酸粉",
          "query": "宾阳 酸粉 实拍",
          "photoUrl": "/photos/rn-binyang-suanfen.jpg"
        }
      ]
    },
    {
      "id": "yungui-fen",
      "title": "云贵高原米线与酸汤粉",
      "subtitle": "过桥米线、小锅米线、花溪牛肉粉与苗家红酸汤",
      "regionBadge": "云南 · 贵州",
      "description": "云南以米线闻名天下——蒙自过桥米线以鸡汤油封保温，昆明小锅米线一锅一煮；贵州则以酸为主角，花溪牛肉粉、遵义羊肉粉与凯里酸汤粉各擅胜场。",
      "items": [
        {
          "id": "rn-mengzi-guoqiao",
          "title": "蒙自菊花过桥米线",
          "cityId": "mengzi",
          "cityName": "蒙自",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "滇南米线发源地",
          "flavorProfile": "汤鲜油封 · 配料丰盈",
          "soulIngredient": "蒙自粗细米线、乌骨鸡高汤、生肉片河鲜蔬菜、菊花",
          "craftHighlight": "鸡汤表面厚油封保温 / 生烫肉片配料后下米线",
          "famousShop": "蒙自过桥米线博物馆餐厅 / 建水汽锅鸡米线",
          "description": "相传蒙自书生娘子为送饭保温，在鸡汤表面覆厚油层，过桥送至学堂。今日仍以滚烫鸡汤油封为魂，生肉片、鹌鹑蛋、豆腐皮、蔬菜依次烫熟，最后下入粗细米线，可佐菊花清香。",
          "coord": [
            103.3645,
            23.3685
          ],
          "wiki": "过桥米线",
          "query": "蒙自 过桥米线 实拍",
          "photoUrl": "/photos/rn-mengzi-guoqiao.jpg"
        },
        {
          "id": "rn-kunming-xiaoguomixian",
          "title": "昆明小锅米线",
          "cityId": "kunming",
          "cityName": "昆明",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "春城一锅一煮招牌",
          "flavorProfile": "酱香浓郁 · 现煮现食",
          "soulIngredient": "昆明细米线、肉酱、豆瓣酱、番茄或老奶洋芋",
          "craftHighlight": "砂锅或小铁锅单人现煮 / 肉酱番茄熬底",
          "famousShop": "昆明福照楼 / 建新园",
          "description": "与过桥米线并称滇味双璧。每人一锅，肉酱、豆瓣或番茄在小锅中熬出浓香汤底，下入细米线同煮吸味，可加老奶洋芋、酥肉等配菜，酱香浓郁、热气腾腾。",
          "coord": [
            102.7122,
            25.0405
          ],
          "wiki": "小锅米线",
          "query": "昆明 小锅米线 实拍",
          "photoUrl": "/photos/rn-kunming-xiaoguomixian.jpg"
        },
        {
          "id": "rn-kunming-douhua",
          "title": "昆明豆花米线",
          "cityId": "kunming",
          "cityName": "昆明",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "豆腐脑遇上米线",
          "flavorProfile": "豆香清甜 · 麻辣或清汤",
          "soulIngredient": "细米线、嫩豆花、花生碎、油辣子或清汤",
          "craftHighlight": "豆花点成脑状盖粉 / 干拌或汤粉两吃",
          "famousShop": "昆明建新园豆花米线",
          "description": "将嫩滑豆花与细米线巧妙结合。米线烫软后盖上刚刚点成的嫩豆花，可淋油辣子、花生碎、葱花干拌，也可配清汤食用，豆香与米香交融，清爽不腻。",
          "coord": [
            102.7185,
            25.0382
          ],
          "wiki": "豆花米线",
          "query": "昆明 豆花米线 实拍",
          "photoUrl": "/photos/rn-kunming-douhua.jpg"
        },
        {
          "id": "rn-guiyang-huaxi",
          "title": "贵阳花溪牛肉粉",
          "cityId": "guiyang",
          "cityName": "贵阳",
          "province": "gz",
          "provinceLabel": "贵州省",
          "schoolOrStyle": "黔中酸辣名粉之冠",
          "flavorProfile": "酸辣鲜香 · 牛肉软烂",
          "soulIngredient": "花溪宽粉、黄牛肉高汤、酸汤、酥肉或脆哨",
          "craftHighlight": "牛肉慢炖至软烂 / 宽粉烫软浇酸汤牛肉",
          "famousShop": "贵阳花溪牛肉粉总店 / 丝娃娃街",
          "description": "贵阳人的日常信仰。黄牛肉与牛骨慢炖出浓白汤底，兑入贵州特色酸汤，宽米粉烫软后浇汤，盖上大块软烂牛肉，可加酥肉、脆哨与辣椒，酸辣开胃、牛肉入口即化。",
          "coord": [
            106.6302,
            26.647
          ],
          "wiki": "花溪牛肉粉",
          "query": "贵阳 花溪牛肉粉 实拍",
          "photoUrl": "/photos/rn-guiyang-huaxi.jpg"
        },
        {
          "id": "rn-zunyi-yangroupfen",
          "title": "遵义虾子羊肉粉",
          "cityId": "zunyi",
          "cityName": "遵义",
          "province": "gz",
          "provinceLabel": "贵州省",
          "schoolOrStyle": "黔北羊肉粉圣地",
          "flavorProfile": "鲜膻适中 · 汤白粉滑",
          "soulIngredient": "遵义虾子镇羊肉、细圆粉、胡椒姜片",
          "craftHighlight": "山羊肉慢熬白汤 / 粉烫软浇羊肉片",
          "famousShop": "遵义虾子羊肉粉非遗店",
          "description": "遵义虾子镇以羊肉粉闻名全省。精选本地山羊肉慢熬成乳白汤底，胡椒与姜片去膻提香，细圆粉烫软后浇上薄切羊肉片，鲜香不膻、暖胃驱寒。",
          "coord": [
            106.9272,
            27.7255
          ],
          "wiki": "遵义羊肉粉",
          "query": "遵义 虾子羊肉粉 实拍",
          "photoUrl": "/photos/rn-zunyi-yangroupfen.jpg"
        },
        {
          "id": "rn-kaili-suantangfen",
          "title": "凯里红酸汤砂锅粉",
          "cityId": "kaili",
          "cityName": "凯里",
          "province": "gz",
          "provinceLabel": "贵州省",
          "schoolOrStyle": "苗家红酸汤入粉",
          "flavorProfile": "酸香浓郁 · 开胃消暑",
          "soulIngredient": "苗家番茄辣椒发酵红酸汤、米粉、鱼或牛肉",
          "craftHighlight": "红酸汤熬底 / 砂锅保温烫粉",
          "famousShop": "凯里苗家酸汤鱼粉馆",
          "description": "黔东南苗族以红酸汤为魂。番茄与红辣椒经自然发酵制成酸香浓郁的红酸汤，入砂锅熬开后烫粉，可配鱼片或牛肉，酸香扑鼻、开胃消暑，是苗侗山乡的味觉图腾。",
          "coord": [
            107.9775,
            26.5825
          ],
          "wiki": "凯里酸汤粉",
          "query": "凯里 酸汤粉 实拍",
          "photoUrl": "/photos/rn-kaili-suantangfen.jpg"
        },
        {
          "id": "rn-anshun-duoduofen",
          "title": "安顺夺夺粉",
          "cityId": "guiyang",
          "cityName": "安顺/贵阳",
          "province": "gz",
          "provinceLabel": "贵州省",
          "schoolOrStyle": "黔西特色宽粉",
          "flavorProfile": "软糯筋道 · 酸辣复合",
          "soulIngredient": "宽扁米粉、肉臊、酸菜辣椒",
          "craftHighlight": "宽粉烫软干拌或汤粉 / 酸辣肉臊浇头",
          "famousShop": "安顺夺夺粉老店",
          "description": "安顺独有的宽扁米粉，因粉条宽厚、口感「夺夺」有嚼劲而得名。可干拌可汤粉，配酸菜、辣椒与肉臊，酸辣鲜香，是黔西市井早餐的主角。",
          "coord": [
            105.9462,
            26.253
          ],
          "wiki": "夺夺粉",
          "query": "安顺 夺夺粉 实拍",
          "photoUrl": "/photos/rn-anshun-duoduofen.jpg"
        }
      ]
    },
    {
      "id": "xianggan-fen",
      "title": "湘赣重辣拌炒与汤粉",
      "subtitle": "常德津市牛肉粉、长沙码子粉、南昌拌粉瓦罐汤",
      "regionBadge": "湖南 · 江西",
      "description": "湘赣粉食重辣重香。常德津市牛肉粉以干挑粉与炖牛肉闻名；长沙米粉配各色码子；南昌人则是一早一晚拌粉配瓦罐汤，鲜辣开胃。",
      "items": [
        {
          "id": "rn-changde-jinshi",
          "title": "常德津市牛肉粉",
          "cityId": "changde",
          "cityName": "常德",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "湘北粉食之王",
          "flavorProfile": "干挑筋道 · 牛肉软烂",
          "soulIngredient": "津市干挑米粉、黄牛肉、酸萝卜辣椒",
          "craftHighlight": "干米粉复水煮至筋道 / 牛肉慢炖浇头可干挑可汤",
          "famousShop": "常德津市牛肉粉总店",
          "description": "常德人的骄傲。津市干挑米粉复水后仍保持极佳筋道，配慢炖至软烂的黄牛肉，可干挑（少汤重拌）或汤粉，酸萝卜与辣椒提味，鲜辣醇厚。",
          "coord": [
            111.6985,
            29.0315
          ],
          "wiki": "津市牛肉粉",
          "query": "常德 津市牛肉粉 实拍",
          "photoUrl": "/photos/rn-changde-jinshi.jpg"
        },
        {
          "id": "rn-changsha-maizifen",
          "title": "长沙肉丝码子米粉",
          "cityId": "changsha",
          "cityName": "长沙",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "星城早餐标配",
          "flavorProfile": "码子丰盛 · 辣香汤鲜",
          "soulIngredient": "圆米粉或扁粉、肉丝码子、酸豆角、辣椒",
          "craftHighlight": "各色码子现炒 / 粉烫软浇汤配码",
          "famousShop": "长沙火焰山米粉 / 肖薯记",
          "description": "长沙米粉讲究「码子」——肉丝、牛肉、肥肠、猪杂等浇头现炒现浇。粉烫软后浇上高汤与香辣码子，配酸豆角与剁椒，一碗下去全身发热。",
          "coord": [
            112.9822,
            28.1968
          ],
          "wiki": "长沙米粉",
          "query": "长沙 肉丝米粉 实拍",
          "photoUrl": "/photos/rn-changsha-maizifen.jpg"
        },
        {
          "id": "rn-hengyang-yufen",
          "title": "衡阳渣江鱼粉",
          "cityId": "hengyang",
          "cityName": "衡阳",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "湘南鱼粉代表",
          "flavorProfile": "鱼鲜汤醇 · 粉滑入味",
          "soulIngredient": "草鱼或鲢鱼片、米粉、酸菜辣椒",
          "craftHighlight": "鱼骨熬汤 / 鱼片滑熟盖粉",
          "famousShop": "衡阳渣江鱼粉老店",
          "description": "衡阳渣江鱼粉以鲜鱼高汤为魂，鱼片滑嫩，米粉吸满鱼鲜，配酸菜与辣椒，鲜辣开胃，是湘南市井早餐的常客。",
          "coord": [
            112.5715,
            26.8932
          ],
          "wiki": "衡阳鱼粉",
          "query": "衡阳 鱼粉 实拍",
          "photoUrl": "/photos/rn-hengyang-yufen.jpg"
        },
        {
          "id": "rn-nanchang-banfen",
          "title": "南昌拌粉配瓦罐汤",
          "cityId": "nanchang",
          "cityName": "南昌",
          "province": "jx",
          "provinceLabel": "江西省",
          "schoolOrStyle": "赣菜早餐双绝",
          "flavorProfile": "干拌入味 · 瓦罐汤鲜",
          "soulIngredient": "扁米粉、辣酱肉臊、瓦罐慢煨筒骨/脚爪汤",
          "craftHighlight": "粉烫软甩干拌辣酱肉臊 / 另配瓦罐煨汤",
          "famousShop": "南昌李渡拌粉 / 瓦罐汤老店",
          "description": "南昌人早餐标配：一碗干拌粉加一罐瓦罐汤。扁粉烫软甩干，拌入辣酱、肉臊、葱花；瓦罐汤则用筒骨、脚爪等文火慢煨数小时，汤白味鲜，解辣暖胃。",
          "coord": [
            115.8585,
            28.6832
          ],
          "wiki": "南昌拌粉",
          "query": "南昌 拌粉 瓦罐汤 实拍",
          "photoUrl": "/photos/rn-nanchang-banfen.jpg"
        },
        {
          "id": "rn-jiangxi-chaofen",
          "title": "江西猛火炒粉",
          "cityId": "nanchang",
          "cityName": "南昌/赣州",
          "province": "jx",
          "provinceLabel": "江西省",
          "schoolOrStyle": "赣式干炒粉",
          "flavorProfile": "锅气十足 · 蛋香肉嫩",
          "soulIngredient": "扁米粉、鸡蛋、肉丝、豆芽青椒",
          "craftHighlight": "猛火快炒出锅气 / 鸡蛋液裹粉",
          "famousShop": "南昌炒粉摊 / 赣州街头",
          "description": "江西炒粉讲究猛火与锅气。扁粉与鸡蛋液、肉丝、豆芽同炒，粉条根根分明、略带焦香，是夜宵与午餐的快手主角。",
          "coord": [
            115.8625,
            28.6895
          ],
          "wiki": "江西炒粉",
          "query": "江西 炒粉 实拍",
          "photoUrl": "/photos/rn-jiangxi-chaofen.jpg"
        },
        {
          "id": "rn-shangrao-tangfen",
          "title": "上饶铅山烫粉",
          "cityId": "jingdezhen",
          "cityName": "上饶/景德镇",
          "province": "jx",
          "provinceLabel": "江西省",
          "schoolOrStyle": "信江特色烫粉",
          "flavorProfile": "粉韧汤鲜 · 配料丰富",
          "soulIngredient": "铅山烫粉、肉片猪杂、青菜",
          "craftHighlight": "烫粉现烫现食 / 高汤浇制",
          "famousShop": "上饶铅山烫粉店",
          "description": "铅山烫粉粉质柔韧，在滚烫高汤中烫熟后配肉片、猪杂与青菜，汤鲜粉滑，是赣东北的特色早餐。",
          "coord": [
            117.9432,
            28.4485
          ],
          "wiki": "铅山烫粉",
          "query": "上饶 铅山烫粉 实拍",
          "photoUrl": "/photos/rn-shangrao-tangfen.jpg"
        },
        {
          "id": "rn-jingdezhen-lengfen",
          "title": "景德镇粗条冷粉",
          "cityId": "jingdezhen",
          "cityName": "景德镇",
          "province": "jx",
          "provinceLabel": "江西省",
          "schoolOrStyle": "瓷都消夏凉粉",
          "flavorProfile": "清凉爽滑 · 酸辣开胃",
          "soulIngredient": "粗条米凉粉、芝麻酱、辣椒油、醋蒜",
          "craftHighlight": "米浆凝固切粗条 / 干拌酸辣芝麻酱",
          "famousShop": "景德镇冷粉老摊",
          "description": "景德镇夏天消暑神器。米浆凝固后切成粗条，拌入芝麻酱、辣椒油、醋与蒜泥，清凉爽滑、酸辣开胃，街头巷尾随处可见。",
          "coord": [
            117.1785,
            29.2685
          ],
          "wiki": "景德镇冷粉",
          "query": "景德镇 冷粉 实拍",
          "photoUrl": "/photos/rn-jingdezhen-lengfen.jpg"
        }
      ]
    },
    {
      "id": "lingnan-qiong-fen",
      "title": "岭南粿条肠粉与琼岛粉食",
      "subtitle": "布拉肠粉、干炒牛河、潮汕牛肉粿条与海南抱罗粉",
      "regionBadge": "广东 · 海南 · 台湾",
      "description": "岭南粉食精细多元：广州布拉肠粉与干炒牛河享誉全球；潮汕牛肉粿条追求本鲜；海南抱罗粉、陵水酸粉与台湾新竹米粉各具岛韵。",
      "items": [
        {
          "id": "rn-guangzhou-changfen",
          "title": "广州布拉肠粉",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "广府早茶粉食之魂",
          "flavorProfile": "薄如蝉翼 · 酱香浓郁",
          "soulIngredient": "粘米粉浆、虾仁/猪肉/牛肉、甜酱油芝麻酱",
          "craftHighlight": "米浆蒸成薄皮卷馅 / 淋甜酱油",
          "famousShop": "广州南信牛奶 / 银记肠粉",
          "description": "广府早茶必备。米浆在布上蒸成近乎透明的薄皮，卷入鲜虾仁或猪肉，淋上甜酱油与芝麻酱，入口即化、酱香浓郁。",
          "coord": [
            113.2595,
            23.1185
          ],
          "wiki": "肠粉",
          "query": "广州 布拉肠粉 实拍",
          "photoUrl": "/photos/rn-guangzhou-changfen.jpg"
        },
        {
          "id": "rn-guangzhou-ganchao-niuhe",
          "title": "干炒牛河",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "粤式炒粉巅峰",
          "flavorProfile": "锅气焦香 · 河粉滑嫩",
          "soulIngredient": "宽河粉、牛里脊、芽菜、酱油",
          "craftHighlight": "猛火滑蛋炒河粉 / 牛肉嫩滑焦香",
          "famousShop": "广州陈添记 / 港式茶餐厅",
          "description": "粤菜炒粉代表作。宽河粉与嫩滑牛里脊猛火快炒，部分河粉边缘焦香，芽菜清脆，酱油香气弥漫，讲究「有锅气、粉不碎」。",
          "coord": [
            113.2645,
            23.1295
          ],
          "wiki": "干炒牛河",
          "query": "广州 干炒牛河 实拍",
          "photoUrl": "/photos/rn-guangzhou-ganchao-niuhe.jpg"
        },
        {
          "id": "rn-shantou-niurou-guotiao",
          "title": "潮汕鲜切牛肉粿条",
          "cityId": "shantou",
          "cityName": "汕头",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "潮汕本鲜粉食",
          "flavorProfile": "牛肉鲜甜 · 汤清粉滑",
          "soulIngredient": "潮汕粿条、鲜切黄牛肉、潮汕牛肉丸、沙茶酱",
          "craftHighlight": "牛肉现切现烫 / 粿条配清汤或沙茶",
          "famousShop": "汕头牛肉火锅配粿条 / 八合里",
          "description": "潮汕人吃牛肉火锅必配粿条。鲜切黄牛肉七上八下烫至刚好，粿条吸满清甜牛骨汤，可蘸沙茶酱，本鲜至极。",
          "coord": [
            116.6825,
            23.3545
          ],
          "wiki": "牛肉粿条",
          "query": "潮汕 牛肉粿条 实拍",
          "photoUrl": "/photos/rn-shantou-niurou-guotiao.jpg"
        },
        {
          "id": "rn-haikou-hainanfen",
          "title": "海口海南粉",
          "cityId": "haikou",
          "cityName": "海口",
          "province": "hi",
          "provinceLabel": "海南省",
          "schoolOrStyle": "琼北特色凉拌粉",
          "flavorProfile": "酸甜鲜香 · 配料丰富",
          "soulIngredient": "海南粉、鱼汤或干拌、花生碎肉燥酸菜",
          "craftHighlight": "干粉复水 / 鱼汤或凉拌多配料",
          "famousShop": "海口骑楼老街海南粉店",
          "description": "海南粉可汤可拌，配肉燥、花生碎、酸菜、虾米等丰富浇头，酸甜鲜香，是海口骑楼老街与老爸茶的经典搭档。",
          "coord": [
            110.3485,
            20.0185
          ],
          "wiki": "海南粉",
          "query": "海口 海南粉 实拍",
          "photoUrl": "/photos/rn-haikou-hainanfen.jpg"
        },
        {
          "id": "rn-wenchang-baoluofen",
          "title": "文昌抱罗粉",
          "cityId": "haikou",
          "cityName": "文昌",
          "province": "hi",
          "provinceLabel": "海南省",
          "schoolOrStyle": "琼北浓汤粉代表",
          "flavorProfile": "汤浓味厚 · 配料丰盛",
          "soulIngredient": "抱罗粉、猪骨高汤、肉片猪杂花生",
          "craftHighlight": "浓白骨汤 / 粉软滑配丰富浇头",
          "famousShop": "文昌抱罗粉非遗店",
          "description": "文昌抱罗镇出名粉。猪骨熬出浓白汤，粉条软滑，配肉片、猪杂、花生与青菜，汤浓味厚，是海南人从小吃到大的家乡味。",
          "coord": [
            110.7245,
            19.6125
          ],
          "wiki": "抱罗粉",
          "query": "文昌 抱罗粉 实拍",
          "photoUrl": "/photos/rn-wenchang-baoluofen.jpg"
        },
        {
          "id": "rn-lingshui-suanfen",
          "title": "陵水酸粉",
          "cityId": "sanya",
          "cityName": "陵水/三亚",
          "province": "hi",
          "provinceLabel": "海南省",
          "schoolOrStyle": "琼南酸香名粉",
          "flavorProfile": "酸辣开胃 · 配料多样",
          "soulIngredient": "陵水酸粉、酸汤、肉片花生炸豆干",
          "craftHighlight": "酸汤烫粉 / 丰富配料干拌亦可",
          "famousShop": "陵水酸粉一条街",
          "description": "陵水酸粉以独特酸香著称，汤粉或干拌皆宜，配肉片、花生、炸豆干等，酸辣开胃，是琼南市井与旅游区的人气小吃。",
          "coord": [
            110.0375,
            18.5055
          ],
          "wiki": "陵水酸粉",
          "query": "陵水 酸粉 实拍",
          "photoUrl": "/photos/rn-lingshui-suanfen.jpg"
        },
        {
          "id": "rn-taiwan-xinzhu-mifen",
          "title": "台湾新竹炒米粉",
          "cityId": "taipei",
          "cityName": "新竹/台北",
          "province": "tw",
          "provinceLabel": "台湾省",
          "schoolOrStyle": "宝岛干炒米粉经典",
          "flavorProfile": "米香浓郁 · 虾米香菇提鲜",
          "soulIngredient": "新竹米粉、虾米、香菇、猪肉丝",
          "craftHighlight": "米粉干炒吸味 / 虾米香菇爆香",
          "famousShop": "新竹米粉老店 / 台北夜市",
          "description": "新竹因风力强适于晾晒米粉而闻名。干米粉与虾米、香菇、猪肉丝同炒，米香浓郁、配料鲜香，是台湾办桌与家常的经典。",
          "coord": [
            121.0185,
            24.8055
          ],
          "wiki": "新竹米粉",
          "query": "台湾 新竹炒米粉 实拍",
          "photoUrl": "/photos/rn-taiwan-xinzhu-mifen.jpg"
        }
      ]
    },
    {
      "id": "bashu-min-fen",
      "title": "巴蜀与闽台米粉谱系",
      "subtitle": "绵阳米粉、南充羊肉粉、兴化炒米粉与福州锅边糊",
      "regionBadge": "四川 · 福建",
      "description": "川渝米粉以绵阳、南充为代表，红汤清汤皆宜；福建兴化炒米粉与福州锅边糊则展现了闽地稻米淀粉的另一种形态。",
      "items": [
        {
          "id": "rn-mianyang-mifen",
          "title": "绵阳米粉",
          "cityId": "mianyang",
          "cityName": "绵阳",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川西北米粉之乡",
          "flavorProfile": "红汤麻辣 · 清汤鲜香",
          "soulIngredient": "绵阳米粉、红油或清汤、肉臊豌豆",
          "craftHighlight": "粉细软滑 / 红汤清汤双吃",
          "famousShop": "绵阳岳记米粉 / 魏城米粉",
          "description": "绵阳人一天三顿可吃粉。红汤版麻辣鲜香配肉臊豌豆，清汤版则鲜香清淡，粉质细软，是川西北的城市名片。",
          "coord": [
            104.6795,
            31.4675
          ],
          "wiki": "绵阳米粉",
          "query": "绵阳 米粉 实拍",
          "photoUrl": "/photos/rn-mianyang-mifen.jpg"
        },
        {
          "id": "rn-nanchong-yangroupfen",
          "title": "南充羊肉粉",
          "cityId": "mianyang",
          "cityName": "南充/绵阳",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川东北羊肉粉",
          "flavorProfile": "鲜香不膻 · 胡椒暖胃",
          "soulIngredient": "南充羊肉、米粉、胡椒生姜",
          "craftHighlight": "羊肉熬汤 / 粉浇羊肉片",
          "famousShop": "南充羊肉粉老店",
          "description": "南充羊肉粉以胡椒提香去膻，汤白肉嫩，冬日暖胃，是川东北的特色名粉。",
          "coord": [
            106.0825,
            30.7955
          ],
          "wiki": "南充羊肉粉",
          "query": "南充 羊肉粉 实拍",
          "photoUrl": "/photos/rn-nanchong-yangroupfen.jpg"
        },
        {
          "id": "rn-fujian-xinghua",
          "title": "福建兴化炒米粉",
          "cityId": "putian",
          "cityName": "莆田",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "兴化平原特色炒粉",
          "flavorProfile": "米香干爽 · 海鲜提鲜",
          "soulIngredient": "兴化米粉、海鲜或肉丝、菜码",
          "craftHighlight": "米粉干炒 / 海鲜爆香",
          "famousShop": "莆田兴化米粉店",
          "description": "莆田兴化米粉适合炒制，配海鲜或肉丝猛火快炒，米香干爽、配料鲜美，是闽中家常与宴席的常见角色。",
          "coord": [
            119.0075,
            25.4315
          ],
          "wiki": "兴化米粉",
          "query": "莆田 兴化炒米粉 实拍",
          "photoUrl": "/photos/rn-fujian-xinghua.jpg"
        },
        {
          "id": "rn-fuzhou-guobianhu",
          "title": "福州锅边糊",
          "cityId": "fuzhou",
          "cityName": "福州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "闽都传统米浆小吃",
          "flavorProfile": "米浆成片 · 汤鲜配料丰",
          "soulIngredient": "大米浆、紫菜虾米海蛎、葱花",
          "craftHighlight": "米浆淋锅边烫熟成片 / 配海鲜高汤",
          "famousShop": "福州锅边糊老店 / 三坊七巷",
          "description": "福州经典小吃。米浆淋在热锅边烫熟成薄片刮入海鲜高汤中，配紫菜、虾米、海蛎，米香与海鲜交融，是闽都早餐的温暖记忆。",
          "coord": [
            119.2965,
            26.0745
          ],
          "wiki": "锅边糊",
          "query": "福州 锅边糊 实拍",
          "photoUrl": "/photos/rn-fuzhou-guobianhu.jpg"
        }
      ]
    }
  ]
};
