import { useEffect, useMemo, useState } from "react";
import {
  ADCODE_TO_PROVINCE,
  EIGHT_CUISINES_META,
  PROVINCE_LABELS,
  PROVINCE_TABS,
} from "../content/provincesMeta";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type EightCuisineId,
  type FoodCategoryId,
  type ProvinceId,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import {
  dishCardToRecord,
  inferEightCuisineFromRecord,
  useFoodFootprints,
  type TastedDishRecord,
} from "../lib/foodFootprints";

export interface FoodPassportModalProps {
  open: boolean;
  onClose: () => void;
  cities?: CityFoodPack[];
  onSelectCity?: (cityId: string) => void;
  onSelectDish?: (cityId: string, category: FoodCategoryId, cardId: string) => void;
}

interface ChinaProvFeature {
  properties?: {
    name?: string;
    adcode?: number | string;
    adchar?: string;
  };
  geometry?: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
}

let cachedChinaFeats: ChinaProvFeature[] | null = null;

type PassportTabMode = "tasted" | "wishlist" | "by-province";

export function FoodPassportModal({
  open,
  onClose,
  cities = [],
  onSelectCity,
  onSelectDish,
}: FoodPassportModalProps) {
  const {
    tastedDishes,
    tastedDishSet,
    wishlistDishes,
    wishlistDishSet,
    visitedCityIds,
    visitedCitySet,
    visitedProvinceSet,
    toggleTasted,
    toggleWishlist,
    toggleCityVisited,
    updateNote,
  } = useFoodFootprints();

  const [chinaFeats, setChinaFeats] = useState<ChinaProvFeature[]>(() => cachedChinaFeats ?? []);
  const [activeTab, setActiveTab] = useState<PassportTabMode>("tasted");
  const [categoryFilter, setCategoryFilter] = useState<FoodCategoryId | "all">("all");
  const [selectedProv, setSelectedProv] = useState<ProvinceId | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredPinId, setHoveredPinId] = useState<string | null>(null);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState<string>("");

  useEffect(() => {
    if (!open || cachedChinaFeats) return;
    let cancelled = false;
    fetch(assetUrl("data/china-100000-full.json"))
      .then((r) => r.json())
      .then((fc) => {
        if (cancelled) return;
        const feats = Array.isArray(fc?.features) ? fc.features : [];
        cachedChinaFeats = feats;
        setChinaFeats(feats);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [open]);

  // Combine provinces lit by tasted dishes and provinces lit by visited cities
  const litProvinces = useMemo(() => {
    const set = new Set<ProvinceId>(visitedProvinceSet);
    for (const c of cities) {
      if (visitedCitySet.has(c.id)) {
        set.add(c.province);
      }
    }
    return set;
  }, [visitedProvinceSet, cities, visitedCitySet]);

  // Flatten all dishes from available CityFoodPacks for the "by-province" explorer
  const allCatalogDishes = useMemo<TastedDishRecord[]>(() => {
    if (!open || cities.length === 0) return tastedDishes;
    const records: TastedDishRecord[] = [];
    for (const city of cities) {
      for (const vol of city.volumes) {
        for (const card of vol.cards) {
          records.push(dishCardToRecord(card, city));
        }
      }
    }
    return records;
  }, [open, cities, tastedDishes]);

  // Comprehensive statistics
  const stats = useMemo(() => {
    const dacaiCount = tastedDishes.filter((d) => d.category === "dacai").length;
    const xiaochiCount = tastedDishes.filter((d) => d.category === "xiaochi").length;
    const zhushiCount = tastedDishes.filter((d) => d.category === "zhushi").length;
    const fengwuCount = tastedDishes.filter((d) => d.category === "fengwu").length;
    const shijieCount = tastedDishes.filter((d) => d.category === "shijie").length;

    const cuisineCounts: Record<EightCuisineId, number> = {
      lu: 0,
      chuan: 0,
      yue: 0,
      su: 0,
      min: 0,
      zhe: 0,
      xiang: 0,
      hui: 0,
      local: 0,
    };
    for (const d of tastedDishes) {
      const cid = inferEightCuisineFromRecord(d);
      cuisineCounts[cid] = (cuisineCounts[cid] ?? 0) + 1;
    }

    const coreEightIds: EightCuisineId[] = ["lu", "chuan", "yue", "su", "min", "zhe", "xiang", "hui"];
    const unlockedEightCount = coreEightIds.filter((id) => cuisineCounts[id] > 0).length;

    return {
      totalTasted: tastedDishes.length,
      dacaiCount,
      xiaochiCount,
      zhushiCount,
      fengwuCount,
      shijieCount,
      wishlistCount: wishlistDishes.length,
      litCityCount: visitedCityIds.length,
      litProvCount: litProvinces.size,
      cuisineCounts,
      unlockedEightCount,
    };
  }, [tastedDishes, wishlistDishes, visitedCityIds, litProvinces]);

  // Project 73..136 E, 17.5..54 N onto 860x390 SVG canvas
  const W = 860;
  const H = 390;
  const projectPt = (lng: number, lat: number) => ({
    x: 42 + ((lng - 73) / (136 - 73)) * (W - 84),
    y: H - 24 - ((lat - 17.5) / (54 - 17.5)) * (H - 52),
  });

  const projectedProvs = useMemo(() => {
    const out: { key: string; d: string; provId?: ProvinceId }[] = [];
    chinaFeats.forEach((feat, fIdx) => {
      if (feat.properties?.adchar === "JD") return;
      const adcode = String(feat.properties?.adcode ?? "");
      const provId = ADCODE_TO_PROVINCE[adcode];
      const geom = feat.geometry;
      if (!geom) return;
      const rings =
        geom.type === "Polygon"
          ? [(geom.coordinates as number[][][])[0]]
          : (geom.coordinates as number[][][][]).map((p) => p[0]);
      rings.forEach((ring, rIdx) => {
        if (!ring || ring.length < 3) return;
        const step = Math.max(1, Math.floor(ring.length / 95));
        const parts: string[] = [];
        for (let i = 0; i < ring.length; i += step) {
          const pt = projectPt(ring[i][0], ring[i][1]);
          parts.push(`${parts.length === 0 ? "M" : "L"}${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`);
        }
        parts.push("Z");
        out.push({ key: `fp-prov-${fIdx}-${rIdx}`, d: parts.join(" "), provId });
      });
    });
    return out;
  }, [chinaFeats]);

  const displayedList = useMemo(() => {
    const source =
      activeTab === "tasted"
        ? tastedDishes
        : activeTab === "wishlist"
          ? wishlistDishes
          : allCatalogDishes;
    const q = searchQuery.trim().toLowerCase();

    return source
      .filter((item) => {
        if (categoryFilter !== "all" && item.category !== categoryFilter) return false;
        if (selectedProv !== "all" && item.province !== selectedProv) return false;
        if (q) {
          return (
            item.title.toLowerCase().includes(q) ||
            item.cityName.toLowerCase().includes(q) ||
            item.provinceLabel.toLowerCase().includes(q) ||
            item.cuisineStyle.toLowerCase().includes(q) ||
            (item.note && item.note.toLowerCase().includes(q))
          );
        }
        return true;
      })
      .slice(0, 72);
  }, [activeTab, tastedDishes, wishlistDishes, allCatalogDishes, categoryFilter, selectedProv, searchQuery]);

  if (!open) return null;

  return (
    <div
      className="food-modal-backdrop"
      data-testid="food-passport-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="food-modal-dialog passport-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="我的中华美食寻味护照"
      >
        {/* 顶部朱砂宣纸题头 */}
        <header className="passport-header">
          <div className="passport-header-left">
            <span className="seal passport-seal">食牒</span>
            <div>
              <span className="passport-kicker">
                CHINESE CULINARY PASSPORT · 个人中华风味寻味通关文牒
              </span>
              <h2>
                🥢 我的中华美食护照
                <small>
                  已尝 {stats.totalTasted} 道风味 · 想吃种草 {stats.wishlistCount} 道 · 点亮{" "}
                  {stats.litCityCount} 座美食城 · 踏足 {stats.litProvCount} / 34 省级行政区
                </small>
              </h2>
            </div>
          </div>
          <button
            type="button"
            className="passport-close-btn"
            data-testid="passport-close-btn"
            onClick={onClose}
          >
            ✕ 合上食牒
          </button>
        </header>

        <div className="passport-body">
          {/* 一、核心打卡统计指标卡 */}
          <section className="passport-stats-grid" aria-label="美食打卡核心指标">
            <div className="passport-stat-card highlight-red">
              <span className="pstat-label">已尝中华美食</span>
              <strong className="pstat-val">{stats.totalTasted} 道</strong>
              <small className="pstat-sub">
                大菜 {stats.dacaiCount} · 小吃 {stats.xiaochiCount} · 粉面 {stats.zhushiCount}
              </small>
            </div>
            <div className="passport-stat-card highlight-amber">
              <span className="pstat-label">想吃种草清单</span>
              <strong className="pstat-val">{stats.wishlistCount} 道</strong>
              <small className="pstat-sub">风物 {stats.fengwuCount} · 老字号 {stats.shijieCount}</small>
            </div>
            <div className="passport-stat-card highlight-blue">
              <span className="pstat-label">点亮寻味城市</span>
              <strong className="pstat-val">{stats.litCityCount} 城</strong>
              <small className="pstat-sub">打卡任一菜品自动点亮所在城</small>
            </div>
            <div className="passport-stat-card highlight-green">
              <span className="pstat-label">点亮省级行政区</span>
              <strong className="pstat-val">{stats.litProvCount} / 34</strong>
              <small className="pstat-sub">
                全国版图覆盖率 {Math.round((stats.litProvCount / 34) * 100)}%
              </small>
            </div>
            <div className="passport-stat-card highlight-seal">
              <span className="pstat-label">八大菜系解锁</span>
              <strong className="pstat-val">{stats.unlockedEightCount} / 8</strong>
              <small className="pstat-sub">鲁川粤苏闽浙湘徽全席进度</small>
            </div>
          </section>

          {/* 二、八大菜系解锁进度条 */}
          <section className="passport-section">
            <div className="passport-sec-head">
              <h3>一、八大菜系与地域风味品鉴进度（已解锁 {stats.unlockedEightCount} / 8 大菜系）</h3>
              <span>点击菜系可按省份筛选对应名馔</span>
            </div>
            <div className="cuisine-progress-grid">
              {(Object.keys(EIGHT_CUISINES_META) as EightCuisineId[]).map((cid) => {
                const meta = EIGHT_CUISINES_META[cid];
                const count = stats.cuisineCounts[cid] ?? 0;
                const pct = Math.min(100, Math.round((count / 6) * 100));
                const isUnlocked = count > 0;
                return (
                  <button
                    key={cid}
                    type="button"
                    className={`cuisine-prog-card${isUnlocked ? " unlocked" : ""}`}
                    onClick={() => {
                      const firstProv = meta.regionProvinces[0];
                      if (firstProv) {
                        setSelectedProv((prev) => (prev === firstProv ? "all" : firstProv));
                      }
                    }}
                  >
                    <div className="cprog-top">
                      <span className="cprog-seal" style={{ background: meta.color }}>
                        {meta.code}
                      </span>
                      <div className="cprog-title">
                        <strong>{meta.shortLabel}</strong>
                        <small>{isUnlocked ? `已尝 ${count} 道` : "待解锁"}</small>
                      </div>
                    </div>
                    <div className="cprog-bar-track">
                      <div
                        className="cprog-bar-fill"
                        style={{
                          width: `${isUnlocked ? Math.max(18, pct) : 0}%`,
                          background: meta.color,
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 三、全国 34 省寻味点亮 SVG 地图 */}
          <section className="passport-section">
            <div className="passport-sec-head">
              <h3>二、全国 34 省级行政区寻味点亮星图（朱砂金底为已寻味省份，星标为已尝美食与想吃坐标）</h3>
              <div className="passport-map-legend">
                <span className="pmap-leg-item tasted">
                  <i /> 已尝美食坐标 ({stats.totalTasted})
                </span>
                <span className="pmap-leg-item wishlist">
                  <i /> 想吃种草坐标 ({stats.wishlistCount})
                </span>
                <span className="pmap-leg-item prov">
                  <i /> 已点亮省份 ({stats.litProvCount}/34)
                </span>
              </div>
            </div>

            <div className="passport-starmap-box">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="passport-starmap-svg"
                data-testid="passport-china-svg"
                role="img"
                aria-label="全国34省美食打卡点亮地图"
              >
                <rect width={W} height={H} rx="14" fill="#1C1917" />

                {/* 34 省政区底图 */}
                {projectedProvs.map((pp) => {
                  const isLit = Boolean(pp.provId && litProvinces.has(pp.provId));
                  const isSelected = Boolean(pp.provId && selectedProv === pp.provId);
                  return (
                    <path
                      key={pp.key}
                      d={pp.d}
                      fill={
                        isSelected
                          ? "rgba(185, 28, 28, 0.45)"
                          : isLit
                            ? "rgba(217, 119, 6, 0.26)"
                            : "rgba(41, 37, 36, 0.85)"
                      }
                      stroke={
                        isSelected
                          ? "#F87171"
                          : isLit
                            ? "rgba(251, 191, 36, 0.68)"
                            : "rgba(120, 113, 108, 0.42)"
                      }
                      strokeWidth={isSelected ? "1.8" : isLit ? "1.2" : "0.8"}
                      style={{ cursor: pp.provId ? "pointer" : "default" }}
                      onClick={() => {
                        if (pp.provId) {
                          setSelectedProv((prev) => (prev === pp.provId ? "all" : pp.provId!));
                        }
                      }}
                    />
                  );
                })}

                {/* 未点亮的城市圆点（如果传入了 cities） */}
                {cities
                  .filter((c) => !visitedCitySet.has(c.id))
                  .map((c) => {
                    const pt = projectPt(c.center[0], c.center[1]);
                    return (
                      <circle
                        key={`city-unlit-${c.id}`}
                        cx={pt.x}
                        cy={pt.y}
                        r={2.8}
                        fill="#78716C"
                        opacity={0.65}
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleCityVisited(c.id)}
                      />
                    );
                  })}

                {/* 想吃种草坐标点（琥珀金色空心环） */}
                {wishlistDishes.map((w) => {
                  const pt = projectPt(w.coord[0], w.coord[1]);
                  const isHov = hoveredPinId === `wish-${w.cardId}`;
                  return (
                    <g
                      key={`wish-${w.cardId}`}
                      className="passport-pin-node wishlist"
                      onMouseEnter={() => setHoveredPinId(`wish-${w.cardId}`)}
                      onMouseLeave={() => setHoveredPinId(null)}
                      onClick={() => {
                        if (onSelectDish) {
                          onSelectDish(w.cityId, w.category, w.cardId);
                          onClose();
                        } else if (onSelectCity) {
                          onSelectCity(w.cityId);
                          onClose();
                        }
                      }}
                    >
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHov ? 8 : 5}
                        fill="rgba(245, 158, 11, 0.25)"
                        stroke="#FBBF24"
                        strokeWidth="1.5"
                      />
                      {isHov && (
                        <text
                          x={pt.x}
                          y={pt.y - 10}
                          textAnchor="middle"
                          fill="#FDE68A"
                          fontSize="10.5"
                          fontWeight="700"
                        >
                          ☆ 想吃：{w.cityName}·{w.title}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* 已尝美食坐标点（朱砂红发光实心点 + 标签） */}
                {tastedDishes.map((d) => {
                  const pt = projectPt(d.coord[0], d.coord[1]);
                  const isHov = hoveredPinId === `tasted-${d.cardId}`;
                  return (
                    <g
                      key={`tasted-${d.cardId}`}
                      className="passport-pin-node tasted"
                      onMouseEnter={() => setHoveredPinId(`tasted-${d.cardId}`)}
                      onMouseLeave={() => setHoveredPinId(null)}
                      onClick={() => {
                        if (onSelectDish) {
                          onSelectDish(d.cityId, d.category, d.cardId);
                          onClose();
                        } else if (onSelectCity) {
                          onSelectCity(d.cityId);
                          onClose();
                        }
                      }}
                    >
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHov ? 11 : 8}
                        fill="#EF4444"
                        fillOpacity="0.32"
                      />
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHov ? 5.2 : 4.2}
                        fill="#DC2626"
                        stroke="#FEF2F2"
                        strokeWidth="1.5"
                      />
                      <text
                        x={pt.x}
                        y={pt.y - 8}
                        textAnchor="middle"
                        fill="#FEF08A"
                        fontSize={isHov ? "11" : "9.5"}
                        fontWeight="800"
                      >
                        ✓ {d.cityName}·{d.title}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </section>

          {/* 四、可筛选食单列表：已吃过 / 想吃清单 / 按省份点亮食单 */}
          <section className="passport-section" data-testid="passport-dish-list-section">
            <div className="passport-tabs-toolbar">
              <div className="passport-mode-tabs" role="tablist" aria-label="食牒视图切换">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "tasted"}
                  className={`passport-tab-btn${activeTab === "tasted" ? " on" : ""}`}
                  data-testid="passport-tab-tasted"
                  onClick={() => setActiveTab("tasted")}
                >
                  🥢 已吃过 ({stats.totalTasted})
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "wishlist"}
                  className={`passport-tab-btn${activeTab === "wishlist" ? " on" : ""}`}
                  data-testid="passport-tab-wishlist"
                  onClick={() => setActiveTab("wishlist")}
                >
                  ⭐ 想吃清单 ({stats.wishlistCount})
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "by-province"}
                  className={`passport-tab-btn${activeTab === "by-province" ? " on" : ""}`}
                  data-testid="passport-tab-province"
                  onClick={() => setActiveTab("by-province")}
                >
                  🗺️ 按省份点亮食单 ({allCatalogDishes.length})
                </button>
              </div>

              <div className="passport-search-wrap">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="🔍 搜索菜名、城市、省份、味型或笔记..."
                  data-testid="passport-search-input"
                  className="passport-search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="passport-search-clear"
                    onClick={() => setSearchQuery("")}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* 五卷分类筛选条 */}
            <div className="passport-filter-strip" role="group" aria-label="按美食卷目筛选">
              <button
                type="button"
                className={`passport-pill${categoryFilter === "all" ? " on" : ""}`}
                onClick={() => setCategoryFilter("all")}
              >
                全部品类
              </button>
              {(Object.keys(FOOD_VOLUME_META) as FoodCategoryId[]).map((catId) => {
                const vMeta = FOOD_VOLUME_META[catId];
                return (
                  <button
                    key={catId}
                    type="button"
                    className={`passport-pill${categoryFilter === catId ? " on" : ""}`}
                    onClick={() => setCategoryFilter(catId)}
                  >
                    {vMeta.icon} {vMeta.index}·{vMeta.title}
                  </button>
                );
              })}
            </div>

            {/* 34 省份筛选条 */}
            <div className="passport-prov-strip" role="group" aria-label="按省份筛选食单">
              {PROVINCE_TABS.map((p) => {
                const isLit = p.id !== "all" && litProvinces.has(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`passport-prov-pill${selectedProv === p.id ? " on" : ""}${
                      isLit ? " is-lit-prov" : ""
                    }`}
                    data-testid={`passport-prov-${p.id}`}
                    onClick={() => setSelectedProv(p.id)}
                  >
                    {isLit ? "✓ " : ""}
                    {p.shortName}
                  </button>
                );
              })}
            </div>

            {/* 城市直接打卡快捷条（当选择了具体省份且传入了 cities 时展示） */}
            {selectedProv !== "all" && cities.some((c) => c.province === selectedProv) && (
              <div className="passport-city-quickbar">
                <span className="pcq-label">
                  📍 {PROVINCE_LABELS[selectedProv]}城市打卡：
                </span>
                {cities
                  .filter((c) => c.province === selectedProv)
                  .map((city) => {
                    const cityLit = visitedCitySet.has(city.id);
                    return (
                      <div key={city.id} className={`pcq-city-chip${cityLit ? " on" : ""}`}>
                        <button
                          type="button"
                          className="pcq-city-name"
                          onClick={() => {
                            onSelectCity?.(city.id);
                            onClose();
                          }}
                        >
                          {city.name}
                        </button>
                        <button
                          type="button"
                          className="pcq-city-toggle"
                          onClick={() => toggleCityVisited(city.id)}
                        >
                          {cityLit ? "✓ 已点亮" : "+ 点亮"}
                        </button>
                      </div>
                    );
                  })}
              </div>
            )}

            {/* 菜品卡片网格 */}
            {displayedList.length === 0 ? (
              <div className="passport-empty-box">
                <p>
                  当前筛选条件下暂无美食记录。您可以切换上方「按省份点亮食单」或在城市阅读页一键点击「🥢 吃过 / ⭐ 想吃」。
                </p>
              </div>
            ) : (
              <div className="passport-dishes-grid">
                {displayedList.map((item) => {
                  const isItemTasted = tastedDishSet.has(item.cardId);
                  const isItemWish = wishlistDishSet.has(item.cardId);
                  const catMeta = FOOD_VOLUME_META[item.category] ?? FOOD_VOLUME_META.dacai;
                  const isEditing = editingNoteId === item.cardId;

                  return (
                    <article
                      key={`${activeTab}-${item.cardId}`}
                      className={`passport-dish-card${isItemTasted ? " is-tasted" : ""}`}
                      data-testid={`passport-card-${item.cardId}`}
                    >
                      <div className="pdish-media">
                        <img
                          src={assetUrl(item.photoUrl)}
                          alt={item.title}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.opacity = "0.25";
                          }}
                        />
                        <span
                          className="pdish-cat-badge"
                          style={{ background: catMeta.badgeColor }}
                        >
                          {catMeta.icon} {catMeta.shortTitle}
                        </span>
                        <span className="pdish-city-badge">
                          {item.provinceLabel.slice(0, 2)} · {item.cityName}
                        </span>
                      </div>

                      <div className="pdish-body">
                        <div className="pdish-head">
                          <strong>{item.title}</strong>
                          <span className="pdish-style">{item.cuisineStyle}</span>
                        </div>

                        {isEditing ? (
                          <div className="pdish-note-editor">
                            <textarea
                              rows={2}
                              value={noteDraft}
                              onChange={(e) => setNoteDraft(e.target.value)}
                              placeholder="写下你的寻味笔记（如：老店火候、口味印象）..."
                            />
                            <div className="pdish-note-actions">
                              <button
                                type="button"
                                className="btn-save-note"
                                onClick={() => {
                                  updateNote(item.cardId, noteDraft.trim());
                                  setEditingNoteId(null);
                                }}
                              >
                                保存笔记
                              </button>
                              <button
                                type="button"
                                className="btn-cancel-note"
                                onClick={() => setEditingNoteId(null)}
                              >
                                取消
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p
                            className="pdish-note"
                            onClick={() => {
                              setEditingNoteId(item.cardId);
                              setNoteDraft(item.note ?? "");
                            }}
                            title="点击编辑味觉笔记"
                          >
                            {item.note ? `「${item.note}」` : "✎ 点击添加个人寻味笔记..."}
                          </p>
                        )}

                        <div className="pdish-actions">
                          <button
                            type="button"
                            className={`btn-checkin-tasted${isItemTasted ? " on" : ""}`}
                            data-testid={`passport-toggle-tasted-${item.cardId}`}
                            onClick={() => toggleTasted(item)}
                          >
                            {isItemTasted ? "✓ 已吃过" : "+ 吃过"}
                          </button>
                          <button
                            type="button"
                            className={`btn-checkin-wish${isItemWish ? " on" : ""}`}
                            data-testid={`passport-toggle-wish-${item.cardId}`}
                            onClick={() => toggleWishlist(item)}
                          >
                            {isItemWish ? "★ 已种草" : "☆ 想吃"}
                          </button>
                          <button
                            type="button"
                            className="btn-jump-dish"
                            onClick={() => {
                              if (onSelectDish) {
                                onSelectDish(item.cityId, item.category, item.cardId);
                                onClose();
                              } else if (onSelectCity) {
                                onSelectCity(item.cityId);
                                onClose();
                              }
                            }}
                          >
                            寻味详情 →
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
