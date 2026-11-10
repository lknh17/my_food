import type { SpecialTopicPack } from "../types";

export const noodlesCompendiumPack: SpecialTopicPack = {
  "id": "noodles-compendium",
  "index": "专题二",
  "title": "中华面全集 · 北麦南面九州筋骨",
  "kicker": "COMPENDIUM OF CHINESE NOODLES",
  "subtitle": "从西北蓬灰拉面、秦晋刀削扯面、巴蜀麻辣小面到江南精致苏式汤面的全谱系考据",
  "lede": "一部中国面食史，就是半部华夏农业与人口迁徙史。秦岭—淮河以北的黄土高原与华北平原冬麦夏熟，关中人将面团扯成宽如裤带的油泼Biangbiang面，山西人用弧形刀削出柳叶飞刀，兰州人借蓬草灰将面拉出毛细与二细；而衣冠南渡后，麦面在巴蜀与花椒红油碰撞出宜宾燃面与重庆小面，在江南水乡则化作吊汤考究、浇头逾百种的苏式奥灶面与杭州片儿川，在闽粤更演变为鸭蛋竹升面与沙茶海味面。",
  "metrics": [
    {
      "label": "收录面食流派",
      "value": "5 大谱系 · 25 碗名面",
      "note": "拉、扯、削、切、压、竹升全技法"
    },
    {
      "label": "制面核心技艺",
      "value": "蓬灰溜条 / 柳叶飞刀 / 竹竿压面",
      "note": "面团筋度与碱水配比之科学"
    },
    {
      "label": "汤头与浇头双翼",
      "value": "红油干拌 vs 老鸡吊清汤",
      "note": "南北风味截然不同的味觉美学"
    },
    {
      "label": "覆盖代表名城",
      "value": "20+ 座吃面圣地",
      "note": "从清晨头汤面到深夜面摊"
    }
  ],
  "subGroups": [
    {
      "id": "northwest-pulled-ripped",
      "title": "西北拉面与关中扯面系",
      "subtitle": "河西走廊蓬灰拉面与八百里秦川滚油泼辣子",
      "regionBadge": "甘肃 · 陕西 · 新疆",
      "description": "西北优质硬质冬小麦蛋白质含量极高，配合戈壁蓬灰或手工揉揣，赋予面条无与伦比的筋道弹性。无论是清亮见底的牛骨高汤还是滚油激香的秦椒面，皆荡气回肠。",
      "items": [
        {
          "id": "nc-lanzhou-beef-noodles",
          "title": "兰州清汤牛肉面",
          "cityId": "lanzhou",
          "cityName": "兰州",
          "province": "gs",
          "provinceLabel": "甘肃省",
          "schoolOrStyle": "陇上拉面之王",
          "flavorProfile": "汤清味醇 · 香辣筋道",
          "soulIngredient": "甘南牦牛肉汤、永登硬质高筋麦粉、蓬灰、甘谷油泼辣子",
          "craftHighlight": "七拉八扯现拉现煮 / 一清二白三红四绿五黄",
          "famousShop": "兰州马子禄牛肉面 / 磨沟沿老字号牛肉面",
          "description": "创于清嘉庆年间陈维精，经回族名师马保子发扬光大。牛骨牛肉配二十余味香料熬出清澈高汤，手工溜条拉出毛细、二细、韭叶、大宽等八种面型，点缀白萝卜片、蒜苗香菜与一勺滚油辣子。",
          "coord": [
            103.8236,
            36.0581
          ],
          "wiki": "兰州牛肉面",
          "query": "兰州 清汤牛肉面 实拍",
          "photoUrl": "/photos/nc-lanzhou-beef-noodles.jpg"
        },
        {
          "id": "nc-xian-biangbiang",
          "title": "陕西油泼Biangbiang扯面",
          "cityId": "xian",
          "cityName": "西安",
          "province": "sn",
          "provinceLabel": "陕西省",
          "schoolOrStyle": "关中八大怪首席",
          "flavorProfile": "焦香酸辣 · 宽厚筋韧",
          "soulIngredient": "关中冬小麦粉、秦椒粗细双椒面、大蒜末、陈醋",
          "craftHighlight": "手工摔打扯成裤带宽面 / 菜籽滚油直泼秦椒蒜末",
          "famousShop": "西安爱骅裤带面 / 柳巷面",
          "description": "因制面时面条摔打案板发出「BiangBiang」声得名。两指宽的手工扯面沸水煮熟捞入大老碗，豆芽青菜垫底，面顶堆满大蒜末、葱花与秦椒面，一勺两百度的菜籽热油当头浇下，香闻十里。",
          "coord": [
            108.9402,
            34.2658
          ],
          "wiki": "𰻝𰻝面",
          "query": "西安 油泼Biangbiang面 实拍",
          "photoUrl": "/photos/nc-xian-biangbiang.jpg"
        },
        {
          "id": "nc-qishan-saozi",
          "title": "岐山一口香臊子面",
          "cityId": "baoji",
          "cityName": "宝鸡",
          "province": "sn",
          "provinceLabel": "陕西省",
          "schoolOrStyle": "西府周礼非遗名面",
          "flavorProfile": "酸辣鲜香 · 煎稀汪三绝",
          "soulIngredient": "岐山粮食醋、五花肉酸汤臊子、木耳黄花鸡蛋皮",
          "craftHighlight": "大铁锅擀薄切细 / 只吃面不喝汤の一口香",
          "famousShop": "宝鸡岐山周公庙老字号臊子面馆",
          "description": "源起周文王故里岐山的三千年礼仪面食。讲究「薄、筋、光、煎、稀、汪、酸、辣、香」九字诀，红肉臊子配木耳、胡萝卜、黄花菜、豆腐丁、摊蛋皮成五色，小碗盛一箸面浇滚烫酸汤。",
          "coord": [
            107.6252,
            34.4428
          ],
          "wiki": "岐山臊子面",
          "query": "陕西 岐山臊子面 实拍",
          "photoUrl": "/photos/nc-qishan-saozi.jpg"
        },
        {
          "id": "nc-urumqi-latiaozi",
          "title": "新疆过油肉拉条子",
          "cityId": "urumqi",
          "cityName": "乌鲁木齐",
          "province": "xj",
          "provinceLabel": "新疆维吾尔自治区",
          "schoolOrStyle": "天山北坡拌面之冠",
          "flavorProfile": "蒜香浓郁 · 滑嫩筋道",
          "soulIngredient": "奇台高筋麦粉、天山羔羊后腿肉、皮牙子、螺丝青红椒",
          "craftHighlight": "盐水和面抹油盘条手拉 / 猛火过油肉盖浇",
          "famousShop": "乌鲁木齐托克逊老字号拌面王",
          "description": "新疆人一日三餐离不开的硬核拌面。面团以淡盐水揉透抹菜籽油盘成螺旋醒发，手拉成圆润筋道的拉条子；羊肉片上浆过油后配皮牙子（洋葱）、西红柿、青红椒猛火快炒，红亮汤汁裹满面条。",
          "coord": [
            87.6168,
            43.8256
          ],
          "wiki": "拉条子",
          "query": "新疆 过油肉拌面 拉条子 实拍",
          "photoUrl": "/photos/nc-urumqi-latiaozi.jpg"
        },
        {
          "id": "nc-dunhuang-lvrou-huangmian",
          "title": "敦煌莫高驴肉黄面",
          "cityId": "lanzhou",
          "cityName": "敦煌/兰州",
          "province": "gs",
          "provinceLabel": "甘肃省",
          "schoolOrStyle": "河西走廊丝路奇面",
          "flavorProfile": "面细如龙须 · 卤香醇厚",
          "soulIngredient": "沙漠胡杨碱灰黄面、五香酱驴肉丁、香菇水豆腐臊子",
          "craftHighlight": "百斤面团双人凌空甩拉 / 酱驴肉切盘佐香菇面卤",
          "famousShop": "敦煌达记酱驴肉黄面馆 / 顺张黄面馆",
          "description": "莫高窟壁画中记载的千年丝路面食。在小麦粉中揉入沙漠蓬草碱水，经拉面师凌空晃荡甩拉成金黄透亮、柔韧耐煮的细黄面，浇上浓稠香菇豆腐肉末卤，再切一盘五香酱驴肉同食。",
          "coord": [
            94.6618,
            40.1421
          ],
          "wiki": "驴肉黄面",
          "query": "敦煌 驴肉黄面 实拍",
          "photoUrl": "/photos/nc-dunhuang-lvrou-huangmian.jpg"
        }
      ]
    },
    {
      "id": "shanxi-central-north-wheat",
      "title": "三晋中原与京鲁麦作系",
      "subtitle": "世界面食之根山西百面、河南烩面与老北京炸酱面",
      "regionBadge": "山西 · 河南 · 北京 · 山东",
      "description": "「世界面食在中国，中国面食在山西」。三晋大地杂粮与小麦并茂，刀削、剔尖、猫耳朵、莜面栲栳栳技艺登峰造极；河南羊肉烩面、老北京炸酱面与胶东海鲜面各领风骚。",
      "items": [
        {
          "id": "nc-datong-daoxiaomian",
          "title": "大同传统猪肉卤刀削面",
          "cityId": "datong",
          "cityName": "大同",
          "province": "sx",
          "provinceLabel": "山西省",
          "schoolOrStyle": "中国五大名面之首",
          "flavorProfile": "外滑内筋 · 柳叶棱锋",
          "soulIngredient": "塞北硬麦粉、熟五花肉臊子老卤、大同镇川太阳醋",
          "craftHighlight": "一手托面一手弧刀飞削入沸水 / 配卤蛋卤豆腐干",
          "famousShop": "大同东方削面 / 老柴削面",
          "description": "刀削面全凭刀功：面团揉至硬挺，厨师左手托瓦形面团，右手持特制弧形削面刀，手腕灵动间面叶如流星赶月飞入沸锅，条条呈三棱柳叶形，中厚边薄，浇陈年肉臊卤汁并加鸡蛋豆干丸子。",
          "coord": [
            113.3001,
            40.0768
          ],
          "wiki": "刀削面",
          "query": "山西 大同刀削面 实拍",
          "photoUrl": "/photos/nc-datong-daoxiaomian.jpg"
        },
        {
          "id": "nc-taiyuan-kaolaolao",
          "title": "山西高寒莜面栲栳栳",
          "cityId": "taiyuan",
          "cityName": "太原",
          "province": "sx",
          "provinceLabel": "山西省",
          "schoolOrStyle": "三晋粗粮面艺巅峰",
          "flavorProfile": "麦香醇厚 · 蜂窝筋韧",
          "soulIngredient": "晋北高寒裸燕麦（莜麦）粉、羊肉蘑菇臊子汤或老陈醋汤",
          "craftHighlight": "沸水烫面大理石板上推卷成圆筒蜂窝状入笼蒸熟",
          "famousShop": "太原山西会馆 / 老太原菜馆",
          "description": "山西人待客最高礼遇的杂粮艺术。将炒熟磨细的莜麦面以滚沸开水烫揉，在光滑石板上用掌根一推、食指一卷成圆筒状，整齐竖立于笼屉内形似蜂巢，旺火蒸熟后蘸浓香羊肉台蘑汤食用。",
          "coord": [
            112.5489,
            37.8706
          ],
          "wiki": "莜面栲栳栳",
          "query": "山西 莜面栲栳栳 实拍",
          "photoUrl": "/photos/nc-taiyuan-kaolaolao.jpg"
        },
        {
          "id": "nc-zhengzhou-huimian",
          "title": "郑州老式羊肉滋补烩面",
          "cityId": "zhengzhou",
          "cityName": "郑州",
          "province": "ha",
          "provinceLabel": "河南省",
          "schoolOrStyle": "中原第一名面",
          "flavorProfile": "汤白如乳 · 面宽筋软",
          "soulIngredient": "豫东小山羊肉与羊骨、粉条千张丝鹌鹑蛋、高筋烩面坯",
          "craftHighlight": "羊骨劈碎熬煮五小时成白汤 / 巴掌面坯手拉入滚汤同烩",
          "famousShop": "郑州合记烩面（人民路总店） / 萧记三鲜烩面",
          "description": "荤、素、汤、菜、饭聚而有之的中原饮食图腾。山羊肉与羊棒骨大火翻滚熬出浓白似奶的骨汤，将抹香油醒好的巴掌大面坯双手拉成宽长面片下入羊汤，同海带丝、千张丝、粉条、羊肉块同烩。",
          "coord": [
            113.6654,
            34.7579
          ],
          "wiki": "烩面",
          "query": "河南 郑州羊肉烩面 实拍",
          "photoUrl": "/photos/nc-zhengzhou-huimian.jpg"
        },
        {
          "id": "nc-beijing-zhajiangmian",
          "title": "老北京小碗干炸酱面",
          "cityId": "beijing",
          "cityName": "北京",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "京华胡同第一面食",
          "flavorProfile": "酱香浓郁 · 八碟菜码爽脆",
          "soulIngredient": "六必居干黄酱与甜面酱、肥瘦五花肉丁、手擀锅挑切面",
          "craftHighlight": "小碗慢火熬干炸酱 / 配黄瓜丝心里美豆芽八样菜码",
          "famousShop": "北京方砖厂69号炸酱面 / 海碗居",
          "description": "地道京味灵魂在于「小碗干炸」与「八碟菜码」。五花肉切骰子丁，兑六必居干黄酱与天源甜面酱小火慢咕嘟四十分钟至油脂与酱完全融合，浇在锅挑或过水手擀面上，拌入八色时令鲜菜。",
          "coord": [
            116.4042,
            39.9368
          ],
          "wiki": "炸酱面",
          "query": "老北京 炸酱面 实拍",
          "photoUrl": "/photos/nc-beijing-zhajiangmian.jpg"
        },
        {
          "id": "nc-yantai-penglai-xiaomian",
          "title": "胶东蓬莱摔杆海鲜小面",
          "cityId": "qingdao",
          "cityName": "烟台/青岛",
          "province": "sd",
          "provinceLabel": "山东省",
          "schoolOrStyle": "中国拉面鼻祖胶东海味",
          "flavorProfile": "鱼卤鲜稠 · 面细如银丝",
          "soulIngredient": "渤海真鲷（加吉鱼）骨汤、海蛎子扇贝丁、绿豆淀粉木耳卤",
          "craftHighlight": "手工摔打抻出128根银丝面 / 加吉鱼熬汤勾海鲜玻璃卤",
          "famousShop": "蓬莱建兴饭店 / 烟台福山大面老店",
          "description": "胶东福山大面与蓬莱小面实为中国拉面源头之一。每日凌晨用新鲜加吉鱼慢熬鱼汤，加入海蛎子、扇贝丁、木耳、鸡蛋花勾成浓鲜玻璃卤，浇在一碗摔打拉制、细若发丝却筋道的面条上。",
          "coord": [
            120.7588,
            37.8105
          ],
          "wiki": "蓬莱小面",
          "query": "山东 蓬莱小面 实拍",
          "photoUrl": "/photos/nc-yantai-penglai-xiaomian.jpg"
        }
      ]
    },
    {
      "id": "bashu-spicy-noodles",
      "title": "巴蜀麻辣小面与燃面系",
      "subtitle": "百味调料碗底先行 · 芽菜、花生、油辣子与汉源花椒的狂欢",
      "regionBadge": "重庆 · 四川",
      "description": "巴蜀面食的灵魂在碗底十余种复合佐料：宜宾燃面重油无水、点火即燃；重庆小面碱水面筋道、油辣子与麻酱交融；成都担担面与甜水面则在麻辣甜咸间游刃有余。",
      "items": [
        {
          "id": "nc-chongqing-xiaomian",
          "title": "重庆豌杂红油小面",
          "cityId": "chongqing",
          "cityName": "重庆",
          "province": "cq",
          "provinceLabel": "重庆市",
          "schoolOrStyle": "山城清晨第一信仰",
          "flavorProfile": "麻辣浓醇 · 豌豆绵沙",
          "soulIngredient": "潮湿高筋水面、软糯黄豌豆、猪油炸酱肉臊、石柱红油辣子",
          "craftHighlight": "十四种佐料碗底打调 / 二两水面断生挑起裹满豌杂",
          "famousShop": "重庆花市豌杂面 / 胖妹面庄",
          "description": "重庆人宁可三日无肉不可一日无小面。碗底精准调入猪油、蒜水、姜水、芝麻酱、花椒面与糊辣壳油辣子，下入煮至刚刚断生的潮水面，盖上一勺慢炖至起沙的黄豌豆与醇厚杂酱。",
          "coord": [
            106.5768,
            29.5579
          ],
          "wiki": "重庆小面",
          "query": "重庆 豌杂小面 实拍",
          "photoUrl": "/photos/nc-chongqing-xiaomian.jpg"
        },
        {
          "id": "nc-yibin-ranmian",
          "title": "宜宾叙府芽菜燃面",
          "cityId": "yibin",
          "cityName": "宜宾",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川南干拌面至尊",
          "flavorProfile": "重油无水 · 松散红亮",
          "soulIngredient": "宜宾碎米芽菜、烘烤花生碎、核桃碎、小磨麻油、油辣子",
          "craftHighlight": "水面煮熟甩干水分 / 重红油与叙府芽菜花生碎热拌",
          "famousShop": "宜宾陆二倩燃面 / 宜宾燃面非遗总店",
          "description": "因条条裹满红油、不带一滴汤水、点火即燃而得名。面条煮至八分熟后猛力甩干水汽，趁热淋入熟菜籽油与小磨香油，撒上国家级非遗宜宾碎米芽菜、现舂花生碎与辣椒油拌匀，干香暴烈。",
          "coord": [
            104.6432,
            28.7518
          ],
          "wiki": "宜宾燃面",
          "query": "宜宾 燃面 实拍",
          "photoUrl": "/photos/nc-yibin-ranmian.jpg"
        },
        {
          "id": "nc-chengdu-dandanmian",
          "title": "成都铜锅担担面",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川味名小吃头牌",
          "flavorProfile": "咸鲜微酸 · 麻辣酥香",
          "soulIngredient": "细薄鸡蛋面、宜宾芽菜炒猪肉脆臊、保宁醋、红油",
          "craftHighlight": "挑担铜锅煮细面 / 芽菜酥肉臊配红油陈醋干拌",
          "famousShop": "成都小名堂担担甜水面 / 钟水饺总店",
          "description": "源于自贡挑夫陈包包挑担沿街叫卖，后在成都定型。用极细的鸡蛋碱面煮熟盛入小碗，碗底放红酱油、保宁醋、蒜泥、红油与花椒面，面顶舀一勺干煸至酥脆流油的宜宾芽菜猪肉末。",
          "coord": [
            104.064,
            30.659
          ],
          "wiki": "担担面",
          "query": "成都 担担面 实拍",
          "photoUrl": "/photos/nc-chengdu-dandanmian.jpg"
        },
        {
          "id": "nc-chengdu-tianshuimian",
          "title": "成都文殊院棍棍甜水面",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "蓉城甜辣粗面怪杰",
          "flavorProfile": "甜辣交织 · 蒜香劲道",
          "soulIngredient": "筷子粗手工面条、八角红糖复制酱油、芝麻酱、花生碎",
          "craftHighlight": "粗面冷晾劲道 / 浓稠复制甜酱油配重蒜泥油辣子",
          "famousShop": "成都洞子口张老二凉粉 / 甘记肥肠粉",
          "description": "成都面食中唯一的粗犷派代表。手工揉搓出如小指般粗壮的面条，煮熟吹凉后极具嚼劲；灵魂在于用红糖、黄糖、八角、三奈慢熬出的浓稠复制甜酱油，混合蒜泥、芝麻酱与油辣子，先甜后辣。",
          "coord": [
            104.0725,
            30.6752
          ],
          "wiki": "甜水面",
          "query": "成都 甜水面 实拍",
          "photoUrl": "/photos/nc-chengdu-tianshuimian.jpg"
        },
        {
          "id": "nc-neijiang-niuroumian",
          "title": "内江红烧牛肉面",
          "cityId": "zigong",
          "cityName": "内江/自贡",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "张大千一生魂牵梦绕之面",
          "flavorProfile": "汤红油亮 · 牛肉耙糯",
          "soulIngredient": "极细手工鸡蛋银丝面、牛腩牛筋红汤臊子、熟油海椒、水叶子青菜",
          "craftHighlight": "牛骨原汤兑熟油辣子 / 细面一烫即起配大块耙牛肉",
          "famousShop": "内江华华绿豆面 / 老街牛肉面",
          "description": "国画大师张大千旅居海外时仍重金延请川厨复刻的家乡面。面条细薄滑爽，汤底用牛骨高汤兑入内江秘制熟油海椒，红亮滚烫，大块带筋黄牛肉焖至软烂化渣，配几叶脆嫩水白菜。",
          "coord": [
            105.0584,
            29.5802
          ],
          "wiki": "内江牛肉面",
          "query": "四川 内江牛肉面 实拍",
          "photoUrl": "/photos/nc-neijiang-niuroumian.jpg"
        }
      ]
    },
    {
      "id": "jiangnan-soup-scallion",
      "title": "江南吊汤与苏沪精致浇头系",
      "subtitle": "清晨五点的头汤面 · 鲫鱼鳝骨吊汤、观音头鲫鱼背与百种时令浇头",
      "regionBadge": "江苏 · 浙江 · 上海",
      "description": "江南吃面如品茶：汤底须用猪骨、老鸡、鳝骨、螺蛳文火吊清，下面讲究「宽汤、硬面、重青」，碗中面条折出整齐的「观音头、鲫鱼背」，时令浇头随四季流转。",
      "items": [
        {
          "id": "nc-suzhou-fengzhen-darou",
          "title": "苏州枫镇白汤大肉面",
          "cityId": "suzhou",
          "cityName": "苏州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "苏式夏令第一名面",
          "flavorProfile": "酒香清冽 · 焖肉即化",
          "soulIngredient": "太湖黑猪五花焖肉、黄鳝骨螺蛳清汤、绍兴酒酿糟卤",
          "craftHighlight": "鸡肉鳝骨螺蛳吊白汤点酒酿 / 五花白焖肉冰镇凝脂",
          "famousShop": "苏州同得兴精品面馆 / 裕兴记",
          "description": "被称为「最难做、最精细、最时令」的苏式汤面，仅在夏秋供应。汤底用肉骨、黄鳝骨、螺蛳同熬并点入冬酿酒糟，清澈见底而酒香扑鼻；那块洁白焖肉肥而不腻，浸入热汤瞬间油脂化入面中。",
          "coord": [
            120.6312,
            31.3015
          ],
          "wiki": "枫镇大肉面",
          "query": "苏州 枫镇大肉面 实拍",
          "photoUrl": "/photos/nc-suzhou-fengzhen-darou.jpg"
        },
        {
          "id": "nc-kunshan-aozaomian",
          "title": "昆山红油爆鱼奥灶面",
          "cityId": "suzhou",
          "cityName": "昆山/苏州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "中国十大名面 · 江南红汤代表",
          "flavorProfile": "汤红味鲜 · 爆鱼酥脆",
          "soulIngredient": "青鱼尾、老鸭猪骨五味红汤、昆山龙须细白面",
          "craftHighlight": "青鱼洗净下滚油炸脆浸甜咸卤 / 鸭骨鱼鳞熬制原汤",
          "famousShop": "昆山奥灶馆（亭林路总店）",
          "description": "讲究「三烫」（面烫、汤烫、碗烫）。用青鱼鳞、腮、肉骨、老鸭同熬成醇厚红油高汤，细白面条捞成紧实的鲫鱼背，盖上现炸浸汁的五香熏爆鱼与白切卤鸭双浇头，寒冬食之通体舒泰。",
          "coord": [
            120.9585,
            31.3852
          ],
          "wiki": "奥灶面",
          "query": "苏州 昆山奥灶面 实拍",
          "photoUrl": "/photos/nc-kunshan-aozaomian.jpg"
        },
        {
          "id": "nc-zhenjiang-guogaimian",
          "title": "镇江大锅小锅盖浇头面",
          "cityId": "yangzhou",
          "cityName": "镇江/扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "江南奇面 · 杉木小锅盖浮压大锅",
          "flavorProfile": "面条筋弹 · 酱油虾籽醇香",
          "soulIngredient": "跳面（竹杠压面）、镇江恒顺香醋、长江虾籽熬制百味酱油",
          "craftHighlight": "大铁锅沸水内漂小杉木锅盖压泡 / 浇熬制虾籽酱油与肴肉長鱼",
          "famousShop": "镇江邵顺兴锅盖面 / 老赵面馆",
          "description": "乾隆年间流传至今的江南奇景：大铁锅滚水中漂浮着一只小杉木锅盖，使面条在锅盖下翻滚受热均匀、汤沸而不溢，煮出的跳面既透心又带韧劲，秘制虾籽酱油汤底鲜甜咸香。",
          "coord": [
            119.4522,
            32.2045
          ],
          "wiki": "锅盖面",
          "query": "镇江 锅盖面 实拍",
          "photoUrl": "/photos/nc-zhenjiang-guogaimian.jpg"
        },
        {
          "id": "nc-hangzhou-pianerchuan",
          "title": "杭州冬笋雪菜片儿川",
          "cityId": "hangzhou",
          "cityName": "杭州",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "杭帮面馆镇店之宝",
          "flavorProfile": "笋鲜菜醇 · 倒笃菜提魂",
          "soulIngredient": "天目山冬笋片、杭州老坛倒笃菜（雪里蕻）、猪里脊肉片",
          "craftHighlight": "生肉片冬笋倒笃菜生炒出锅气 / 冲高汤下碱水潮面同煮",
          "famousShop": "杭州菊英面馆 / 奎元馆",
          "description": "相传源于南宋科举书生「片儿川」典故。精髓在于杭州农家塞在甏里发酵的老雪菜（倒笃菜）、天目山鲜嫩冬笋片与滑嫩里脊肉片同锅猛火生炒，冲入骨汤下面，鲜掉眉毛。",
          "coord": [
            120.1685,
            30.2368
          ],
          "wiki": "片儿川",
          "query": "杭州 片儿川 实拍",
          "photoUrl": "/photos/nc-hangzhou-pianerchuan.jpg"
        },
        {
          "id": "nc-shanghai-congyou-banmian",
          "title": "老上海开洋葱油拌面",
          "cityId": "shanghai",
          "cityName": "上海",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "海派弄堂灵魂碳水",
          "flavorProfile": "葱香扑鼻 · 甜咸油润",
          "soulIngredient": "崇明红头小香葱、东海金钩开洋（海米）、湖羊老抽与生抽",
          "craftHighlight": "百根香葱慢火熬制焦黑酥葱油 / 金钩海米黄酒蒸软同拌",
          "famousShop": "上海弄堂小馄饨食店 / 逸桂禾阳春面馆",
          "description": "最见海派功夫的素雅面食。把大把小香葱切长段入油锅，小火慢炸半小时至葱段焦黑酥脆、葱香尽数溶入油中，调入生抽、老抽与白糖熬成浓稠酱汁，拌入劲道细面并撒上黄酒发透的金钩开洋。",
          "coord": [
            121.4692,
            31.2235
          ],
          "wiki": "葱油拌面",
          "query": "上海 开洋葱油拌面 实拍",
          "photoUrl": "/photos/nc-shanghai-congyou-banmian.jpg"
        }
      ]
    },
    {
      "id": "central-south-north-specialty",
      "title": "荆楚闽粤及北国特色面系",
      "subtitle": "芝麻酱热干面、大地鱼竹升云吞面、南洋沙茶面与延吉冰凌冷面",
      "regionBadge": "湖北 · 广东 · 福建 · 吉林 · 台湾",
      "description": "在传统南北面食之外，九省通衢的武汉创出石磨麻酱热干面，广府港岛以大竹竿压出爽脆全蛋竹升面，闽南侨乡将印尼沙茶融入海鲜面，延边与台湾更成就了冰爽冷面与红烧牛肉面。",
      "items": [
        {
          "id": "nc-wuhan-reganmian",
          "title": "武汉石磨麻酱热干面",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "中国五大名面 · 武汉过早之王",
          "flavorProfile": "酱香浓郁 · 筋道爽口",
          "soulIngredient": "碱水掸面、黄陂纯黑芝麻石磨麻酱、荆州酸豆角萝卜丁",
          "craftHighlight": "碱水面煮八分熟拌香油摊晾 / 沸水滚烫五秒淋浓稠麻酱",
          "famousShop": "武汉蔡林记总店 / 天天红油赵师傅热干面",
          "description": "武汉人清晨边走边拌的城市名片。粗圆碱水面先煮至八成熟，淋小磨香油抖散吹凉（掸面）；吃时入竹篓在沸水中上下滚烫数秒，舀上用香油澥开的醇厚黑芝麻酱、卤水汁、辣萝卜丁与酸豆角。",
          "coord": [
            114.2985,
            30.5842
          ],
          "wiki": "热干面",
          "query": "武汉 热干面 实拍",
          "photoUrl": "/photos/nc-wuhan-reganmian.jpg"
        },
        {
          "id": "nc-guangzhou-wonton-noodles",
          "title": "广府大地鱼竹升云吞面",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "西关世家面食非遗",
          "flavorProfile": "面爽如橡皮筋 · 汤清味鲜",
          "soulIngredient": "全鸭蛋竹升银丝面、鲜虾猪肉一口云吞、烘烤大地鱼猪骨汤",
          "craftHighlight": "大茅竹竿人力骑压面团 / 韭黄垫底、云吞居中、面浮汤上",
          "famousShop": "广州吴财记面家 / 香港麦文记面家",
          "description": "全程不加一滴水，纯以高筋面粉与鸭蛋和面，师傅骑坐粗大茅竹竿反复压打两小时，切出爽脆无碱水味的银丝面；汤底用烘烤比目鱼干（大地鱼）、虾籽、猪骨熬制，鲜虾云吞皮薄馅弹。",
          "coord": [
            113.2385,
            23.1142
          ],
          "wiki": "云吞面",
          "query": "广州 竹升云吞面 实拍",
          "photoUrl": "/photos/nc-guangzhou-wonton-noodles.jpg"
        },
        {
          "id": "nc-xiamen-shachamian",
          "title": "厦门八市海鲜沙茶面",
          "cityId": "xiamen",
          "cityName": "厦门",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "闽南南洋华侨混血名面",
          "flavorProfile": "沙茶浓香 · 甜辣鲜醇",
          "soulIngredient": "花生仁白芝麻虾米炒制沙茶酱、鲜鱿鱼大虾猪肝沿豆腐泡、闽南油面",
          "craftHighlight": "三十味南洋香料慢炒沙茶酱冲大骨高汤 / 现烫十余种海陆浇料",
          "famousShop": "厦门四里沙茶面 / 乌糖沙茶面",
          "description": "下南洋华侨带回印尼沙爹，经闽南人加入烘焙花生酱、白芝麻、大地鱼粉、虾米与五香粉改造而成。金红浓郁的沙茶大骨汤滚沸，自选鲜鱿鱼、海蛎、大肠、猪肝沿、豆腐泡入篓现烫。",
          "coord": [
            118.0825,
            24.4562
          ],
          "wiki": "沙茶面",
          "query": "厦门 沙茶面 实拍",
          "photoUrl": "/photos/nc-xiamen-shachamian.jpg"
        },
        {
          "id": "nc-yanbian-lengmian",
          "title": "延吉现压荞麦冰碴大冷面",
          "cityId": "yanbian",
          "cityName": "延吉",
          "province": "jl",
          "provinceLabel": "吉林省",
          "schoolOrStyle": "长白山朝鲜族消夏冬日皆宜奇面",
          "flavorProfile": "酸甜冰爽 · 柔韧弹牙",
          "soulIngredient": "延边苦荞麦粉与淀粉、黄牛肉清汤冻冰碴、辣白菜苹果梨片牛肉片",
          "craftHighlight": "千斤顶现压荞麦面入沸水即捞投冰水 / 冲带冰碴酸甜牛肉清汤",
          "famousShop": "延吉服务大楼冷面 / 顺姬冷面",
          "description": "无论三伏酷暑还是零下二十度严冬，延边人都要吃一碗带冰碴的大冷面。苦荞麦面现压入沸水煮熟，立即用山泉冷水反复搓洗至极度劲道，盛入铜碗，浇满漂浮碎冰的酸甜牛肉清汤。",
          "coord": [
            129.5089,
            42.8912
          ],
          "wiki": "朝鲜冷面",
          "query": "延吉 朝鲜族大冷面 实拍",
          "photoUrl": "/photos/nc-yanbian-lengmian.jpg"
        },
        {
          "id": "nc-taipei-beef-noodles",
          "title": "台北川味眷村红烧牛肉面",
          "cityId": "taipei",
          "cityName": "台北",
          "province": "tw",
          "provinceLabel": "台湾省",
          "schoolOrStyle": "宝岛饮食文化首席名片",
          "flavorProfile": "汤浓味厚 · 半筋半肉软糯",
          "soulIngredient": "澳洲/本地黄牛腱心与牛筋、豆瓣酱中药卤包、手工宽家常面",
          "craftHighlight": "豆瓣炒香配八角草果牛骨慢炖四小时 / 配酸菜浓汤浇宽面",
          "famousShop": "台北永康牛肉面 / 林东芳牛肉面",
          "description": "源于1949年后高雄冈山与台北眷村老兵将四川豆瓣红烧技法与台湾本地黄牛、中药材结合的杰作。厚切牛腱心与透明牛筋慢火红烧至入口即化而略带嚼劲，汤头浓郁微辣，配爽脆酸菜解腻。",
          "coord": [
            121.5298,
            25.0325
          ],
          "wiki": "台湾牛肉面",
          "query": "台北 红烧牛肉面 实拍",
          "photoUrl": "/photos/nc-taipei-beef-noodles.jpg"
        }
      ]
    }
  ]
};
