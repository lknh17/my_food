import { useMemo, useState } from "react";
import { EIGHT_CUISINES_META } from "../content/provincesMeta";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type DayRouteStop,
  type DishCard,
  type FoodCategoryId,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { dishCardToRecord, useFoodFootprints } from "../lib/foodFootprints";

export interface CityFoodOverviewProps {
  pack: CityFoodPack;
  allCities: CityFoodPack[];
  onSelectVolume: (category: FoodCategoryId) => void;
  onSelectCard: (category: FoodCategoryId, cardId: string) => void;
  onSelectCity: (cityId: string) => void;
  onOpenFoodMap?: (category?: FoodCategoryId, cardId?: string) => void;
}

function buildCityDayRoute(pack: CityFoodPack): (DayRouteStop & { matchedCard?: DishCard })[] {
  const allCards = pack.volumes.flatMap((v) => v.cards);
  const zhushiVol = pack.volumes.find((v) => v.id === "zhushi");
  const dacaiVol = pack.volumes.find((v) => v.id === "dacai");
  const xiaochiVol = pack.volumes.find((v) => v.id === "xiaochi");
  const shijieVol = pack.volumes.find((v) => v.id === "shijie");

  if (pack.overview.dayRoute && pack.overview.dayRoute.length > 0) {
    return pack.overview.dayRoute.map((stop) => {
      const matchedCard = allCards.find(
        (c) => c.title.includes(stop.dishName) || stop.dishName.includes(c.title),
      );
      return { ...stop, matchedCard };
    });
  }

  const morningCard = zhushiVol?.cards[0] ?? xiaochiVol?.cards[0] ?? allCards[0];
  const noonCard = dacaiVol?.cards[0] ?? allCards[1] ?? allCards[0];
  const afternoonCard = xiaochiVol?.cards[0] ?? zhushiVol?.cards[1] ?? allCards[2] ?? allCards[0];
  const nightCard =
    dacaiVol?.cards[1] ?? xiaochiVol?.cards[1] ?? shijieVol?.cards[0] ?? allCards[3] ?? allCards[0];

  return [
    {
      meal: "卯辰 · 清晨过早",
      time: "06:30 – 09:00",
      title: `一碗热气腾腾的${pack.name}头汤碳水唤醒味蕾`,
      dishName: morningCard?.title ?? pack.signatureDishes[0] ?? "传统早点",
      shopName: morningCard?.famousSpots[0]?.name ?? `${pack.name}老街早点铺`,
      desc:
        morningCard?.tagline ??
        `清晨钻进${pack.name}街头老巷，用一碗骨汤醇厚、火候地道的早点开启一日寻味。`,
      matchedCard: morningCard,
    },
    {
      meal: "午时 · 正席大菜",
      time: "11:30 – 14:00",
      title: `登堂入室品鉴${pack.cuisineTag}镇桌功夫硬菜`,
      dishName: noonCard?.title ?? pack.signatureDishes[0] ?? "招牌大菜",
      shopName: noonCard?.famousSpots[0]?.name ?? `${pack.name}百年老字号酒楼`,
      desc:
        noonCard?.tagline ??
        `午间落座百年名店，细品${pack.dominantFlavor}的看家火候与道地主料。`,
      matchedCard: noonCard,
    },
    {
      meal: "申时 · 午后茶点",
      time: "15:00 – 17:30",
      title: "走街串巷寻觅非遗手作小食与甜品",
      dishName: afternoonCard?.title ?? pack.signatureDishes[1] ?? "市井小吃",
      shopName: afternoonCard?.famousSpots[0]?.name ?? `${pack.name}传统小吃老铺`,
      desc:
        afternoonCard?.tagline ??
        `午后漫步老城街巷，尝一口酥脆或软糯的市井点心，感受最松弛的在地生活。`,
      matchedCard: afternoonCard,
    },
    {
      meal: "戌亥 · 夜市宵夜",
      time: "20:00 – 23:30",
      title: "华灯初上赴一场热辣滚烫的市井夜宴",
      dishName: nightCard?.title ?? pack.signatureDishes[2] ?? "夜市招牌",
      shopName:
        shijieVol?.cards[0]?.title ??
        nightCard?.famousSpots[0]?.name ??
        `${pack.name}老街夜市`,
      desc:
        nightCard?.tagline ??
        `夜幕降临，在鼎沸人声与炭火锅气中收尾${pack.name}十二时辰的味觉高潮。`,
      matchedCard: nightCard,
    },
  ];
}

export function CityFoodOverview({
  pack,
  onSelectVolume,
  onSelectCard,
}: CityFoodOverviewProps) {
  const { overview } = pack;
  const { tastedDishSet, wishlistDishSet, toggleTasted, toggleWishlist } = useFoodFootprints();
  const [sigFilter, setSigFilter] = useState<"all" | "dacai" | "xiaochi" | "zhushi" | "fengwu">(
    "all",
  );

  const cuisineMeta = EIGHT_CUISINES_META[pack.eightCuisine] ?? EIGHT_CUISINES_META.local;

  const allCityCards = useMemo(() => {
    const list: { card: DishCard; volumeTitle: string; volumeIndex: string }[] = [];
    for (const v of pack.volumes) {
      for (const c of v.cards) {
        list.push({ card: c, volumeTitle: v.title, volumeIndex: v.index });
      }
    }
    return list;
  }, [pack]);

  const signatureCards = useMemo(() => {
    const coreVolumeIds = new Set<FoodCategoryId>(["dacai", "xiaochi", "zhushi", "fengwu"]);
    const picked: { card: DishCard; volumeTitle: string; volumeIndex: string }[] = [];
    for (const v of pack.volumes) {
      if (!coreVolumeIds.has(v.id)) continue;
      for (const card of v.cards) {
        picked.push({ card, volumeTitle: v.title, volumeIndex: v.index });
      }
    }
    return picked;
  }, [pack]);

  const signaturePillDishes = useMemo(() => {
    const out: string[] = [];
    const seenTitles = new Set<string>();
    const seenCardIds = new Set<string>();

    for (const rawName of pack.signatureDishes) {
      const dishName = rawName.trim();
      if (!dishName || seenTitles.has(dishName)) continue;
      const matched = signatureCards.find(
        (c) => c.card.title.includes(dishName) || dishName.includes(c.card.title),
      );
      if (matched) {
        if (seenCardIds.has(matched.card.id)) continue;
        seenCardIds.add(matched.card.id);
      }
      seenTitles.add(dishName);
      out.push(dishName);
    }

    for (const { card } of signatureCards) {
      if (out.length >= 12) break;
      if (seenCardIds.has(card.id) || seenTitles.has(card.title)) continue;
      seenCardIds.add(card.id);
      seenTitles.add(card.title);
      out.push(card.title);
    }

    return out.slice(0, 12);
  }, [pack.signatureDishes, signatureCards]);

  const filteredSignatureCards = useMemo(() => {
    if (sigFilter === "all") return signatureCards;
    return signatureCards.filter((item) => item.card.category === sigFilter);
  }, [signatureCards, sigFilter]);

  const dayRouteStops = useMemo(() => buildCityDayRoute(pack), [pack]);

  // 6-axis flavor radar SVG polygon points
  const radarItems = useMemo(() => {
    const base = overview.flavorRadar ?? [];
    if (base.length >= 3) return base.slice(0, 6);
    return [
      { label: "咸鲜", score: 85, note: "本味底色" },
      { label: "香辣", score: 70, note: "复合调味" },
      { label: "醇厚", score: 88, note: "高汤火候" },
      { label: "回甜", score: 65, note: "收汁提鲜" },
      { label: "酸爽", score: 60, note: "开胃解腻" },
      { label: "烟火气", score: 95, note: "市井老店" },
    ];
  }, [overview.flavorRadar]);

  const radarGeometry = useMemo(() => {
    const cx = 170;
    const cy = 155;
    const maxR = 98;
    const n = radarItems.length;
    const axes = radarItems.map((item, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      const ratio = Math.max(0.15, Math.min(1, item.score / 100));
      const x = cx + Math.cos(angle) * maxR * ratio;
      const y = cy + Math.sin(angle) * maxR * ratio;
      const axisEndX = cx + Math.cos(angle) * maxR;
      const axisEndY = cy + Math.sin(angle) * maxR;
      const labelX = cx + Math.cos(angle) * (maxR + 28);
      const labelY = cy + Math.sin(angle) * (maxR + 22);
      return {
        item,
        x,
        y,
        axisEndX,
        axisEndY,
        labelX,
        labelY,
      };
    });
    const polygonPoints = axes.map((a) => `${a.x.toFixed(1)},${a.y.toFixed(1)}`).join(" ");
    const rings = [0.33, 0.66, 1].map((r) =>
      axes
        .map((_, i) => {
          const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
          return `${(cx + Math.cos(angle) * maxR * r).toFixed(1)},${(
            cy +
            Math.sin(angle) * maxR * r
          ).toFixed(1)}`;
        })
        .join(" "),
    );
    return { cx, cy, axes, polygonPoints, rings };
  }, [radarItems]);

  const signatureFilterOptions: {
    id: "all" | "dacai" | "xiaochi" | "zhushi" | "fengwu";
    label: string;
  }[] = [
    { id: "all", label: `全部必吃招牌 (${signatureCards.length})` },
    { id: "dacai", label: "🍲 镇桌大菜" },
    { id: "xiaochi", label: "🥟 街头小吃" },
    { id: "zhushi", label: "🍜 粉面碳水" },
    { id: "fengwu", label: "🌿 道地风物" },
  ];

  return (
    <article className="essay city-food-overview single-column-essay" data-testid="city-food-overview">
      {/* 0. 城市饮食风土总论开篇 */}
      <header id="ov-hero" className="overview-hero food-overview-hero">
        <div className="overview-hero-top">
          <div className="ov-badge-row">
            <span className="ov-cuisine-seal" style={{ background: cuisineMeta.color }}>
              {cuisineMeta.code}
            </span>
            <span className="overview-kicker">
              {pack.provinceLabel} · {pack.cuisineTag} · 主导味型：{pack.dominantFlavor} ·{" "}
              {pack.stapleType}
            </span>
          </div>
          <span className="overview-stats-pill">
            5 卷食单 · {allCityCards.length} 道代表名馔与寻味老字号
          </span>
        </div>

        <h2>
          {pack.name}：为什么是这种味道？
          <small>{overview.subtitle}</small>
        </h2>

        {/* 招牌菜标签速览 */}
        <div className="ov-signature-pills">
          <span className="ov-sig-label">🥢 镇城必吃名片（点击直达该菜）：</span>
          {signaturePillDishes.map((dishName) => {
            const matched = allCityCards.find(
              (c) => c.card.title.includes(dishName) || dishName.includes(c.card.title),
            );
            return (
              <button
                key={dishName}
                type="button"
                className="ov-sig-chip"
                onClick={() => {
                  if (matched) {
                    onSelectCard(matched.card.category, matched.card.id);
                  } else {
                    onSelectVolume("dacai");
                  }
                }}
              >
                {dishName}
              </button>
            );
          })}
        </div>

        {/* 深度饮食导语段落 */}
        <div className="ov-terroir-essay">
          {overview.leadParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </header>

      {/* 1. 必吃招牌名馔视觉画廊（支持直接打卡与进入卷目） */}
      <section
        id="ov-signature-gallery"
        className="overview-section"
        aria-label="本城必吃招牌美食画廊"
      >
        <div className="section-head-bar">
          <div>
            <span className="section-tag">SIGNATURE CULINARY GALLERY</span>
            <h3>
              一、{pack.name}必吃招牌名馔与非遗风味画廊（共 {signatureCards.length} 道代表作）
            </h3>
          </div>
          <p className="section-sub">点击菜品可进入对应卷目详读行家吃法与百年老店</p>
        </div>

        <div
          className="ov-signature-filter-bar topic-sg-pills"
          role="tablist"
          aria-label="必吃招牌品类筛选"
        >
          {signatureFilterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={sigFilter === opt.id}
              className={`sfcb-pill${sigFilter === opt.id ? " on" : ""}`}
              onClick={() => setSigFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="ov-signature-cards-grid">
          {filteredSignatureCards.map(({ card, volumeIndex, volumeTitle }) => {
            const isTasted = tastedDishSet.has(card.id);
            const isWish = wishlistDishSet.has(card.id);
            const catMeta = FOOD_VOLUME_META[card.category];
            return (
              <article
                key={card.id}
                className={`ov-sig-dish-card${isTasted ? " is-tasted" : ""}`}
                data-testid={`ov-sig-card-${card.id}`}
              >
                <div
                  className="ov-sig-media"
                  onClick={() => onSelectCard(card.category, card.id)}
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
                    className="ov-sig-vol-badge"
                    style={{ background: catMeta.badgeColor }}
                  >
                    {catMeta.icon} {volumeIndex}·{volumeTitle}
                  </span>
                  <span className="ov-sig-flavor-badge">{card.flavorProfile}</span>
                </div>

                <div className="ov-sig-body">
                  <div className="ov-sig-head">
                    <h4>{card.title}</h4>
                    <span>{card.cuisineStyle}</span>
                  </div>
                  <p>{card.tagline}</p>
                  {card.famousSpots[0] && (
                    <small className="ov-sig-spot">
                      🏮 代表老店：{card.famousSpots[0].name}（{card.famousSpots[0].addressHint}）
                    </small>
                  )}
                  <div className="ov-sig-actions">
                    <button
                      type="button"
                      className={`btn-checkin-tasted${isTasted ? " on" : ""}`}
                      onClick={() => toggleTasted(dishCardToRecord(card, pack))}
                    >
                      {isTasted ? "✓ 已吃过" : "🥢 吃过"}
                    </button>
                    <button
                      type="button"
                      className={`btn-checkin-wish${isWish ? " on" : ""}`}
                      onClick={() => toggleWishlist(dishCardToRecord(card, pack))}
                    >
                      {isWish ? "★ 已想吃" : "♡ 想吃"}
                    </button>
                    <button
                      type="button"
                      className="btn-jump-dish"
                      onClick={() => onSelectCard(card.category, card.id)}
                    >
                      品鉴详述 →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 2. 五大食单分卷全景导读 */}
      <section id="ov-volumes" className="overview-section" aria-label="五大食单分卷导读">
        <div className="section-head-bar">
          <div>
            <span className="section-tag">FIVE CULINARY VOLUMES</span>
            <h3>二、开始翻阅：《{pack.name}》五卷完整风味食单</h3>
          </div>
          <p className="section-sub">
            涵盖镇桌大菜、街头小吃、粉面碳水、道地风物与寻味老字号五大维度
          </p>
        </div>

        <div className="overview-volume-cards">
          {pack.volumes.map((v) => {
            const vMeta = FOOD_VOLUME_META[v.id];
            const tastedCount = v.cards.filter((c) => tastedDishSet.has(c.id)).length;
            return (
              <button
                key={v.id}
                type="button"
                className="overview-vol-card"
                data-testid={`overview-goto-${v.id}`}
                onClick={() => onSelectVolume(v.id)}
              >
                <div className="overview-vol-top">
                  <span
                    className="overview-vol-idx"
                    style={{ background: vMeta.badgeColor }}
                  >
                    {vMeta.icon} {v.index}
                  </span>
                  <span className="overview-vol-count">
                    {v.cards.length} 道词条 · 已尝 {tastedCount}
                  </span>
                </div>
                <strong>{v.title}</strong>
                <small>{v.subtitle}</small>
                <p>{v.lede}</p>
                <div className="overview-vol-dishes">
                  {v.cards.map((c) => (
                    <span key={c.id} className="ov-vol-dish-tag">
                      {c.title}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. 六轴味型雷达图 + 六维饮食核心档案 */}
      <section
        id="ov-radar-facts"
        className="overview-section"
        aria-label="六轴味型雷达与饮食核心档案"
      >
        <div className="section-head-bar">
          <div>
            <span className="section-tag">FLAVOR RADAR & CULINARY PROFILE</span>
            <h3>三、{pack.name}六维味型图谱与风味档案</h3>
          </div>
          <p className="section-sub">
            从道地物产、核心调味到代表名馔的味觉基因解码
          </p>
        </div>

        <div className="radar-and-facts-layout">
          {/* 左侧：SVG 六轴味型雷达图 */}
          <div className="flavor-radar-card">
            <div className="frc-head">
              <strong>{pack.name} · 六维味觉基因雷达</strong>
              <span>{pack.dominantFlavor}</span>
            </div>
            <svg
              viewBox="0 0 340 310"
              className="flavor-radar-svg"
              role="img"
              aria-label={`${pack.name}六轴味型雷达图`}
            >
              {radarGeometry.rings.map((pts, idx) => (
                <polygon
                  key={idx}
                  points={pts}
                  fill={idx === 2 ? "rgba(244, 239, 230, 0.55)" : "none"}
                  stroke="#D6CFC2"
                  strokeWidth="1"
                  strokeDasharray={idx < 2 ? "3 3" : undefined}
                />
              ))}
              {radarGeometry.axes.map((ax) => (
                <line
                  key={ax.item.label}
                  x1={radarGeometry.cx}
                  y1={radarGeometry.cy}
                  x2={ax.axisEndX}
                  y2={ax.axisEndY}
                  stroke="#D6CFC2"
                  strokeWidth="1"
                />
              ))}
              <polygon
                points={radarGeometry.polygonPoints}
                fill="rgba(185, 28, 28, 0.22)"
                stroke="#B91C1C"
                strokeWidth="2.4"
              />
              {radarGeometry.axes.map((ax) => (
                <g key={ax.item.label}>
                  <circle
                    cx={ax.x}
                    cy={ax.y}
                    r="4.5"
                    fill="#B91C1C"
                    stroke="#FFFDF9"
                    strokeWidth="1.5"
                  />
                  <text
                    x={ax.labelX}
                    y={ax.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#1C1917"
                    fontSize="11.5"
                    fontWeight="700"
                  >
                    {ax.item.label} {ax.item.score}
                  </text>
                </g>
              ))}
            </svg>
            <div className="frc-notes-list">
              {radarItems.map((ri) => (
                <div key={ri.label} className="frc-note-pill">
                  <strong>
                    {ri.label} ({ri.score})
                  </strong>
                  <span>{ri.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：6 维饮食核心档案 */}
          <div className="geo-facts-grid culinary-facts-grid">
            {overview.culinaryFacts.map((fact) => {
              const displayVal =
                EIGHT_CUISINES_META[fact.value as keyof typeof EIGHT_CUISINES_META]?.shortLabel ??
                fact.value;
              return (
                <div key={fact.label} className="geo-fact-card">
                  <span className="geo-fact-label">{fact.label}</span>
                  <strong className="geo-fact-value">{displayVal}</strong>
                  <p className="geo-fact-detail">{fact.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 十二时辰 · 一日四餐寻味动线 */}
      <section
        id="ov-day-route"
        className="overview-section"
        aria-label="十二时辰一日四餐寻味指南"
        data-testid="city-day-route"
      >
        <div className="section-head-bar">
          <div>
            <span className="section-tag">12-SHICHEN CULINARY ITINERARY · 一日四餐</span>
            <h3>四、{pack.name}十二时辰 · 一日四餐寻味动线</h3>
          </div>
          <p className="section-sub">
            从清晨第一碗热汤碳水、午间正席大菜、午后非遗茶点到深夜烟火夜市的地道吃法
          </p>
        </div>

        <div className="day-route-timeline">
          {dayRouteStops.map((stop, idx) => {
            const card = stop.matchedCard;
            const isTasted = card ? tastedDishSet.has(card.id) : false;
            return (
              <article key={`${stop.meal}-${idx}`} className="day-route-card">
                <div className="drc-time-badge">
                  <span className="drc-meal">{stop.meal}</span>
                  <strong className="drc-clock">{stop.time}</strong>
                </div>

                {card && (
                  <div
                    className="drc-photo"
                    onClick={() => onSelectCard(card.category, card.id)}
                  >
                    <img
                      src={assetUrl(card.photoUrl ?? `/photos/${card.id}.jpg`)}
                      alt={stop.dishName}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0.25";
                      }}
                    />
                  </div>
                )}

                <div className="drc-body">
                  <span className="drc-title-kicker">{stop.title}</span>
                  <div className="drc-dish-row">
                    <h4>{stop.dishName}</h4>
                    <span className="drc-shop">🏮 {stop.shopName}</span>
                  </div>
                  <p className="drc-desc">{stop.desc}</p>
                  {card && (
                    <div className="drc-actions">
                      <button
                        type="button"
                        className={`btn-checkin-tasted${isTasted ? " on" : ""}`}
                        onClick={() => toggleTasted(dishCardToRecord(card, pack))}
                      >
                        {isTasted ? "✓ 已吃过" : "+ 吃过"}
                      </button>
                      <button
                        type="button"
                        className="btn-jump-dish"
                        onClick={() => onSelectCard(card.category, card.id)}
                      >
                        查看此菜详述 →
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </article>
  );
}
