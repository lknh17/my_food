import type { CityFoodPack, EightCuisineId, PortalThematicMode, ProvinceId, StapleType } from "./types";

export interface ProvinceTabMeta {
  id: ProvinceId | "all";
  label: string;
  shortName: string;
  adcode: string;
  regionMacro: "西南巴蜀云贵" | "岭南闽琼港澳台" | "江南淮扬徽浙" | "湘赣荆楚" | "齐鲁中原秦晋" | "京津冀西北关东" | "全国";
}

export const PROVINCE_TABS: ProvinceTabMeta[] = [
  { id: "all", label: "全国寻味总览 (34省市区)", shortName: "全国", adcode: "100000", regionMacro: "全国" },
  // 巴蜀与云贵
  { id: "sc", label: "四川省 · 天府川味", shortName: "四川", adcode: "510000", regionMacro: "西南巴蜀云贵" },
  { id: "cq", label: "重庆市 · 火锅江湖", shortName: "重庆", adcode: "500000", regionMacro: "西南巴蜀云贵" },
  { id: "yn", label: "云南省 · 山野菌米", shortName: "云南", adcode: "530000", regionMacro: "西南巴蜀云贵" },
  { id: "gz", label: "贵州省 · 酸汤发酵", shortName: "贵州", adcode: "520000", regionMacro: "西南巴蜀云贵" },
  // 岭南、八桂、闽琼、港澳台
  { id: "gd", label: "广东省 · 广府潮客", shortName: "广东", adcode: "440000", regionMacro: "岭南闽琼港澳台" },
  { id: "gx", label: "广西 · 八桂嗦粉", shortName: "广西", adcode: "450000", regionMacro: "岭南闽琼港澳台" },
  { id: "fj", label: "福建省 · 山海闽味", shortName: "福建", adcode: "350000", regionMacro: "岭南闽琼港澳台" },
  { id: "hi", label: "海南省 · 琼州鲜酸", shortName: "海南", adcode: "460000", regionMacro: "岭南闽琼港澳台" },
  { id: "hk", label: "香港 · 港式茶楼", shortName: "香港", adcode: "810000", regionMacro: "岭南闽琼港澳台" },
  { id: "mo", label: "澳门 · 葡韵粤濠", shortName: "澳门", adcode: "820000", regionMacro: "岭南闽琼港澳台" },
  { id: "tw", label: "台湾省 · 古早夜市", shortName: "台湾", adcode: "710000", regionMacro: "岭南闽琼港澳台" },
  // 江南、淮扬、徽浙
  { id: "js", label: "江苏省 · 淮扬苏味", shortName: "江苏", adcode: "320000", regionMacro: "江南淮扬徽浙" },
  { id: "zj", label: "浙江省 · 江南山海", shortName: "浙江", adcode: "330000", regionMacro: "江南淮扬徽浙" },
  { id: "ah", label: "安徽省 · 徽州发酵", shortName: "安徽", adcode: "340000", regionMacro: "江南淮扬徽浙" },
  { id: "sh", label: "上海市 · 浓油赤酱", shortName: "上海", adcode: "310000", regionMacro: "江南淮扬徽浙" },
  // 湘赣荆楚
  { id: "hn", label: "湖南省 · 潇湘香辣", shortName: "湖南", adcode: "430000", regionMacro: "湘赣荆楚" },
  { id: "hb", label: "湖北省 · 千湖过早", shortName: "湖北", adcode: "420000", regionMacro: "湘赣荆楚" },
  { id: "jx", label: "江西省 · 赣味鲜辣", shortName: "江西", adcode: "360000", regionMacro: "湘赣荆楚" },
  // 齐鲁、中原、秦晋
  { id: "sd", label: "山东省 · 齐鲁大菜", shortName: "山东", adcode: "370000", regionMacro: "齐鲁中原秦晋" },
  { id: "ha", label: "河南省 · 中原汤面", shortName: "河南", adcode: "410000", regionMacro: "齐鲁中原秦晋" },
  { id: "sx", label: "山西省 · 三晋面国", shortName: "山西", adcode: "140000", regionMacro: "齐鲁中原秦晋" },
  { id: "sn", label: "陕西省 · 秦味碳水", shortName: "陕西", adcode: "610000", regionMacro: "齐鲁中原秦晋" },
  // 京津冀、西北、关东
  { id: "bj", label: "北京市 · 京华官府", shortName: "北京", adcode: "110000", regionMacro: "京津冀西北关东" },
  { id: "tj", label: "天津市 · 津门早点", shortName: "天津", adcode: "120000", regionMacro: "京津冀西北关东" },
  { id: "he", label: "河北省 · 燕赵风味", shortName: "河北", adcode: "130000", regionMacro: "京津冀西北关东" },
  { id: "gs", label: "甘肃省 · 陇上牛羊", shortName: "甘肃", adcode: "620000", regionMacro: "京津冀西北关东" },
  { id: "qh", label: "青海省 · 河湟牦羊", shortName: "青海", adcode: "630000", regionMacro: "京津冀西北关东" },
  { id: "nx", label: "宁夏 · 塞上滩羊", shortName: "宁夏", adcode: "640000", regionMacro: "京津冀西北关东" },
  { id: "xj", label: "新疆 · 天山炙烤", shortName: "新疆", adcode: "650000", regionMacro: "京津冀西北关东" },
  { id: "xz", label: "西藏 · 雪域高原", shortName: "西藏", adcode: "540000", regionMacro: "京津冀西北关东" },
  { id: "nm", label: "内蒙古 · 草原奶肉", shortName: "内蒙古", adcode: "150000", regionMacro: "京津冀西北关东" },
  { id: "ln", label: "辽宁省 · 辽海烧烤", shortName: "辽宁", adcode: "210000", regionMacro: "京津冀西北关东" },
  { id: "jl", label: "吉林省 · 长白延边", shortName: "吉林", adcode: "220000", regionMacro: "京津冀西北关东" },
  { id: "hl", label: "黑龙江省 · 黑土铁锅", shortName: "黑龙江", adcode: "230000", regionMacro: "京津冀西北关东" },
];

export const ADCODE_TO_PROVINCE: Record<string, ProvinceId> = {
  "110000": "bj",
  "120000": "tj",
  "130000": "he",
  "140000": "sx",
  "150000": "nm",
  "210000": "ln",
  "220000": "jl",
  "230000": "hl",
  "310000": "sh",
  "320000": "js",
  "330000": "zj",
  "340000": "ah",
  "350000": "fj",
  "360000": "jx",
  "370000": "sd",
  "410000": "ha",
  "420000": "hb",
  "430000": "hn",
  "440000": "gd",
  "450000": "gx",
  "460000": "hi",
  "500000": "cq",
  "510000": "sc",
  "520000": "gz",
  "530000": "yn",
  "540000": "xz",
  "610000": "sn",
  "620000": "gs",
  "630000": "qh",
  "640000": "nx",
  "650000": "xj",
  "710000": "tw",
  "810000": "hk",
  "820000": "mo",
};

export const PROVINCE_TO_ADCODE: Record<ProvinceId, string> = Object.fromEntries(
  Object.entries(ADCODE_TO_PROVINCE).map(([adcode, prov]) => [prov, adcode]),
) as Record<ProvinceId, string>;

export const PROVINCE_LABELS: Record<ProvinceId, string> = {
  bj: "北京市",
  tj: "天津市",
  he: "河北省",
  sx: "山西省",
  nm: "内蒙古自治区",
  ln: "辽宁省",
  jl: "吉林省",
  hl: "黑龙江省",
  sh: "上海市",
  js: "江苏省",
  zj: "浙江省",
  ah: "安徽省",
  fj: "福建省",
  jx: "江西省",
  sd: "山东省",
  ha: "河南省",
  hb: "湖北省",
  hn: "湖南省",
  gd: "广东省",
  gx: "广西壮族自治区",
  hi: "海南省",
  cq: "重庆市",
  sc: "四川省",
  gz: "贵州省",
  yn: "云南省",
  xz: "西藏自治区",
  sn: "陕西省",
  gs: "甘肃省",
  qh: "青海省",
  nx: "宁夏回族自治区",
  xj: "新疆维吾尔自治区",
  tw: "台湾省",
  hk: "香港特别行政区",
  mo: "澳门特别行政区",
};

export const PROVINCE_VIEWPORTS: Record<
  ProvinceId | "all",
  { center: [number, number]; zoom: number; culinaryTitle: string; desc: string }
> = {
  all: {
    center: [106.5, 34.5],
    zoom: 4,
    culinaryTitle: "中华三十四省市区 · 万里风味全景图",
    desc: "纵览华夏 34 省级行政区饮食版图：从巴蜀麻辣、岭南本味、淮扬刀工、齐鲁醇厚，到西北牛羊面食帝国与八桂云贵嗦粉江湖，一图读懂一方水土如何养育一方食味。",
  },
  bj: {
    center: [116.4, 40.0],
    zoom: 8,
    culinaryTitle: "京华官府与胡同九门食味",
    desc: "融汇满汉宫廷御膳、山东鲁菜堂局与回民清真牛街传统：果木挂炉烤鸭、景泰蓝铜锅涮羊肉、老北京炸酱面、卤煮火烧与豆汁焦圈共筑古都风味。",
  },
  tj: {
    center: [117.25, 39.15],
    zoom: 8,
    culinaryTitle: "九河下梢河海两鲜与早点江湖",
    desc: "漕运码头与渤海湾河海交汇，孕育罾蹦鲤鱼、八珍豆腐、锅塌里脊等津菜名馔，更以绿豆面煎饼果子、嘎巴菜、耳朵眼炸糕称霸北方早点。",
  },
  he: {
    center: [115.5, 38.6],
    zoom: 6,
    culinaryTitle: "燕赵太行山海与畿辅市井味",
    desc: "从保定驴肉火烧、河间卤水驴肉、正定八大碗，到承德塞外御膳烤全羊、唐山棋子烧饼与白洋淀全鱼宴，兼具北方麦作豪情与宫廷余韵。",
  },
  sx: {
    center: [112.4, 37.6],
    zoom: 6,
    culinaryTitle: "三晋碳水帝国与千年老陈醋魂",
    desc: "黄土高原杂粮王国与晋商票号官府菜交融：过油肉、太原头脑、平遥牛肉醇厚浓郁，大同刀削面、莜面栲栳栳、剔尖、碗托演绎百种面食绝技。",
  },
  nm: {
    center: [113.5, 43.5],
    zoom: 5,
    culinaryTitle: "敕勒川草原羊道与奶食非遗",
    desc: "北纬42度黄金草原牧场滋养锡林郭勒与呼伦贝尔羔羊：清水手把肉、冰煮羊、烤全羊直取本鲜，呼市稍麦、咸奶茶与乌珠穆沁奶豆腐尽显游牧智慧。",
  },
  ln: {
    center: [122.6, 41.2],
    zoom: 6,
    culinaryTitle: "奉天官府辽菜与渤海湾海鲜烧烤",
    desc: "沈阳老式锅包肉、老边饺子、熏拌鸡架传承盛京烟火；大连海胆水饺、葱油鸟贝尽揽北纬39度冷水海珍；锦州烧烤更执东北夜市牛耳。",
  },
  jl: {
    center: [126.2, 43.6],
    zoom: 6,
    culinaryTitle: "长白山珍、松花江鱼与延边鲜族风味",
    desc: "雪衣豆沙、乌拉满族火锅与查干湖胖头鱼炖豆腐展现关东粗犷与精细；延吉冰碗冷面、参鸡汤、炭火烤牛肉与打糕构建独特的图们江边境风味圈。",
  },
  hl: {
    center: [127.8, 47.2],
    zoom: 5,
    culinaryTitle: "黑土铁锅慢炖、江鱼野味与俄式西餐",
    desc: "高寒黑土地孕育大骨棒酸菜白肉血肠、铁锅炖大鹅、得莫利炖活鱼与齐齐哈尔家庭烤肉；哈尔滨秋林红肠、罐焖牛肉与格瓦斯流淌百年欧陆风情。",
  },
  sh: {
    center: [121.47, 31.23],
    zoom: 9,
    culinaryTitle: "浓油赤酱本帮菜与海派弄堂早点",
    desc: "江南水乡底色碰撞开埠五方杂处：红烧肉、响油鳝糊、草头圈子、腌笃鲜醇厚鲜甜；生煎馒头、南翔小笼、葱油拌面与排骨年糕唤醒弄堂清晨。",
  },
  js: {
    center: [119.5, 32.9],
    zoom: 6,
    culinaryTitle: "淮扬刀工巅峰、金陵鸭馔与苏锡时令",
    desc: "长江、京杭运河与太湖水网交织：扬州文思豆腐与蟹粉狮子头冠绝国宴，南京盐水鸭与鸭血粉丝汤风行街巷，苏州松鼠鳜鱼与枫镇大肉面讲究不时不食。",
  },
  zj: {
    center: [120.4, 29.2],
    zoom: 6,
    culinaryTitle: "杭帮清雅、东海大黄鱼与江南发酵糟卤",
    desc: "西湖醋鱼、东坡肉、龙井虾仁演绎宋韵杭帮；宁波红膏呛蟹、台州家烧野生大黄鱼与沙蒜豆面极尽东海之鲜；绍兴黄酒糟醉与金华火腿奠定江南风物基石。",
  },
  ah: {
    center: [117.3, 31.8],
    zoom: 6,
    culinaryTitle: "古徽州山珍发酵智慧与淮河牛肉汤",
    desc: "皖南群山与徽商足迹催生以盐代冰的发酵名馔：徽州臭鳜鱼、虎皮毛豆腐、刀板香、胡适一品锅重油重色重火功；皖北淮南牛肉汤配烧饼豪迈鲜醇。",
  },
  fj: {
    center: [118.2, 25.9],
    zoom: 6,
    culinaryTitle: "八山一水一分田 · 官府佛跳墙与闽南古早味",
    desc: "福州佛跳墙、鸡汤汆海蚌、荔枝肉代表闽菜巅峰汤路；泉州姜母鸭、面线糊、土笋冻与厦门沙茶面、海蛎煎融合中原古制与南洋侨乡香料。",
  },
  jx: {
    center: [115.6, 27.6],
    zoom: 6,
    culinaryTitle: "鄱阳湖鱼米与江西鲜辣瓦罐江湖",
    desc: "五水入湖、三面环山的湿润盆地造就刚猛鲜辣：南昌拌粉配瓦罐煨汤、藜蒿炒腊肉、宁都三杯鸡、莲花血鸭与景德镇冷粉，无辣不欢且锅气十足。",
  },
  sd: {
    center: [118.2, 36.3],
    zoom: 6,
    culinaryTitle: "八大菜系之首 · 济南汤菜与胶东海味",
    desc: "鲁菜以高汤与葱香冠绝北方：济南九转大肠、糖醋鲤鱼、奶汤蒲菜醇厚讲究；青岛烟台葱烧海参、鲅鱼水饺、海肠捞饭鲜美弹牙；淄博烧烤与把子肉烟火鼎盛。",
  },
  ha: {
    center: [113.6, 33.9],
    zoom: 6,
    culinaryTitle: "五味调和百味香 · 汴洛官府宴与中原汤食",
    desc: "伊尹以鼎调羹发源地：开封鲤鱼焙面、套四宝与洛阳牡丹燕菜水席传承北宋东京遗风；郑州羊肉烩面、逍遥镇胡辣汤与洛阳牛肉汤撑起中原人的清晨。",
  },
  hb: {
    center: [112.3, 30.9],
    zoom: 6,
    culinaryTitle: "千湖之省淡水鱼鲜与九省通衢武汉过早",
    desc: "江汉平原莲藕与淡水鱼甲天下：洪山菜薹炒腊肉、鮰鱼肚、排骨莲藕煨汤醇厚暖胃；武汉热干面、三鲜豆皮、潜江油焖小龙虾与荆州鱼糕尽显码头江湖。",
  },
  hn: {
    center: [111.7, 27.6],
    zoom: 6,
    culinaryTitle: "湘江香辣急火、洞庭河鲜与湘西腊味",
    desc: "剁椒鱼头、辣椒炒肉、毛氏红烧肉、永州血鸭以爆炒香辣闻名遐迩；长沙臭豆腐、常德津市牛肉粉与湘西松枝熏腊肉将发酵与熏制技艺推向极致。",
  },
  gd: {
    center: [113.4, 23.1],
    zoom: 6,
    culinaryTitle: "食在广东 · 广府早茶、潮汕打冷与顺德厨乡",
    desc: "南岭以南四季常青、江海交汇，推崇食材本味：广州白切鸡、深井烧鹅、一盅两件早茶；顺德双皮奶、鱼生；潮汕十八秒鲜切牛肉火锅、卤水狮头鹅与客家酿豆腐。",
  },
  gx: {
    center: [108.6, 23.6],
    zoom: 6,
    culinaryTitle: "八桂嗦粉帝国、酸笋发酵与漓江河海鲜",
    desc: "桂林卤菜米粉、柳州螺蛳粉、南宁老友粉、钦州猪脚粉三餐不离；阳朔啤酒鱼、梧州纸包鸡、荔浦芋扣肉与南宁酸嘢展现喀斯特山水的灵动酸爽。",
  },
  hi: {
    center: [109.8, 19.2],
    zoom: 7,
    culinaryTitle: "琼岛四大名菜、热带酸粉与糟粕醋火锅",
    desc: "文昌鸡、加积鸭、东山羊、和乐蟹四大名菜清鲜本味；文昌糟粕醋火锅、椰子鸡清甜酸辣；抱罗粉、陵水酸粉、后安粉与老盐清补凉充满热带海岛风情。",
  },
  cq: {
    center: [107.2, 29.9],
    zoom: 7,
    culinaryTitle: "两江码头牛油老火锅与巴渝江湖菜",
    desc: "长江与嘉陵江纤夫文化催生麻辣滚烫的九宫格牛油老火锅；重庆碗杂小面遍布山城梯坎；歌乐山辣子鸡、磁器口毛血旺、万州烤鱼与荣昌卤鹅尽显江湖豪气。",
  },
  sc: {
    center: [103.2, 30.5],
    zoom: 6,
    culinaryTitle: "一菜一格百菜百味 · 天府川菜与乐山自贡小吃",
    desc: "都江堰滋养的天府盆地与井盐古道，孕育上河帮（成都麻婆豆腐、回锅肉、夫妻肺片、开水白菜）、小河帮（自贡冷吃兔、水煮牛肉）与乐山翘脚牛肉、甜皮鸭。",
  },
  gz: {
    center: [106.8, 26.7],
    zoom: 6,
    culinaryTitle: "三天不吃酸走路打蹿蹿 · 黔味酸汤与糊辣蘸水",
    desc: "喀斯特深山苗侗古法发酵：凯里红酸汤鱼、贵阳肠旺面、丝娃娃、花溪牛肉粉、遵义羊肉粉、水城烙锅与折耳根蘸水，构筑独树一帜的酸辣焦香美学。",
  },
  yn: {
    center: [101.5, 24.8],
    zoom: 6,
    culinaryTitle: "立体气候野生菌王国、宣威火腿与米线江湖",
    desc: "从雪山到热坝的垂直气候带赐予四季山珍：昆明野生菌火锅、汽锅鸡，蒙自过桥米线，大理乳扇与诺邓火腿，丽江腊排骨，以及傣味香茅草烤鱼与鲜花饼。",
  },
  xz: {
    center: [88.5, 31.2],
    zoom: 5,
    culinaryTitle: "世界屋脊牦牛藏香猪与酥油甜茶风物",
    desc: "平均海拔4000米之上的能量饮食：鲁朗石锅藏香鸡、高原牦牛肉铜火锅、风干牦牛肉、青稞糌粑、拉萨八廓街藏面与浓醇酥油茶、甜茶。",
  },
  sn: {
    center: [108.9, 35.2],
    zoom: 6,
    culinaryTitle: "八百里秦川麦作传奇、牛羊肉泡馍与陕菜盛景",
    desc: "关中平原优质冬小麦与十三朝古都底蕴：葫芦鸡、温拌腰丝代表长安官府菜；老孙家牛羊肉泡馍、樊记腊汁肉夹馍、秦镇米皮、油泼Biangbiang面与岐山臊子面震撼味蕾。",
  },
  gs: {
    center: [101.5, 37.8],
    zoom: 5,
    culinaryTitle: "黄河穿城一碗牛大与河西走廊丝路羊馔",
    desc: "兰州清晨从一碗「一清二白三红四绿五黄」的牛肉拉面开启；靖远与东乡手抓羊肉细嫩无膻，天水麻辣烫油泼辣子浓香，敦煌驴肉黄面与牛奶鸡蛋醪糟尽显丝路交融。",
  },
  qh: {
    center: [96.5, 35.6],
    zoom: 5,
    culinaryTitle: "河湟谷地土火锅、亢锅羊排与青稞牦牛酸奶",
    desc: "农耕与游牧交汇的河湟谷地：西宁铜芯青海土火锅、炕锅羊排、手抓藏系羊肉香气四溢；金黄酥软的狗浇尿油饼、甜醅子与表面凝结金黄奶皮的牦牛酸奶令人难忘。",
  },
  nx: {
    center: [106.2, 37.3],
    zoom: 7,
    culinaryTitle: "贺兰山下盐池滩羊帝国与八宝盖碗茶",
    desc: "饮盐碱水、食甘草长大的盐池滩羊被誉为羊肉界顶流：清水手抓滩羊肉、吴忠早茶烩羊杂碎、怀远夜市辣糊糊、蒿子面与九味八宝茶，浓郁醇厚。",
  },
  xj: {
    center: [85.2, 41.5],
    zoom: 5,
    culinaryTitle: "天山南北红柳大串、大盘鸡与馕坑炙烤",
    desc: "戈壁绿洲与高山草场造就极致炙烤与面食：红柳枝烤羊肉串、喀什馕坑烤包子、和田肚包肉、沙湾大盘鸡配皮带面、伊犁碎肉抓饭与过油肉拉条子。",
  },
  tw: {
    center: [121.0, 23.8],
    zoom: 7,
    culinaryTitle: "闽南古早味、眷村牛肉面与宝岛观光夜市",
    desc: "闽南传统底色融合眷村百味：台北红烧半筋半肉牛肉面、卤肉饭，台南度小月担仔面、牛肉汤、棺材板，以及夜市蚵仔煎、大肠包小肠与芋圆烧仙草。",
  },
  hk: {
    center: [114.17, 22.32],
    zoom: 10,
    culinaryTitle: "粤港茶楼点心、烧味双拼与冰室茶餐厅",
    desc: "中西交融的亚洲美食之都：虾饺烧卖艇仔粥早茶、深井脆皮烧鹅、竹升鲜虾云吞面、避风塘炒蟹，以及丝袜奶茶配冰火菠萝油、九记清汤牛腩。",
  },
  mo: {
    center: [113.55, 22.18],
    zoom: 11,
    culinaryTitle: "四百年土生葡菜、水蟹粥与街头手信",
    desc: "世界美食之都：路环安德鲁葡式蛋挞、木糠布甸、葡国鸡与非洲鸡见证航海香料史；诚昌水蟹粥、竹升虾籽捞面与大利来记猪扒包浓缩濠江风味。",
  },
};

export interface EightCuisineMetaItem {
  id: EightCuisineId;
  code: string;
  name: string;
  shortLabel: string;
  color: string;
  regionProvinces: ProvinceId[];
  flavorSignature: string;
  classicDishes: string[];
}

export const EIGHT_CUISINES_META: Record<EightCuisineId, EightCuisineMetaItem> = {
  chuan: {
    id: "chuan",
    code: "川",
    name: "川菜 · 天府百味",
    shortLabel: "巴蜀川菜",
    color: "#DC2626",
    regionProvinces: ["sc", "cq"],
    flavorSignature: "一菜一格、百菜百味，善用三椒与郫县豆瓣，涵盖麻辣、鱼香、怪味、宫保、红油等24种复合味型",
    classicDishes: ["麻婆豆腐", "回锅肉", "夫妻肺片", "水煮牛肉", "开水白菜", "重庆九宫格火锅"],
  },
  yue: {
    id: "yue",
    code: "粤",
    name: "粤菜 · 岭南本味",
    shortLabel: "岭南粤菜",
    color: "#D97706",
    regionProvinces: ["gd", "hk", "mo", "hi"],
    flavorSignature: "融广府、潮汕、东江客家三脉，讲究清、鲜、嫩、滑、爽、香，极其推崇时令生猛食材本味",
    classicDishes: ["白切鸡", "深井烧鹅", "潮汕牛肉火锅", "卤水狮头鹅", "广式早茶虾饺", "古法盐焗鸡"],
  },
  su: {
    id: "su",
    code: "苏",
    name: "苏菜 · 淮扬细作",
    shortLabel: "淮扬苏菜",
    color: "#0284C7",
    regionProvinces: ["js", "sh"],
    flavorSignature: "集淮扬、金陵、苏锡、徐海四派，刀工精细入微，火候独到，咸甜适中、醇正平和，国宴主轴",
    classicDishes: ["松鼠鳜鱼", "清炖蟹粉狮子头", "文思豆腐", "金陵盐水鸭", "大煮干丝", "软兜长鱼"],
  },
  lu: {
    id: "lu",
    code: "鲁",
    name: "鲁菜 · 齐鲁官府",
    shortLabel: "齐鲁鲁菜",
    color: "#9333EA",
    regionProvinces: ["sd", "bj", "tj", "he", "ln", "jl", "hl"],
    flavorSignature: "八大菜系之首，分济南内陆与胶东海味两派，精于制汤（清汤、奶汤）与爆炒扒笃，咸鲜醇厚",
    classicDishes: ["葱烧海参", "九转大肠", "糖醋鲤鱼", "奶汤蒲菜", "德州扒鸡", "老式锅包肉"],
  },
  zhe: {
    id: "zhe",
    code: "浙",
    name: "浙菜 · 江南山海",
    shortLabel: "江南浙菜",
    color: "#0D9488",
    regionProvinces: ["zj"],
    flavorSignature: "含杭帮、宁帮、瓯菜、婺州四支，江南水乡清俊雅洁与东海小海鲜咸鲜合一，善用绍酒糟卤与火腿",
    classicDishes: ["西湖醋鱼", "东坡肉", "龙井虾仁", "红膏呛蟹", "家烧大黄鱼", "金华火腿"],
  },
  min: {
    id: "min",
    code: "闽",
    name: "闽菜 · 佛跳山海",
    shortLabel: "山海闽菜",
    color: "#2563EB",
    regionProvinces: ["fj", "tw"],
    flavorSignature: "长于红糟调味、制汤与糖醋，一汤十变，山珍与东海海味交融，甜酸清鲜、醇厚幽长",
    classicDishes: ["佛跳墙", "鸡汤汆海蚌", "福州荔枝肉", "泉州姜母鸭", "厦门沙茶面", "海蛎煎"],
  },
  xiang: {
    id: "xiang",
    code: "湘",
    name: "湘菜 · 潇湘香辣",
    shortLabel: "潇湘湘菜",
    color: "#E11D48",
    regionProvinces: ["hn", "jx", "gz"],
    flavorSignature: "刀工精妙，善于煨、炖、腊、蒸、炒，剁椒、鲜椒与柴火烟熏腊味交织，酸辣鲜香、锅气刚猛",
    classicDishes: ["剁椒鱼头", "辣椒炒肉", "毛氏红烧肉", "永州血鸭", "湘西腊味合蒸", "常德钵子菜"],
  },
  hui: {
    id: "hui",
    code: "徽",
    name: "徽菜 · 徽州山珍",
    shortLabel: "古徽州菜",
    color: "#059669",
    regionProvinces: ["ah"],
    flavorSignature: "发端于古徽州新安江畔，取黄山山珍野味，善用火腿佐味、轻度腌制发酵，重油、重色、重火功",
    classicDishes: ["徽州臭鳜鱼", "虎皮毛豆腐", "徽州刀板香", "胡适一品锅", "问政山笋", "黄山烧饼"],
  },
  local: {
    id: "local",
    code: "域",
    name: "地方特色 · 秦晋西北云桂鄂",
    shortLabel: "地域风味",
    color: "#B45309",
    regionProvinces: ["sn", "sx", "ha", "hb", "gx", "yn", "gs", "qh", "nx", "xj", "xz", "nm"],
    flavorSignature: "八大菜系之外极具统治力的地方饮食体系：秦晋中原面食名宴、荆楚千湖河鲜、云贵高原山珍酸汤与西北牛羊炙烤",
    classicDishes: ["手抓滩羊肉", "汽锅鸡", "柳州螺蛳粉", "兰州牛肉面", "西安羊肉泡馍", "洛阳水席"],
  },
};

export interface FlavorBandMetaItem {
  id: string;
  label: string;
  color: string;
  description: string;
}

export const FLAVOR_BAND_META: FlavorBandMetaItem[] = [
  {
    id: "mala",
    label: "巴蜀麻辣复合带",
    color: "#DC2626",
    description: "川渝核心区，花椒之麻与辣椒之辣、豆瓣酱香交织，重油重香",
  },
  {
    id: "xiangla",
    label: "湘赣鄂鲜辣重味带",
    color: "#EA580C",
    description: "湖南、江西、湖北一带，剁椒、鲜椒急火猛炒与卤辣并重",
  },
  {
    id: "suanla",
    label: "云贵桂琼酸辣发酵带",
    color: "#16A34A",
    description: "贵州红酸汤、广西酸笋、云南酸木瓜与海南糟粕醋，天然发酵生津",
  },
  {
    id: "xiantian",
    label: "江南闽粤清鲜微甜带",
    color: "#0284C7",
    description: "江浙沪、广东、福建、港澳台，突出河海本鲜与冰糖/红糟回甘",
  },
  {
    id: "xianchun",
    label: "北方咸鲜酱香醇厚带",
    color: "#9333EA",
    description: "京津冀、山东、河南、山西、陕西、东北，葱姜爆锅、酱香与醋香浓郁",
  },
  {
    id: "zhirou",
    label: "西北草原炙烤奶肉带",
    color: "#D97706",
    description: "甘青宁新蒙藏，孜然椒盐炭火炙烤、清水手抓牛羊与醇厚奶食",
  },
];

export interface StapleBandMetaItem {
  id: StapleType;
  label: string;
  color: string;
  description: string;
}

export const STAPLE_BAND_META: Record<StapleType, StapleBandMetaItem> = {
  面食帝国: {
    id: "面食帝国",
    label: "北方麦作 · 面食帝国",
    color: "#D97706",
    description: "秦晋鲁豫甘新京津东北，拉面、刀削面、油泼面、烩面、炸酱面、烧饼馍饵千变万化",
  },
  嗦粉天堂: {
    id: "嗦粉天堂",
    label: "南方稻作 · 嗦粉天堂",
    color: "#16A34A",
    description: "桂滇黔湘赣琼，桂林米粉、螺蛳粉、过桥米线、牛肉粉、南昌拌粉一日三餐",
  },
  米食百味: {
    id: "米食百味",
    label: "鱼米水乡 · 米食百味",
    color: "#0284C7",
    description: "粤闽台与长三角，煲仔饭、扬州炒饭、粿条、肠粉、粽子、年糕、糍粑精致丰饶",
  },
  粉面双绝: {
    id: "粉面双绝",
    label: "南北交汇 · 粉面双绝",
    color: "#DC2626",
    description: "川渝鄂苏皖，既有一流面食（重庆小面、武汉热干面、苏式汤面），又有米粉米线深入市井",
  },
  山海兼备: {
    id: "山海兼备",
    label: "高原海疆 · 山海兼备",
    color: "#7C3AED",
    description: "青藏高原青稞糌粑与沿海海鲜水饺、鱼丸面线并存的多元主食谱系",
  },
};

export function classifyFlavorBand(city: CityFoodPack): FlavorBandMetaItem {
  const f = city.dominantFlavor;
  if (f.includes("麻辣") || city.province === "sc" || city.province === "cq") {
    return FLAVOR_BAND_META[0];
  }
  if (f.includes("酸") || ["gz", "gx", "yn", "hi"].includes(city.province)) {
    return FLAVOR_BAND_META[2];
  }
  if (f.includes("香辣") || f.includes("鲜辣") || ["hn", "jx", "hb"].includes(city.province)) {
    return FLAVOR_BAND_META[1];
  }
  if (["gd", "fj", "zj", "js", "sh", "hk", "mo", "tw"].includes(city.province)) {
    return FLAVOR_BAND_META[3];
  }
  if (["xj", "nm", "qh", "nx", "gs", "xz"].includes(city.province)) {
    return FLAVOR_BAND_META[5];
  }
  return FLAVOR_BAND_META[4];
}

export function getCityThematicStyle(
  city: CityFoodPack,
  mode: PortalThematicMode,
  isVisited: boolean,
): { color: string; badge: string; groupKey: string } {
  if (mode === "visited") {
    return isVisited
      ? { color: "#B91C1C", badge: "✓ 已寻味", groupKey: "visited-yes" }
      : { color: "#78716C", badge: "待寻味", groupKey: "visited-no" };
  }
  if (mode === "cuisine") {
    const meta = EIGHT_CUISINES_META[city.eightCuisine] ?? EIGHT_CUISINES_META.local;
    return {
      color: meta.color,
      badge: meta.shortLabel,
      groupKey: meta.id,
    };
  }
  if (mode === "flavor") {
    const fb = classifyFlavorBand(city);
    return {
      color: fb.color,
      badge: fb.label.replace("带", ""),
      groupKey: fb.id,
    };
  }
  // mode === "staple"
  const sb = STAPLE_BAND_META[city.stapleType] ?? STAPLE_BAND_META["粉面双绝"];
  return {
    color: sb.color,
    badge: sb.id,
    groupKey: sb.id,
  };
}
