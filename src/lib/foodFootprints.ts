import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  CityFoodPack,
  DishCard,
  EightCuisineId,
  FoodCategoryId,
  ProvinceId,
} from "../content/types";

export interface TastedDishRecord {
  cardId: string;
  title: string;
  cityId: string;
  cityName: string;
  province: ProvinceId;
  provinceLabel: string;
  category: FoodCategoryId;
  cuisineStyle: string;
  eightCuisine?: EightCuisineId;
  photoUrl: string;
  coord: [number, number];
  note?: string;
  timestamp: number;
}

export type TastedDishInput = Omit<TastedDishRecord, "timestamp" | "photoUrl"> & {
  photoUrl?: string;
  timestamp?: number;
};

const TASTED_DISHES_KEY = "shiwei_tasted_dishes_v2";
const WISHLIST_DISHES_KEY = "shiwei_wishlist_dishes_v2";
const SYNC_EVENT = "shiwei-food-footprints-sync";

const DEFAULT_TASTED_DISHES: TastedDishRecord[] = [
  {
    cardId: "chengdu-mapo",
    title: "麻婆豆腐",
    cityId: "chengdu",
    cityName: "成都",
    province: "sc",
    provinceLabel: "四川省",
    category: "dacai",
    cuisineStyle: "川菜 · 上河帮",
    eightCuisine: "chuan",
    photoUrl: "/photos/chengdu-mapo.jpg",
    coord: [104.0665, 30.6638],
    note: "麻辣烫酥嫩鲜香活八字箴言，郫县豆瓣与汉源贡椒香气绝妙，趁热拌米饭一绝。",
    timestamp: 1762000000000,
  },
  {
    cardId: "beijing-kaoya",
    title: "北京烤鸭",
    cityId: "beijing",
    cityName: "北京",
    province: "bj",
    provinceLabel: "北京市",
    category: "dacai",
    cuisineStyle: "京菜 · 宫廷鲁菜脉",
    eightCuisine: "lu",
    photoUrl: "/photos/beijing-kaoya.jpg",
    coord: [116.4052, 39.9149],
    note: "枣木明火挂炉烤制，鸭皮蘸白糖入口即化，荷叶饼卷葱丝甜面酱醇厚。",
    timestamp: 1762100000000,
  },
  {
    cardId: "guangzhou-xiajiao",
    title: "广式虾饺皇",
    cityId: "guangzhou",
    cityName: "广州",
    province: "gd",
    provinceLabel: "广东省",
    category: "xiaochi",
    cuisineStyle: "粤菜 · 广府早茶",
    eightCuisine: "yue",
    photoUrl: "/photos/guangzhou-xiajiao.jpg",
    coord: [113.2442, 23.1092],
    note: "澄面皮十二道褶半透明如玉，整颗青虾仁爽脆弹牙伴笋丁鲜汁。",
    timestamp: 1762200000000,
  },
  {
    cardId: "chongqing-huoguo",
    title: "重庆九宫格老火锅",
    cityId: "chongqing",
    cityName: "重庆",
    province: "cq",
    provinceLabel: "重庆市",
    category: "dacai",
    cuisineStyle: "川菜 · 巴渝江湖",
    eightCuisine: "chuan",
    photoUrl: "/photos/chongqing-huoguo.jpg",
    coord: [106.5768, 29.5579],
    note: "醇厚牛油翻滚石柱红与茂汶花椒，鲜毛肚七上八下脆嫩化渣。",
    timestamp: 1762300000000,
  },
  {
    cardId: "lanzhou-niuroumian",
    title: "兰州清汤牛肉面",
    cityId: "lanzhou",
    cityName: "兰州",
    province: "gs",
    provinceLabel: "甘肃省",
    category: "zhushi",
    cuisineStyle: "西北风味 · 陇上拉面",
    eightCuisine: "local",
    photoUrl: "/photos/lanzhou-niuroumian.jpg",
    coord: [103.8236, 36.0581],
    note: "一清二白三红四绿五黄，头锅牛骨清汤配蓬灰手工二细，辣子香而不燥。",
    timestamp: 1762400000000,
  },
  {
    cardId: "xian-roujiamo",
    title: "西安腊汁肉夹馍",
    cityId: "xian",
    cityName: "西安",
    province: "sn",
    provinceLabel: "陕西省",
    category: "xiaochi",
    cuisineStyle: "秦菜 · 关中碳水",
    eightCuisine: "local",
    photoUrl: "/photos/xian-roujiamo.jpg",
    coord: [108.9465, 34.2586],
    note: "铁圈虎背菊花心白吉馍酥脆掉渣，陈年老汤焖制的腊汁肉肥而不腻。",
    timestamp: 1762500000000,
  },
];

const DEFAULT_WISHLIST_DISHES: TastedDishRecord[] = [
  {
    cardId: "yangzhou-shizitou",
    title: "清炖蟹粉狮子头",
    cityId: "yangzhou",
    cityName: "扬州",
    province: "js",
    provinceLabel: "江苏省",
    category: "dacai",
    cuisineStyle: "苏菜 · 淮扬正宗",
    eightCuisine: "su",
    photoUrl: "/photos/yangzhou-shizitou.jpg",
    coord: [119.4129, 32.3942],
    note: "细切粗斩石榴粒，高汤砂锅文火慢炖，肥嫩似豆腐、入口即化。",
    timestamp: 1762750000000,
  },
  {
    cardId: "huangshan-chouyu",
    title: "徽州臭鳜鱼",
    cityId: "huangshan",
    cityName: "黄山",
    province: "ah",
    provinceLabel: "安徽省",
    category: "dacai",
    cuisineStyle: "徽菜 · 古徽州",
    eightCuisine: "hui",
    photoUrl: "/photos/huangshan-chouyu.jpg",
    coord: [118.3292, 29.7147],
    note: "木桶淡盐轻度发酵，闻着微臭吃着奇香，鱼肉呈蒜瓣状紧实入味。",
    timestamp: 1762780000000,
  },
  {
    cardId: "liuzhou-luosifen",
    title: "柳州螺蛳粉",
    cityId: "liuzhou",
    cityName: "柳州",
    province: "gx",
    provinceLabel: "广西壮族自治区",
    category: "zhushi",
    cuisineStyle: "桂菜 · 八桂嗦粉",
    eightCuisine: "local",
    photoUrl: "/photos/liuzhou-luosifen.jpg",
    coord: [109.4126, 24.3146],
    note: "石螺猪骨熬汤配老坛酸笋、炸腐竹与炸鸭脚，酸辣鲜爽直击灵魂。",
    timestamp: 1762800000000,
  },
];

function emitSync() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(SYNC_EVENT));
  }
}

export function dishCardToRecord(
  card: DishCard,
  city: Pick<CityFoodPack, "id" | "name" | "province" | "provinceLabel" | "eightCuisine">,
  note?: string,
): TastedDishRecord {
  return {
    cardId: card.id,
    title: card.title,
    cityId: city.id,
    cityName: city.name,
    province: city.province,
    provinceLabel: city.provinceLabel,
    category: card.category,
    cuisineStyle: card.cuisineStyle,
    eightCuisine: card.eightCuisine ?? city.eightCuisine,
    photoUrl: card.photoUrl ?? `/photos/${card.id}.jpg`,
    coord: card.coord,
    note,
    timestamp: Date.now(),
  };
}

export function loadTastedDishes(): TastedDishRecord[] {
  if (typeof window === "undefined") return DEFAULT_TASTED_DISHES;
  try {
    const raw = window.localStorage.getItem(TASTED_DISHES_KEY);
    if (raw === null) return DEFAULT_TASTED_DISHES;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_TASTED_DISHES;
  } catch {
    return DEFAULT_TASTED_DISHES;
  }
}

export function loadWishlistDishes(): TastedDishRecord[] {
  if (typeof window === "undefined") return DEFAULT_WISHLIST_DISHES;
  try {
    const raw = window.localStorage.getItem(WISHLIST_DISHES_KEY);
    if (raw === null) return DEFAULT_WISHLIST_DISHES;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_WISHLIST_DISHES;
  } catch {
    return DEFAULT_WISHLIST_DISHES;
  }
}

function normalizeRecord(input: TastedDishInput): TastedDishRecord {
  return {
    ...input,
    photoUrl: input.photoUrl ?? `/photos/${input.cardId}.jpg`,
    timestamp: input.timestamp ?? Date.now(),
  };
}

export function toggleTastedDish(itemOrId: TastedDishInput | string): TastedDishRecord[] {
  const cur = loadTastedDishes();
  const cardId = typeof itemOrId === "string" ? itemOrId : itemOrId.cardId;
  const exists = cur.some((d) => d.cardId === cardId);

  let next: TastedDishRecord[];
  if (exists) {
    next = cur.filter((d) => d.cardId !== cardId);
  } else if (typeof itemOrId !== "string") {
    const rec = normalizeRecord(itemOrId);
    next = [rec, ...cur];
  } else {
    return cur;
  }

  try {
    window.localStorage.setItem(TASTED_DISHES_KEY, JSON.stringify(next));
    emitSync();
  } catch {
    // ignore storage errors
  }
  return next;
}

export function toggleWishlistDish(itemOrId: TastedDishInput | string): TastedDishRecord[] {
  const cur = loadWishlistDishes();
  const cardId = typeof itemOrId === "string" ? itemOrId : itemOrId.cardId;
  const exists = cur.some((d) => d.cardId === cardId);

  let next: TastedDishRecord[];
  if (exists) {
    next = cur.filter((d) => d.cardId !== cardId);
  } else if (typeof itemOrId !== "string") {
    const rec = normalizeRecord(itemOrId);
    next = [rec, ...cur];
  } else {
    return cur;
  }

  try {
    window.localStorage.setItem(WISHLIST_DISHES_KEY, JSON.stringify(next));
    emitSync();
  } catch {
    // ignore storage errors
  }
  return next;
}

export function updateDishNote(cardId: string, note: string): TastedDishRecord[] {
  const cur = loadTastedDishes();
  const next = cur.map((d) => (d.cardId === cardId ? { ...d, note } : d));
  try {
    window.localStorage.setItem(TASTED_DISHES_KEY, JSON.stringify(next));
    const wish = loadWishlistDishes();
    if (wish.some((w) => w.cardId === cardId)) {
      window.localStorage.setItem(
        WISHLIST_DISHES_KEY,
        JSON.stringify(wish.map((w) => (w.cardId === cardId ? { ...w, note } : w))),
      );
    }
    emitSync();
  } catch {
    // ignore storage errors
  }
  return next;
}

export function setDishesTastedBatch(
  items: TastedDishInput[],
  tasted: boolean,
  _cityId?: string,
): TastedDishRecord[] {
  const cur = loadTastedDishes();
  const targetIds = new Set(items.map((i) => i.cardId));
  let next: TastedDishRecord[];

  if (tasted) {
    const existingIds = new Set(cur.map((d) => d.cardId));
    const additions = items
      .filter((i) => !existingIds.has(i.cardId))
      .map((i) => normalizeRecord(i));
    next = [...additions, ...cur];
  } else {
    next = cur.filter((d) => !targetIds.has(d.cardId));
  }

  try {
    window.localStorage.setItem(TASTED_DISHES_KEY, JSON.stringify(next));
    emitSync();
  } catch {
    // ignore
  }
  return next;
}

export function inferEightCuisineFromRecord(rec: TastedDishRecord): EightCuisineId {
  if (rec.eightCuisine) return rec.eightCuisine;
  const s = rec.cuisineStyle;
  if (s.includes("川") || rec.province === "sc" || rec.province === "cq") return "chuan";
  if (s.includes("粤") || s.includes("潮") || s.includes("客") || ["gd", "hk", "mo", "hi"].includes(rec.province))
    return "yue";
  if (s.includes("苏") || s.includes("淮扬") || s.includes("本帮") || ["js", "sh"].includes(rec.province))
    return "su";
  if (s.includes("鲁") || s.includes("京") || ["sd", "bj", "tj", "he", "ln", "jl", "hl"].includes(rec.province))
    return "lu";
  if (s.includes("浙") || s.includes("杭") || s.includes("甬") || rec.province === "zj") return "zhe";
  if (s.includes("闽") || s.includes("台") || ["fj", "tw"].includes(rec.province)) return "min";
  if (s.includes("湘") || s.includes("赣") || s.includes("黔") || ["hn", "jx", "gz"].includes(rec.province))
    return "xiang";
  if (s.includes("徽") || rec.province === "ah") return "hui";
  return "local";
}

export function useFoodFootprints() {
  const [tastedDishes, setTastedDishes] = useState<TastedDishRecord[]>(() => loadTastedDishes());
  const [wishlistDishes, setWishlistDishes] = useState<TastedDishRecord[]>(() => loadWishlistDishes());

  useEffect(() => {
    const sync = () => {
      setTastedDishes(loadTastedDishes());
      setWishlistDishes(loadWishlistDishes());
    };
    window.addEventListener(SYNC_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(SYNC_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const tastedDishIds = useMemo(() => tastedDishes.map((d) => d.cardId), [tastedDishes]);
  const tastedDishSet = useMemo(() => new Set(tastedDishIds), [tastedDishIds]);

  const wishlistDishIds = useMemo(() => wishlistDishes.map((d) => d.cardId), [wishlistDishes]);
  const wishlistDishSet = useMemo(() => new Set(wishlistDishIds), [wishlistDishIds]);

  const visitedProvinceSet = useMemo(() => {
    const set = new Set<ProvinceId>();
    for (const d of tastedDishes) {
      if (d.province) set.add(d.province);
    }
    return set;
  }, [tastedDishes]);

  const toggleTasted = useCallback((itemOrId: TastedDishInput | string) => {
    setTastedDishes(toggleTastedDish(itemOrId));
  }, []);

  const toggleWishlist = useCallback((itemOrId: TastedDishInput | string) => {
    setWishlistDishes(toggleWishlistDish(itemOrId));
  }, []);

  const updateNote = useCallback((cardId: string, note: string) => {
    setTastedDishes(updateDishNote(cardId, note));
    setWishlistDishes(loadWishlistDishes());
  }, []);

  const setBatchTasted = useCallback(
    (items: TastedDishInput[], tasted: boolean, cityId?: string) => {
      setTastedDishes(setDishesTastedBatch(items, tasted, cityId));
    },
    [],
  );

  const isTasted = useCallback((cardId: string) => tastedDishSet.has(cardId), [tastedDishSet]);
  const isWishlisted = useCallback(
    (cardId: string) => wishlistDishSet.has(cardId),
    [wishlistDishSet],
  );

  return {
    tastedDishes,
    tastedDishIds,
    tastedDishSet,
    wishlistDishes,
    wishlistDishIds,
    wishlistDishSet,
    visitedProvinceSet,
    toggleTasted,
    toggleWishlist,
    updateNote,
    setBatchTasted,
    isTasted,
    isWishlisted,
  };
}
