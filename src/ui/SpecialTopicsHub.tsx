import { useEffect, useMemo, useState } from "react";
import { ADCODE_TO_PROVINCE } from "../content/provincesMeta";
import { allSpecialTopics, getSpecialTopicPack } from "../content/topics";
import type {
  FoodCategoryId,
  ProvinceId,
  SpecialTopicId,
  SpecialTopicPack,
  TopicFoodItem,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { useFoodFootprints, type TastedDishInput } from "../lib/foodFootprints";

export interface SpecialTopicsHubProps {
  topics?: SpecialTopicPack[];
  activeTopicId: SpecialTopicId;
  onSelectTopic: (topicId: SpecialTopicId) => void;
  onEnterCityGazetteer: (cityId: string, category?: FoodCategoryId, cardId?: string) => void;
  onBackToPortal: () => void;
  onOpenPassport: () => void;
  onOpenSearchModal: () => void;
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

let cachedProvFeats: ChinaProvFeature[] | null = null;

const TOPIC_ICONS: Record<SpecialTopicId, string> = {
  "eight-cuisines": "🥢",
  "noodles-compendium": "🍜",
  "rice-noodles-compendium": "🥣",
  "hotpot-jianghu": "🍲",
  "morning-feast": "🥟",
  "bbq-nightmarket": "🔥",
  "pastries-sweet-soups": "🍡",
};

function inferCategoryFromTopic(topicId: SpecialTopicId): FoodCategoryId {
  if (topicId === "noodles-compendium" || topicId === "rice-noodles-compendium") return "zhushi";
  if (topicId === "eight-cuisines" || topicId === "hotpot-jianghu") return "dacai";
  return "xiaochi";
}

function topicItemToRecordInput(
  item: TopicFoodItem,
  topicId: SpecialTopicId,
): TastedDishInput {
  return {
    cardId: item.id,
    title: item.title,
    cityId: item.cityId,
    cityName: item.cityName,
    province: item.province,
    provinceLabel: item.provinceLabel,
    category: inferCategoryFromTopic(topicId),
    cuisineStyle: item.schoolOrStyle,
    photoUrl: item.photoUrl ?? `/photos/${item.id}.jpg`,
    coord: item.coord,
  };
}

export function SpecialTopicsHub({
  topics: topicsProp,
  activeTopicId,
  onSelectTopic,
  onEnterCityGazetteer,
  onBackToPortal,
  onOpenPassport,
  onOpenSearchModal,
}: SpecialTopicsHubProps) {
  const topics = topicsProp && topicsProp.length > 0 ? topicsProp : allSpecialTopics;
  const activeTopic = useMemo(
    () =>
      topics.find((t) => t.id === activeTopicId) ??
      getSpecialTopicPack(activeTopicId) ??
      topics[0],
    [topics, activeTopicId],
  );

  const {
    tastedDishes,
    tastedDishSet,
    wishlistDishSet,
    visitedProvinceSet,
    toggleTasted,
    toggleWishlist,
  } = useFoodFootprints();

  const [subGroupFilter, setSubGroupFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [lightboxItem, setLightboxItem] = useState<TopicFoodItem | null>(null);
  const [chinaFeats, setChinaFeats] = useState<ChinaProvFeature[]>(() => cachedProvFeats ?? []);

  useEffect(() => {
    setSubGroupFilter("all");
    setSearchQuery("");
    const firstItem = activeTopic?.subGroups[0]?.items[0] ?? null;
    setSelectedItemId(firstItem?.id ?? null);
  }, [activeTopic?.id]);

  useEffect(() => {
    if (cachedProvFeats) return;
    let cancelled = false;
    fetch(assetUrl("data/china-100000-full.json"))
      .then((r) => r.json())
      .then((fc) => {
        if (cancelled) return;
        const feats = Array.isArray(fc?.features) ? fc.features : [];
        cachedProvFeats = feats;
        setChinaFeats(feats);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  const allTopicItems = useMemo(() => {
    if (!activeTopic) return [];
    return activeTopic.subGroups.flatMap((sg) =>
      sg.items.map((item) => ({
        item,
        subGroupId: sg.id,
        subGroupTitle: sg.title,
        regionBadge: sg.regionBadge,
      })),
    );
  }, [activeTopic]);

  const filteredSubGroups = useMemo(() => {
    if (!activeTopic) return [];
    const q = searchQuery.trim().toLowerCase();
    return activeTopic.subGroups
      .filter((sg) => subGroupFilter === "all" || sg.id === subGroupFilter)
      .map((sg) => {
        if (!q) return sg;
        return {
          ...sg,
          items: sg.items.filter(
            (item) =>
              item.title.toLowerCase().includes(q) ||
              item.cityName.toLowerCase().includes(q) ||
              item.provinceLabel.toLowerCase().includes(q) ||
              item.schoolOrStyle.toLowerCase().includes(q) ||
              item.flavorProfile.toLowerCase().includes(q) ||
              item.soulIngredient.toLowerCase().includes(q) ||
              item.famousShop.toLowerCase().includes(q),
          ),
        };
      })
      .filter((sg) => sg.items.length > 0);
  }, [activeTopic, subGroupFilter, searchQuery]);

  // Topic tasted progress
  const tastedInTopicCount = useMemo(
    () => allTopicItems.filter(({ item }) => tastedDishSet.has(item.id)).length,
    [allTopicItems, tastedDishSet],
  );

  // Project China distribution map (840 x 350)
  const W = 840;
  const H = 350;
  const projectPt = (lng: number, lat: number) => ({
    x: 40 + ((lng - 73) / (136 - 73)) * (W - 80),
    y: H - 22 - ((lat - 17.5) / (54 - 17.5)) * (H - 46),
  });

  const projectedProvs = useMemo(() => {
    const topicProvSet = new Set<ProvinceId>(allTopicItems.map((x) => x.item.province));
    const out: { key: string; d: string; hasTopicItem: boolean }[] = [];
    chinaFeats.forEach((feat, fIdx) => {
      if (feat.properties?.adchar === "JD") return;
      const adcode = String(feat.properties?.adcode ?? "");
      const provId = ADCODE_TO_PROVINCE[adcode];
      const hasTopicItem = Boolean(provId && topicProvSet.has(provId));
      const geom = feat.geometry;
      if (!geom) return;
      const rings =
        geom.type === "Polygon"
          ? [(geom.coordinates as number[][][])[0]]
          : (geom.coordinates as number[][][][]).map((p) => p[0]);
      rings.forEach((ring, rIdx) => {
        if (!ring || ring.length < 3) return;
        const step = Math.max(1, Math.floor(ring.length / 90));
        const parts: string[] = [];
        for (let i = 0; i < ring.length; i += step) {
          const pt = projectPt(ring[i][0], ring[i][1]);
          parts.push(`${parts.length === 0 ? "M" : "L"}${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`);
        }
        parts.push("Z");
        out.push({ key: `tp-prov-${fIdx}-${rIdx}`, d: parts.join(" "), hasTopicItem });
      });
    });
    return out;
  }, [chinaFeats, allTopicItems]);

  if (!activeTopic) return null;

  return (
    <div className="special-topics-hub single-column-shell" data-testid="special-topics-hub">
      {/* 1. 顶部全局导航栏 */}
      <header className="clean-global-topbar">
        <div className="cgt-inner">
          <div className="cgt-left">
            <button
              type="button"
              className="cgt-home-btn"
              data-testid="topics-back-portal"
              onClick={onBackToPortal}
            >
              <span className="seal seal-sm">食味</span>
              <span>🌏 返回全国 34 省美食地图</span>
            </button>
            <span className="cgt-divider">/</span>
            <div className="cgt-current-city">
              <span className="cgt-prov-badge">七大中华美食专题馆</span>
              <strong className="cgt-city-name">
                {TOPIC_ICONS[activeTopic.id]} {activeTopic.title}
              </strong>
            </div>
          </div>

          <div className="cgt-right mast-tools">
            <button
              type="button"
              className="text-btn"
              data-testid="topics-open-search"
              onClick={onOpenSearchModal}
            >
              🔍 搜全国美食/城市 (⌘K)
            </button>
            <button
              type="button"
              className="text-btn map-entry"
              data-testid="topics-open-passport"
              onClick={onOpenPassport}
            >
              🛂 我的美食护照 ({tastedDishes.length}道 · {visitedProvinceSet.size}省)
            </button>
          </div>
        </div>
      </header>

      {/* 2. 七大专题横向切换条 */}
      <nav
        className="volume-pills clean-volume-ribbon topics-switch-ribbon"
        aria-label="七大中华美食专题切换"
      >
        {topics.map((tp) => {
          const isOn = tp.id === activeTopic.id;
          return (
            <button
              key={tp.id}
              type="button"
              className={isOn ? "on" : ""}
              data-testid={`topic-tab-${tp.id}`}
              onClick={() => onSelectTopic(tp.id)}
            >
              <span>{TOPIC_ICONS[tp.id] ?? "📜"}</span>
              <span>
                {tp.index} · {tp.title}
              </span>
            </button>
          );
        })}
      </nav>

      {/* 3. 左侧常驻专题流派目录 + 右侧纯单列宽幅专题食单 */}
      <div className="workspace workspace-with-sidebar">
        <aside
          className="topic-sidebar-index"
          data-testid="special-topic-sidebar"
          aria-label={`${activeTopic.title}流派与名录索引`}
        >
          <div className="tsi-box tsi-primary-box">
            <div className="tsi-head tsi-head-flex">
              <div>
                <span className="tsi-kicker">{activeTopic.index} · 流派索引</span>
                <h3>
                  {TOPIC_ICONS[activeTopic.id]} {activeTopic.title} ({allTopicItems.length})
                </h3>
              </div>
              <span className="tsi-checkin-pill">
                ✓ 已尝 {tastedInTopicCount}/{allTopicItems.length}
              </span>
            </div>

            <div className="tsi-vol-groups">
              {activeTopic.subGroups.map((sg) => (
                <div key={sg.id} className="tsi-vol-group">
                  <button
                    type="button"
                    className="tsi-vol-group-head"
                    onClick={() => {
                      setSubGroupFilter(sg.id === subGroupFilter ? "all" : sg.id);
                      const el = document.getElementById(`topic-sg-${sg.id}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    <strong>{sg.title}</strong>
                    <span>{sg.items.length} 道 →</span>
                  </button>
                  <div className="tsi-vol-group-chips">
                    {sg.items.map((item) => {
                      const isTasted = tastedDishSet.has(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`tsi-mini-chip${
                            selectedItemId === item.id ? " on" : ""
                          }${isTasted ? " is-checked-spot" : ""}`}
                          onClick={() => {
                            if (subGroupFilter !== "all" && subGroupFilter !== sg.id) {
                              setSubGroupFilter("all");
                            }
                            setSelectedItemId(item.id);
                            window.setTimeout(() => {
                              const el = document.getElementById(`topic-card-${item.id}`);
                              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }, 40);
                          }}
                        >
                          {isTasted ? "✓ " : ""}
                          {item.cityName}·{item.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tsi-box">
            <div className="tsi-head">
              <span className="tsi-kicker">ALL 7 SPECIAL TOPICS</span>
              <h4>七大中华美食专题速切</h4>
            </div>
            <ul className="tsi-vol-switch">
              {topics.map((tp) => {
                const count = tp.subGroups.reduce((a, g) => a + g.items.length, 0);
                return (
                  <li key={tp.id}>
                    <button
                      type="button"
                      className={tp.id === activeTopic.id ? "on" : ""}
                      onClick={() => onSelectTopic(tp.id)}
                    >
                      <span>
                        {TOPIC_ICONS[tp.id]} {tp.index} · {tp.title}
                      </span>
                      <em>{count}道</em>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* 右侧纯单列宽幅阅读流 */}
        <main className="reading" id="topic-reading">
          <article className="essay single-column-essay" data-testid={`topic-essay-${activeTopic.id}`}>
            {/* 专题卷首总论 */}
            <header className="volume-header topic-hero-header">
              <p className="running-head">
                {activeTopic.kicker} · {activeTopic.index} · 全国跨省风味专题谱系
              </p>
              <h2>
                {TOPIC_ICONS[activeTopic.id]} {activeTopic.title}
                <small>{activeTopic.subtitle}</small>
              </h2>
              <div className="lede-box">
                <p className="lede">{activeTopic.lede}</p>
              </div>

              {activeTopic.metrics && activeTopic.metrics.length > 0 && (
                <div className="metric-strip" aria-label="本专题核心指标">
                  {activeTopic.metrics.map((m) => (
                    <div key={m.label} className="metric-card">
                      <span>{m.label}</span>
                      <strong>{m.value}</strong>
                      <small>{m.note}</small>
                    </div>
                  ))}
                  <div className="metric-card highlight-card">
                    <span>我的本卷通关进度</span>
                    <strong>
                      {tastedInTopicCount} / {allTopicItems.length} 道
                    </strong>
                    <small>点击下方卡片「✓ 吃过」点亮</small>
                  </div>
                </div>
              )}
            </header>

            {/* 全国空间分布星图 */}
            <section className="volume-block" aria-label={`${activeTopic.title}全国空间分布图`}>
              <div className="block-title-row">
                <h3>
                  一、《{activeTopic.title}》全国地理分布图（共 {allTopicItems.length} 处风味坐标）
                </h3>
                <span>点击图上星标直达对应名馔卡片，朱砂红实心点为「已尝过」</span>
              </div>

              <div className="topic-dist-map-box">
                <svg
                  viewBox={`0 0 ${W} ${H}`}
                  className="topic-dist-svg"
                  data-testid="topic-distribution-svg"
                  role="img"
                  aria-label={`${activeTopic.title}全国分布图`}
                >
                  <rect width={W} height={H} rx="14" fill="#231F1D" />
                  {projectedProvs.map((pp) => (
                    <path
                      key={pp.key}
                      d={pp.d}
                      fill={
                        pp.hasTopicItem
                          ? "rgba(180, 83, 9, 0.24)"
                          : "rgba(41, 37, 36, 0.85)"
                      }
                      stroke={
                        pp.hasTopicItem
                          ? "rgba(251, 191, 36, 0.55)"
                          : "rgba(120, 113, 108, 0.35)"
                      }
                      strokeWidth={pp.hasTopicItem ? "1.1" : "0.7"}
                    />
                  ))}

                  {allTopicItems.map(({ item }) => {
                    const pt = projectPt(item.coord[0], item.coord[1]);
                    const isSelected = selectedItemId === item.id;
                    const isTasted = tastedDishSet.has(item.id);
                    return (
                      <g
                        key={item.id}
                        className="topic-map-node"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setSubGroupFilter("all");
                          setSelectedItemId(item.id);
                          const el = document.getElementById(`topic-card-${item.id}`);
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isSelected ? 11 : 7}
                          fill={isTasted ? "#EF4444" : "#F59E0B"}
                          fillOpacity="0.28"
                        />
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isSelected ? 5.2 : 3.8}
                          fill={isTasted ? "#DC2626" : "#D97706"}
                          stroke="#FFFBEB"
                          strokeWidth="1.4"
                        />
                        <text
                          x={pt.x}
                          y={pt.y - 8}
                          textAnchor="middle"
                          fill={isSelected ? "#FEF08A" : "#FDE68A"}
                          fontSize={isSelected ? "11" : "9.2"}
                          fontWeight="700"
                        >
                          {isTasted ? "✓ " : ""}
                          {item.cityName}·{item.title}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </section>

            {/* 流派筛选与搜索工具条 */}
            <section className="volume-block" aria-label="流派筛选与检索">
              <div className="topic-filter-toolbar">
                <div className="topic-sg-pills" role="group" aria-label="按流派与地域筛选">
                  <button
                    type="button"
                    className={`sfcb-pill${subGroupFilter === "all" ? " on" : ""}`}
                    onClick={() => setSubGroupFilter("all")}
                  >
                    全部流派 ({allTopicItems.length})
                  </button>
                  {activeTopic.subGroups.map((sg) => (
                    <button
                      key={sg.id}
                      type="button"
                      className={`sfcb-pill${subGroupFilter === sg.id ? " on" : ""}`}
                      data-testid={`topic-sg-filter-${sg.id}`}
                      onClick={() =>
                        setSubGroupFilter(subGroupFilter === sg.id ? "all" : sg.id)
                      }
                    >
                      {sg.title} ({sg.items.length})
                    </button>
                  ))}
                </div>

                <div className="topic-search-input-wrap">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`🔍 在《${activeTopic.title}》中搜索菜名、城市、灵魂食材或老店...`}
                    data-testid="topic-item-search"
                  />
                  {searchQuery && (
                    <button type="button" onClick={() => setSearchQuery("")}>
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* 各大流派与单列宽幅美食卡片 */}
            <div className="volume-single-flow">
              {filteredSubGroups.map((sg, sgIdx) => (
                <section
                  key={sg.id}
                  id={`topic-sg-${sg.id}`}
                  className="topic-subgroup-section"
                  data-testid={`topic-subgroup-${sg.id}`}
                >
                  <div className="topic-sg-header">
                    <div className="topic-sg-title-row">
                      <span className="sec-num">0{sgIdx + 1}</span>
                      <div>
                        <span className="topic-sg-badge">{sg.regionBadge}</span>
                        <h3>
                          {sg.title}
                          <small>{sg.subtitle}</small>
                        </h3>
                      </div>
                    </div>
                    <p className="topic-sg-desc">{sg.description}</p>
                  </div>

                  <div className="card-single-list">
                    {sg.items.map((item, idx) => {
                      const isTasted = tastedDishSet.has(item.id);
                      const isWish = wishlistDishSet.has(item.id);
                      const isSelected = selectedItemId === item.id;
                      const recordInput = topicItemToRecordInput(item, activeTopic.id);
                      const photoSrc = assetUrl(item.photoUrl ?? `/photos/${item.id}.jpg`);

                      return (
                        <article
                          key={item.id}
                          id={`topic-card-${item.id}`}
                          className={`ency-card ency-card-wide dish-card${
                            isSelected ? " on" : ""
                          }${isTasted ? " is-dish-tasted" : ""}`}
                          data-testid={`topic-card-${item.id}`}
                          onMouseEnter={() => setSelectedItemId(item.id)}
                        >
                          <div className="ency-card-media">
                            <button
                              type="button"
                              className="card-visual card-visual-btn"
                              onClick={() => setLightboxItem(item)}
                              aria-label={`查看${item.title}高清大图`}
                            >
                              <img
                                src={photoSrc}
                                alt={item.title}
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.style.opacity = "0.25";
                                }}
                              />
                              <div className="card-visual-shade" />
                              <span className="dish-photo-city-pill">
                                📍 {item.provinceLabel} · {item.cityName}
                              </span>
                            </button>
                          </div>

                          <div className="ency-card-body">
                            <div className="ency-card-meta-top">
                              <div className="ency-card-meta-left">
                                <span className="ency-card-index">
                                  {sg.title} · #{String(idx + 1).padStart(2, "0")}
                                </span>
                                <span className="dish-style-badge">{item.schoolOrStyle}</span>
                                <span className="dish-flavor-badge">{item.flavorProfile}</span>
                              </div>
                              <span className="ency-card-coord">
                                {item.coord[1].toFixed(3)}°N, {item.coord[0].toFixed(3)}°E
                              </span>
                            </div>

                            <div className="ency-card-title-row">
                              <h4>
                                {item.cityName} · {item.title}
                              </h4>
                              {isTasted && <span className="scenic-checked-pill">✓ 已品尝</span>}
                            </div>

                            <div className="dish-four-dims-grid">
                              <div className="dish-dim-item">
                                <span>味型特征</span>
                                <strong>{item.flavorProfile}</strong>
                              </div>
                              <div className="dish-dim-item">
                                <span>道地灵魂主料</span>
                                <strong>{item.soulIngredient}</strong>
                              </div>
                              <div className="dish-dim-item">
                                <span>核心工艺绝活</span>
                                <strong>{item.craftHighlight}</strong>
                              </div>
                              <div className="dish-dim-item">
                                <span>代表寻味名店</span>
                                <strong>🏮 {item.famousShop}</strong>
                              </div>
                            </div>

                            <p className="ency-card-detail">{item.description}</p>

                            <div className="ency-card-actions">
                              <button
                                type="button"
                                className={`btn-checkin-tasted${isTasted ? " on" : ""}`}
                                data-testid={`topic-tasted-${item.id}`}
                                onClick={() => toggleTasted(recordInput)}
                              >
                                {isTasted ? "✓ 已吃过打卡" : "🥢 吃过打卡"}
                              </button>
                              <button
                                type="button"
                                className={`btn-checkin-wish${isWish ? " on" : ""}`}
                                data-testid={`topic-wish-${item.id}`}
                                onClick={() => toggleWishlist(recordInput)}
                              >
                                {isWish ? "★ 已在想吃清单" : "♡ 想吃种草"}
                              </button>
                              <button
                                type="button"
                                className="btn-card-locate"
                                data-testid={`topic-enter-city-${item.id}`}
                                onClick={() =>
                                  onEnterCityGazetteer(
                                    item.cityId,
                                    inferCategoryFromTopic(activeTopic.id),
                                    item.id,
                                  )
                                }
                              >
                                进入《{item.cityName}》城市食单 ↗
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </main>
      </div>

      {/* 高清美图灯箱 */}
      {lightboxItem && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
        >
          <div className="photo-lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="photo-lightbox-close"
              onClick={() => setLightboxItem(null)}
            >
              关闭 ✕
            </button>
            <img
              src={assetUrl(lightboxItem.photoUrl ?? `/photos/${lightboxItem.id}.jpg`)}
              alt={lightboxItem.title}
            />
            <div className="photo-lightbox-caption">
              <h3>
                {lightboxItem.cityName} · {lightboxItem.title}
              </h3>
              <p className="tagline">
                {lightboxItem.schoolOrStyle} · {lightboxItem.flavorProfile} · 推荐名店：
                {lightboxItem.famousShop}
              </p>
              <p>{lightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
