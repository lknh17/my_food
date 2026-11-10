export type LngLat = [number, number];

export type ProvinceId =
  | "bj"
  | "tj"
  | "he"
  | "sx"
  | "nm"
  | "ln"
  | "jl"
  | "hl"
  | "sh"
  | "js"
  | "zj"
  | "ah"
  | "fj"
  | "jx"
  | "sd"
  | "ha"
  | "hb"
  | "hn"
  | "gd"
  | "gx"
  | "hi"
  | "cq"
  | "sc"
  | "gz"
  | "yn"
  | "xz"
  | "sn"
  | "gs"
  | "qh"
  | "nx"
  | "xj"
  | "tw"
  | "hk"
  | "mo";

export type FoodCategoryId = "dacai" | "xiaochi" | "zhushi" | "fengwu" | "shijie";

export type EightCuisineId =
  | "lu"
  | "chuan"
  | "yue"
  | "su"
  | "min"
  | "zhe"
  | "xiang"
  | "hui"
  | "local";

export type StapleType = "面食帝国" | "嗦粉天堂" | "米食百味" | "粉面双绝" | "山海兼备";

export type PortalThematicMode = "cuisine" | "flavor" | "staple" | "visited";

export interface FamousSpot {
  name: string;
  addressHint: string;
  note?: string;
}

export interface DishCard {
  /** 全局唯一菜品或词条 ID（如 "cd-mapo-tofu"） */
  id: string;
  title: string;
  category: FoodCategoryId;
  /** 所属菜系与流派（如 "川菜 · 上河帮"、"粤菜 · 广府菜"） */
  cuisineStyle: string;
  eightCuisine?: EightCuisineId;
  /** 味型特征（如 "麻辣鲜香 · 酥香嫩滑"） */
  flavorProfile: string;
  /** 核心烹饪技法（如 "急火快炒 / 勾芡收汁"） */
  cookingMethod: string;
  /** 道地主料与调味灵魂（如 "石膏嫩豆腐、黄牛肉末、郫县特级豆瓣、汉源贡椒"） */
  mainIngredients: string;
  /** 起源年代（如 "清同治元年（1862年）"） */
  originEra?: string;
  /** 非遗与老字号等级（如 "国家级非遗 / 中华老字号"） */
  heritageTag?: string;
  /** 一句话风味点睛导语 */
  tagline: string;
  /** 240–380 字深度饮食志正文（涵盖历史典故、道地食材、烹饪技法与品鉴要诀） */
  body: string;
  /** 兼容别名（可选） */
  storyAndCraft?: string;
  /** 2–3 家代表老字号或寻味名店/老街 */
  famousSpots: FamousSpot[];
  /** WGS84 经纬度坐标 [lng, lat] */
  coord: [number, number];
  /** 中文维基精确词条名（用于抓取真实摄影图） */
  wiki?: string;
  /** 图片巡检精确检索词 */
  query?: string;
  /** 静态图片路径，默认 `/photos/${id}.jpg` */
  photoUrl?: string;
}

export interface FoodVolume {
  id: FoodCategoryId;
  index: string;
  title: string;
  subtitle: string;
  lede: string;
  cards: DishCard[];
}

export interface FlavorRadarItem {
  label: string;
  score: number;
  note: string;
}

export interface CulinaryFactItem {
  label: string;
  value: string;
  detail: string;
}

export interface CulinaryCausalityChain {
  no: string;
  title: string;
  detail: string;
  spotName: string;
  coord: [number, number];
}

export interface CityFoodOverviewSpec {
  subtitle: string;
  leadParagraphs: string[];
  flavorRadar: FlavorRadarItem[];
  culinaryFacts: CulinaryFactItem[];
  causalityChains: CulinaryCausalityChain[];
}

export interface CityFoodPack {
  id: string;
  name: string;
  province: ProvinceId;
  provinceLabel: string;
  regionGroup?: string;
  center: [number, number];
  defaultZoom: number;
  cuisineTag: string;
  eightCuisine: EightCuisineId;
  dominantFlavor: string;
  stapleType: StapleType;
  heroHeadline: string;
  heroDek: string;
  signatureDishes: string[];
  overview: CityFoodOverviewSpec;
  volumes: FoodVolume[];
}

export type SpecialTopicId =
  | "eight-cuisines"
  | "noodles-compendium"
  | "rice-noodles-compendium"
  | "hotpot-jianghu"
  | "morning-feast"
  | "bbq-nightmarket"
  | "pastries-sweet-soups";

export interface TopicFoodItem {
  id: string;
  title: string;
  cityId: string;
  cityName: string;
  province: ProvinceId;
  provinceLabel: string;
  schoolOrStyle: string;
  flavorProfile: string;
  soulIngredient: string;
  craftHighlight: string;
  famousShop: string;
  description: string;
  coord: [number, number];
  wiki?: string;
  query?: string;
  photoUrl?: string;
}

export interface SpecialTopicSubGroup {
  id: string;
  title: string;
  subtitle: string;
  regionBadge: string;
  description: string;
  items: TopicFoodItem[];
}

export interface SpecialTopicPack {
  id: SpecialTopicId;
  index: string;
  title: string;
  kicker: string;
  subtitle: string;
  lede: string;
  metrics: { label: string; value: string; note: string }[];
  subGroups: SpecialTopicSubGroup[];
}

export const FOOD_VOLUME_META: Record<
  FoodCategoryId,
  { id: FoodCategoryId; index: string; title: string; shortTitle: string; badgeColor: string; icon: string }
> = {
  dacai: {
    id: "dacai",
    index: "卷一",
    title: "镇桌大菜",
    shortTitle: "大菜",
    badgeColor: "#B91C1C",
    icon: "🍲",
  },
  xiaochi: {
    id: "xiaochi",
    index: "卷二",
    title: "街头小吃",
    shortTitle: "小吃",
    badgeColor: "#B45309",
    icon: "🥟",
  },
  zhushi: {
    id: "zhushi",
    index: "卷三",
    title: "粉面碳水",
    shortTitle: "粉面",
    badgeColor: "#D97706",
    icon: "🍜",
  },
  fengwu: {
    id: "fengwu",
    index: "卷四",
    title: "道地风物",
    shortTitle: "风物",
    badgeColor: "#15803D",
    icon: "🌿",
  },
  shijie: {
    id: "shijie",
    index: "卷五",
    title: "寻味老街与名店",
    shortTitle: "老街",
    badgeColor: "#1E3A5F",
    icon: "🏮",
  },
};
