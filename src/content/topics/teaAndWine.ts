import type { SpecialTopicPack } from "../types";

export const teaAndWinePack: SpecialTopicPack = {
  "id": "tea-and-wine",
  "index": "专题八",
  "title": "中华名茶与美酒图志 · 杯盏里的山河风物",
  "kicker": "FAMOUS TEAS & HERITAGE SPIRITS",
  "subtitle": "六大茶类核心产区与酱香、浓香、清香、绍兴黄酒的东方饮馔文化",
  "lede": "食必有饮，茶酒同源。从西湖狮峰明前龙井、武夷丹霞岩骨花香大红袍、潮州凤凰单丛与勐海陈年普洱，到赤水河畔茅台酱香、宜宾五粮液浓香、汾阳杏花村清香与鉴湖水酿造的绍兴女儿红花雕——一杯好茶解百味之腻，一盏佳酿壮千古之怀。",
  "metrics": [
    {
      "label": "茶酒谱系",
      "value": "2 大门类 · 16 款国饮",
      "note": "六大名茶产区与四大名酒香型"
    },
    {
      "label": "核心风土",
      "value": "高山云雾 · 赤水河谷 · 鉴湖水",
      "note": "微生物菌群与水源决定灵魂"
    },
    {
      "label": "佐餐之道",
      "value": "早茶普洱 · 海鲜黄酒 · 火锅冰茶",
      "note": "茶酒与中华名菜的黄金配伍"
    },
    {
      "label": "非遗技艺",
      "value": "手工炒青 · 摇青做青 · 九次蒸煮",
      "note": "联合国人类非遗与国家非遗"
    }
  ],
  "subGroups": [
    {
      "id": "famous-teas",
      "title": "名山云雾 · 中华名茶核心产区",
      "subtitle": "西湖龙井、武夷岩茶、凤凰单丛、云南普洱与洞庭碧螺春",
      "regionBadge": "浙江 · 福建 · 广东 · 云南 · 江苏",
      "description": "中国是茶的故乡，绿茶之鲜爽、乌龙之高香、黑茶之醇厚，皆与各地宴席和茶楼点心深度绑定。",
      "items": [
        {
          "id": "tw-hz-longjing",
          "title": "西湖狮峰明前龙井",
          "cityId": "hangzhou",
          "cityName": "杭州",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "绿茶皇后 · 杭帮茶宴之魂",
          "flavorProfile": "豆香馥郁 · 鲜醇甘爽",
          "soulIngredient": "狮峰山群体种明前嫩芽、虎跑泉水",
          "craftHighlight": "十大手法辉锅手工炒制 / 85℃玻璃杯冲泡",
          "famousShop": "杭州中国茶叶博物馆茶室 / 湖畔居茶楼",
          "description": "产于西湖狮峰、龙井、云栖、虎跑、梅家坞五核心产区，享「色绿、香郁、味甘、形美」四绝盛誉。明前嫩芽经抖、搭、搨、捺等十大手法炒制，冲泡后嫩豆香与兰花香扑鼻，亦是烹制龙井虾仁的灵魂。",
          "coord": [
            120.1215,
            30.2195
          ],
          "wiki": "西湖龙井",
          "query": "西湖龙井 茶汤 茶叶 实拍",
          "photoUrl": "/photos/tw-hz-longjing.jpg"
        },
        {
          "id": "tw-np-dahongpao",
          "title": "武夷山岩骨花香大红袍",
          "cityId": "fuzhou",
          "cityName": "武夷山/福州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "乌龙茶之王 · 岩韵标杆",
          "flavorProfile": "岩骨花香 · 醇厚回甘",
          "soulIngredient": "武夷丹霞正岩青心水仙肉桂拼配、九曲溪山泉",
          "craftHighlight": "萎凋摇青做青 / 传统炭火慢焙足火",
          "famousShop": "武夷山天心永乐禅寺茶席 / 福州三坊七巷茶馆",
          "description": "生长于武夷山三十六峰九十九岩的丹霞风化岩砾之中。经看青做青与传统木炭文火慢焙，茶汤呈深橙黄色，入口兼具桂花幽香与矿石般的「岩韵」，三泡四泡余韵犹存。",
          "coord": [
            117.9565,
            27.6415
          ],
          "wiki": "大红袍",
          "query": "武夷大红袍 岩茶 实拍",
          "photoUrl": "/photos/tw-np-dahongpao.jpg"
        },
        {
          "id": "tw-cz-dancong",
          "title": "潮州凤凰单丛鸭屎香",
          "cityId": "chaozhou",
          "cityName": "潮州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "茶中香水 · 潮汕工夫茶魂",
          "flavorProfile": "银花奇香 · 蜜韵悠长",
          "soulIngredient": "凤凰山乌岽古茶树鲜叶、红泥小火炉与若深小杯",
          "craftHighlight": "晒青浪青一树一香 / 关公巡城韩信点兵冲泡",
          "famousShop": "潮州牌坊街载阳茶馆 / 凤凰山茶农老铺",
          "description": "潮汕人「宁可三日无肉，不可一日无茶」。凤凰单丛采用单株采摘单株制法，衍生出银花香（鸭屎香）、蜜兰香、芝兰香等十大香型；以三杯小盖碗滚水高冲，瞬间香气盈室，是潮汕生腌与卤鹅的最佳伴侣。",
          "coord": [
            116.6425,
            23.6615
          ],
          "wiki": "凤凰单丛",
          "query": "潮州 凤凰单丛 工夫茶 实拍",
          "photoUrl": "/photos/tw-cz-dancong.jpg"
        },
        {
          "id": "tw-yn-puer",
          "title": "西双版纳勐海陈年熟普洱",
          "cityId": "xishuangbanna",
          "cityName": "西双版纳/昆明",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "可以喝的古董 · 早茶绝配",
          "flavorProfile": "陈香醇滑 · 红浓明亮",
          "soulIngredient": "澜沧江流域乔木大叶种晒青毛茶、勐海发酵菌群",
          "craftHighlight": "晒青渥堆发酵 / 石模压饼干仓陈化",
          "famousShop": "勐海茶厂老班章茶席 / 广州白天鹅早茶",
          "description": "选用云南大叶种晒青毛茶，经勐海独特水土渥堆发酵与岁月陈化，茶汤红浓如红酒，入口绵滑醇厚、毫无苦涩，散发出迷人的枣香、樟香与陈香，更是广府早茶「一盅两件」刮油解腻的首选。",
          "coord": [
            100.5015,
            21.9585
          ],
          "wiki": "普洱茶",
          "query": "云南 普洱茶 茶汤 茶饼 实拍",
          "photoUrl": "/photos/tw-yn-puer.jpg"
        },
        {
          "id": "tw-sz-biluochun",
          "title": "苏州洞庭东山明前碧螺春",
          "cityId": "suzhou",
          "cityName": "苏州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "花果香绿茶巅峰 · 吓煞人香",
          "flavorProfile": "花果清芬 · 绒毛浑身",
          "soulIngredient": "太湖洞庭东山与西山果茶间作一芽一叶",
          "craftHighlight": "茶果间作吸纳梅李花香 / 手工搓团显毫上投法冲泡",
          "famousShop": "苏州东山雕花楼茶席 / 观前街三万昌",
          "description": "因洞庭山茶树与枇杷、杨梅、白果、碧桃根脉相连，茶芽天然饱吸花果清香。干茶条索紧结蜷曲如螺、满披白毫，采用「先注水后投茶」的上投法冲泡，白云翻滚、清香袭人。",
          "coord": [
            120.4125,
            31.0785
          ],
          "wiki": "碧螺春",
          "query": "苏州 洞庭碧螺春 茶叶 实拍",
          "photoUrl": "/photos/tw-sz-biluochun.jpg"
        }
      ]
    },
    {
      "id": "famous-spirits",
      "title": "岁月陈酿 · 中华名酒与黄酒佳酿",
      "subtitle": "茅台酱香、五粮浓香、绍兴黄酒、杏花村汾酒与桂林三花",
      "regionBadge": "贵州 · 四川 · 浙江 · 山西 · 广西",
      "description": "从江南温酒持螯的绍兴花雕，到巴蜀云贵大曲固态发酵的酱香与浓香白酒，中国酒文化与各大菜系相伴相生。",
      "items": [
        {
          "id": "tw-zy-maotai",
          "title": "赤水河茅台镇53度酱香白酒",
          "cityId": "zunyi",
          "cityName": "遵义",
          "province": "gz",
          "provinceLabel": "贵州省",
          "schoolOrStyle": "酱香鼻祖 · 赤水河微生物奇迹",
          "flavorProfile": "酱香突出 · 空杯留香持久",
          "soulIngredient": "仁怀本地红缨子糯高粱、小麦高温大曲、赤水河水",
          "craftHighlight": "端午制曲重阳下沙 / 九次蒸煮八次发酵七次取酒五年窖藏",
          "famousShop": "遵义仁怀茅台中国酒文化城",
          "description": "离开茅台镇便酿不出的风土传奇。依托赤水河谷紫红泥土壤与封闭湿热微气候，采用本地小粒红缨子高粱，历经一年一个生产周期与陶坛长期陈酿，酒体微黄透明、酱香醇厚细腻。",
          "coord": [
            106.3785,
            27.8525
          ],
          "wiki": "茅台酒",
          "query": "贵州 茅台酒 酱香白酒 实拍",
          "photoUrl": "/photos/tw-zy-maotai.jpg"
        },
        {
          "id": "tw-yb-wuliangye",
          "title": "宜宾五粮液明代古窖浓香酒",
          "cityId": "yibin",
          "cityName": "宜宾",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "浓香型白酒大成之作",
          "flavorProfile": "香气悠久 · 味醇厚各味谐调",
          "soulIngredient": "高粱、大米、糯米、小麦、玉米五种粮食、岷江古河道水",
          "craftHighlight": "包包曲制曲 / 六百年明代活态老窖池跑窖发酵",
          "famousShop": "宜宾翠屏区长发升/利川永明代古窖池群",
          "description": "集高粱之香、大米之净、糯米之绵、小麦之冽、玉米之甜于一身。在连续发酵六百余年未曾间断的明代国保古窖池中，依靠古窖泥中数以亿计的己酸菌群孕育出窖香浓郁、甘美净爽的五粮琼浆。",
          "coord": [
            104.6285,
            28.7685
          ],
          "wiki": "五粮液",
          "query": "宜宾 五粮液 白酒 实拍",
          "photoUrl": "/photos/tw-yb-wuliangye.jpg"
        },
        {
          "id": "tw-sx-huadiao",
          "title": "绍兴鉴湖古法冬酿花雕黄酒",
          "cityId": "shaoxing",
          "cityName": "绍兴",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "东方酿造酒之魂 · 江南菜提鲜秘钥",
          "flavorProfile": "琥珀澄明 · 馥郁温和",
          "soulIngredient": "太湖精白糯米、优质小麦曲、绍兴鉴湖源头活水",
          "craftHighlight": "立冬投料立春开榨 / 泥头封坛荷叶裹口陈年窖藏",
          "famousShop": "绍兴咸亨酒店 / 中国黄酒博物馆",
          "description": "世界三大古酒之一。每年立冬水清冽时以鉴湖水浸米蒸饭，落缸发酵后至次年立春压榨，装入彩绘陶坛泥封陈藏。不仅温饮配茴香豆、大闸蟹极佳，更是东坡肉、醉蟹、佛跳墙不可或缺的灵魂。",
          "coord": [
            120.5815,
            29.9985
          ],
          "wiki": "绍兴酒",
          "query": "绍兴 花雕黄酒 咸亨酒店 实拍",
          "photoUrl": "/photos/tw-sx-huadiao.jpg"
        },
        {
          "id": "tw-ty-fenjiu",
          "title": "山西杏花村青花清香汾酒",
          "cityId": "taiyuan",
          "cityName": "汾阳/太原",
          "province": "sx",
          "provinceLabel": "山西省",
          "schoolOrStyle": "中国白酒清香之祖 · 牧童遥指处",
          "flavorProfile": "清香纯正 · 绵甜爽净",
          "soulIngredient": "晋中一把抓高粱、大麦豌豆清茬曲、杏花村古井水",
          "craftHighlight": "地缸分离固态发酵 / 清蒸二次清工艺",
          "famousShop": "汾阳杏花村老作坊遗址 / 太原晋菜馆",
          "description": "拥有六千年酿造史与一千五百年成名史。采用独特的大麦豌豆制曲，埋入地下陶缸进行彻底隔绝泥土杂味的固态发酵，「一清到底」，酒香清雅纯正，配山西过油肉与平遥牛肉最为相得益彰。",
          "coord": [
            111.7825,
            37.2655
          ],
          "wiki": "汾酒",
          "query": "山西 杏花村 汾酒 实拍",
          "photoUrl": "/photos/tw-ty-fenjiu.jpg"
        }
      ]
    }
  ]
};
