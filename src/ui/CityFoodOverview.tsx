import { useMemo } from "react";
import { EIGHT_CUISINES_META } from "../content/provincesMeta";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
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
  onOpenFoodMap: (category?: FoodCategoryId, cardId?: string) => void;
}

interface NeighborCulinaryCity {
  city: CityFoodPack;
  distKm: number;
  dirLabel: string;
}

function computeNearbyCities(
  pack: CityFoodPack,
  allCities: CityFoodPack[],
  count = 6,
): NeighborCulinaryCity[] {
  const [lng1, lat1] = pack.center;
  const cosLat = Math.cos((lat1 * Math.PI) / 180);
  const dirs = ["正北", "东北", "正东", "东南", "正南", "西南", "正西", "西北"];

  const out: NeighborCulinaryCity[] = [];
  for (const other of allCities) {
    if (other.id === pack.id) continue;
    const dx = (other.center[0] - lng1) * cosLat * 111.32;
    const dy = (other.center[1] - lat1) * 111.32;
    const distKm = Math.max(10, Math.round(Math.hypot(dx, dy)));
    const deg = ((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360;
    const dirLabel = dirs[Math.round(deg / 45) % 8];
    out.push({ city: other, distKm, dirLabel });
  }
  out.sort((a, b) => a.distKm - b.distKm);
  return out.slice(0, count);
}

export function CityFoodOverview({
  pack,
  allCities,
  onSelectVolume,
  onSelectCard,
  onSelectCity,
  onOpenFoodMap,
}: CityFoodOverviewProps) {
  const { overview } = pack;
  const { tastedDishSet, wishlistDishSet, toggleTasted, toggleWishlist } = useFoodFootprints();

  const cuisineMeta = EIGHT_CUISINES_META[pack.eightCuisine] ?? EIGHT_CUISINES_META.local;
  const neighbors = useMemo(
    () => computeNearbyCities(pack, allCities, 6),
    [pack, allCities],
  );

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
    // Pick top cards from volumes (up to 6)
    const picked: { card: DishCard; volumeTitle: string; volumeIndex: string }[] = [];
    for (const v of pack.volumes) {
      if (v.cards[0]) {
        picked.push({ card: v.cards[0], volumeTitle: v.title, volumeIndex: v.index });
      }
    }
    for (const v of pack.volumes) {
      if (picked.length >= 6) break;
      if (v.cards[1]) {
        picked.push({ card: v.cards[1], volumeTitle: v.title, volumeIndex: v.index });
      }
    }
    return picked.slice(0, 6);
  }, [pack]);

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
            5 卷食单 · {allCityCards.length} 道代表名馔与老店坐标
          </span>
        </div>

        <h2>
          {pack.name}：为什么是这种味道？
          <small>{overview.subtitle}</small>
        </h2>

        {/* 招牌菜标签速览 */}
        <div className="ov-signature-pills">
          <span className="ov-sig-label">🥢 镇城必吃名片：</span>
          {pack.signatureDishes.map((dishName) => {
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

        {/* 深度饮食地理导语段落 */}
        <div className="ov-terroir-essay">
          {overview.leadParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </header>

      {/* 1. 六轴味型雷达图 + 六维饮食核心档案 */}
      <section
        id="ov-radar-facts"
        className="overview-section"
        aria-label="六轴味型雷达与饮食地理核心档案"
      >
        <div className="section-head-bar">
          <div>
            <span className="section-tag">FLAVOR RADAR & TERROIR PROFILE</span>
            <h3>一、{pack.name}六轴味型图谱与饮食地理核心档案</h3>
          </div>
          <p className="section-sub">
            从山川气候、道地物产、核心调味到代表老字号的风味基因解码
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
            {overview.culinaryFacts.map((fact) => (
              <div key={fact.label} className="geo-fact-card">
                <span className="geo-fact-label">{fact.label}</span>
                <strong className="geo-fact-value">{fact.value}</strong>
                <p className="geo-fact-detail">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 必吃招牌名馔视觉画廊（支持直接打卡与进入卷目） */}
      <section
        id="ov-signature-gallery"
        className="overview-section"
        aria-label="本城必吃招牌美食画廊"
      >
        <div className="section-head-bar">
          <div>
            <span className="section-tag">SIGNATURE CULINARY GALLERY</span>
            <h3>二、{pack.name}必吃名馔与非遗风味画廊</h3>
          </div>
          <div className="section-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onOpenFoodMap()}
            >
              📍 在全屏老字号寻味地图查看 ↗
            </button>
          </div>
        </div>

        <div className="ov-signature-cards-grid">
          {signatureCards.map(({ card, volumeIndex, volumeTitle }) => {
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
                      🏮 代表名店：{card.famousSpots[0].name}（{card.famousSpots[0].addressHint}）
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
                      {isWish ? "★ 已种草" : "♡ 想吃"}
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

      {/* 3. 决定本城味型的三大水土—风味因果链 */}
      <section
        id="ov-causality"
        className="overview-section"
        aria-label="地理水土到风味演进因果链"
      >
        <div className="section-head-bar">
          <div>
            <span className="section-tag">GEOGRAPHY-TO-FLAVOR CAUSALITY</span>
            <h3>三、决定{pack.name}味道基因的三大风土因果链</h3>
          </div>
          <p className="section-sub">
            每一道地方名菜背后，都是山川气候、物产通道与商帮移民的必然结果
          </p>
        </div>

        <div className="causality-list">
          {overview.causalityChains.map((chain) => (
            <article key={chain.no} className="causality-card">
              <div className="causality-no">{chain.no}</div>
              <div className="causality-content">
                <div className="causality-head">
                  <h4>{chain.title}</h4>
                  <span className="causality-coord">
                    寻味坐标：{chain.spotName}（{chain.coord[1].toFixed(3)}°N,{" "}
                    {chain.coord[0].toFixed(3)}°E）
                  </span>
                </div>
                <p className="causality-detail-para">{chain.detail}</p>
                <div className="causality-actions">
                  <button
                    type="button"
                    className="btn-link"
                    onClick={() => onSelectVolume("dacai")}
                  >
                    阅读五卷食单详述 →
                  </button>
                  <button
                    type="button"
                    className="btn-link-muted"
                    onClick={() => onOpenFoodMap()}
                  >
                    在寻味地图定位 {chain.spotName} ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. 五大食单分卷全景导读 */}
      <section id="ov-volumes" className="overview-section" aria-label="五大食单分卷导读">
        <div className="section-head-bar">
          <div>
            <span className="section-tag">FIVE CULINARY VOLUMES</span>
            <h3>四、开始翻阅：《{pack.name}》五卷完整风味食单</h3>
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

      {/* 5. 周边邻城风味对比与寻味圈 */}
      {neighbors.length > 0 && (
        <section
          id="ov-neighbors"
          className="overview-section"
          aria-label="周边邻城风味对比"
        >
          <div className="section-head-bar">
            <div>
              <span className="section-tag">REGIONAL FLAVOR NEIGHBORS</span>
              <h3>五、{pack.name}周边美食名城风味圈对比</h3>
            </div>
            <p className="section-sub">沿地理走廊延伸寻味，对比相邻城市的味型与碳水谱系</p>
          </div>

          <div className="nc-cards-grid">
            {neighbors.map((nb) => (
              <div key={nb.city.id} className="nc-neighbor-card">
                <div className="nc-neighbor-top">
                  <strong>{nb.city.name}</strong>
                  <span className="nc-dir-badge">
                    {nb.dirLabel} · {nb.distKm} km
                  </span>
                </div>
                <small>
                  {nb.city.provinceLabel} · {nb.city.cuisineTag} · {nb.city.dominantFlavor}
                </small>
                <p className="nc-neighbor-dishes">
                  必吃：{nb.city.signatureDishes.slice(0, 3).join("、")}
                </p>
                <div className="nc-neighbor-actions">
                  <button
                    type="button"
                    className="btn-link"
                    data-testid={`neighbor-goto-${nb.city.id}`}
                    onClick={() => onSelectCity(nb.city.id)}
                  >
                    品读《{nb.city.name}》食单 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
