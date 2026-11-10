import type { SpecialTopicPack } from "../types";

export const eightCuisinesPack: SpecialTopicPack = {
  "id": "eight-cuisines",
  "index": "专题一",
  "title": "八大菜系全席 · 中华烹饪庙堂与江湖",
  "kicker": "EIGHT GREAT CUISINES OF CHINA",
  "subtitle": "鲁、川、粤、苏、闽、浙、湘、徽八大风味体系的流派源流、味型密码与传世名馔",
  "lede": "中国幅员万里，山海阻隔与水热梯度塑造了截然不同的食材基底与烹调哲学：黄河与渤海孕育了醇厚中正、善制高汤的鲁菜；巴蜀盆地湿润天气与移民交融催生了百菜百味、一菜一格的川菜；岭南山海通商成就了博采万物、追求本鲜的粤菜；太湖与运河富庶温润滋养了刀工精绝、清鲜平和的苏菜与浙菜；八山一水一分田与远洋侨乡锻造了红糟入馔、汤路宽广的闽菜；湘江洞庭与武陵山脉燃起了猛火鲜辣、善用腊味的湘菜；而古徽州新安江畔的山林则沉淀出重油重色重火功的发酵徽菜。",
  "metrics": [
    {
      "label": "收录菜系流派",
      "value": "8 大菜系 · 24 支脉",
      "note": "覆盖官府、商帮、市井与侨乡"
    },
    {
      "label": "传世代表名馔",
      "value": "32 道镇席大菜",
      "note": "每系精选 4 道殿堂级名作"
    },
    {
      "label": "核心烹调技法",
      "value": "爆、炒、蒸、煨、烧、酿、糟、卤",
      "note": "火候与刀工的东方巅峰"
    },
    {
      "label": "非遗与老字号",
      "value": "60+ 家百年名店",
      "note": "全数绑定真实 WGS84 寻味坐标"
    }
  ],
  "subGroups": [
    {
      "id": "lu-cuisine",
      "title": "鲁菜 · 齐鲁官府与胶东海味",
      "subtitle": "北方官府菜之首 · 汤如金、味中正、火候纯青",
      "regionBadge": "山东 · 京津冀辽",
      "description": "鲁菜发端于春秋齐鲁，成于明清宫廷与京师八大楼，分济南内陆官府派、胶东半岛海鲜派与孔府礼仪派。讲究「无汤不成菜」，善用葱姜爆锅、拔丝、扒、熘，咸鲜醇厚、中正大气。",
      "items": [
        {
          "id": "ec-lu-congsao-haishen",
          "title": "葱烧海参",
          "cityId": "jinan",
          "cityName": "济南",
          "province": "sd",
          "provinceLabel": "山东省",
          "schoolOrStyle": "鲁菜 · 胶东与济南双脉",
          "flavorProfile": "咸鲜醇厚 · 葱香浓郁",
          "soulIngredient": "胶东刺参、章丘大葱白",
          "craftHighlight": "清汤煨透 / 葱油收汁亮芡",
          "famousShop": "济南聚丰德 / 青岛春和楼",
          "description": "精选胶东深海四排刺参水发至软糯弹滑，配以国家地理标志章丘大葱段炸制金黄葱油，高汤慢煨入味后拢芡装盘，海参黑亮润泽、葱香直透肌理，是鲁菜头牌压轴大菜。",
          "coord": [
            117.0009,
            36.6758
          ],
          "wiki": "葱烧海参",
          "query": "鲁菜 葱烧海参 实拍",
          "photoUrl": "/photos/ec-lu-congsao-haishen.jpg"
        },
        {
          "id": "ec-lu-jiuzhuan-dachang",
          "title": "九转大肠",
          "cityId": "jinan",
          "cityName": "济南",
          "province": "sd",
          "provinceLabel": "山东省",
          "schoolOrStyle": "鲁菜 · 济南派",
          "flavorProfile": "酸甜苦辣咸五味俱全 · 软嫩红润",
          "soulIngredient": "猪直肠头、砂仁、肉桂、山东老醋",
          "craftHighlight": "先煮后炸再慢火靠汁",
          "famousShop": "济南九华楼 / 聚丰德",
          "description": "创于清光绪年间济南九华楼，将猪大肠经焯、煮、套叠切段、油炸后，加糖色、陈醋、胡椒、砂仁、豆蔻慢火煨收，色泽红润如琥珀，入口兼备酸甜香辣咸五味。",
          "coord": [
            117.0125,
            36.6682
          ],
          "wiki": "九转大肠",
          "query": "济南 九转大肠 实拍",
          "photoUrl": "/photos/ec-lu-jiuzhuan-dachang.jpg"
        },
        {
          "id": "ec-lu-tangcu-liyu",
          "title": "糖醋黄河鲤鱼",
          "cityId": "jinan",
          "cityName": "济南",
          "province": "sd",
          "provinceLabel": "山东省",
          "schoolOrStyle": "鲁菜 · 济南派",
          "flavorProfile": "外焦里嫩 · 酸甜醇正",
          "soulIngredient": "洛口黄河金鳞鲤鱼、洛口老醋",
          "craftHighlight": "百叶花刀 / 昂首翘尾定型炸溜",
          "famousShop": "济南汇泉楼 / 燕喜堂",
          "description": "取黄河洛口段金鳞赤尾鲜活鲤鱼，两侧剞瓦楞花刀，拍粉入热油托尾炸至鱼身昂首跃龙门之姿，浇以洛口陈醋与白糖熬制的琥珀热汁，外皮酥脆带响、鱼肉蒜瓣鲜嫩。",
          "coord": [
            117.0205,
            36.665
          ],
          "wiki": "糖醋鲤鱼",
          "query": "济南 糖醋黄河鲤鱼 实拍",
          "photoUrl": "/photos/ec-lu-tangcu-liyu.jpg"
        },
        {
          "id": "ec-lu-dezhou-paji",
          "title": "德州五香脱骨扒鸡",
          "cityId": "zibo",
          "cityName": "德州/济南",
          "province": "sd",
          "provinceLabel": "山东省",
          "schoolOrStyle": "鲁菜 · 运河鲁西北派",
          "flavorProfile": "五香透骨 · 肉嫩脱骨",
          "soulIngredient": "鲁西北散养小公鸡、十六味草果丁香老汤",
          "craftHighlight": "蜜水挂色油炸 / 百年陈年老汤焖扒",
          "famousShop": "德州扒鸡百年老店",
          "description": "国家级非遗名肴，因津浦铁路通车而享誉九州。整鸡盘腿造型如鸭浮水，经蜂蜜上色油炸后入百年循环老汤文火焖煮六小时，提起鸡腿抖动即骨肉分离，连骨髓皆透奇香。",
          "coord": [
            116.3594,
            37.4341
          ],
          "wiki": "德州扒鸡",
          "query": "山东 德州扒鸡 实拍",
          "photoUrl": "/photos/ec-lu-dezhou-paji.jpg"
        }
      ]
    },
    {
      "id": "chuan-cuisine",
      "title": "川菜 · 天府三派二十四味型",
      "subtitle": "一菜一格、百菜百味 · 麻辣之上更有鱼香、怪味与清汤",
      "regionBadge": "四川 · 重庆",
      "description": "川菜由上河帮（蓉派官府与公馆菜）、小河帮（自贡内江盐帮重辣菜）与下河帮（重庆万州码头江湖菜）共同构成。善用郫县豆瓣、汉源花椒与泡菜发酵，变化出鱼香、宫保、麻辣、陈皮、开水清鲜等 24 种复合味型。",
      "items": [
        {
          "id": "ec-chuan-mapo-tofu",
          "title": "陈麻婆豆腐",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川菜 · 上河帮蓉派",
          "flavorProfile": "麻辣烫酥嫩鲜香活",
          "soulIngredient": "石膏胆水豆腐、黄牛肉臊子、郫县豆瓣、汉源贡椒",
          "craftHighlight": "三次勾芡 / 牛肉酥臊护形",
          "famousShop": "成都陈麻婆豆腐旗舰店（西玉龙街）",
          "description": "创于清同治元年成都万福桥畔。以麻、辣、烫、整、嫩、鲜、香、酥八字箴言著称：郫县鹃城红油豆瓣炒出红亮油色，牛肉末炸至干香酥脆，起锅撒现焙汉源红花椒面与蒜苗。",
          "coord": [
            104.0665,
            30.6638
          ],
          "wiki": "麻婆豆腐",
          "query": "成都 陈麻婆豆腐 实拍",
          "photoUrl": "/photos/ec-chuan-mapo-tofu.jpg"
        },
        {
          "id": "ec-chuan-huiguorou",
          "title": "蒜苗回锅肉",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川菜 · 川西坝子家常之王",
          "flavorProfile": "酱香浓郁 · 肥而不腻",
          "soulIngredient": "成华猪二刀坐臀肉、温江红七星蒜苗、郫县豆瓣",
          "craftHighlight": "带皮煮至八分熟 / 猛火熬出灯盏窝",
          "famousShop": "成都马旺子 / 盘飧市",
          "description": "被尊为川菜考厨师的第一试金石。精选猪后臀二刀肉煮至断生切薄片，下锅煸炒至肥油溢出、肉片卷曲成「灯盏窝」，下剁细郫县豆瓣与永川豆豉炒出红油，配蒜苗段急火出锅。",
          "coord": [
            104.0812,
            30.6542
          ],
          "wiki": "回锅肉",
          "query": "川菜 回锅肉 实拍",
          "photoUrl": "/photos/ec-chuan-huiguorou.jpg"
        },
        {
          "id": "ec-chuan-shuizhu-niurou",
          "title": "自贡盐帮水煮牛肉",
          "cityId": "zigong",
          "cityName": "自贡",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川菜 · 小河帮盐帮菜",
          "flavorProfile": "麻辣滚烫 · 滑嫩浓烈",
          "soulIngredient": "黄牛里脊、自贡刀口辣椒、窝笋青菜垫底",
          "craftHighlight": "热汤滑肉 / 滚油激香刀口椒麻",
          "famousShop": "自贡盐帮菜博物馆餐厅 / 汝萍传统盐帮菜",
          "description": "源于自贡盐场役牛淘汰后的庖厨发明。牛里脊逆纹切大片上浆，在豆瓣麻辣高汤中滑熟捞于青菜窝笋之上，铺满现焙干海椒与花椒碾成的「刀口辣椒」，浇滚油激出焦香。",
          "coord": [
            104.7784,
            29.339
          ],
          "wiki": "水煮牛肉",
          "query": "自贡 水煮牛肉 实拍",
          "photoUrl": "/photos/ec-chuan-shuizhu-niurou.jpg"
        },
        {
          "id": "ec-chuan-kaishui-baicai",
          "title": "国宴开水白菜",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川菜 · 蓉派官府巅峰",
          "flavorProfile": "汤清如水 · 鲜醇至极",
          "soulIngredient": "大白菜嫩黄心、老母鸡、老鸭、金华火腿、瑶柱",
          "craftHighlight": "红白肉茸三次扫汤吸附杂质",
          "famousShop": "成都芙蓉凰 / 银芭川菜",
          "description": "由清末川菜宗师黄敬临创制，打破世人「川菜只知麻辣」之偏见。用母鸡、母鸭、火腿、排骨熬出浓汤，再以鸡胸肉茸与猪肉茸反复「扫汤」至汤色清澈如茗茶，浇淋绽放白菜心上。",
          "coord": [
            104.0598,
            30.6512
          ],
          "wiki": "开水白菜",
          "query": "川菜 开水白菜 实拍",
          "photoUrl": "/photos/ec-chuan-kaishui-baicai.jpg"
        }
      ]
    },
    {
      "id": "yue-cuisine",
      "title": "粤菜 · 广府潮汕客家三脉交辉",
      "subtitle": "食在广州、厨出凤城 · 不时不食、清中求鲜",
      "regionBadge": "广东 · 港澳",
      "description": "粤菜由广府菜（广州顺德香港，博采中外、善煲靓汤与烧腊点心）、潮州菜（汕头潮州，精于海鲜高汤、卤水与生腌）与东江客家菜（梅州惠州，擅长砂锅煲焗、盐焗与酿菜）组成，崇尚食材本味与极致火候。",
      "items": [
        {
          "id": "ec-yue-baiqieji",
          "title": "广府沙姜白切鸡",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "粤菜 · 广府第一名菜",
          "flavorProfile": "皮爽肉滑 · 骨都有味",
          "soulIngredient": "清远麻鸡/湛江走地鸡、阳春沙姜、花生油葱蓉",
          "craftHighlight": "三提三浸微沸浸熟 / 冰水紧皮",
          "famousShop": "广州白天鹅宾馆 / 文记壹心鸡",
          "description": "「无鸡不成宴」的粤菜灵魂。精选足日龄清远麻鸡，在虾眼水（微沸高汤）中「三提三浸」利用余温浸至骨髓带微红（玻璃皮、凝脂冻），斩件配热花生油激香的姜葱蓉或沙姜酱油。",
          "coord": [
            113.2442,
            23.1092
          ],
          "wiki": "白切鸡",
          "query": "广州 白切鸡 实拍",
          "photoUrl": "/photos/ec-yue-baiqieji.jpg"
        },
        {
          "id": "ec-yue-shaoe",
          "title": "古法荔枝木脆皮烧鹅",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "粤菜 · 广府烧腊巅峰",
          "flavorProfile": "皮脆如琥珀 · 肉汁丰盈",
          "soulIngredient": "清远黑鬃鹅、陈皮八角秘制肚料、荔枝柴",
          "craftHighlight": "充气烫皮挂麦芽糖水 / 风干瓦缸明火暗烤",
          "famousShop": "广州炳胜公馆 / 香港镛记酒家",
          "description": "选用七斤半黑鬃棚鹅，翼下开小孔填入秘制海盐、柱侯酱、新会老陈皮与八角并缝针，打气淋沸水紧皮、挂麦芽糖醋水风干，入荔枝木暗火烤炉烘至表皮枣红酥脆，佐酸梅酱解腻。",
          "coord": [
            113.3235,
            23.1189
          ],
          "wiki": "烧鹅",
          "query": "广东 脆皮烧鹅 实拍",
          "photoUrl": "/photos/ec-yue-shaoe.jpg"
        },
        {
          "id": "ec-yue-lushui-shitoue",
          "title": "潮汕澄海卤水狮头鹅",
          "cityId": "shantou",
          "cityName": "汕头",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "粤菜 · 潮州菜席上之冠",
          "flavorProfile": "醇香回甘 · 粉肝如脂",
          "soulIngredient": "澄海狮头鹅（鹅肝/鹅掌/鹅头）、南姜八角川椒老卤",
          "craftHighlight": "百年陈卤分段吊卤浸泡",
          "famousShop": "汕头日日香鹅肉饭店 / 春梅里卤鹅",
          "description": "潮汕无卤不成席。采用世界体型最大的澄海狮头鹅，在加入南姜、桂皮、甘草、鱼露与肥猪肉熬制的陈年老卤中慢火浸卤；尤以粉糯即化的卤水鹅肝与胶质丰盈的老鹅头最为矜贵。",
          "coord": [
            116.7128,
            23.3685
          ],
          "wiki": "卤水鹅",
          "query": "汕头 卤水狮头鹅 实拍",
          "photoUrl": "/photos/ec-yue-lushui-shitoue.jpg"
        },
        {
          "id": "ec-yue-yanjuji",
          "title": "客家古法海盐焗鸡",
          "cityId": "meizhou",
          "cityName": "梅州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "粤菜 · 东江客家首菜",
          "flavorProfile": "咸香入骨 · 皮脆肉实",
          "soulIngredient": "客家山地三黄鸡、粗粒海盐、沙姜、玉果纱纸",
          "craftHighlight": "生晒粗海盐炒热 / 黄油纸包裹焖焗",
          "famousShop": "梅州金苑酒家 / 围龙屋星园酒家",
          "description": "源于客家迁徙途中以盐储食的智慧。将走地三黄鸡抹匀沙姜与米酒风干，以双层竹造纱纸严密包裹，埋入炒至发烫的粗粒海盐堆中慢火闷焗两小时，水汽微散而盐香深锁于骨肉之间。",
          "coord": [
            116.1222,
            24.2886
          ],
          "wiki": "盐焗鸡",
          "query": "梅州 客家盐焗鸡 实拍",
          "photoUrl": "/photos/ec-yue-yanjuji.jpg"
        }
      ]
    },
    {
      "id": "su-cuisine",
      "title": "苏菜 · 淮扬刀工与姑苏金陵风雅",
      "subtitle": "国宴基准 · 刀工细若发丝、味和平而清鲜回甜",
      "regionBadge": "江苏 · 上海",
      "description": "苏菜汇集淮扬菜（扬州淮安，开国第一宴基准）、金陵菜（南京，善制鸭馔与江鲜）、苏锡菜（苏州无锡，时令河鲜与甜出头咸收口）及徐海菜（徐州连云港）。以「一菜一格、刀工绝伦、炖焖见长」冠绝江南。",
      "items": [
        {
          "id": "ec-su-shizitou",
          "title": "扬州清炖蟹粉狮子头",
          "cityId": "yangzhou",
          "cityName": "扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "苏菜 · 淮扬国宴压轴",
          "flavorProfile": "入口即化 · 蟹香清鲜",
          "soulIngredient": "肋条五花肉、高邮湖大闸蟹蟹粉、荸荠丁",
          "craftHighlight": "细切粗斩石榴粒 / 砂锅菜叶封顶微火炖四小时",
          "famousShop": "扬州迎宾馆趣园茶社 / 狮子楼",
          "description": "绝不用绞肉机，全凭淮扬厨师双刀将四成肥六成瘦的肋条肉「细切粗斩」成石榴米状，镶入鲜拆高邮湖蟹黄蟹肉，置砂锅中覆青菜叶以微沸高汤慢炖至油脂化尽、用勺舀食入口即化。",
          "coord": [
            119.4215,
            32.4082
          ],
          "wiki": "狮子头",
          "query": "扬州 清炖蟹粉狮子头 实拍",
          "photoUrl": "/photos/ec-su-shizitou.jpg"
        },
        {
          "id": "ec-su-songshu-guiyu",
          "title": "姑苏松鼠鳜鱼",
          "cityId": "suzhou",
          "cityName": "苏州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "苏菜 · 苏帮头牌名馔",
          "flavorProfile": "外脆里嫩 · 酸甜适口",
          "soulIngredient": "太湖活鳜鱼、松子仁、青豌豆、河虾仁",
          "craftHighlight": "牡丹花刀脱骨 / 昂首炸制浇沸腾糖醋卤汁",
          "famousShop": "苏州松鹤楼（观前街总店） / 得月楼",
          "description": "因乾隆下江南典故名扬天下。取太湖鲜活鳜鱼去骨批十字牡丹花刀，拍吉士粉入油锅炸成金黄蓬松的松鼠翘尾状，上桌瞬间淋上滚烫糖醋松子卤汁，发出吱吱松鼠叫声，色香声俱全。",
          "coord": [
            120.6258,
            31.3125
          ],
          "wiki": "松鼠桂鱼",
          "query": "苏州 松鼠鳜鱼 实拍",
          "photoUrl": "/photos/ec-su-songshu-guiyu.jpg"
        },
        {
          "id": "ec-su-wensi-tofu",
          "title": "淮扬文思豆腐羹",
          "cityId": "yangzhou",
          "cityName": "扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "苏菜 · 淮扬刀工绝技",
          "flavorProfile": "豆腐如丝 · 汤醇鲜滑",
          "soulIngredient": "扬州内酯软豆腐、金华火腿丝、冬笋丝、鸡清汤",
          "craftHighlight": "横批88刀竖切188刀 / 水中绽放如菊",
          "famousShop": "扬州富春茶社 / 冶春茶社",
          "description": "创于清乾隆年间扬州天宁寺文思和尚。在一块极易碎的软嫩豆腐上横批竖切出逾五千根粗细均匀、穿针不破的豆腐丝，入清澈老母鸡高汤中配火腿丝、冬菇丝同烩，如宣纸水墨画卷。",
          "coord": [
            119.4368,
            32.3945
          ],
          "wiki": "文思豆腐",
          "query": "扬州 文思豆腐 实拍",
          "photoUrl": "/photos/ec-su-wensi-tofu.jpg"
        },
        {
          "id": "ec-su-yanshuiya",
          "title": "金陵桂花盐水鸭",
          "cityId": "nanjing",
          "cityName": "南京",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "苏菜 · 金陵菜首席代表",
          "flavorProfile": "皮白肉红 · 咸鲜细嫩",
          "soulIngredient": "高淳湖熟麻鸭、炒盐八角花椒、百年老卤",
          "craftHighlight": "热盐擦搓、清卤复浸、低温微煮紧皮",
          "famousShop": "南京韩复兴 / 金陵饭店梅苑",
          "description": "南京「无鸭不成席」，尤以中秋前后桂花盛开时的「桂花鸭」最肥美。经炒热椒盐搓揉腌制、陈年清卤浸泡、风干后再以85度菊花水低温浸熟，鸭皮白皙如玉、鸭肉粉红咸鲜无腥。",
          "coord": [
            118.7865,
            32.0218
          ],
          "wiki": "南京盐水鸭",
          "query": "南京 盐水鸭 实拍",
          "photoUrl": "/photos/ec-su-yanshuiya.jpg"
        }
      ]
    },
    {
      "id": "min-cuisine",
      "title": "闽菜 · 山海佛跳墙与红糟侨乡味",
      "subtitle": "一汤十变、百味一鲜 · 武夷山珍与东海海味的交响",
      "regionBadge": "福建 · 台湾",
      "description": "闽菜由福州菜（官府主脉，清鲜和醇、善用红糟与糖醋）、闽南菜（泉厦漳，善用沙茶、药膳与海鲜）和闽西菜（客家山珍）汇流而成。以制汤考究（「一汤十变」）、海味山珍合璧著称。",
      "items": [
        {
          "id": "ec-min-fotiaoqiang",
          "title": "聚春园坛烧佛跳墙",
          "cityId": "fuzhou",
          "cityName": "福州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "闽菜 · 首席国宴图腾",
          "flavorProfile": "荤香四溢 · 浓醇不腻",
          "soulIngredient": "鲍鱼、辽参、鱼唇、花胶、瑶柱、火腿、福建老酒",
          "craftHighlight": "十八种山珍海味分治后入绍兴酒坛荷叶封口煨十小时",
          "famousShop": "福州聚春园总店（东街口）",
          "description": "创于清光绪年间福州官钱局家宴，后由聚春园郑春发定型，享「坛启荤香飘四邻，佛闻弃禅跳墙来」盛誉。集齐海参、鲍鱼、花胶等十八种干货与山珍，注入绍兴花雕酒微火煨透。",
          "coord": [
            119.3005,
            26.0825
          ],
          "wiki": "佛跳墙",
          "query": "福州 佛跳墙 实拍",
          "photoUrl": "/photos/ec-min-fotiaoqiang.jpg"
        },
        {
          "id": "ec-min-jitang-haibang",
          "title": "鸡汤汆海蚌",
          "cityId": "fuzhou",
          "cityName": "福州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "闽菜 · 汤路巅峰名作",
          "flavorProfile": "脆嫩鲜甜 · 清汤见底",
          "soulIngredient": "长乐漳港海蚌（西施舌）、老母鸡、猪里脊、牛肉",
          "craftHighlight": "海蚌薄批沸水闪烫 / 滚烫三茸清鸡汤冲汆",
          "famousShop": "福州聚春园 / 文儒九号",
          "description": "与佛跳墙并称闽菜双璧。选用长乐漳港独产的巨型海蚌（西施舌），批成薄片在沸水中快速过水装碗，当席冲入用老母鸡、瘦肉、牛肉精制的滚烫清汤，海蚌在汤中瞬间烫至七分熟脆甜。",
          "coord": [
            119.2952,
            26.0785
          ],
          "wiki": "鸡汤汆海蚌",
          "query": "福州 鸡汤汆海蚌 实拍",
          "photoUrl": "/photos/ec-min-jitang-haibang.jpg"
        },
        {
          "id": "ec-min-lizhirou",
          "title": "福州传统荔枝肉",
          "cityId": "fuzhou",
          "cityName": "福州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "闽菜 · 酸甜红糟代表",
          "flavorProfile": "形似荔枝 · 酸甜脆嫩",
          "soulIngredient": "猪里脊肉、马蹄（荸荠）、福州红糟、香醋白糖",
          "craftHighlight": "十字花刀包马蹄丁油炸 / 红糟糖醋汁快速翻炒",
          "famousShop": "福州老福洲徐记 / 安泰楼",
          "description": "将猪瘦肉切斜十字花刀，裹入清脆马蹄丁捏成球状，挂湿淀粉并调入福州特产红曲酒糟，下油锅炸至花刀绽放酷似鲜红荔枝，再以白糖、香醋、蒜末溜汁，外酥里嫩、果香酸甜。",
          "coord": [
            119.3038,
            26.0752
          ],
          "wiki": "荔枝肉",
          "query": "福州 荔枝肉 实拍",
          "photoUrl": "/photos/ec-min-lizhirou.jpg"
        },
        {
          "id": "ec-min-jiangmuya",
          "title": "泉州砂锅姜母鸭",
          "cityId": "quanzhou",
          "cityName": "泉州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "闽菜 · 闽南药膳名肴",
          "flavorProfile": "姜香透骨 · 甘辛软嫩",
          "soulIngredient": "正番鸭、三年陈老姜母、黑麻油、福建米酒",
          "craftHighlight": "麻油煸香百片老姜 / 全程米酒无水砂锅慢煲",
          "famousShop": "泉州忠记盐烧番鸭 / 斯丹姜母鸭",
          "description": "源自宫廷御膳而兴于泉厦民间的闽南至味。用纯正黑麻油将铺满砂锅底的三年老姜片煸至焦黄微卷，下整只红面正番鸭与三十味草本香料，兑入米酒文火焖煲至鸭肉酥烂、姜片甘香。",
          "coord": [
            118.5865,
            24.9082
          ],
          "wiki": "姜母鸭",
          "query": "泉州 姜母鸭 实拍",
          "photoUrl": "/photos/ec-min-jiangmuya.jpg"
        }
      ]
    },
    {
      "id": "zhe-cuisine",
      "title": "浙菜 · 西湖风雅与东海山海至鲜",
      "subtitle": "清俊秀美 · 杭帮诗意、甬台海鲜、绍兴糟醉与金华火腿",
      "regionBadge": "浙江",
      "description": "浙菜囊括杭帮菜（杭州，湖山清雅、南北交融）、宁帮菜（宁波舟山，咸鲜合一、精于海鲜与呛腌）、瓯菜/台州菜（温州台州，东海大黄鱼与轻烹本味）及婺州菜（金华衢州，火腿与鲜辣）。",
      "items": [
        {
          "id": "ec-zhe-dongporou",
          "title": "杭州慢焖东坡肉",
          "cityId": "hangzhou",
          "cityName": "杭州",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "浙菜 · 杭帮第一名肴",
          "flavorProfile": "色泽红亮 · 酥而不烂",
          "soulIngredient": "太湖黑猪五花肋条肉、绍兴加饭黄酒、冰糖",
          "craftHighlight": "整方走油定型 / 全黄酒无水砂锅密封慢焖",
          "famousShop": "杭州楼外楼 / 知味观味庄",
          "description": "相传苏东坡疏浚西湖时回赠民工之作。取五层分明的猪肉切成麻将块，葱姜垫砂锅底，全程不加一滴水，纯以绍兴花雕黄酒、酱油、冰糖小火慢焖三小时，装入小陶罐奉客，肥而不腻。",
          "coord": [
            120.1415,
            30.2518
          ],
          "wiki": "东坡肉",
          "query": "杭州 东坡肉 实拍",
          "photoUrl": "/photos/ec-zhe-dongporou.jpg"
        },
        {
          "id": "ec-zhe-longjing-xiaren",
          "title": "西湖龙井虾仁",
          "cityId": "hangzhou",
          "cityName": "杭州",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "浙菜 · 杭帮茶宴巅峰",
          "flavorProfile": "玉白翠绿 · 清香弹滑",
          "soulIngredient": "活大河虾仁、狮峰明前龙井新茶、绍酒",
          "craftHighlight": "手挤活河虾仁上浆滑油 / 头道龙井茶汤带叶颠炒",
          "famousShop": "杭州紫薇厅 / 楼外楼",
          "description": "将杭州双绝——活河虾与西湖龙井融于一盘。鲜活大河虾手工挤出虾仁，反复漂洗后以蛋清生粉上浆，低温滑油至玉白饱满，迅速烹入刚冲泡的明前狮峰龙井茶汤与嫩芽翻颠出锅。",
          "coord": [
            120.1325,
            30.2435
          ],
          "wiki": "龙井虾仁",
          "query": "杭州 龙井虾仁 实拍",
          "photoUrl": "/photos/ec-zhe-longjing-xiaren.jpg"
        },
        {
          "id": "ec-zhe-jiashao-huangyu",
          "title": "台州家烧野生大黄鱼",
          "cityId": "taizhou",
          "cityName": "台州",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "浙菜 · 东海米其林代表",
          "flavorProfile": "汤汁浓醇 · 蒜瓣鱼肉嫩滑",
          "soulIngredient": "东海大陈岛黄鱼、农家土猪肉片、手打年糕",
          "craftHighlight": "猪油煎黄 / 浓汤大火猛烧收汁",
          "famousShop": "台州新荣记（灵湖店/临海总店）",
          "description": "台州菜封神之作。严选东海金鳞野生大黄鱼，以农家土猪油两面微煎锁鲜，加入咸肉片、姜蒜与高汤旺火「家烧」，使鱼皮胶质融于琥珀色浓汤中，再下软糯水磨年糕吸饱鱼鲜。",
          "coord": [
            121.4205,
            28.6568
          ],
          "wiki": "大黄鱼",
          "query": "台州 家烧大黄鱼 实拍",
          "photoUrl": "/photos/ec-zhe-jiashao-huangyu.jpg"
        },
        {
          "id": "ec-zhe-honggao-qiangxie",
          "title": "宁波红膏咸呛蟹",
          "cityId": "ningbo",
          "cityName": "宁波",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "浙菜 · 甬帮海鲜图腾",
          "flavorProfile": "红膏似凝脂 · 咸鲜回甜",
          "soulIngredient": "舟山渔场冬捕活母梭子蟹、象山海盐、花椒姜酒",
          "craftHighlight": "精准盐度冷卤生呛八小时",
          "famousShop": "宁波状元楼 / 贴阁碧",
          "description": "老宁波压轴冷盘。专挑寒冬时节舟山白蟹中饱满顶盖的红膏母梭子蟹，刷洗净后浸入按比例调配的冷开水粗海盐卤中生呛，切开后橘红蟹膏如冰淇淋般绵密，白肉晶莹似玉、鲜甜无匹。",
          "coord": [
            121.5502,
            29.8738
          ],
          "wiki": "红膏呛蟹",
          "query": "宁波 红膏呛蟹 实拍",
          "photoUrl": "/photos/ec-zhe-honggao-qiangxie.jpg"
        }
      ]
    },
    {
      "id": "xiang-cuisine",
      "title": "湘菜 · 潇湘猛火香辣与烟熏腊韵",
      "subtitle": "刀工精妙、锅气刚猛 · 剁椒、酸辣与柴火腊味的三重奏",
      "regionBadge": "湖南",
      "description": "湘菜由湘江流域（长沙衡阳湘潭，官府与猛火小炒）、洞庭湖区（常德岳阳，钵子菜与全鱼席）和湘西山区（吉首怀化，烟熏腊肉与苗家酸辣）三派组成。讲究入味透彻、香辣鲜爽。",
      "items": [
        {
          "id": "ec-xiang-duojiao-yutou",
          "title": "坛宗剁椒大鱼头",
          "cityId": "changsha",
          "cityName": "长沙",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "湘菜 · 湘江流域头牌名菜",
          "flavorProfile": "鲜辣开胃 · 红亮滑嫩",
          "soulIngredient": "洞庭湖/东江湖大花鲢鱼头、三年坛泡红剁椒、紫苏",
          "craftHighlight": "三年老坛双色剁椒覆顶 / 旺火大气蒸透浇热油",
          "famousShop": "长沙火宫殿 / 坛宗剁椒鱼头",
          "description": "无鱼头不成湘宴。选用六斤以上生态花鲢巨型鱼头，劈开洗净后铺满湖南特产樟树港辣椒与老坛发酵红剁椒、黄贡椒，入蒸笼旺火猛蒸，鱼脑胶质与剁椒乳酸发酵之鲜辣彻底交融。",
          "coord": [
            112.9765,
            28.1915
          ],
          "wiki": "剁椒鱼头",
          "query": "长沙 剁椒鱼头 实拍",
          "photoUrl": "/photos/ec-xiang-duojiao-yutou.jpg"
        },
        {
          "id": "ec-xiang-lajiao-chaorou",
          "title": "农家樟树港辣椒炒肉",
          "cityId": "changsha",
          "cityName": "长沙",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "湘菜 · 国民下饭菜之冠",
          "flavorProfile": "锅气暴烈 · 鲜辣多汁",
          "soulIngredient": "宁乡花猪五花肉与前腿肉、湘阴樟树港螺丝椒、浏阳豆豉",
          "craftHighlight": "干煸青椒起虎皮 / 肥肉炼油猛火混炒带汤汁",
          "famousShop": "长沙费大厨辣椒炒肉 / 炊烟小炒黄牛肉",
          "description": "把最朴素的食材做到极致的湘菜灵魂。先将皮薄肉厚的湘阴樟树港青椒无油干擂煸出焦斑虎皮，再将宁乡土猪肥肉煸出猪油，下酱油、浏阳黑豆豉与薄切前腿瘦肉，大火二十秒锁住肉汁。",
          "coord": [
            112.9822,
            28.1968
          ],
          "wiki": "辣椒炒肉",
          "query": "湖南 辣椒炒肉 实拍",
          "photoUrl": "/photos/ec-xiang-lajiao-chaorou.jpg"
        },
        {
          "id": "ec-xiang-yongzhou-xueya",
          "title": "永州宁远炒血鸭",
          "cityId": "hengyang",
          "cityName": "永州/衡阳",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "湘菜 · 湘南非遗名馔",
          "flavorProfile": "酱红油亮 · 血香脆嫩",
          "soulIngredient": "永州麻鸭、鲜活鸭血、米酒、子姜红椒",
          "craftHighlight": "鸭块猛火炒干水汽 / 临出锅淋米酒活鸭血翻裹",
          "famousShop": "永州潇湘楼 / 衡阳旺克来",
          "description": "源于太平天国与湘南民间宴席的传奇名菜。将小麻鸭斩成细丁与子姜、干椒猛火爆炒至金黄干香，起锅前将兑有本地米酒的鲜鸭血均匀淋入锅中快速翻炒，使每粒鸭肉均裹满滑嫩血浆。",
          "coord": [
            111.6122,
            26.4205
          ],
          "wiki": "永州血鸭",
          "query": "湖南 永州血鸭 实拍",
          "photoUrl": "/photos/ec-xiang-yongzhou-xueya.jpg"
        },
        {
          "id": "ec-xiang-lawei-hezheng",
          "title": "湘西柴火腊味合蒸",
          "cityId": "xiangxi",
          "cityName": "湘西/长沙",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "湘菜 · 武陵山脉岁时大菜",
          "flavorProfile": "脂香浓郁 · 咸甜柔韧",
          "soulIngredient": "湘西松柏枝烟熏腊猪肉、腊鸡、腊鱼、浏阳豆豉",
          "craftHighlight": "三腊叠码铝钵 / 茶油豆豉原汤笼蒸",
          "famousShop": "长沙玉楼东 / 吉首老字号苗家菜馆",
          "description": "湖南人冬日团圆的味觉乡愁。将经松柏枝与橘皮慢熏数月的湘西腊猪肉、腊鸡、腊草鱼切成大片，整齐码入钵中，铺上浏阳豆豉、红干椒与少许冰糖鸡汤，入笼旺火蒸至三味油脂互渗。",
          "coord": [
            109.7389,
            28.3119
          ],
          "wiki": "腊味合蒸",
          "query": "湖南 腊味合蒸 实拍",
          "photoUrl": "/photos/ec-xiang-lawei-hezheng.jpg"
        }
      ]
    },
    {
      "id": "hui-cuisine",
      "title": "徽菜 · 古徽州发酵智慧与黄山山珍",
      "subtitle": "重油、重色、重火功 · 一条新安江走出半部江南商帮食史",
      "regionBadge": "安徽",
      "description": "徽菜发祥于南宋古徽州一府六县（今黄山、绩溪、婺源），随徽商足迹遍布江南与京津。因山多田少，极擅烹制山珍野味与河鲜，并以盐腌轻发酵（臭鳜鱼、毛豆腐、刀板香）赋予食材神奇转化。",
      "items": [
        {
          "id": "ec-hui-chouguiyu",
          "title": "徽州古法臭鳜鱼",
          "cityId": "huangshan",
          "cityName": "黄山",
          "province": "ah",
          "provinceLabel": "安徽省",
          "schoolOrStyle": "徽菜 · 镇席第一名肴",
          "flavorProfile": "闻臭食香 · 肉呈蒜瓣",
          "soulIngredient": "新安江鲜活鳜鱼、徽州菜籽油、冬笋丁、五花肉丁",
          "craftHighlight": "木桶花椒盐压石轻度发酵 / 猪油煎透红烧收浓汁",
          "famousShop": "黄山屯溪老街同聚楼 / 老街第一楼",
          "description": "两百年前沿江鱼贩为防鳜鱼变质，以淡盐水逐层洒抹置木桶压石运往徽州，鱼腮绯红、表皮散发出独特发酵气息，经热猪油两面煎黄，加笋丁、肉丁、酱油焖烧后，鱼肉紧实呈蒜瓣状且鲜美无比。",
          "coord": [
            118.2935,
            29.7128
          ],
          "wiki": "臭鳜鱼",
          "query": "徽州 臭鳜鱼 实拍",
          "photoUrl": "/photos/ec-hui-chouguiyu.jpg"
        },
        {
          "id": "ec-hui-maodoufu",
          "title": "徽州虎皮毛豆腐",
          "cityId": "huangshan",
          "cityName": "黄山",
          "province": "ah",
          "provinceLabel": "安徽省",
          "schoolOrStyle": "徽菜 · 非遗菌丝奇味",
          "flavorProfile": "白毛如绒 · 外酥内酪",
          "soulIngredient": "休宁山泉酸浆豆腐、纯天然毛霉菌丝、菜籽油辣酱",
          "craftHighlight": "恒温发酵长出寸许白绒毛 / 平底铁锅菜油两面煎成虎皮",
          "famousShop": "黄山屯溪老街毛豆腐非遗坊 / 宏村老街摊",
          "description": "《舌尖上的中国》经典非遗。以酸浆点制的徽州水豆腐经人工发酵，表面生出浓密洁白的食用菌丝（兔儿毛），下平底铁锅用农家菜籽油慢煎至两面金黄起虎皮皱，蘸徽州辣酱，内里如奶酪般绵密。",
          "coord": [
            118.2962,
            29.7145
          ],
          "wiki": "毛豆腐",
          "query": "徽州 毛豆腐 实拍",
          "photoUrl": "/photos/ec-hui-maodoufu.jpg"
        },
        {
          "id": "ec-hui-hushi-yipinguo",
          "title": "绩溪胡适一品锅",
          "cityId": "huangshan",
          "cityName": "黄山/绩溪",
          "province": "ah",
          "provinceLabel": "安徽省",
          "schoolOrStyle": "徽菜 · 徽州团圆层叠大锅",
          "flavorProfile": "层层有味 · 汤浓醇厚",
          "soulIngredient": "五花红烧肉、油豆腐包肉、蛋饺、冬笋干、干豆角",
          "craftHighlight": "铁锅七层码放 / 炭火慢煨三小时原汤渗透",
          "famousShop": "黄山绩溪徽商故里 / 屯溪披云徽府菜",
          "description": "因胡适在北平与纽约常以此锅宴请中外名流而声名远播。大铁锅底层铺干笋、干豆角，往上依次叠码红烧肉、油豆腐塞肉、手工蛋饺、鸭块、粉丝等六七层（俗称一层楼），炭火慢煨使上层肉脂渗入底层山珍。",
          "coord": [
            118.5952,
            30.0685
          ],
          "wiki": "一品锅",
          "query": "徽菜 胡适一品锅 实拍",
          "photoUrl": "/photos/ec-hui-hushi-yipinguo.jpg"
        },
        {
          "id": "ec-hui-daobanxiang",
          "title": "徽州问政山笋烧刀板香",
          "cityId": "huangshan",
          "cityName": "黄山",
          "province": "ah",
          "provinceLabel": "安徽省",
          "schoolOrStyle": "徽菜 · 徽派咸肉山珍绝配",
          "flavorProfile": "油润咸香 · 樟木清芳",
          "soulIngredient": "黑猪五花咸肉、歙县问政山贡笋、老香樟木刀板",
          "craftHighlight": "咸肉置香樟木板上同蒸吸油 / 垫鲜嫩问政山竹笋",
          "famousShop": "黄山老街第一楼 / 徽商故里",
          "description": "徽州人冬腊月腌制曝晒的黑猪咸肉，春季切薄片铺于歙县问政山鲜挖的脆甜竹笋之上，置于老香樟木特制的刀板上一同入笼旺火蒸熟；樟木吸走多余肥油并赋予幽香，笋片则吸饱咸肉鲜汁。",
          "coord": [
            118.4312,
            29.8652
          ],
          "wiki": "刀板香",
          "query": "徽州 刀板香 实拍",
          "photoUrl": "/photos/ec-hui-daobanxiang.jpg"
        }
      ]
    }
  ]
};
