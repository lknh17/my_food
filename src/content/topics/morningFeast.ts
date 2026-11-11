import type { SpecialTopicPack } from "../types";

export const morningFeastPack: SpecialTopicPack = {
  "id": "morning-feast",
  "index": "专题二",
  "title": "碳水早点与早茶文化 · 清晨六点的中国烟火",
  "kicker": "MORNING FEAST & TEAHOUSE CULTURE",
  "subtitle": "从广府一盅两件、武汉过早、淮扬早茶到京津硬核早点与中原胡辣汤、巴蜀小面、西北早茶的全国清晨碳水全书",
  "lede": "中国人的一天从滚烫的碳水与茶香开始。广州西关茶楼里虾饺皇、烧卖、凤爪与艇仔粥的「一盅两件」；武汉街头热干面、三鲜豆皮、面窝与糊汤粉泡油条的「过早」交响；扬州富春的三丁包、翡翠烧卖与大煮烫干丝；上海弄堂的生煎小笼与四大金刚；天津煎饼果子嘎巴菜与老北京豆汁儿焦圈炒肝；开封逍遥镇胡辣汤配水煎包、洛阳头锅牛肉汤与西安腊汁肉夹馍；再到重庆板凳豌杂小面、乐山豆腐脑、海口骑楼老爸茶、宁夏吴忠八宝早茶与拉萨八廓街甜茶藏面——清晨六点，神州大地的灶火同时亮起。",
  "metrics": [
    {
      "label": "早点流派",
      "value": "8 大地域谱系 · 66 款名点",
      "note": "粤港早茶、武汉过早、淮扬江南、京津冀鲁、中原秦晋、巴蜀云贵、湘赣闽琼台、西北藏蒙"
    },
    {
      "label": "黄金搭档",
      "value": "一盅两件 · 豆皮面窝 · 胡辣汤两掺 · 烧饼豆浆",
      "note": "各地约定俗成的清晨碳水CP"
    },
    {
      "label": "黄金时段",
      "value": "凌晨 5:00 — 上午 10:30",
      "note": "赶头锅高汤与第一笼蒸点是行家铁律"
    },
    {
      "label": "覆盖名城",
      "value": "40+ 座早点重镇",
      "note": "从岭南骑楼茶居到塞上早茶店"
    }
  ],
  "subGroups": [
    {
      "id": "cantonese-yumcha",
      "title": "广府与港澳「一盅两件」早茶席",
      "subtitle": "虾饺皇、烧卖、虎皮凤爪、红米肠与荔湾生滚粥的茶楼晨光",
      "regionBadge": "广州 · 顺德 · 香港 · 澳门",
      "description": "广府早茶是饮茶与点心的美学巅峰，一壶菊普配虾饺、烧卖、凤爪、肠粉与生滚粥，茶楼粤语声里尽是岭南烟火。",
      "items": [
        {
          "id": "mf-gz-xiagao",
          "title": "晶莹笋尖虾饺皇",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "广府点心四大天王之首",
          "flavorProfile": "皮透如玉 · 虾脆笋爽",
          "soulIngredient": "澄面、青虾仁、春笋丁、猪肥膘",
          "craftHighlight": "沸水烫澄面拍薄皮捏十二道弯梳褶 / 旺火蒸三分钟",
          "famousShop": "广州白天鹅宾馆玉堂春暖 / 陶陶居总店",
          "description": "澄面烫熟拍成半透明薄皮，捏足十二道弯梳褶，裹入整颗海虾仁与春笋丁，蒸熟后白里透红、爽弹爆汁。",
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
          "title": "干蒸蟹籽鲜虾烧卖",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "茶楼双璧 · 开口花篮点心",
          "flavorProfile": "肉爽虾弹 · 蟹籽鲜香",
          "soulIngredient": "鸡蛋黄碱水皮、半肥瘦猪肉、鲜虾仁、冬菇、蟹籽",
          "craftHighlight": "石榴花袋形开口包制 / 顶点橙红蟹籽旺火干蒸",
          "famousShop": "广州莲香楼总店 / 香港陆羽茶室",
          "description": "明黄蛋皮包裹切丁猪肉、爽脆虾仁与北菇，捏成石榴花袋状并点缀蟹籽，肉汁充盈、弹牙多汁，与虾饺并称早茶双璧。",
          "coord": [
            113.2595,
            23.1185
          ],
          "wiki": "干蒸烧卖",
          "query": "广州 干蒸烧卖 实拍",
          "photoUrl": "/photos/mf-gz-shaomai.jpg"
        },
        {
          "id": "mf-gz-fengzhua",
          "title": "鲍汁虎皮蒸凤爪",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "茶楼软糯脱骨第一名点",
          "flavorProfile": "虎皮起皱 · 豉香脱骨",
          "soulIngredient": "三黄鸡爪、麦芽糖、阳江黑豆豉、紫金椒酱",
          "craftHighlight": "刷麦芽糖滚油炸起虎皮 / 冰水泡发再配豉汁蒸透",
          "famousShop": "广州广州酒家总店 / 点都德",
          "description": "鸡爪刷麦芽糖下油锅炸出蓬松虎皮皱纹，冷水泡至皮肉分离后拌入阳江豆豉与蒜蓉紫金酱蒸透，一抿脱骨、胶质浓郁。",
          "coord": [
            113.2685,
            23.1255
          ],
          "wiki": "豉汁凤爪",
          "query": "广州 豉汁蒸凤爪 实拍",
          "photoUrl": "/photos/mf-gz-fengzhua.jpg"
        },
        {
          "id": "mf-gz-changfen-zaocha",
          "title": "金莎脆皮红米肠",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "早茶三层口感新派巅峰",
          "flavorProfile": "外糯中脆 · 虾肉Q弹",
          "soulIngredient": "红曲石磨米浆、越南威化网皮、九节虾仁、花生酱",
          "craftHighlight": "红米布拉肠皮裹酥炸脆网与鲜虾仁 / 切段淋双酱",
          "famousShop": "广州点都德总店 / 陶陶居",
          "description": "红曲石磨米浆拉出柔滑红肠皮，内裹金黄酥脆的油炸威化网皮与弹牙鲜虾仁，一口咬下外软、中脆、内弹三重奏。",
          "coord": [
            113.2715,
            23.1285
          ],
          "wiki": "红米肠",
          "query": "广州 金莎红米肠 实拍",
          "photoUrl": "/photos/mf-gz-changfen-zaocha.jpg"
        },
        {
          "id": "mf-gz-chashaobao",
          "title": "蚝皇开口蜜汁叉烧包",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "广式包点四大天王",
          "flavorProfile": "高身雀笼 · 爆口露馅",
          "soulIngredient": "老面发酵低筋面皮、梅头蜜汁叉烧丁、蚝油芡汁",
          "craftHighlight": "老面自然发酵蒸出三瓣笑口 / 蚝皇叉烧浓芡作馅",
          "famousShop": "广州北园酒家 / 香港添好运",
          "description": "采用老面种自然发酵，旺火蒸制后包顶自然爆裂成三瓣雀笼笑口，露出红亮浓稠的蚝油蜜汁叉烧馅，松软香甜。",
          "coord": [
            113.2555,
            23.1165
          ],
          "wiki": "叉烧包",
          "query": "广州 蜜汁叉烧包 实拍",
          "photoUrl": "/photos/mf-gz-chashaobao.jpg"
        },
        {
          "id": "mf-gz-liushabao",
          "title": "咸蛋黄流沙奶黄包",
          "cityId": "guangzhou",
          "cityName": "广州/香港",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "港粤早茶爆浆甜点代表",
          "flavorProfile": "金沙流心 · 咸甜交融",
          "soulIngredient": "高邮红心咸蛋黄、黄油淡奶油、吉士粉、牛乳面皮",
          "craftHighlight": "烤熟咸蛋黄碾沙配黄油冷冻成芯 / 蒸热化作金沙流心",
          "famousShop": "香港半岛嘉麟楼 / 广州炳胜品味",
          "description": "选用起沙流油的红心咸蛋黄烘烤碾碎，调和黄油与椰浆制成冻芯，趁热撕开松软白面皮，滚烫金黄流沙倾泻而出。",
          "coord": [
            113.3215,
            23.1245
          ],
          "wiki": "流沙包",
          "query": "广式 咸蛋黄流沙包 实拍",
          "photoUrl": "/photos/mf-gz-liushabao.jpg"
        },
        {
          "id": "mf-gz-tingzaizhou",
          "title": "西关荔湾艇仔粥",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "珠江水上疍家经典生滚粥",
          "flavorProfile": "粥底绵滑 · 十料咸鲜",
          "soulIngredient": "开花绵白粥底、叉烧丝、烧鸭丝、鲜虾、浮皮、油条花生",
          "craftHighlight": "滚沸白粥冲入十余种生熟海陆配料 / 撒葱花胡椒",
          "famousShop": "广州荔湾泮溪酒家 / 伍湛记粥铺",
          "description": "源于珠江荔枝湾花艇水上人家。滚烫绵密的瑶柱白粥底直接冲入鱼片、海蜇、浮皮、烧鸭丝、叉烧丝与脆花生油条。",
          "coord": [
            113.2355,
            23.1195
          ],
          "wiki": "艇仔粥",
          "query": "广州 荔湾艇仔粥 实拍",
          "photoUrl": "/photos/mf-gz-tingzaizhou.jpg"
        },
        {
          "id": "mf-gz-jidizhou",
          "title": "生滚状元及第粥",
          "cityId": "shunde",
          "cityName": "顺德/广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "岭南科举吉兆生滚粥",
          "flavorProfile": "猪杂爽脆 · 米水交融",
          "soulIngredient": "猪瘦肉丸、猪肝片、猪粉肠、腐竹瑶柱白粥底",
          "craftHighlight": "粥底慢火煲至米水合一 / 鲜切三味猪杂下锅生滚十秒",
          "famousShop": "顺德大良太艮堡毋米粥 / 广州伍湛记",
          "description": "以猪肉丸、猪肝、猪粉肠三味内脏谐音「三元及第」。腐竹白果慢熬的绵绸米粥滚沸后下猪杂生滚断生，滑嫩无腥。",
          "coord": [
            113.2512,
            23.1138
          ],
          "wiki": "及第粥",
          "query": "广州 状元及第粥 实拍",
          "photoUrl": "/photos/mf-gz-jidizhou.jpg"
        },
        {
          "id": "mf-gz-zhengpaigu",
          "title": "豉汁陈皮蒸排骨",
          "cityId": "guangzhou",
          "cityName": "广州",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "茶楼蒸笼肉食头牌",
          "flavorProfile": "肉嫩骨香 · 芋头吸汁",
          "soulIngredient": "新鲜猪肋排、阳江豆豉、新会陈皮末、荔浦芋头丁",
          "craftHighlight": "排骨啤水去血抓生粉锁汁 / 垫荔浦芋头旺火笼蒸",
          "famousShop": "广州南园酒家 / 莲香楼",
          "description": "精选斩成小段的猪小排，用流动清水漂净血水后裹阳江黑豆豉、蒜蓉与新会陈皮末，垫上粉糯荔浦芋头蒸至滑嫩爽脆。",
          "coord": [
            113.2618,
            23.1055
          ],
          "wiki": "豉汁蒸排骨",
          "query": "广州 豉汁蒸排骨 实拍",
          "photoUrl": "/photos/mf-gz-zhengpaigu.jpg"
        },
        {
          "id": "mf-gz-luobogao",
          "title": "香煎瑶柱腊味萝卜糕",
          "cityId": "guangzhou",
          "cityName": "广州/香港",
          "province": "gd",
          "provinceLabel": "广东省",
          "schoolOrStyle": "广式贺年与早茶煎点之王",
          "flavorProfile": "外焦里糯 · 腊香浓郁",
          "soulIngredient": "增城迟菜心白萝卜丝、广式腊肠腊肉、北海道瑶柱、粘米粉",
          "craftHighlight": "萝卜刨丝煮软撞入粘米浆蒸熟 / 铁板双面慢煎金黄",
          "famousShop": "广州陶陶居 / 香港镛记酒家",
          "description": "清甜白萝卜刨粗丝，混入爆香的广式皇上皇腊肠、虾米与瑶柱丝蒸成糕体，早茶时切厚片在平底铁板煎至两面金黄微焦。",
          "coord": [
            113.2498,
            23.1152
          ],
          "wiki": "萝卜糕",
          "query": "广式 香煎腊味萝卜糕 实拍",
          "photoUrl": "/photos/mf-gz-luobogao.jpg"
        }
      ]
    },
    {
      "id": "wuhan-guozao",
      "title": "江城武汉「过早」碳水王国",
      "subtitle": "热干面、三鲜豆皮、面窝、糊汤粉与重油烧梅的九省通衢晨曲",
      "regionBadge": "武汉 · 荆楚",
      "description": "武汉人把吃早餐尊称为「过早」，一个月不重样的碳水交响曲在街头巷尾同时奏响，边走边端碗是江城独有的清晨风景。",
      "items": [
        {
          "id": "mf-wh-reganmian",
          "title": "蔡林记石磨麻酱热干面",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "武汉过早绝对盟主",
          "flavorProfile": "麻酱浓醇 · 筋道爽滑",
          "soulIngredient": "汉味粗圆碱水面、黄陂纯黑芝麻酱、辣萝卜丁、酸豆角",
          "craftHighlight": "碱水面八分熟拌香油掸面 / 沸水滚烫五秒淋浓麻酱",
          "famousShop": "武汉蔡林记吉庆街店 / 赵师傅天天红油热干面",
          "description": "武汉过早第一名片。碱水面先煮至八分熟拌香油摊晾，吃时沸水竹篓烫热五秒，浇满醇厚石磨芝麻酱、卤水汁与脆萝卜丁。",
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
          "title": "老通城三鲜糯米豆皮",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "过早双雄 · 软糯焦香巅峰",
          "flavorProfile": "蛋皮金黄 · 糯米卤香",
          "soulIngredient": "脱壳绿豆大米浆、土鸡蛋、珍珠糯米、鲜肉冬笋香菇丁",
          "craftHighlight": "大铁锅摊绿豆蛋皮铺蒸糯米与三鲜臊 / 扣盘撒葱煎脆",
          "famousShop": "武汉老通城吉庆街店 / 严老幺重油豆皮",
          "description": "绿豆与大米磨浆在大平底锅摊出薄皮，刷满土鸡蛋液，翻面铺上蒸熟糯米饭与冬笋、肉丁、香菇三鲜卤臊，外焦内糯。",
          "coord": [
            114.3055,
            30.5925
          ],
          "wiki": "武汉豆皮",
          "query": "武汉 老通城三鲜豆皮 实拍",
          "photoUrl": "/photos/mf-wh-doupi.jpg"
        },
        {
          "id": "mf-wh-mianwo",
          "title": "汉口焦脆葱香面窝",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "汉味过早百搭炸物",
          "flavorProfile": "四周厚软 · 中间焦脆",
          "soulIngredient": "晚稻大米浆、黄豆浆、湖北红头香葱、白芝麻",
          "craftHighlight": "中间凸起凹铁勺浇米浆撒黑芝麻 / 下滚油炸出金黄圆环",
          "famousShop": "武汉兰陵路顶好牛肉面窝 / 沈阳路面窝摊",
          "description": "清光绪年间汉口创制。特制中间凸起的铁勺浇入大米黄豆混合浆，下油锅炸出外圈厚软、内圈焦脆如锅巴的金黄圆环。",
          "coord": [
            114.3125,
            30.5785
          ],
          "wiki": "面窝",
          "query": "武汉 炸面窝 实拍",
          "photoUrl": "/photos/mf-wh-mianwo.jpg"
        },
        {
          "id": "mf-wh-humijiu",
          "title": "孝感桂花糊米酒配蛋酒",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "过早解腻甜润双汤",
          "flavorProfile": "桂香浓郁 · 糯米汤圆绵滑",
          "soulIngredient": "孝感朱湖糯米酒酿、细糯米粉小汤圆、糖桂花、土鸡蛋",
          "craftHighlight": "沸水冲滚打散酒酿与鸡蛋花 / 勾米浆下拇指糯米圆子",
          "famousShop": "武汉户部巷糊米酒老铺 / 兰陵路早点摊",
          "description": "武汉人吃热干面或豆皮必配一碗甜润汤水。孝感甜酒酿煮沸勾薄芡、下入软糯小圆子并撒满金桂，或滚水冲开蛋花成蛋酒。",
          "coord": [
            114.2895,
            30.5955
          ],
          "wiki": "糊米酒",
          "query": "武汉 桂花糊米酒 蛋酒 实拍",
          "photoUrl": "/photos/mf-wh-humijiu.jpg"
        },
        {
          "id": "mf-wh-nuomi-youtiao",
          "title": "汉味甜咸糯米包油条",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "拿在手里的过早能量棒",
          "flavorProfile": "外糯内脆 · 椒盐或白糖双味",
          "soulIngredient": "木甑蒸珍珠糯米饭、现炸酥脆油条、榨菜丁肉松黄豆粉",
          "craftHighlight": "湿布摊开滚烫糯米饭撒料 / 裹紧半根脆油条两头捏实",
          "famousShop": "武汉粮道街游氏糯米包油条 / 水陆街过早摊",
          "description": "木甑蒸透的滚烫糯米饭在湿布上压成厚片，咸口撒榨菜丁、香干丝、肉松与椒盐黄豆粉，甜口撒白糖黑芝麻，卷紧脆油条。",
          "coord": [
            114.3015,
            30.5815
          ],
          "wiki": "糯米包油条",
          "query": "武汉 糯米包油条 实拍",
          "photoUrl": "/photos/mf-wh-nuomi-youtiao.jpg"
        },
        {
          "id": "mf-wh-hutangfen",
          "title": "鲜鱼糊汤粉泡现炸油条",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "码头工人御寒神仙搭档",
          "flavorProfile": "鱼汤糊鲜 · 黑胡椒暴烈",
          "soulIngredient": "长江野生小鲫鱼、细圆水米粉、重黑胡椒粉、酥脆油条",
          "craftHighlight": "小鲫鱼通宵熬化至骨肉成糊 / 烫细米粉泡酥油条",
          "famousShop": "武汉户部巷徐嫂糊汤粉 / 斌斌鲜鱼糊汤粉",
          "description": "被誉为「武汉人的羊肉泡馍」。用几百斤野生小喜头鱼（鲫鱼）通宵熬至鱼肉鱼骨彻底融化成浓稠鱼糊，重下黑胡椒，泡油条吃。",
          "coord": [
            114.2945,
            30.5485
          ],
          "wiki": "糊汤粉",
          "query": "武汉 鲜鱼糊汤粉 油条 实拍",
          "photoUrl": "/photos/mf-wh-hutangfen.jpg"
        },
        {
          "id": "mf-wh-shaomei",
          "title": "严氏黑胡椒重油烧梅",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "重油重胡椒的硬核糯米烧卖",
          "flavorProfile": "猪油润透 · 黑胡椒辛香",
          "soulIngredient": "珍珠糯米、大颗粒猪腿肉丁、香菇丁、大量黑胡椒与熟猪油",
          "craftHighlight": "薄面皮捏成石榴花口 / 重猪油黑胡椒拌糯米旺火猛蒸",
          "famousShop": "武汉严老幺烧麦总店 / 德润福严氏烧麦",
          "description": "不同于江南或粤式烧卖，武汉烧梅脾气火辣：糯米饭拌入大量熟猪油、大块肉丁与重手黑胡椒，蒸熟后皮薄透明、辛香过瘾。",
          "coord": [
            114.2865,
            30.5792
          ],
          "wiki": "武汉烧梅",
          "query": "武汉 重油烧梅 烧卖 实拍",
          "photoUrl": "/photos/mf-wh-shaomei.jpg"
        },
        {
          "id": "mf-wh-jiguanjiao",
          "title": "老汉口酥脆鸡冠饺",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "形如鸡冠的巴掌大油炸面饺",
          "flavorProfile": "外皮起泡酥脆 · 内里松软肉香",
          "soulIngredient": "老面发酵面团、鲜猪肉葱花馅",
          "craftHighlight": "发酵面团擀圆包肉馅捏成鸡冠形 / 滚油炸至金黄鼓胀",
          "famousShop": "武汉水陆街李记鸡冠饺 / 统一街早点摊",
          "description": "老面发酵的面团擀成厚圆片，包入一抹鲜甜猪肉葱花馅，对折捏出鸡冠花边，下滚油炸至巴掌大小、外皮酥脆内里蓬松。",
          "coord": [
            114.2795,
            30.5688
          ],
          "wiki": "鸡冠饺",
          "query": "武汉 鸡冠饺 实拍",
          "photoUrl": "/photos/mf-wh-jiguanjiao.jpg"
        },
        {
          "id": "mf-wh-huanxituo",
          "title": "麻蓉滚芝麻欢喜坨",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "荆楚百年喜庆油炸糯米团",
          "flavorProfile": "外脆里糯 · 咬开空心麻甜",
          "soulIngredient": "孝感水磨糯米粉、黑芝麻红糖馅、满铺白芝麻",
          "craftHighlight": "糯米团裹满白芝麻入温油慢炸膨胀 / 外壳焦脆内壁软糯",
          "famousShop": "武汉三镇民生甜食馆 / 大成路早点摊",
          "description": "在武汉已有百余年历史。糯米粉揉团包入黑芝麻糖馅，外滚一层密密麻麻的白芝麻，下油锅慢炸至体积膨胀一倍、内里中空。",
          "coord": [
            114.2912,
            30.5835
          ],
          "wiki": "欢喜坨",
          "query": "武汉 欢喜坨 麻团 实拍",
          "photoUrl": "/photos/mf-wh-huanxituo.jpg"
        },
        {
          "id": "mf-wh-dousi",
          "title": "黄陂炕腊肉绿豆豆丝",
          "cityId": "wuhan",
          "cityName": "武汉",
          "province": "hb",
          "provinceLabel": "湖北省",
          "schoolOrStyle": "黄陂新洲冬春过早乡愁",
          "flavorProfile": "外皮金黄焦脆 · 腊肉咸香",
          "soulIngredient": "脱皮绿豆与大米磨浆、黄陂农家烟熏腊肉、蒜苗",
          "craftHighlight": "绿豆米浆摊大锅烙成饼切宽丝 / 腊肉油脂小火慢炕焦黄",
          "famousShop": "武汉黄陂老街豆丝馆 / 户部巷明氏豆丝",
          "description": "大米与绿豆按比例磨浆，在大铁锅中摊烙成薄饼再切粗丝；既可用牛骨汤煮食，更经典的是用农家腊肉丁煸出油脂慢火炕脆。",
          "coord": [
            114.3215,
            30.6125
          ],
          "wiki": "武汉豆丝",
          "query": "武汉 炕豆丝 实拍",
          "photoUrl": "/photos/mf-wh-dousi.jpg"
        }
      ]
    },
    {
      "id": "huaiyang-jiangnan",
      "title": "淮扬早茶与苏沪浙水乡早点",
      "subtitle": "富春三丁包、烫干丝、靖江蟹黄汤包、上海生煎四大金刚与温州糯米饭",
      "regionBadge": "扬州 · 上海 · 泰州 · 温州",
      "description": "「早上皮包水」的淮扬早茶刀工入微；上海石库门弄堂里生煎小笼与四大金刚热气腾腾；浙南温州糯米饭更是一方碳水传奇。",
      "items": [
        {
          "id": "mf-yz-sandingbao",
          "title": "扬州富春三丁包",
          "cityId": "yangzhou",
          "cityName": "扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "淮扬早茶天下第一包",
          "flavorProfile": "鸡丁肉丁笋丁 · 酱香松软",
          "soulIngredient": "散养母鸡丁、五花猪肉丁、天目冬笋丁、老酵面皮",
          "craftHighlight": "三丁精细切骰子块以鸡汤虾籽烧卤 / 发酵面皮捏三十二褶",
          "famousShop": "扬州富春茶社得胜桥总店 / 冶春茶社",
          "description": "乾隆南巡盛赞的淮扬包点之王。以鸡丁之鲜、肉丁之腴、冬笋丁之脆合一，老面外皮吸饱咸甜卤汁却不塌底，肥而不腻。",
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
          "title": "扬州双绝翡翠烧卖",
          "cityId": "yangzhou",
          "cityName": "扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "朱自清笔下淮扬双绝",
          "flavorProfile": "皮薄见绿 · 火腿猪油甜润",
          "soulIngredient": "扬州高杆青菜叶、熟猪油、金华火腿末、绵白糖",
          "craftHighlight": "青菜叶焯水剁茸挤干拌熟猪油白糖 / 薄皮包捏撒火腿末",
          "famousShop": "扬州富春茶社 / 趣园茶社",
          "description": "与千层油糕并称「扬州双绝」。专取霜打后的小青菜嫩叶切极细末，拌入熟猪油与白糖，蒸熟后皮薄如纸、碧绿如翡翠。",
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
          "title": "淮扬大煮与虾籽烫干丝",
          "cityId": "yangzhou",
          "cityName": "扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "淮扬早茶头道刀工绝活",
          "flavorProfile": "片薄如纸 · 丝细如发",
          "soulIngredient": "扬州特制方白干、里下河大虾籽、嫩姜丝、高邮麻油",
          "craftHighlight": "一寸厚白干横批二十八片再切细丝 / 沸水三烫淋虾籽麻油",
          "famousShop": "扬州趣园茶社 / 冶春茶社御马头店",
          "description": "扬州早茶必点开胃头牌。一块白豆腐干被大厨横批成二十余张薄片再切极细丝，沸水反复焯烫去豆腥，堆成宝塔淋虾籽香油。",
          "coord": [
            119.4285,
            32.4015
          ],
          "wiki": "烫干丝",
          "query": "扬州 虾籽烫干丝 实拍",
          "photoUrl": "/photos/mf-yz-tanggansi.jpg"
        },
        {
          "id": "mf-yz-xiehuang-tangbao",
          "title": "靖江吸管蟹黄大汤包",
          "cityId": "yangzhou",
          "cityName": "泰州/扬州",
          "province": "js",
          "provinceLabel": "江苏省",
          "schoolOrStyle": "三十二道工序会呼吸的液体包子",
          "flavorProfile": "皮薄如蝉翼 · 蟹油金汤满溢",
          "soulIngredient": "阳澄湖/固城湖母蟹蟹黄蟹肉、猪皮冻、老母鸡汤",
          "craftHighlight": "熬制蟹油皮冻包入吹弹可破薄皮 / 轻轻提慢慢移先开窗后喝汤",
          "famousShop": "靖江鸿运楼 / 扬州冶春茶社",
          "description": "制作多达三十二道工序。蒸熟的汤包大如满月、汤汁晃动可见，必须遵循「轻轻提、慢慢移、先开窗、后喝汤」十二字口诀。",
          "coord": [
            120.2685,
            32.0155
          ],
          "wiki": "蟹黄汤包",
          "query": "靖江 蟹黄汤包 实拍",
          "photoUrl": "/photos/mf-yz-xiehuang-tangbao.jpg"
        },
        {
          "id": "mf-sh-shengjian",
          "title": "上海大壶春底脆生煎馒头",
          "cityId": "shanghai",
          "cityName": "上海",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "海派弄堂煎包双流派代表",
          "flavorProfile": "底板焦脆 · 芝麻葱香爆汁",
          "soulIngredient": "半发酵面皮、黑毛猪腿肉馅、肉皮冻、香葱白芝麻",
          "craftHighlight": "巨型平底铁锅油水同煎 / 三次洒水焖熟撒满香葱芝麻",
          "famousShop": "上海大壶春四川中路总店 / 东泰祥生煎馆",
          "description": "上海人称包子为「馒头」。大壶春全发面生煎松软吸汁，小杨与东泰祥则汤汁丰盈；平底大黑锅煎至底板金黄酥脆。",
          "coord": [
            121.4692,
            31.2235
          ],
          "wiki": "生煎馒头",
          "query": "上海 生煎馒头 生煎包 实拍",
          "photoUrl": "/photos/mf-sh-shengjian.jpg"
        },
        {
          "id": "mf-sh-nanxiang",
          "title": "豫园南翔皮冻小笼包",
          "cityId": "shanghai",
          "cityName": "上海",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "海派百年非遗灌汤小笼",
          "flavorProfile": "皮薄十八褶 · 汤清馅鲜",
          "soulIngredient": "不发酵精白面皮、猪腿肉糜、肉皮清冻、镇江香醋姜丝",
          "craftHighlight": "肉糜揉入碎肉皮冻捏十八褶 / 小竹笼急火蒸五分钟",
          "famousShop": "上海城隍庙南翔馒头店 / 富春小笼",
          "description": "始于清光绪嘉定南翔镇。每只小笼重仅四钱却捏足十八道以上细褶，蒸后肉皮冻化作一包鲜汤，配细如发丝的姜丝香醋。",
          "coord": [
            121.4925,
            31.2275
          ],
          "wiki": "南翔小笼包",
          "query": "上海 南翔小笼包 实拍",
          "photoUrl": "/photos/mf-sh-nanxiang.jpg"
        },
        {
          "id": "mf-sh-sida-jingang",
          "title": "上海弄堂四大金刚",
          "cityId": "shanghai",
          "cityName": "上海",
          "province": "sh",
          "provinceLabel": "上海市",
          "schoolOrStyle": "石库门清晨国民早餐四件套",
          "flavorProfile": "大饼裹油条 · 咸浆配粢饭",
          "soulIngredient": "炭炉酥大饼、现炸油条、黑米肉松粢饭团、紫菜虾皮咸豆浆",
          "craftHighlight": "炭桶烘烤葱油大饼折裹脆油条 / 滚豆浆冲酱油虾皮油条段凝花",
          "famousShop": "上海肇周路耳光馄饨周边 / 健康夜市大饼油条",
          "description": "大饼、油条、粢饭团、豆浆合称海派「四大金刚」。一碗浮着油条段、榨菜末、紫菜虾皮与辣油的絮状咸豆浆配大饼裹油条。",
          "coord": [
            121.4755,
            31.2305
          ],
          "wiki": "上海四大金刚",
          "query": "上海 咸豆浆 大饼油条 粢饭团 实拍",
          "photoUrl": "/photos/mf-sh-sida-jingang.jpg"
        },
        {
          "id": "mf-wz-nuomifan",
          "title": "温州猪油渣肉汤浇糯米饭",
          "cityId": "wenzhou",
          "cityName": "温州",
          "province": "zj",
          "provinceLabel": "浙江省",
          "schoolOrStyle": "浙南头号碳水思乡符号",
          "flavorProfile": "粒粒晶莹有嚼劲 · 油条碎肉汤醇香",
          "soulIngredient": "浙南长粒乌牛早糯米、五花肉香菇卤汤、老油条碎或猪油渣",
          "craftHighlight": "木桶猛火蒸出粒粒分明糯米饭 / 铺满酥脆油条碎浇滚烫肉燥汤",
          "famousShop": "温州九山湖老字号糯米饭 / 三姐妹炊饭",
          "description": "温州人走遍世界最想念的一碗早餐。木桶蒸出的糯米饭粒粒分明有韧劲，顶上铺满复炸得嘎嘣脆的油条碎，浇一勺香菇肉汤。",
          "coord": [
            120.6655,
            28.0125
          ],
          "wiki": "温州糯米饭",
          "query": "温州 糯米饭 油条肉汤 实拍",
          "photoUrl": "/photos/mf-wz-nuomifan.jpg"
        }
      ]
    },
    {
      "id": "north-hardcore",
      "title": "京津冀鲁北方硬核早点江湖",
      "subtitle": "天津煎饼果子嘎巴菜、老北京豆汁焦圈炒肝、济南甜沫与保定驴肉火烧",
      "regionBadge": "天津 · 北京 · 山东 · 河北",
      "description": "北方早点扎实豪迈：天津卫在早餐上讲究到极致，老北京胡同里豆汁焦圈炒肝传承数百年，齐鲁甜沫油旋与燕赵热驴火更是硬核。",
      "items": [
        {
          "id": "mf-tj-jianbing",
          "title": "天津石磨绿豆面煎饼果子",
          "cityId": "tianjin",
          "cityName": "天津",
          "province": "tj",
          "provinceLabel": "天津市",
          "schoolOrStyle": "津门早点第一图腾",
          "flavorProfile": "绿豆葱香 · 馃篦儿焦脆",
          "soulIngredient": "带皮石磨绿豆面糊、小香葱、土鸡蛋、果子（油条）或果篦儿",
          "craftHighlight": "带皮绿豆水磨成浆铁铛刮圆 / 磕双蛋撒葱花卷薄脆刷甜面酱",
          "famousShop": "天津南楼煎饼 / 二嫂子煎饼果子",
          "description": "天津人对煎饼果子有严格教规：必须用纯绿豆面加小米面石磨调糊，绝不乱加火腿生菜，只打鸡蛋、撒葱花，卷刚炸的果篦儿。",
          "coord": [
            117.2008,
            39.0842
          ],
          "wiki": "煎饼果子",
          "query": "天津 绿豆面煎饼果子 实拍",
          "photoUrl": "/photos/mf-tj-jianbing.jpg"
        },
        {
          "id": "mf-tj-gabacai",
          "title": "天津大福来醇卤锅巴菜",
          "cityId": "tianjin",
          "cityName": "天津",
          "province": "tj",
          "provinceLabel": "天津市",
          "schoolOrStyle": "津门独有卤汁绿豆柳叶煎饼",
          "flavorProfile": "五香醇卤 · 麻酱腐乳交融",
          "soulIngredient": "绿豆小米煎饼切柳叶条、三十味香料清卤、小磨麻酱、红腐乳汁",
          "craftHighlight": "绿豆薄饼晾干切柳叶条 / 滚卤浸润三秒盛碗淋麻酱腐乳香菜",
          "famousShop": "天津大福来锅巴菜总店 / 真素诚",
          "description": "天津人俗称「嘎巴菜」。将绿豆与小米面摊成的薄煎饼切成柳叶细条，在浓稠五香淀粉卤汁中轻轻一滚，浇上芝麻酱与腐乳汁。",
          "coord": [
            117.2155,
            39.0915
          ],
          "wiki": "锅巴菜",
          "query": "天津 嘎巴菜 锅巴菜 实拍",
          "photoUrl": "/photos/mf-tj-gabacai.jpg"
        },
        {
          "id": "mf-tj-zhagao",
          "title": "天津耳朵眼现炸豆沙炸糕",
          "cityId": "tianjin",
          "cityName": "天津",
          "province": "tj",
          "provinceLabel": "天津市",
          "schoolOrStyle": "津门三绝 · 金黄酥脆糯米糕",
          "flavorProfile": "外皮酥脆起泡 · 红豆桂花甜糯",
          "soulIngredient": "水磨江米（糯米）发酵面团、天津红小豆熬制桂花豆沙、香油",
          "craftHighlight": "糯米水磨发酵包红豆沙 / 140℃温油翻炸至金黄酥壳",
          "famousShop": "天津耳朵眼炸糕东北角总店 / 平湖路桂发祥",
          "description": "因创始店铺紧靠北门外耳朵眼胡同得名。水磨糯米粉经发酵后包入红糖桂花赤豆沙，温油炸至外皮金黄酥脆、内里绵软不粘牙。",
          "coord": [
            117.1912,
            39.1465
          ],
          "wiki": "耳朵眼炸糕",
          "query": "天津 耳朵眼炸糕 实拍",
          "photoUrl": "/photos/mf-tj-zhagao.jpg"
        },
        {
          "id": "mf-bj-douzhi",
          "title": "老北京酸香豆汁儿配焦圈",
          "cityId": "beijing",
          "cityName": "北京",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "京城胡同饮食试金石",
          "flavorProfile": "酸香微馊回甜 · 焦圈酥脆满口",
          "soulIngredient": "绿豆粉丝水自然发酵生豆汁、千年老油炸焦圈、水疙瘩辣咸菜丝",
          "craftHighlight": "生豆汁小火慢熬似沸非沸 / 配金黄脆焦圈与辣油咸菜丝",
          "famousShop": "北京磁器口锦馨豆汁店 / 牛街老磁器口豆汁",
          "description": "老北京人检验地道与否的灵魂早点。做绿豆粉丝剩下的浆水发酵后慢火熬熟，灰绿浓稠、酸香回甜，一口热豆汁咬一口脆焦圈。",
          "coord": [
            116.3875,
            39.8895
          ],
          "wiki": "豆汁",
          "query": "老北京 豆汁 焦圈 实拍",
          "photoUrl": "/photos/mf-bj-douzhi.jpg"
        },
        {
          "id": "mf-bj-chaogan",
          "title": "北京天兴居蒜香炒肝配包子",
          "cityId": "beijing",
          "cityName": "北京",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "不用筷子转碗喝的京味名吃",
          "flavorProfile": "汤汁晶莹红亮 · 肠肥肝嫩蒜香",
          "soulIngredient": "猪肥肠段、猪肝片、大量生熟大蒜末、骨汤红薯淀粉浓芡",
          "craftHighlight": "肥肠慢炖软烂配肝片骨汤勾浓芡 / 出锅砸入重手生蒜末",
          "famousShop": "北京天兴居鲜鱼口总店 / 姚记炒肝",
          "description": "虽名「炒肝」实为「熬肝」。洗净炖烂的猪大肠段与嫩肝片在酱色骨汤中勾入透亮浓芡，砸入海量蒜末，不用勺筷，托碗转着喝。",
          "coord": [
            116.4015,
            39.8965
          ],
          "wiki": "炒肝",
          "query": "北京 炒肝 包子 实拍",
          "photoUrl": "/photos/mf-bj-chaogan.jpg"
        },
        {
          "id": "mf-bj-miancha",
          "title": "老北京糜子面芝麻酱面茶",
          "cityId": "beijing",
          "cityName": "北京",
          "province": "bj",
          "provinceLabel": "北京市",
          "schoolOrStyle": "铺满麻酱椒盐转碗吸溜的暖粥",
          "flavorProfile": "麻酱浓厚 · 椒盐小米奇香",
          "soulIngredient": "糜子面与小米面糊、纯白芝麻酱、花椒盐、熟白芝麻",
          "craftHighlight": "糜子面熬成浓稠米糊 / 淋满芝麻酱圆圈撒椒盐转碗吸食",
          "famousShop": "北京护国寺小吃总店 / 大兴胡同面茶",
          "description": "用糜子面与小米面熬成滚烫稠糊，面顶沿碗边淋上一层厚厚的澥芝麻酱，撒满现焙花椒盐与芝麻，托起碗沿边转边吸，每口皆有酱。",
          "coord": [
            116.3765,
            39.9325
          ],
          "wiki": "面茶",
          "query": "老北京 面茶 芝麻酱 实拍",
          "photoUrl": "/photos/mf-bj-miancha.jpg"
        },
        {
          "id": "mf-jn-tianmo",
          "title": "济南清晨五香甜沫配油旋",
          "cityId": "jinan",
          "cityName": "济南",
          "province": "sd",
          "provinceLabel": "山东省",
          "schoolOrStyle": "泉城名士与市井共享早点",
          "flavorProfile": "咸香微辣 · 油旋六十层酥皮",
          "soulIngredient": "新磨小米面、花生米、豇豆、粉条、豆腐皮丝、菠菜、胡椒",
          "craftHighlight": "五香花生粉条熬汤泼入小米面糊 / 配刚出炉盘旋起酥的葱油旋",
          "famousShop": "济南唐王道甜沫老铺 / 季氏油旋",
          "description": "名字叫「甜沫」实则是咸辣五香小米粥！源于明末难民「添末儿」谐音，小米面糊里煮满花生、粉条、豆皮与菠菜，配层层起酥的油旋。",
          "coord": [
            117.0009,
            36.6758
          ],
          "wiki": "甜沫",
          "query": "济南 甜沫 油旋 实拍",
          "photoUrl": "/photos/mf-jn-tianmo.jpg"
        },
        {
          "id": "mf-bd-lvhuo",
          "title": "保定徐水刚出炉热脆驴肉火烧",
          "cityId": "baoding",
          "cityName": "保定",
          "province": "he",
          "provinceLabel": "河北省",
          "schoolOrStyle": "燕赵大地清晨硬核碳水",
          "flavorProfile": "火烧外脆掉渣 · 驴肉老汤浓香",
          "soulIngredient": "太行山渤海黑驴肉、二十味陈年老汤、死面油酥圆火烧、焖子",
          "craftHighlight": "圆火烧烙熟进炉膛烘脆 / 趁热剖开塞满现剁老汤热驴肉与焖子",
          "famousShop": "保定袁家驴肉火烧 / 闫家驴肉火烧",
          "description": "「天上龙肉，地上驴肉」。保定派系讲究圆形火烧配热腾腾的老汤卤驴肉：刚从炉膛烘得咔嚓掉渣的圆火烧剖开，塞满带老汤冻的热驴肉。",
          "coord": [
            115.4645,
            38.8738
          ],
          "wiki": "驴肉火烧",
          "query": "保定 驴肉火烧 实拍",
          "photoUrl": "/photos/mf-bd-lvhuo.jpg"
        }
      ]
    },
    {
      "id": "zhongyuan-qin-jin",
      "title": "中原秦晋胡辣汤与馍面早席",
      "subtitle": "逍遥镇胡辣汤、河南两掺儿、洛阳牛肉汤、西安肉夹馍甑糕与太原头脑",
      "regionBadge": "河南 · 陕西 · 山西",
      "description": "中原与秦晋大地的清晨是滚烫浓烈的：一碗胡椒辛辣的胡辣汤配水煎包，或一碗头锅牛羊汤配腊汁肉夹馍与黄芪头脑。",
      "items": [
        {
          "id": "mf-kf-hulatang",
          "title": "开封逍遥镇牛肉胡辣汤配水煎包",
          "cityId": "kaifeng",
          "cityName": "开封",
          "province": "ha",
          "provinceLabel": "河南省",
          "schoolOrStyle": "中原清晨第一醒神浓汤",
          "flavorProfile": "胡椒辛辣 · 牛骨汤稠配焦脆煎包",
          "soulIngredient": "牛骨高汤、手工洗面筋、红薯粉条、黄花木耳、黑白胡椒、牛肉水煎包",
          "craftHighlight": "洗面筋水勾芡下三十味香料与黑胡椒 / 配满底金黄脆嘎渣水煎包",
          "famousShop": "郑州方中山胡辣汤总店 / 开封逍遥镇老字号",
          "description": "河南人清晨的闹钟。牛骨汤熬底，下入木耳、粉条、花生与大团手工面筋，黑白胡椒激出热汗，再抓一把底板焦脆的牛肉粉丝水煎包。",
          "coord": [
            114.3415,
            34.7975
          ],
          "wiki": "胡辣汤",
          "query": "河南 逍遥镇胡辣汤 水煎包 实拍",
          "photoUrl": "/photos/mf-kf-hulatang.jpg"
        },
        {
          "id": "mf-zz-liangchan",
          "title": "河南早餐灵魂胡辣汤豆腐脑两掺",
          "cityId": "zhengzhou",
          "cityName": "郑州",
          "province": "ha",
          "provinceLabel": "河南省",
          "schoolOrStyle": "刚柔并济的中原早点发明",
          "flavorProfile": "辛辣与豆香合一 · 绵滑不烧心",
          "soulIngredient": "半碗逍遥镇或北舞渡胡辣汤、半碗石膏嫩豆腐脑、小磨香油",
          "craftHighlight": "滚烫麻辣胡辣汤与雪白嫩豆腐脑同碗对半盛装 / 淋香油同食",
          "famousShop": "郑州紫荆山方中山 / 闪高兴丸子汤",
          "description": "河南食客最地道的暗号「老板，两掺儿！」。半碗辛辣滚烫的牛肉胡辣汤撞上半碗洁白滑嫩的清甜豆腐脑，中和了胡椒燥辣又增豆香。",
          "coord": [
            113.6654,
            34.7579
          ],
          "wiki": "两掺",
          "query": "河南 胡辣汤 豆腐脑 两掺 实拍",
          "photoUrl": "/photos/mf-zz-liangchan.jpg"
        },
        {
          "id": "mf-ly-niuroutang",
          "title": "洛阳清晨头锅牛肉汤配饼丝",
          "cityId": "luoyang",
          "cityName": "洛阳",
          "province": "ha",
          "provinceLabel": "河南省",
          "schoolOrStyle": "神都洛阳凌晨五点的头汤信仰",
          "flavorProfile": "汤清味厚 · 饼丝吸汤劲道",
          "soulIngredient": "豫西黄牛棒骨与牛腩、八角毕拨草果、烙馍饼丝或油旋",
          "craftHighlight": "牛骨通宵大火熬至黎明头锅开汤 / 碗底抓饼丝牛肉片冲滚汤",
          "famousShop": "洛阳南关小碗牛肉汤 / 马杰山牛肉汤",
          "description": "「早上一碗洛阳汤，给个神仙都不当」。凌晨五点赶头锅原汤，大铁锅里牛骨翻滚，抓一把干烙饼丝或油旋泡入滚汤，鲜香直冲天灵盖。",
          "coord": [
            112.454,
            34.6197
          ],
          "wiki": "洛阳牛肉汤",
          "query": "洛阳 牛肉汤 饼丝 实拍",
          "photoUrl": "/photos/mf-ly-niuroutang.jpg"
        },
        {
          "id": "mf-xa-roujiamo",
          "title": "西安樊记铁圈虎皮腊汁肉夹馍",
          "cityId": "xian",
          "cityName": "西安",
          "province": "sn",
          "provinceLabel": "陕西省",
          "schoolOrStyle": "关中碳水王冠 · 东方汉堡鼻祖",
          "flavorProfile": "铁圈虎皮菊花心 · 腊汁肉肥而不腻",
          "soulIngredient": "陈年老汤腊汁猪肉、关中硬麦烤制白吉馍",
          "craftHighlight": "铁铛烘烤出铁圈虎皮菊花心白吉馍 / 剁入肥瘦腊汁肉浇一勺老卤",
          "famousShop": "西安樊记腊汁肉总店 / 子午路张记肉夹馍",
          "description": "战国「寒肉」传承两千年。白吉馍烤出「铁圈虎皮菊花心」，趁热剖开夹入陈年老卤慢焖至骨酥肉烂的腊汁猪肉，肉汁瞬间浸透馍心。",
          "coord": [
            108.9402,
            34.2658
          ],
          "wiki": "肉夹馍",
          "query": "西安 腊汁肉夹馍 实拍",
          "photoUrl": "/photos/mf-xa-roujiamo.jpg"
        },
        {
          "id": "mf-xa-rouwanhulatang",
          "title": "西安回坊牛骨肉丸胡辣汤",
          "cityId": "xian",
          "cityName": "西安",
          "province": "sn",
          "provinceLabel": "陕西省",
          "schoolOrStyle": "老陕清晨油泼辣子配坨坨馍浓汤",
          "flavorProfile": "牛丸弹牙 · 菜蔬丰富麻香扑鼻",
          "soulIngredient": "手工牛肉丸、土豆块、胡萝卜、菜花、西葫芦、牛骨浓汤、油泼辣子",
          "craftHighlight": "牛骨汤煮时令五色蔬菜与弹牙牛肉丸勾浓芡 / 淋满油泼辣子掰坨坨馍",
          "famousShop": "西安洒金桥李唯一肉丸胡辣汤 / 老刘家",
          "description": "与河南胡辣汤截然不同，西安肉丸胡辣汤是回坊杰作：纯牛肉丸配土豆、胡萝卜、莲花白等大块蔬菜勾浓芡，淋一大勺秘制油泼辣子。",
          "coord": [
            108.9325,
            34.2715
          ],
          "wiki": "肉丸胡辣汤",
          "query": "西安 肉丸胡辣汤 实拍",
          "photoUrl": "/photos/mf-xa-rouwanhulatang.jpg"
        },
        {
          "id": "mf-xa-zenggao",
          "title": "西安洒金桥蜜枣芸豆糯米甑糕",
          "cityId": "xian",
          "cityName": "西安",
          "province": "sn",
          "provinceLabel": "陕西省",
          "schoolOrStyle": "秦汉瓦甑传世的三千年甜糯早点",
          "flavorProfile": "枣泥红亮如珀 · 糯米芸豆软糯流蜜",
          "soulIngredient": "关中圆糯米、陕北红枣、大红芸豆、三千年形制铁底木甑",
          "craftHighlight": "糯米红枣芸豆七层铺入深口大铁甑 / 通宵文火焖蒸八小时成蜜膏",
          "famousShop": "西安洒金桥胖子甑糕 / 东南亚甑糕总店",
          "description": "源于周代礼器「羞笾」与唐代郑公巨胜奴。三层糯米、三层红枣、一层红芸豆在深口铁甑中焖蒸通宵，铲刀一刮红白相间、蜜香扑鼻。",
          "coord": [
            108.9342,
            34.2738
          ],
          "wiki": "甑糕",
          "query": "西安 蜜枣甑糕 实拍",
          "photoUrl": "/photos/mf-xa-zenggao.jpg"
        },
        {
          "id": "mf-ty-tounao",
          "title": "太原清和元黄芪羊肉头脑配稍梅",
          "cityId": "taiyuan",
          "cityName": "太原",
          "province": "sx",
          "provinceLabel": "山西省",
          "schoolOrStyle": "傅山先生创制的药膳早点奇观",
          "flavorProfile": "酒糟药香微甜 · 羊肉软烂滋补",
          "soulIngredient": "北岳恒山黄芪、肥嫩绵羊肉、长山药、莲菜、酒糟、煨面糊、腌韭菜",
          "craftHighlight": "羊肉汤配黄芪酒糟煨面熬成白糊 / 佐一笼羊肉百花稍梅与黄酒",
          "famousShop": "太原清和元饭店（铜锣湾总店） / 认一力",
          "description": "明末清初医家傅山为孝敬老母创制的「八珍汤」。黄芪、羊肉、山药、莲藕与酒糟熬成温润白糊，清晨趕早喝一碗配羊肉稍梅，大汗淋漓。",
          "coord": [
            112.5489,
            37.8706
          ],
          "wiki": "头脑",
          "query": "太原 清和元 头脑 稍梅 实拍",
          "photoUrl": "/photos/mf-ty-tounao.jpg"
        },
        {
          "id": "mf-dt-shaomai",
          "title": "大同凤临阁百花稍梅配小米粥",
          "cityId": "datong",
          "cityName": "大同",
          "province": "sx",
          "provinceLabel": "山西省",
          "schoolOrStyle": "塞北边城梅花形薄皮羊肉烧卖",
          "flavorProfile": "皮薄如绢 · 边褶似绽放白梅",
          "soulIngredient": "塞北羔羊后腿肉、大葱姜水、雪花粉烫面荷叶边皮、沁州黄小米粥",
          "craftHighlight": "走槌擀出百褶荷叶裙边薄皮 / 羊肉水打馅旺火蒸透配陈醋小米粥",
          "famousShop": "大同凤临阁酒楼 / 老大同百花烧麦馆",
          "description": "因蒸熟后顶端皱褶层层绽放如塞外白梅覆雪而称「稍梅」。走槌擀出薄如蝉翼的花边皮，包入打满花椒水的鲜羊肉馅，咬开一包清香羊油汁。",
          "coord": [
            113.3001,
            40.0768
          ],
          "wiki": "百花烧麦",
          "query": "山西 大同 百花烧麦 稍梅 实拍",
          "photoUrl": "/photos/mf-dt-shaomai.jpg"
        }
      ]
    },
    {
      "id": "bashu-yungui-morning",
      "title": "巴蜀云贵麻辣酸香晨食",
      "subtitle": "重庆板凳小面、成都龙抄手、乐山豆腐脑、喜洲破酥粑粑与贵阳肠旺面",
      "regionBadge": "重庆 · 四川 · 云南 · 贵州",
      "description": "西南的早晨从不温和：重庆人在街头高板凳上嗦二两红油小面，乐山人喝酥肉肥肠豆腐脑，云贵高原上破酥粑粑与肠旺面香气四溢。",
      "items": [
        {
          "id": "mf-cq-wanzaamian",
          "title": "重庆街头板凳二两豌杂小面",
          "cityId": "chongqing",
          "cityName": "重庆",
          "province": "cq",
          "provinceLabel": "重庆市",
          "schoolOrStyle": "山城清晨高板凳上的第一信仰",
          "flavorProfile": "麻辣糊香 · 豌豆软烂起沙",
          "soulIngredient": "碱水潮面、高压慢炖黄豌豆、甜咸五花肉杂酱、石柱糊辣壳油辣子",
          "craftHighlight": "十四味调料打底冲滚水 / 断生水面盖满绵沙黄豌豆与肉臊",
          "famousShop": "重庆花市豌杂面 / 秦云老太婆摊摊面",
          "description": "重庆人的清晨从街头高矮两个塑料板凳开始。碗底打入猪油、姜蒜水、芝麻酱、汉源花椒与糊辣壳红油，盖上慢煨起沙的黄豌豆与杂酱。",
          "coord": [
            106.5768,
            29.5579
          ],
          "wiki": "重庆小面",
          "query": "重庆 豌杂小面 早餐 实拍",
          "photoUrl": "/photos/mf-cq-wanzaamian.jpg"
        },
        {
          "id": "mf-cd-hongyou-chaoshou",
          "title": "成都老字号红油原汤龙抄手",
          "cityId": "chengdu",
          "cityName": "成都",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "蓉城皮薄如纸的大馄饨早点",
          "flavorProfile": "皮薄似绸 · 馅嫩如泥红油醇香",
          "soulIngredient": "高筋富强粉薄皮、去筋猪腿肉打水茸馅、浓白老母鸡汤或复制红油",
          "craftHighlight": "肉馅狂搅打入骨汤成水打馅 / 菱形薄皮包制入沸水浮起即捞",
          "famousShop": "成都龙抄手春熙路总店 / 蒋抄手",
          "description": "取「龙凤呈祥、浓汤抄手」之意。面皮擀得薄如蝉翼可透字，猪肉馅打入大量鸡汤搅上劲，煮熟后如白绸漂浮，红油微甜麻辣、原汤醇白。",
          "coord": [
            104.0665,
            30.5728
          ],
          "wiki": "龙抄手",
          "query": "成都 红油龙抄手 实拍",
          "photoUrl": "/photos/mf-cd-hongyou-chaoshou.jpg"
        },
        {
          "id": "mf-ls-doufunao",
          "title": "乐山牛华酥肉肥肠豆腐脑配咔饼",
          "cityId": "leshan",
          "cityName": "乐山",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川南浓芡麻辣豆花早餐天花板",
          "flavorProfile": "浓汤勾芡 · 酥肉脆肥肠糯",
          "soulIngredient": "鸡骨浓芡高汤、豆花嫩脑、现炸花椒小酥肉、卤肥肠、粉蒸牛肉咔饼",
          "craftHighlight": "滚烫骨汤勾浓芡托住嫩豆花 / 铺满酥肉肥肠脆花生配粉蒸肉咔饼",
          "famousShop": "乐山牛华九九豆腐脑 / 代四娘牛华豆腐脑",
          "description": "乐山豆腐脑绝非清汤寡水，而是以浓稠骨汤勾芡为底，舀入嫩滑豆花，盖满红油、大头菜、现炸小酥肉与卤肥肠，再咬一口粉蒸牛肉咔饼。",
          "coord": [
            103.7655,
            29.5522
          ],
          "wiki": "乐山豆腐脑",
          "query": "乐山 豆腐脑 咔饼 实拍",
          "photoUrl": "/photos/mf-ls-doufunao.jpg"
        },
        {
          "id": "mf-my-zaomifen",
          "title": "绵阳清晨竹篓烫红汤牛肉米粉",
          "cityId": "mianyang",
          "cityName": "绵阳",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "川西北清晨万人空巷的竹篓粉",
          "flavorProfile": "竹篓冒粉五秒即起 · 牛肉红油醇厚",
          "soulIngredient": "绵阳极细圆米粉、郫县豆瓣牛油红汤、慢炖大块黄牛肉、酸菜海带",
          "craftHighlight": "食客自执竹篓在沸水锅冒烫五秒 / 浇滚沸红油牛肉汤底或清汤",
          "famousShop": "绵阳顺河街岳记米粉 / 开元米粉总店",
          "description": "在绵阳，米粉是雷打不动的早餐霸主。细如银丝的米线装入小竹篓，在滚水锅里上下抖动五秒即熟，浇上熬了整夜的红油牛肉臊子与豌豆。",
          "coord": [
            104.6795,
            31.4675
          ],
          "wiki": "绵阳米粉",
          "query": "绵阳 红汤牛肉米粉 实拍",
          "photoUrl": "/photos/mf-my-zaomifen.jpg"
        },
        {
          "id": "mf-nc-guokuiliangfen",
          "title": "南充酥脆锅盔夹川北红油凉粉",
          "cityId": "nanchong",
          "cityName": "南充",
          "province": "sc",
          "provinceLabel": "四川省",
          "schoolOrStyle": "热脆面饼裹冰爽麻辣凉粉的奇遇",
          "flavorProfile": "冰火交融 · 外酥掉渣内滑麻辣",
          "soulIngredient": "炭炉烘烤千层空心锅盔、川北豌豆黄凉粉、南充独蒜红油辣子",
          "craftHighlight": "旋转烤炉烘出金黄酥脆空心锅盔 / 剖口塞满现拌红油川北凉粉",
          "famousShop": "南充川北凉粉总店 / 李家锅盔凉粉",
          "description": "川东北一绝的清晨便携碳水：刚出炭炉、热气腾腾且酥得掉渣的千层白面锅盔划开大口，塞满冰凉滑嫩、裹满独蒜红油的川北豌豆凉粉。",
          "coord": [
            106.0825,
            30.7955
          ],
          "wiki": "锅盔夹凉粉",
          "query": "四川 南充 锅盔夹凉粉 实拍",
          "photoUrl": "/photos/mf-nc-guokuiliangfen.jpg"
        },
        {
          "id": "mf-km-xiaoguo",
          "title": "昆明铜锅炭火现煮小锅米线",
          "cityId": "kunming",
          "cityName": "昆明",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "春城清晨单锅现煮的浓烈酸辣",
          "flavorProfile": "铜锅沸腾 · 鲜肉末酸腌菜浓郁",
          "soulIngredient": "滇池酸浆粗米线、新鲜猪后腿肉末、曲靖老坛酸腌菜、昭通酱、韭菜",
          "craftHighlight": "紫铜小锅单灶架炭火沸骨汤 / 下鲜肉末敲散配酸腌菜米线猛煮",
          "famousShop": "昆明端仕小锅卤饵块 / 铁朋小锅米线",
          "description": "昆明人清晨最上头的滋味。掌勺师傅面前一字排开七八只小紫铜锅，骨汤滚沸后压散大团鲜猪肉末，下昭通酱、酸腌菜与酸浆米线猛火同煮。",
          "coord": [
            102.7122,
            25.0405
          ],
          "wiki": "小锅米线",
          "query": "昆明 铜锅小锅米线 实拍",
          "photoUrl": "/photos/mf-km-xiaoguo.jpg"
        },
        {
          "id": "mf-dl-xizhoubaba",
          "title": "大理喜洲上下炭火麦香破酥粑粑",
          "cityId": "dali",
          "cityName": "大理",
          "province": "yn",
          "provinceLabel": "云南省",
          "schoolOrStyle": "苍山洱海白族清晨甜咸双味麦饼",
          "flavorProfile": "上下两层炭火 · 起酥数十层",
          "soulIngredient": "大理高原冬小麦粉、猪板油油酥、鲜肉葱花咸馅或玫瑰红糖甜馅",
          "craftHighlight": "揉入猪油反复折叠成千层油酥坯 / 下铁锅上炭火盆双面烘烤",
          "famousShop": "大理喜洲古镇四方街德生和喜洲粑粑 / 杨记破酥粑粑",
          "description": "白族人赶集与清晨必吃的麦香名点。面团抹熟猪油反复盘折出层层油酥，咸口撒葱花鲜肉末，甜口包玫瑰红糖火腿，上下双层木炭火烤得外焦里酥。",
          "coord": [
            100.1325,
            25.8545
          ],
          "wiki": "喜洲粑粑",
          "query": "大理 喜洲破酥粑粑 实拍",
          "photoUrl": "/photos/mf-dl-xizhoubaba.jpg"
        },
        {
          "id": "mf-gy-changwangmian",
          "title": "贵阳脆哨血旺红油肠旺面",
          "cityId": "guiyang",
          "cityName": "贵阳",
          "province": "gz",
          "provinceLabel": "贵州省",
          "schoolOrStyle": "黔中过早第一招牌 · 吉祥常旺",
          "flavorProfile": "面脆汤红 · 肥肠软糯血旺嫩",
          "soulIngredient": "鸭蛋手擀竹升脆面、卤猪大肠段、嫩猪血旺、五花肉脆哨、花溪红油",
          "craftHighlight": "大肠慢卤血旺嫩煮 / 竹升鸭蛋面滚水断生盖脆哨淋亮红辣油",
          "famousShop": "贵阳金牌罗记肠旺面 / 程肠旺总店",
          "description": "取「常旺」吉祥之意，讲究「色红、汤鲜、面脆、肠糯、哨香」。鸭蛋手擀面爽脆有劲，配软糯卤肥肠、嫩滑猪血与嘎嘣脆的五花肉脆哨。",
          "coord": [
            106.6302,
            26.647
          ],
          "wiki": "肠旺面",
          "query": "贵阳 肠旺面 实拍",
          "photoUrl": "/photos/mf-gy-changwangmian.jpg"
        }
      ]
    },
    {
      "id": "xianggan-minqiongtai",
      "title": "湘赣闽琼台古早晨食与老爸茶",
      "subtitle": "长沙肉丝米粉、南昌拌粉瓦罐汤、福州锅边糊、泉州面线糊与海口老爸茶",
      "regionBadge": "湖南 · 江西 · 福建 · 海南 · 台湾",
      "description": "从湘江两岸的盖码扁粉、赣江边的拌粉瓦罐汤，到闽南骑楼下的面线糊花生汤、海南老爸茶与台北厚烧饼豆浆，尽显南方古早味。",
      "items": [
        {
          "id": "mf-cs-rousifen",
          "title": "长沙煨码肉丝扁粉盖煎蛋",
          "cityId": "changsha",
          "cityName": "长沙",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "星城清晨「嗦粉」头号标配",
          "flavorProfile": "骨汤清鲜 · 木耳肉丝煨码入味",
          "soulIngredient": "早稻大米湿磨扁粉、猪筒骨清汤、玉兰片木耳肉丝煨码、猪油煎蛋",
          "craftHighlight": "扁粉竹篓滚水烫软盛入猪油骨汤 / 盖慢火煨制的木耳肉丝码子与酸豆角",
          "famousShop": "长沙公交新村粉店 / 甘长顺总店",
          "description": "长沙人的一天从「老板，下碗肉丝粉，盖个蛋！」开始。米香浓郁的湿扁粉浸在加了一勺熟猪油的清澈筒骨汤里，盖上慢煨入味的肉丝码子。",
          "coord": [
            112.9822,
            28.1968
          ],
          "wiki": "长沙米粉",
          "query": "长沙 肉丝米粉 煎蛋 实拍",
          "photoUrl": "/photos/mf-cs-rousifen.jpg"
        },
        {
          "id": "mf-cd-jinshifen",
          "title": "常德津市清晨炖粉配牛肉码子",
          "cityId": "changde",
          "cityName": "常德",
          "province": "hn",
          "provinceLabel": "湖南省",
          "schoolOrStyle": "洞庭湖西岸一天三顿的圆粉传奇",
          "flavorProfile": "中空圆粉吸汤 · 十二味中药卤牛肉",
          "soulIngredient": "澧水大米挤压细圆粉、二十味草果桂皮红烧或麻辣黄牛肉、牛骨汤",
          "craftHighlight": "圆粉滚水烫透捞碗 / 浇滚烫牛骨原汤与大片红烧麻辣牛肉",
          "famousShop": "常德津市刘聋子粉馆 / 津市贺记牛肉粉",
          "description": "「嗦粉在湖南，湖南看常德」。津市圆粉圆润柔韧，清晨既可点一碗大块红烧牛肉汤粉，亦可围坐小火锅边煮边吃「炖粉」，浓辣鲜香。",
          "coord": [
            111.6985,
            29.0315
          ],
          "wiki": "津市牛肉粉",
          "query": "常德 津市牛肉粉 实拍",
          "photoUrl": "/photos/mf-cd-jinshifen.jpg"
        },
        {
          "id": "mf-nc-banfen-waguan",
          "title": "南昌干拌韧米粉配肉饼瓦罐汤",
          "cityId": "nanchang",
          "cityName": "南昌",
          "province": "jx",
          "provinceLabel": "江西省",
          "schoolOrStyle": "英雄城「一干一湿」国民早餐CP",
          "flavorProfile": "干拌香辣滑韧 · 瓦罐炭火清甜",
          "soulIngredient": "江西晚米韧米粉、萝卜干花生米油辣子、一米高大陶缸炭火煨肉饼汤",
          "craftHighlight": "煮熟米粉过凉水拌酱油猪油蒜末辣子 / 配炭火煨七小时小瓦罐肉饼汤",
          "famousShop": "南昌周真真拌粉瓦罐汤 / 绳金塔老字号煨汤店",
          "description": "南昌清晨街头全是小瓦罐与拌粉盆的碰撞声。久煮不烂的江西米粉用酱油、麻油、萝卜干与辣椒猛力拌匀，配一盅巨型陶缸炭火慢煨的肉饼汤。",
          "coord": [
            115.8585,
            28.6832
          ],
          "wiki": "南昌拌粉",
          "query": "南昌 拌粉 瓦罐汤 实拍",
          "photoUrl": "/photos/mf-nc-banfen-waguan.jpg"
        },
        {
          "id": "mf-fz-guobian-hailibing",
          "title": "福州鼎边糊配现炸海蛎饼",
          "cityId": "fuzhou",
          "cityName": "福州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "闽都三坊七巷百年早餐双绝",
          "flavorProfile": "米浆薄片滑软 · 蚬子汤鲜配酥脆蛎饼",
          "soulIngredient": "晚稻米浆、闽江蚬子干虾油高汤、黄豆米浆包裹鲜海蛎紫菜瘦肉油炸饼",
          "craftHighlight": "铁锅烧热沿锅边淋一圈米浆烤熟铲入蚬汤 / 配滚油现炸鼓鼓海蛎饼",
          "famousShop": "福州三坊七巷同利肉燕周边 / 南后街老福州锅边",
          "description": "明代戚继光抗倭军粮演变而来。大铁锅里熬着鲜美的蚬子花蛤汤，将米浆沿着滚烫锅边淋一圈，瞬间烤成薄卷铲入汤中，配现炸海蛎饼。",
          "coord": [
            119.2965,
            26.0745
          ],
          "wiki": "鼎边糊",
          "query": "福州 鼎边糊 海蛎饼 实拍",
          "photoUrl": "/photos/mf-fz-guobian-hailibing.jpg"
        },
        {
          "id": "mf-qz-mianxianhu",
          "title": "泉州古早味面线糊配醋肉油条",
          "cityId": "quanzhou",
          "cityName": "泉州",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "刺桐古城清晨最温柔的丝滑碳水",
          "flavorProfile": "面线化糊不烂 · 猪骨海鲜汤底配酥醋肉",
          "soulIngredient": "泉州手工极细丝面线、大骨虾仁瑶柱高汤、闽南炸醋肉、卤大肠、油条",
          "craftHighlight": "细面线折碎入大骨海鲜汤熬成微稠丝糊 / 自选醋肉大肠淋当归酒胡椒",
          "famousShop": "泉州西街曾氏老记面线糊 / 水门国仔面线糊",
          "description": "如发丝般极细的泉州手工面线在大骨与蟹肉、虾米高汤中慢熬成顺滑不烂的糊状，自选刚炸的闽南酸甜醋肉、卤大肠，泡入现炸油条。",
          "coord": [
            118.5865,
            24.9082
          ],
          "wiki": "面线糊",
          "query": "泉州 面线糊 油条 醋肉 实拍",
          "photoUrl": "/photos/mf-qz-mianxianhu.jpg"
        },
        {
          "id": "mf-xm-huashengtang-zao",
          "title": "厦门黄则和花生汤配韭菜盒",
          "cityId": "xiamen",
          "cityName": "厦门",
          "province": "fj",
          "provinceLabel": "福建省",
          "schoolOrStyle": "鹭岛中山路骑楼甜咸早点经典",
          "flavorProfile": "花生酥烂浮汤 · 打入生鸡蛋冲花",
          "soulIngredient": "同安沙土大花生仁、冰糖、土鸡蛋、酥皮虾仁猪肉韭菜盒",
          "craftHighlight": "去衣花生仁微碱沸水焖煮数小时至入口即化 / 碗底磕生蛋滚花生汤冲熟",
          "famousShop": "厦门中山路黄则和花生汤总店 / 思北花生汤",
          "description": "老厦门人清晨的甜蜜打开方式：精选颗粒饱满的花生去衣慢熬至花生仁漂浮汤面、一抿即化而粒形不碎，冲入一颗生鸡蛋，配咸香酥皮韭菜盒。",
          "coord": [
            118.0895,
            24.4455
          ],
          "wiki": "花生汤",
          "query": "厦门 黄则和 花生汤 实拍",
          "photoUrl": "/photos/mf-xm-huashengtang-zao.jpg"
        },
        {
          "id": "mf-hk-laobacha",
          "title": "海口骑楼老爸茶菠萝包配歌碧欧",
          "cityId": "haikou",
          "cityName": "海口",
          "province": "hi",
          "provinceLabel": "海南省",
          "schoolOrStyle": "南洋华侨归乡孕育的海岛慢早茶",
          "flavorProfile": "炭焙黑咖啡配炼乳 · 刚出炉流油红糖包",
          "soulIngredient": "海南兴隆罗布斯塔炭烧黑咖啡（歌碧欧）、炼乳红茶、现烤酥皮菠萝包、煎堆",
          "craftHighlight": "南洋手冲炭烧咖啡兑炼乳 / 配刚出烤箱热气腾腾的三角红糖流心包与炸虾饼",
          "famousShop": "海口骑楼老街聚福安老爸茶 / 恒兴发茶店",
          "description": "下南洋琼籍华侨带回的西式咖啡茶点与本土点心结合：在骑楼风扇下点一杯冰歌碧欧（黑咖啡）或茶店奶茶，配刚出炉的大号酥皮菠萝包。",
          "coord": [
            110.3485,
            20.0185
          ],
          "wiki": "老爸茶",
          "query": "海口 骑楼老爸茶 菠萝包 实拍",
          "photoUrl": "/photos/mf-hk-laobacha.jpg"
        },
        {
          "id": "mf-tp-shaobing-doujiang",
          "title": "台北阜杭炭烤厚烧饼油条配咸豆浆",
          "cityId": "taipei",
          "cityName": "台北",
          "province": "tw",
          "provinceLabel": "台湾省",
          "schoolOrStyle": "宝岛眷村传承的炭火贴炉早餐传奇",
          "flavorProfile": "铁桶炭火焦糖香 · 厚烧饼夹脆油条",
          "soulIngredient": "老面发酵刷麦芽糖水厚烧饼、现炸酥油条、萝卜丝酥饼、虾皮油条咸豆浆",
          "craftHighlight": "传统铁桶炭炉内壁贴烤厚烧饼 / 剖开夹入葱花蛋与酥脆油条配凝花咸豆浆",
          "famousShop": "台北华山市场阜杭豆浆 / 永和世界豆浆大王",
          "description": "台北清晨排队最长的早餐地标。师傅将老面饼坯刷上麦芽糖水贴入滚烫的铁桶炭炉壁烘烤，出炉后表皮焦脆泛光、内里松软有嚼劲，夹油条绝配。",
          "coord": [
            121.5255,
            25.0442
          ],
          "wiki": "烧饼油条",
          "query": "台北 阜杭豆浆 厚烧饼油条 实拍",
          "photoUrl": "/photos/mf-tp-shaobing-doujiang.jpg"
        }
      ]
    },
    {
      "id": "northwest-steppe-morning",
      "title": "西北塞上早茶与草原藏地晨食",
      "subtitle": "兰州头锅牛肉面、吴忠手抓八宝早茶、喀什烤包子、呼市稍麦与拉萨甜茶",
      "regionBadge": "甘肃 · 宁夏 · 青海 · 新疆 · 内蒙古 · 西藏",
      "description": "从黄河畔清晨六点的头锅牛肉面、宁夏吴忠连吃三小时的硬核手抓早茶，到喀什馕坑烤包子、内蒙羊肉稍麦与八廓街甜茶馆。",
      "items": [
        {
          "id": "mf-lz-touguomian",
          "title": "兰州清晨六点头锅清汤牛肉面",
          "cityId": "lanzhou",
          "cityName": "兰州",
          "province": "gs",
          "provinceLabel": "甘肃省",
          "schoolOrStyle": "金城人赶在六点半前的头汤执念",
          "flavorProfile": "头锅汤最清鲜 · 二细或韭叶配肉蛋双飞",
          "soulIngredient": "甘南牦牛与黄牛骨头锅清汤、蓬灰高筋手工拉面、白萝卜片、油泼辣子",
          "craftHighlight": "凌晨熬透第一锅清澈牛骨原汤 / 现拉二细或毛细舀红油加卤肉卤蛋",
          "famousShop": "兰州磨沟沿老字号牛肉面 / 马安军辣子牛肉面",
          "description": "真正的老兰州人一定在清晨六七点赶「头锅面」——此时汤桶尚未混入煮面淀粉，牛骨与二十味香料熬出的第一锅原汤清亮醇鲜，加一份肉蛋双飞。",
          "coord": [
            103.8236,
            36.0581
          ],
          "wiki": "兰州牛肉面",
          "query": "兰州 头锅牛肉面 早餐 实拍",
          "photoUrl": "/photos/mf-lz-touguomian.jpg"
        },
        {
          "id": "mf-wz-zaocha",
          "title": "宁夏吴忠早茶八宝茶配手抓滩羊",
          "cityId": "wuzhong",
          "cityName": "吴忠",
          "province": "nx",
          "provinceLabel": "宁夏回族自治区",
          "schoolOrStyle": "可与广府早茶比肩的塞上硬核早茶",
          "flavorProfile": "八宝盖碗茶解腻 · 清晨大盘手抓滩羊肉与拉面",
          "soulIngredient": "盐池滩羊手抓肋条、桂圆红枣枸杞芝麻盖碗八宝茶、吴忠牛肉面、烫面油香",
          "craftHighlight": "清晨冲泡九味盖碗八宝茶 / 配热气腾腾的盐池白水手抓羊肉、小菜与牛肉面",
          "famousShop": "吴忠杜优素羊杂碎早茶 / 香丁丁早茶牛肉面馆",
          "description": "「南有广式早茶，北有吴忠早茶」。宁夏吴忠人清晨七点走进早茶店，先刮一盅甜润滋补的盖碗八宝茶，再摆满盐池手抓滩羊肉、羊杂碎与牛肉面。",
          "coord": [
            106.1985,
            37.9975
          ],
          "wiki": "八宝茶",
          "query": "宁夏 吴忠早茶 八宝茶 手抓羊肉 实拍",
          "photoUrl": "/photos/mf-wz-zaocha.jpg"
        },
        {
          "id": "mf-xn-goujiaoniao",
          "title": "西宁青油狗浇尿油饼配牦牛酸奶",
          "cityId": "xining",
          "cityName": "西宁",
          "province": "qh",
          "provinceLabel": "青海省",
          "schoolOrStyle": "河湟谷地菜籽油香与金黄奶皮早餐",
          "flavorProfile": "香豆粉奇香 · 外酥内软配碗装黄奶皮酸奶",
          "soulIngredient": "青藏高原黄菜籽油（青油）、香豆粉（苦豆子）、青稞小麦粉、金黄奶皮牦牛酸奶",
          "craftHighlight": "鏊子烙饼时用尖嘴油壶沿饼边淋青油 / 配表面凝结厚黄奶皮的高原老酸奶",
          "famousShop": "西宁莫家街德禄酸奶 / 水井巷老字号油饼铺",
          "description": "因烙饼时用小油壶沿锅边一圈圈浇淋高原菜籽油（青油）的动作戏称得名。面团揉入青海特有香豆粉与姜黄，烙得金黄酥软，配一碗厚奶皮牦牛酸奶。",
          "coord": [
            101.7782,
            36.6171
          ],
          "wiki": "狗浇尿",
          "query": "青海 狗浇尿油饼 牦牛酸奶 实拍",
          "photoUrl": "/photos/mf-xn-goujiaoniao.jpg"
        },
        {
          "id": "mf-ks-kaobaozi-naicha",
          "title": "新疆喀什刚出馕坑烤包子配咸奶茶",
          "cityId": "kashgar",
          "cityName": "喀什",
          "province": "xj",
          "provinceLabel": "新疆维吾尔自治区",
          "schoolOrStyle": "丝路古城晨光里的馕坑焦香与茶香",
          "flavorProfile": "四方死面皮脆 · 羊尾油皮牙子爆汁",
          "soulIngredient": "刀郎羊腿肉丁、肥嫩羊尾油丁、白皮牙子（洋葱）、孜然黑胡椒、铜壶咸奶茶",
          "craftHighlight": "死面薄皮折成四方包贴入滚烫土馕坑壁 / 烘烤十五分钟金黄滴油配滚咸奶茶",
          "famousShop": "喀什古城汗巴扎アイ力烤包子 / 百年老茶馆",
          "description": "喀什古城清晨第一缕香气来自土馕坑：不发酵的薄面皮包入肥瘦一比一的新鲜手切羊肉丁、羊尾油与白皮牙子，贴坑烤至四方金黄酥脆。",
          "coord": [
            75.9895,
            39.4705
          ],
          "wiki": "烤包子",
          "query": "新疆 喀什 烤包子 咸奶茶 实拍",
          "photoUrl": "/photos/mf-ks-kaobaozi-naicha.jpg"
        },
        {
          "id": "mf-hh-shaomai",
          "title": "呼和浩特老绥远羊肉稍麦配砖茶",
          "cityId": "hohhot",
          "cityName": "呼和浩特",
          "province": "nm",
          "provinceLabel": "内蒙古自治区",
          "schoolOrStyle": "塞外青城「按两算皮」的硬核大葱羊肉烧卖",
          "flavorProfile": "一两八个皮重 · 大葱羔羊肉汁丰盈配滚烫砖茶",
          "soulIngredient": "锡林郭勒羔羊肉切碎丁、毕克齐大葱、胡麻油生姜、石榴裙边烫面薄皮、青砖茶",
          "craftHighlight": "面槌压出玻璃花边皮包大葱生羊肉馅 / 旺火蒸八分钟配一壶刮油蒙古砖茶",
          "famousShop": "呼和浩特麦香村总店 / 德顺源老绥远烧麦",
          "description": "呼和浩特人吃稍麦论「两」——一两指的是一两干面粉擀出的八个烧卖皮！肥瘦相间的草原羊肉丁配大葱生姜，蒸熟后油汁饱满，必配一壶浓酽砖茶。",
          "coord": [
            111.6708,
            40.8183
          ],
          "wiki": "内蒙古烧卖",
          "query": "呼和浩特 老绥远 羊肉烧麦 实拍",
          "photoUrl": "/photos/mf-hh-shaomai.jpg"
        },
        {
          "id": "mf-ls-tiancha-zangmian",
          "title": "拉萨八廓街光明甜茶配牦牛藏面",
          "cityId": "lhasa",
          "cityName": "拉萨",
          "province": "xz",
          "provinceLabel": "西藏自治区",
          "schoolOrStyle": "日光之城转经人清晨的温暖归宿",
          "flavorProfile": "红茶奶香浓郁 · 碱水藏面配牦牛清汤与炸土豆",
          "soulIngredient": "印度阿萨姆红茶砖、高原全脂奶粉或鲜奶、青稞小麦压制碱水藏面、牦牛骨清汤",
          "craftHighlight": "红茶熬浓汤撞入奶液慢煮成醇厚甜茶 / 预熟碱水藏面浇滚沸牦牛骨汤撒牛肉丁",
          "famousShop": "拉萨八廓街光明港琼甜茶馆 / 仓姑寺甜茶馆",
          "description": "清晨走入八廓街光明港琼甜茶馆，桌上放几张零钱，阿佳拎着大铝壶穿梭添满醇厚滚烫的藏式甜茶，再端一碗牦牛骨汤藏面淋上藏式辣酱。",
          "coord": [
            91.1322,
            29.6525
          ],
          "wiki": "藏式甜茶",
          "query": "拉萨 光明甜茶馆 甜茶 藏面 实拍",
          "photoUrl": "/photos/mf-ls-tiancha-zangmian.jpg"
        }
      ]
    }
  ]
};
