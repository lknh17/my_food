import { useMemo, useState } from "react";
import { EIGHT_CUISINES_META, PROVINCE_TABS } from "../content/provincesMeta";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type DishCard,
  type FoodCategoryId,
  type ProvinceId,
  type SpecialTopicId,
  type SpecialTopicPack,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { dishCardToRecord, useFoodFootprints } from "../lib/foodFootprints";

export interface ChinaFoodPortalProps {
  cities: CityFoodPack[];
  topics?: SpecialTopicPack[];
  selectedCityId: string;
  onSelectCity: (cityId: string) => void;
  onEnterGazetteer: (cityId: string, category?: FoodCategoryId, cardId?: string) => void;
  onOpenTopicsHub: (topicId?: SpecialTopicId) => void;
  onOpenFoodMap?: (cityId: string, category?: FoodCategoryId, cardId?: string) => void;
  onOpenPassport: () => void;
  onOpenSearchModal: () => void;
}

interface FeaturedDishEntry {
  city: CityFoodPack;
  card: DishCard;
  kickerLabel: string;
}

const FEATURED_HERO_SPECS: { cityId: string; cardId: string; kickerLabel: string }[] = [
  { cityId: "chengdu", cardId: "chengdu-mapo", kickerLabel: "川菜之魂 · 麻辣烫酥嫩鲜香活" },
  { cityId: "beijing", cardId: "beijing-kaoya", kickerLabel: "京华御膳 · 枣木明火挂炉烤制" },
  { cityId: "guangzhou", cardId: "guangzhou-xiajiao", kickerLabel: "广府早茶 · 一盅两件晶莹剔透" },
  { cityId: "yangzhou", cardId: "yangzhou-shizitou", kickerLabel: "淮扬刀工 · 葵花大斩肉文火慢炖" },
  { cityId: "chongqing", cardId: "chongqing-huoguo", kickerLabel: "两江码头 · 九宫格醇厚牛油沸腾" },
  { cityId: "lanzhou", cardId: "lanzhou-niuroumian", kickerLabel: "金城清晨 · 一清二白三红四绿五黄" },
  { cityId: "liuzhou", cardId: "liuzhou-luosifen", kickerLabel: "八桂嗦粉 · 酸笋石螺骨汤鲜辣暴击" },
  { cityId: "hangzhou", cardId: "hangzhou-dongpo", kickerLabel: "宋韵杭帮 · 绍酒慢焖酥烂如豆腐" },
];

const TOPIC_ICON_MAP: Record<SpecialTopicId, string> = {
  "eight-cuisines": "🥢",
  "noodles-compendium": "🍜",
  "rice-noodles-compendium": "🥣",
  "hotpot-jianghu": "🍲",
  "morning-feast": "🥟",
  "bbq-nightmarket": "🔥",
  "pastries-sweet-soups": "🍡",
  "tea-and-wine": "🍵",
  "seasonal-feast": "🌾",
  "heritage-banquets": "🏮",
};

interface TopicCardView {
  id: SpecialTopicId;
  index: string;
  kicker: string;
  title: string;
  subtitle: string;
  photoUrl: string;
  itemCount: number;
  subGroupCount: number;
  tags: string[];
}

const FALLBACK_EXTRA_TOPICS: TopicCardView[] = [
  {
    id: "tea-and-wine",
    index: "专题八",
    kicker: "CHINESE TEA & LIQUOR · 茗茶佳酿",
    title: "中华名茶与美酒图志",
    subtitle: "六大茶类核心产区与四大香型传世佳酿的杯中风物",
    photoUrl: "/photos/hangzhou-longjing2.jpg",
    itemCount: 24,
    subGroupCount: 4,
    tags: ["西湖龙井", "武夷岩茶大红袍", "绍兴花雕黄酒", "赤水河酱香酒"],
  },
  {
    id: "seasonal-feast",
    index: "专题九",
    kicker: "24 SOLAR TERMS · 不时不食",
    title: "二十四节气四时寻味历",
    subtitle: "春尝江鲜山笋、夏食清补凉面、秋品膏蟹桂花、冬煨羊肉火锅",
    photoUrl: "/photos/yangzhou-xie.jpg",
    itemCount: 24,
    subGroupCount: 4,
    tags: ["清明螺与春笋", "夏至冷淘凉面", "秋风大闸蟹", "冬至铜锅涮肉"],
  },
  {
    id: "heritage-banquets",
    index: "专题十",
    kicker: "IMPERIAL & FOLK BANQUETS · 传世名宴",
    title: "中华传世名宴全席",
    subtitle: "从孔府官府礼宴、扬州红楼宴、洛阳水席到顺德拆鱼宴与坝坝九大碗",
    photoUrl: "/photos/yangzhou-wensi.jpg",
    itemCount: 20,
    subGroupCount: 4,
    tags: ["曲阜孔府家宴", "洛阳牡丹水席", "淮扬文思国宴", "川西九斗碗"],
  },
];

const MACRO_REGIONS = [
  "全部",
  "西南巴蜀云贵",
  "岭南闽琼港澳台",
  "江南淮扬徽浙",
  "湘赣荆楚",
  "齐鲁中原秦晋",
  "京津冀西北关东",
] as const;

const FLAVOR_QUICK_FILTERS = [
  { id: "all", label: "全部味型" },
  { id: "麻辣", label: "🌶️ 麻辣红油" },
  { id: "鲜甜", label: "🍯 清鲜回甜" },
  { id: "咸鲜", label: "🍲 咸鲜醇厚" },
  { id: "酸", label: "🍋 酸辣开胃" },
  { id: "烤", label: "🔥 炙烤锅气" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function ChinaFoodPortal({
  cities,
  topics = [],
  onSelectCity,
  onEnterGazetteer,
  onOpenTopicsHub,
  onOpenPassport,
  onOpenSearchModal,
}: ChinaFoodPortalProps) {
  const {
    tastedDishes,
    tastedDishSet,
    wishlistDishes,
    wishlistDishSet,
    toggleTasted,
    toggleWishlist,
  } = useFoodFootprints();

  const [heroIndex, setHeroIndex] = useState(0);
  const [rouletteDish, setRouletteDish] = useState<{ city: CityFoodPack; card: DishCard } | null>(null);
  const [macroRegionFilter, setMacroRegionFilter] = useState<string>("全部");
  const [provinceFilter, setProvinceFilter] = useState<ProvinceId | "all">("all");
  const [flavorFilter, setFlavorFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [streamCategory, setStreamCategory] = useState<FoodCategoryId>("dacai");

  const totalDishesCount = useMemo(
    () =>
      cities.reduce(
        (acc, c) => acc + c.volumes.reduce((vAcc, v) => vAcc + v.cards.length, 0),
        0,
      ),
    [cities],
  );

  // Build featured hero carousel items
  const featuredHeroDishes = useMemo<FeaturedDishEntry[]>(() => {
    const out: FeaturedDishEntry[] = [];
    for (const spec of FEATURED_HERO_SPECS) {
      const city = cities.find((c) => c.id === spec.cityId);
      if (!city) continue;
      const card = city.volumes.flatMap((v) => v.cards).find((c) => c.id === spec.cardId) ?? city.volumes[0]?.cards[0];
      if (card) {
        out.push({ city, card, kickerLabel: spec.kickerLabel });
      }
    }
    if (out.length === 0 && cities[0]?.volumes[0]?.cards[0]) {
      out.push({
        city: cities[0],
        card: cities[0].volumes[0].cards[0],
        kickerLabel: "镇城头牌代表作",
      });
    }
    return out;
  }, [cities]);

  const activeHero = featuredHeroDishes[heroIndex % Math.max(1, featuredHeroDishes.length)] ?? featuredHeroDishes[0];

  // Build 10 Special Topics visual cards
  const topicCards = useMemo<TopicCardView[]>(() => {
    const mapped: TopicCardView[] = topics.map((tp) => {
      const allItems = tp.subGroups.flatMap((sg) => sg.items);
      const firstItem = allItems[0];
      return {
        id: tp.id,
        index: tp.index,
        kicker: tp.kicker,
        title: tp.title,
        subtitle: tp.subtitle,
        photoUrl: firstItem?.photoUrl ?? `/photos/${firstItem?.id ?? "chengdu-mapo"}.jpg`,
        itemCount: allItems.length,
        subGroupCount: tp.subGroups.length,
        tags: allItems.slice(0, 4).map((i) => `${i.cityName}·${i.title}`),
      };
    });
    const existingIds = new Set(mapped.map((m) => m.id));
    for (const extra of FALLBACK_EXTRA_TOPICS) {
      if (!existingIds.has(extra.id)) {
        mapped.push(extra);
      }
    }
    return mapped;
  }, [topics]);

  // Visible province tabs for macro region
  const visibleProvinceTabs = useMemo(() => {
    if (macroRegionFilter === "全部") return PROVINCE_TABS;
    return PROVINCE_TABS.filter(
      (p) => p.id === "all" || p.regionMacro === macroRegionFilter,
    );
  }, [macroRegionFilter]);

  const provMacroMap = useMemo(() => {
    const map = new Map<ProvinceId, string>();
    for (const p of PROVINCE_TABS) {
      if (p.id !== "all") map.set(p.id, p.regionMacro);
    }
    return map;
  }, []);

  // Filtered cities for Section 3
  const filteredCities = useMemo(() => {
    const q = search.trim().toLowerCase();
    return cities.filter((c) => {
      if (macroRegionFilter !== "全部" && provMacroMap.get(c.province) !== macroRegionFilter) {
        return false;
      }
      if (provinceFilter !== "all" && c.province !== provinceFilter) {
        return false;
      }
      if (flavorFilter !== "all") {
        const flavorMatch =
          c.dominantFlavor.includes(flavorFilter) ||
          c.cuisineTag.includes(flavorFilter) ||
          (flavorFilter === "鲜甜" && (c.dominantFlavor.includes("甜") || c.dominantFlavor.includes("清鲜"))) ||
          (flavorFilter === "烤" && (c.dominantFlavor.includes("烤") || c.dominantFlavor.includes("香") || c.cuisineTag.includes("烤")));
        if (!flavorMatch) return false;
      }
      if (q) {
        const dishHit =
          c.signatureDishes.some((d) => d.toLowerCase().includes(q)) ||
          c.volumes.some((v) =>
            v.cards.some(
              (card) =>
                card.title.toLowerCase().includes(q) ||
                card.flavorProfile.toLowerCase().includes(q),
            ),
          );
        return (
          c.name.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q) ||
          c.provinceLabel.toLowerCase().includes(q) ||
          c.cuisineTag.toLowerCase().includes(q) ||
          c.dominantFlavor.toLowerCase().includes(q) ||
          dishHit
        );
      }
      return true;
    });
  }, [cities, macroRegionFilter, provMacroMap, provinceFilter, flavorFilter, search]);

  // Curated national dishes stream for Section 4
  const streamDishes = useMemo(() => {
    const list: { city: CityFoodPack; card: DishCard }[] = [];
    for (const city of cities) {
      const vol = city.volumes.find((v) => v.id === streamCategory);
      if (vol && vol.cards[0]) {
        list.push({ city, card: vol.cards[0] });
      }
    }
    return list.slice(0, 16);
  }, [cities, streamCategory]);

  // Pick a random iconic dish
  function handleRandomDishRoulette() {
    const pool: { city: CityFoodPack; card: DishCard }[] = [];
    for (const city of cities) {
      for (const vol of city.volumes) {
        if (vol.id === "shijie") continue;
        if (vol.cards[0]) pool.push({ city, card: vol.cards[0] });
      }
    }
    if (pool.length === 0) return;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    setRouletteDish(picked);
  }

  return (
    <div className="china-food-portal editorial-portal-shell" data-testid="china-food-portal">
      {/* 顶部粘性朱砂宣纸报头导航 */}
      <header className="cfp-editorial-masthead">
        <div className="cfp-editorial-mast-inner">
          <div className="cfp-brand-group">
            <span className="seal">食味</span>
            <div className="cfp-brand-copy">
              <span className="cfp-kicker">
                ORIENTAL CULINARY GAZETTEER · 东方风味食单画报
              </span>
              <h1>
                食味 · 中华风味图志
                <small>四方食事，不过一碗人间烟火</small>
              </h1>
            </div>
          </div>

          <nav className="cfp-editorial-nav-pills" aria-label="首页分栏导航">
            <button type="button" onClick={() => scrollToSection("portal-sec-hero")}>
              🏮 首页画报
            </button>
            <button
              type="button"
              data-testid="portal-nav-topics"
              onClick={() => scrollToSection("portal-sec-topics")}
            >
              📜 十大饮食专题 ({topicCards.length})
            </button>
            <button type="button" onClick={() => scrollToSection("portal-sec-cities")}>
              🥢 全国34省市食单 ({cities.length}城)
            </button>
            <button type="button" onClick={() => scrollToSection("portal-sec-stream")}>
              🍲 名菜小吃总览
            </button>
          </nav>

          <div className="cfp-mast-actions">
            <button
              type="button"
              className="cfp-action-btn btn-search-cmd"
              data-testid="portal-open-search"
              onClick={onOpenSearchModal}
            >
              🔍 搜菜品/老字号 (⌘K)
            </button>
            <button
              type="button"
              className="cfp-action-btn btn-passport"
              data-testid="portal-open-passport"
              onClick={onOpenPassport}
            >
              🥢 我的食单 (已尝 {tastedDishes.length} · 想吃 {wishlistDishes.length})
            </button>
          </div>
        </div>
      </header>

      <main className="cfp-editorial-main">
        {/* ====================================================================
            Section 1: 首屏「东方食单 · 传世名味焦点画廊」 (Editorial Hero Showcase)
           ==================================================================== */}
        <section
          id="portal-sec-hero"
          className="cfp-hero-showcase-section"
          aria-label="东方食单传世名味焦点画廊"
        >
          <div className="cfp-hero-grid">
            {/* 左栏：东方食单题跋 + 收录规模 + 今日吃什么随机翻牌 */}
            <div className="cfp-hero-editorial-col">
              <div className="cfp-hero-seal-kicker">
                <span className="cfp-cinnabar-tag">卷首题跋 · 华夏食单</span>
                <span className="cfp-issue-tag">全站纯享美食画报版</span>
              </div>

              <h2 className="cfp-hero-headline">
                寻味三十四省市区，
                <br />
                收录每一道镇桌大菜与市井烟火
              </h2>

              <p className="cfp-hero-lead">
                告别冰冷繁琐的测绘地图，回到美食本身最诱人的色泽、锅气与手艺。从巴蜀滚沸的红油九宫格、广府茶楼晶莹的虾饺皇，到淮扬文火慢煨的清炖狮子头、西北清晨头锅牛骨清汤拉面——翻开这座东方纸上食肆，标记你吃过的每一口人间至味。
              </p>

              {/* 四大核心规模计数器 */}
              <div className="cfp-hero-counters">
                <div className="cfp-counter-box">
                  <strong>34</strong>
                  <span>省级行政区全覆盖</span>
                </div>
                <div className="cfp-counter-box">
                  <strong>{cities.length}</strong>
                  <span>座美食名城专卷</span>
                </div>
                <div className="cfp-counter-box">
                  <strong>{totalDishesCount}+</strong>
                  <span>道大菜与街头小吃</span>
                </div>
                <div className="cfp-counter-box">
                  <strong>{topicCards.length}</strong>
                  <span>大中华饮食专题</span>
                </div>
              </div>

              {/* 互动按钮组：随机翻牌 + 快速跳转 */}
              <div className="cfp-hero-cta-row">
                <button
                  type="button"
                  className="btn-roulette-draw"
                  data-testid="btn-random-dish"
                  onClick={handleRandomDishRoulette}
                >
                  🎲 今日吃什么 · 随机寻味翻牌
                </button>
                <button
                  type="button"
                  className="btn-hero-secondary"
                  data-testid="portal-open-topics-hub"
                  onClick={() => onOpenTopicsHub()}
                >
                  📚 进入十大饮食专题馆 →
                </button>
              </div>

              {/* 随机翻牌结果浮层卡片 */}
              {rouletteDish && (
                <div className="cfp-roulette-result-card" data-testid="roulette-result-card">
                  <img
                    src={assetUrl(
                      rouletteDish.card.photoUrl ?? `/photos/${rouletteDish.card.id}.jpg`,
                    )}
                    alt={rouletteDish.card.title}
                    className="cfp-roulette-thumb"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0.25";
                    }}
                  />
                  <div className="cfp-roulette-info">
                    <div className="cfp-roulette-top">
                      <span className="cfp-roulette-badge">
                        🎲 今日天选风味 · {rouletteDish.city.provinceLabel.slice(0, 2)}·
                        {rouletteDish.city.name}
                      </span>
                      <button
                        type="button"
                        className="cfp-roulette-close"
                        onClick={() => setRouletteDish(null)}
                      >
                        ✕
                      </button>
                    </div>
                    <strong>{rouletteDish.card.title}</strong>
                    <p>{rouletteDish.card.tagline}</p>
                    <div className="cfp-roulette-actions">
                      <button
                        type="button"
                        className={`btn-checkin-tasted${
                          tastedDishSet.has(rouletteDish.card.id) ? " on" : ""
                        }`}
                        onClick={() =>
                          toggleTasted(dishCardToRecord(rouletteDish.card, rouletteDish.city))
                        }
                      >
                        {tastedDishSet.has(rouletteDish.card.id) ? "✓ 已吃过" : "+ 吃过"}
                      </button>
                      <button
                        type="button"
                        className="btn-jump-dish"
                        onClick={() =>
                          onEnterGazetteer(
                            rouletteDish.city.id,
                            rouletteDish.card.category,
                            rouletteDish.card.id,
                          )
                        }
                      >
                        品读这道菜 ↗
                      </button>
                      <button
                        type="button"
                        className="btn-jump-dish"
                        onClick={handleRandomDishRoulette}
                      >
                        ↻ 再翻一张
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 右栏：殿堂级名菜高清焦点画廊卡片 */}
            {activeHero && (
              <div className="cfp-hero-MenuCard-col" data-testid="hero-featured-showcase">
                <div className="cfp-featured-card">
                  <div
                    className="cfp-featured-media"
                    onClick={() =>
                      onEnterGazetteer(
                        activeHero.city.id,
                        activeHero.card.category,
                        activeHero.card.id,
                      )
                    }
                  >
                    <img
                      src={assetUrl(
                        activeHero.card.photoUrl ?? `/photos/${activeHero.card.id}.jpg`,
                      )}
                      alt={activeHero.card.title}
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0.25";
                      }}
                    />
                    <div className="cfp-featured-shade" />
                    <div className="cfp-featured-top-badges">
                      <span className="cfp-feat-kicker">{activeHero.kickerLabel}</span>
                      <span className="cfp-feat-flavor">{activeHero.card.flavorProfile}</span>
                    </div>
                    <div className="cfp-featured-overlay-title">
                      <span className="cfp-feat-city">
                        {activeHero.city.provinceLabel} · {activeHero.city.name} ·{" "}
                        {activeHero.card.cuisineStyle}
                      </span>
                      <h3>{activeHero.card.title}</h3>
                      <p>{activeHero.card.tagline}</p>
                    </div>
                  </div>

                  <div className="cfp-featured-body">
                    <div className="cfp-featured-specs">
                      <div>
                        <span>道地主料与调味</span>
                        <strong>{activeHero.card.mainIngredients}</strong>
                      </div>
                      <div>
                        <span>寻味老字号/食肆</span>
                        <strong>
                          🏮 {activeHero.card.famousSpots[0]?.name ?? `${activeHero.city.name}老字号`}
                          {activeHero.card.famousSpots[0]?.addressHint
                            ? `（${activeHero.card.famousSpots[0].addressHint}）`
                            : ""}
                        </strong>
                      </div>
                    </div>

                    <div className="cfp-featured-actions">
                      <button
                        type="button"
                        className={`btn-checkin-tasted${
                          tastedDishSet.has(activeHero.card.id) ? " on" : ""
                        }`}
                        data-testid={`hero-checkin-${activeHero.card.id}`}
                        onClick={() =>
                          toggleTasted(dishCardToRecord(activeHero.card, activeHero.city))
                        }
                      >
                        {tastedDishSet.has(activeHero.card.id) ? "✓ 已吃过" : "✓ 吃过打卡"}
                      </button>
                      <button
                        type="button"
                        className={`btn-checkin-wish${
                          wishlistDishSet.has(activeHero.card.id) ? " on" : ""
                        }`}
                        onClick={() =>
                          toggleWishlist(dishCardToRecord(activeHero.card, activeHero.city))
                        }
                      >
                        {wishlistDishSet.has(activeHero.card.id) ? "★ 已在想吃" : "♡ 想吃种草"}
                      </button>
                      <button
                        type="button"
                        className="btn-enter-gazetteer"
                        data-testid="enter-city-gazetteer"
                        onClick={() =>
                          onEnterGazetteer(
                            activeHero.city.id,
                            activeHero.card.category,
                            activeHero.card.id,
                          )
                        }
                      >
                        进入《{activeHero.city.name}》食单 ↗
                      </button>
                    </div>

                    {/* 底部 8 道传世名菜缩略切换条 */}
                    <div className="cfp-featured-thumbs" role="tablist" aria-label="焦点名菜切换">
                      {featuredHeroDishes.map((item, idx) => {
                        const isOn = idx === heroIndex % featuredHeroDishes.length;
                        return (
                          <button
                            key={item.card.id}
                            type="button"
                            role="tab"
                            aria-selected={isOn}
                            className={`cfp-feat-thumb-btn${isOn ? " on" : ""}`}
                            onClick={() => setHeroIndex(idx)}
                          >
                            <img
                              src={assetUrl(
                                item.card.photoUrl ?? `/photos/${item.card.id}.jpg`,
                              )}
                              alt={item.card.title}
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.opacity = "0.25";
                              }}
                            />
                            <span>
                              {item.city.name}·{item.card.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ====================================================================
            Section 2: 「十大中华饮食专题馆」横向画报墙
           ==================================================================== */}
        <section
          id="portal-sec-topics"
          className="cfp-editorial-section"
          aria-label="十大中华饮食专题馆"
        >
          <div className="cfp-section-header">
            <div>
              <span className="cfp-section-kicker">
                TEN CHINESE CULINARY COMPENDIUMS · 跨省风味谱系长卷
              </span>
              <h2>一、十大中华饮食专题馆</h2>
              <p>
                打破省界藩篱，按菜系、面食、米粉、火锅、早茶、夜市、糕点、茶酒、节气与名宴十个维度纵览华夏风味精髓
              </p>
            </div>
            <button
              type="button"
              className="btn-primary"
              onClick={() => onOpenTopicsHub("eight-cuisines")}
            >
              浏览全部十大专题长卷 →
            </button>
          </div>

          <div className="cfp-topics-magazine-grid">
            {topicCards.map((tp) => (
              <article
                key={tp.id}
                className="cfp-topic-mag-card"
                data-testid={`portal-topic-chip-${tp.id}`}
                onClick={() => onOpenTopicsHub(tp.id)}
              >
                <div className="cfp-topic-mag-media">
                  <img
                    src={assetUrl(tp.photoUrl)}
                    alt={tp.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0.25";
                    }}
                  />
                  <div className="cfp-topic-mag-shade" />
                  <span className="cfp-topic-mag-index">
                    {TOPIC_ICON_MAP[tp.id] ?? "📜"} {tp.index}
                  </span>
                  <span className="cfp-topic-mag-count">
                    {tp.subGroupCount} 大流派 · {tp.itemCount} 道名物
                  </span>
                </div>

                <div className="cfp-topic-mag-body">
                  <span className="cfp-topic-mag-kicker">{tp.kicker}</span>
                  <h3>{tp.title}</h3>
                  <p>{tp.subtitle}</p>
                  <div className="cfp-topic-mag-tags">
                    {tp.tags.map((tag) => (
                      <span key={tag} className="cfp-topic-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ====================================================================
            Section 3: 「全国 34 省市风味食单」清爽浏览墙 (3-Column City Culinary Grid)
           ==================================================================== */}
        <section
          id="portal-sec-cities"
          className="cfp-editorial-section"
          aria-label="全国34省市风味食单"
        >
          <div className="cfp-section-header">
            <div>
              <span className="cfp-section-kicker">
                34 PROVINCES & {cities.length} CULINARY CITIES · 地方食单总览
              </span>
              <h2>二、全国 34 省市区 · {cities.length} 座美食名城风味食单</h2>
              <p>
                点击任意菜名胶囊可直接跳至该菜品图解详情；点击城市画报卡进入该城五卷完整食单
              </p>
            </div>
          </div>

          {/* 极简两行筛选栏 */}
          <div className="cfp-clean-filter-panel">
            {/* 第一行：六大饮食片区 + 味型快筛 + 城市/菜名搜索框 */}
            <div className="cfp-filter-row-top">
              <div className="cfp-macro-pills" role="tablist" aria-label="六大饮食片区">
                {MACRO_REGIONS.map((macro) => (
                  <button
                    key={macro}
                    type="button"
                    className={`cfp-macro-pill-btn${macroRegionFilter === macro ? " on" : ""}`}
                    onClick={() => {
                      setMacroRegionFilter(macro);
                      setProvinceFilter("all");
                    }}
                  >
                    {macro}
                  </button>
                ))}
              </div>

              <div className="cfp-flavor-quick-pills" role="group" aria-label="味型快筛">
                {FLAVOR_QUICK_FILTERS.map((ff) => (
                  <button
                    key={ff.id}
                    type="button"
                    className={`cfp-flavor-pill-btn${flavorFilter === ff.id ? " on" : ""}`}
                    onClick={() =>
                      setFlavorFilter((prev) => (prev === ff.id ? "all" : ff.id))
                    }
                  >
                    {ff.label}
                  </button>
                ))}
              </div>

              <div className="cfp-inline-search">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={`🔍 筛选城市、菜系或招牌菜（共 ${filteredCities.length} 城）...`}
                  data-testid="portal-city-search"
                />
                {search && (
                  <button type="button" onClick={() => setSearch("")}>
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* 第二行：34 省级行政区清爽胶囊 */}
            <div className="cfp-filter-row-provinces" role="group" aria-label="34省级行政区筛选">
              {visibleProvinceTabs.map((prov) => (
                <button
                  key={prov.id}
                  type="button"
                  className={`cfp-prov-clean-pill${provinceFilter === prov.id ? " on" : ""}`}
                  data-testid={`province-${prov.id}`}
                  onClick={() => {
                    setProvinceFilter(prov.id);
                    if (prov.id !== "all") {
                      const first = cities.find((c) => c.province === prov.id);
                      if (first) onSelectCity(first.id);
                    }
                  }}
                >
                  {prov.id === "all" ? "全国总览 (34省)" : prov.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* 3 列城市美食画报网格 */}
          {filteredCities.length === 0 ? (
            <div className="passport-empty-box">
              <p>未找到匹配的美食城市，请尝试重置片区、味型或搜索关键词。</p>
            </div>
          ) : (
            <div className="cfp-city-magazine-grid" role="navigation" aria-label="全国美食城市画报墙">
              {filteredCities.map((city) => {
                const topCard = city.volumes[0]?.cards[0];
                const heroPhoto =
                  topCard?.photoUrl ?? `/photos/${topCard?.id ?? "chengdu-mapo"}.jpg`;
                const cuisineMeta =
                  EIGHT_CUISINES_META[city.eightCuisine] ?? EIGHT_CUISINES_META.local;
                const allCityCards = city.volumes.flatMap((v) => v.cards);
                const tastedCountInCity = allCityCards.filter((c) =>
                  tastedDishSet.has(c.id),
                ).length;

                return (
                  <article
                    key={city.id}
                    className="cfp-city-mag-card"
                    data-testid={`city-${city.id}`}
                    onClick={() => onEnterGazetteer(city.id)}
                  >
                    <div className="cfp-city-mag-media">
                      <img
                        src={assetUrl(heroPhoto)}
                        alt={`${city.name} · ${topCard?.title ?? city.signatureDishes[0]}`}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.opacity = "0.25";
                        }}
                      />
                      <div className="cfp-city-mag-shade" />
                      <div className="cfp-city-mag-top-badges">
                        <span
                          className="cfp-city-mag-seal"
                          style={{ background: cuisineMeta.color }}
                        >
                          {cuisineMeta.code}
                        </span>
                        <span className="cfp-city-mag-prov">
                          {city.provinceLabel} · {city.cuisineTag}
                        </span>
                        {tastedCountInCity > 0 && (
                          <span className="cfp-city-mag-tasted">
                            🥢 已尝 {tastedCountInCity} 道
                          </span>
                        )}
                      </div>
                      <div className="cfp-city-mag-title-overlay">
                        <div className="cfp-city-mag-name-row">
                          <h3>{city.name}</h3>
                          <span className="cfp-city-mag-flavor">{city.dominantFlavor}</span>
                          <span className="cfp-city-mag-staple">{city.stapleType}</span>
                        </div>
                        <p className="cfp-city-mag-headline">{city.heroHeadline}</p>
                      </div>
                    </div>

                    <div className="cfp-city-mag-body">
                      <p className="cfp-city-mag-dek">{city.heroDek}</p>

                      {/* 招牌大菜/小吃直达胶囊 */}
                      <div className="cfp-city-mag-dishes">
                        <span className="cfp-cmd-label">必吃招牌直达：</span>
                        <div className="cfp-cmd-pills">
                          {allCityCards.slice(0, 6).map((card) => {
                            const isTasted = tastedDishSet.has(card.id);
                            return (
                              <button
                                key={card.id}
                                type="button"
                                className={`cfp-cmd-pill${isTasted ? " is-tasted" : ""}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onEnterGazetteer(city.id, card.category, card.id);
                                }}
                                title={`直达《${city.name}》· ${card.title}`}
                              >
                                {isTasted ? "✓ " : ""}
                                {card.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="cfp-city-mag-footer">
                        <span className="cfp-city-card-count">
                          收录 {allCityCards.length} 道代表名馔与老店
                        </span>
                        <span className="cfp-city-enter-link">翻阅城市食单 →</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* ====================================================================
            Section 4: 「全国镇桌大菜 & 街头小吃精选流」
           ==================================================================== */}
        <section
          id="portal-sec-stream"
          className="cfp-editorial-section"
          aria-label="全国镇桌大菜与街头小吃精选流"
        >
          <div className="cfp-section-header">
            <div>
              <span className="cfp-section-kicker">
                NATIONAL SIGNATURE DISHES STREAM · 按品类随手打卡
              </span>
              <h2>三、全国镇桌大菜 & 街头小吃精选流</h2>
              <p>无需先选城市，直接按大菜、小吃、粉面碳水与道地风物浏览各地头牌代表作并一键打卡</p>
            </div>

            <div className="cfp-stream-tabs" role="tablist" aria-label="精选流品类切换">
              {(["dacai", "xiaochi", "zhushi", "fengwu"] as FoodCategoryId[]).map((catId) => {
                const meta = FOOD_VOLUME_META[catId];
                return (
                  <button
                    key={catId}
                    type="button"
                    role="tab"
                    aria-selected={streamCategory === catId}
                    className={`cfp-stream-tab-btn${streamCategory === catId ? " on" : ""}`}
                    onClick={() => setStreamCategory(catId)}
                  >
                    {meta.icon} {meta.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="cfp-stream-cards-grid">
            {streamDishes.map(({ city, card }) => {
              const isTasted = tastedDishSet.has(card.id);
              const isWish = wishlistDishSet.has(card.id);
              const catMeta = FOOD_VOLUME_META[card.category];
              const record = dishCardToRecord(card, city);

              return (
                <article
                  key={`${city.id}-${card.id}`}
                  className={`cfp-stream-dish-card${isTasted ? " is-tasted" : ""}`}
                >
                  <div
                    className="cfp-stream-media"
                    onClick={() => onEnterGazetteer(city.id, card.category, card.id)}
                  >
                    <img
                      src={assetUrl(card.photoUrl ?? `/photos/${card.id}.jpg`)}
                      alt={card.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0.25";
                      }}
                    />
                    <span
                      className="cfp-stream-cat-badge"
                      style={{ background: catMeta.badgeColor }}
                    >
                      {catMeta.icon} {catMeta.shortTitle}
                    </span>
                    <span className="cfp-stream-city-badge">
                      {city.provinceLabel.slice(0, 2)} · {city.name}
                    </span>
                  </div>

                  <div className="cfp-stream-body">
                    <div className="cfp-stream-head">
                      <strong>{card.title}</strong>
                      <span>{card.flavorProfile}</span>
                    </div>
                    <p>{card.tagline}</p>
                    <div className="cfp-stream-actions">
                      <button
                        type="button"
                        className={`btn-checkin-tasted${isTasted ? " on" : ""}`}
                        onClick={() => toggleTasted(record)}
                      >
                        {isTasted ? "✓ 已吃过" : "+ 吃过"}
                      </button>
                      <button
                        type="button"
                        className={`btn-checkin-wish${isWish ? " on" : ""}`}
                        onClick={() => toggleWishlist(record)}
                      >
                        {isWish ? "★ 已想吃" : "♡ 想吃"}
                      </button>
                      <button
                        type="button"
                        className="btn-jump-dish"
                        onClick={() => onEnterGazetteer(city.id, card.category, card.id)}
                      >
                        详情 ↗
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
