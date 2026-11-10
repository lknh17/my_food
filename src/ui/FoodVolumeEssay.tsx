import { useEffect, useMemo, useRef, useState } from "react";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type DishCard,
  type FoodCategoryId,
  type FoodVolume,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { dishCardToRecord, useFoodFootprints } from "../lib/foodFootprints";

export interface FoodVolumeEssayProps {
  pack: CityFoodPack;
  volume: FoodVolume;
  activeCardId: string | null;
  onSelectCard: (cardId: string) => void;
  onOpenFoodMap: (category?: FoodCategoryId, cardId?: string) => void;
}

const TILE = 256;
type GuideVisualMode = "street" | "topo" | "satellite";

const TILE_URL: Record<GuideVisualMode, (z: number, y: number, x: number) => string> = {
  street: (z, y, x) => assetUrl(`tiles-cache/street/${z}/${y}/${x}.jpg`),
  topo: (z, y, x) => assetUrl(`tiles-cache/topo/${z}/${y}/${x}.jpg`),
  satellite: (z, y, x) => assetUrl(`tiles-cache/satellite/${z}/${y}/${x}.jpg`),
};

const DIRECT_FALLBACK_URL: Record<GuideVisualMode, (z: number, y: number, x: number) => string> = {
  street: (z, y, x) =>
    `https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${z}`,
  topo: (z, y, x) =>
    z >= 13
      ? `https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${z}`
      : `https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}`,
  satellite: (z, y, x) => `https://webst02.is.autonavi.com/appmaptile?style=6&x=${x}&y=${y}&z=${z}`,
};

function worldPx(lng: number, lat: number, zoom: number) {
  const scale = TILE * 2 ** zoom;
  const x = ((lng + 180) / 360) * scale;
  const latRad = (lat * Math.PI) / 180;
  const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * scale;
  return { x, y, scale };
}

export function FoodVolumeEssay({
  pack,
  volume,
  activeCardId,
  onSelectCard,
  onOpenFoodMap,
}: FoodVolumeEssayProps) {
  const mapFrameRef = useRef<HTMLDivElement>(null);
  const {
    tastedDishSet,
    wishlistDishSet,
    toggleTasted,
    toggleWishlist,
    setBatchTasted,
  } = useFoodFootprints();

  const [lightboxCard, setLightboxCard] = useState<DishCard | null>(null);
  const [mapMode, setMapMode] = useState<GuideVisualMode>("street");
  const [zoomDelta, setZoomDelta] = useState<number>(0);
  const [mapSize, setMapSize] = useState({ w: 860, h: 380 });

  const volMeta = FOOD_VOLUME_META[volume.id];
  const currentCard = useMemo(
    () =>
      volume.cards.find((c) => c.id === activeCardId) ??
      volume.cards[0] ??
      null,
    [volume.cards, activeCardId],
  );

  useEffect(() => {
    setLightboxCard(null);
    setZoomDelta(0);
  }, [volume.id, pack.id]);

  useEffect(() => {
    const node = mapFrameRef.current;
    if (!node) return;
    const measure = () => {
      const rect = node.getBoundingClientRect();
      if (rect.width > 80 && rect.height > 80) {
        setMapSize({ w: Math.round(rect.width), h: Math.round(rect.height) });
      }
    };
    measure();
    const obs = new ResizeObserver(measure);
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const tastedInVolCount = useMemo(
    () => volume.cards.filter((c) => tastedDishSet.has(c.id)).length,
    [volume.cards, tastedDishSet],
  );
  const allVolTasted =
    volume.cards.length > 0 && tastedInVolCount === volume.cards.length;

  // Compute slippy guide map scene
  const guideScene = useMemo(() => {
    const baseZoom = Math.max(10, Math.min(13, pack.defaultZoom + 1));
    const z = Math.max(8, Math.min(15, baseZoom + zoomDelta));
    const centerCoord = currentCard?.coord ?? pack.center;
    const centerPx = worldPx(centerCoord[0], centerCoord[1], z);
    const originX = centerPx.x - mapSize.w / 2;
    const originY = centerPx.y - mapSize.h / 2;
    const x0 = Math.floor(originX / TILE);
    const y0 = Math.floor(originY / TILE);
    const x1 = Math.floor((originX + mapSize.w) / TILE);
    const y1 = Math.floor((originY + mapSize.h) / TILE);
    const maxTile = 2 ** z;
    const tiles: { x: number; y: number; left: number; top: number }[] = [];
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        if (x < 0 || y < 0 || x >= maxTile || y >= maxTile) continue;
        tiles.push({ x, y, left: x * TILE - originX, top: y * TILE - originY });
      }
    }
    const project = (lng: number, lat: number) => {
      const pt = worldPx(lng, lat, z);
      return { x: pt.x - originX, y: pt.y - originY };
    };
    return { z, tiles, project, centerCoord };
  }, [pack.defaultZoom, pack.center, currentCard, zoomDelta, mapSize]);

  function scrollToCard(cardId: string) {
    onSelectCard(cardId);
    const el = document.getElementById(`card-${cardId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <article
      className="essay volume-essay food-volume-essay single-column-essay"
      data-testid={`essay-${volume.id}`}
    >
      {/* 1. 卷首题头与风土导语 */}
      <header id="vol-block-header" className="volume-header">
        <div className="vol-header-top-row">
          <p className="running-head">
            {pack.provinceLabel} · 《{pack.name}风味图志》 · {volume.index} · 纯单列深度图文食单
          </p>
          <div className="vol-batch-checkin">
            <span className="vol-progress-text">
              本卷已尝 <strong>{tastedInVolCount}</strong> / {volume.cards.length} 道
            </span>
            <button
              type="button"
              className={`sfcb-batch-btn${allVolTasted ? " is-all-checked" : ""}`}
              data-testid={`batch-checkin-${volume.id}`}
              onClick={() =>
                setBatchTasted(
                  volume.cards.map((c) => dishCardToRecord(c, pack)),
                  !allVolTasted,
                  pack.id,
                )
              }
            >
              {allVolTasted
                ? `取消本卷打卡 (${volume.cards.length})`
                : `✓ 一键打卡本卷全部美食 (${volume.cards.length})`}
            </button>
          </div>
        </div>

        <h2>
          <span
            className="vol-title-icon-badge"
            style={{ background: volMeta.badgeColor }}
          >
            {volMeta.icon} {volume.index}
          </span>
          {volume.title}
          <small>{volume.subtitle}</small>
        </h2>

        <div className="lede-box">
          <p className="lede">{volume.lede}</p>
        </div>
      </header>

      {/* 2. 单列全宽：本卷美食高清实拍影像橱窗 */}
      {currentCard && (
        <section
          id="vol-block-photos"
          className="volume-block"
          aria-label="本卷美食实拍橱窗"
        >
          <div className="block-title-row">
            <h3>
              一、本卷美食高清实拍橱窗（共 {volume.cards.length} 道代表词条）
            </h3>
            <span>点击缩略图切换主图，点击主图可打开高清灯箱或直达下方详述卡片</span>
          </div>

          <div className="volume-photo-showcase" data-testid="volume-photo-showcase">
            <div className="featured-photo-hero">
              <img
                src={assetUrl(currentCard.photoUrl ?? `/photos/${currentCard.id}.jpg`)}
                alt={currentCard.title}
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0.25";
                }}
              />
              <div className="featured-photo-shade" aria-hidden="true" />
              <div className="featured-photo-caption">
                <div className="fpc-badges">
                  <span
                    className="fpc-cat-pill"
                    style={{ background: volMeta.badgeColor }}
                  >
                    {volMeta.icon} {volume.index}·{volume.title}
                  </span>
                  <span className="fpc-flavor-pill">{currentCard.flavorProfile}</span>
                  {currentCard.heritageTag && (
                    <span className="fpc-heritage-pill">{currentCard.heritageTag}</span>
                  )}
                </div>
                <strong>{currentCard.title}</strong>
                <em>{currentCard.tagline}</em>
                <div className="fpc-btns">
                  <button
                    type="button"
                    onClick={() => setLightboxCard(currentCard)}
                  >
                    🔍 放大实拍大图
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToCard(currentCard.id)}
                  >
                    📖 阅读食单详述 ↓
                  </button>
                </div>
              </div>
            </div>

            <div className="featured-photo-grid">
              {volume.cards.map((c) => {
                const isOn = currentCard.id === c.id;
                const isTasted = tastedDishSet.has(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    className={`featured-thumb${isOn ? " on" : ""}${
                      isTasted ? " is-tasted" : ""
                    }`}
                    onClick={() => onSelectCard(c.id)}
                  >
                    <img
                      src={assetUrl(c.photoUrl ?? `/photos/${c.id}.jpg`)}
                      alt={c.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0.25";
                      }}
                    />
                    <span>
                      {isTasted ? "✓ " : ""}
                      {c.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. 单列全宽：本卷老字号与寻味街区空间导览图 */}
      <section
        id="vol-block-guidemap"
        className="volume-block"
        aria-label="本卷老字号寻味导览地图"
      >
        <div className="block-title-row">
          <h3>二、{pack.name} · {volume.title}老字号与街区导览地图</h3>
          <span>支持切换「街区寻味 / 山河水土 / 高清卫星」底图，点击图钉直达对应美食</span>
        </div>

        <figure className={`static-map mode-${mapMode}`} data-testid="volume-guide-map">
          <div className="static-map-head">
            <div className="static-map-title-group">
              <span
                className="static-map-badge"
                style={{ background: volMeta.badgeColor }}
              >
                {volMeta.icon} {volume.index}寻味坐标
              </span>
              <strong>
                {pack.name} · {volume.title}代表名店与街区分布（WGS84）
              </strong>
            </div>

            <div className="static-map-controls">
              <div className="static-mode-pills">
                <button
                  type="button"
                  className={mapMode === "street" ? "on" : ""}
                  onClick={() => setMapMode("street")}
                >
                  街区寻味
                </button>
                <button
                  type="button"
                  className={mapMode === "topo" ? "on" : ""}
                  onClick={() => setMapMode("topo")}
                >
                  山河水土
                </button>
                <button
                  type="button"
                  className={mapMode === "satellite" ? "on" : ""}
                  onClick={() => setMapMode("satellite")}
                >
                  卫星实景
                </button>
              </div>
              <div className="static-zoom-btns">
                <button
                  type="button"
                  title="放大"
                  onClick={() => setZoomDelta((d) => Math.min(3, d + 1))}
                >
                  +
                </button>
                <span className="zoom-readout">z{guideScene.z}</span>
                <button
                  type="button"
                  title="缩小"
                  onClick={() => setZoomDelta((d) => Math.max(-2, d - 1))}
                >
                  −
                </button>
              </div>
            </div>
          </div>

          <div className="static-map-frame" ref={mapFrameRef}>
            {guideScene.tiles.map((tile) => (
              <img
                key={`vmap-${volume.id}-${mapMode}-${guideScene.z}-${tile.x}-${tile.y}`}
                className="static-tile"
                alt=""
                width={TILE}
                height={TILE}
                decoding="async"
                style={{ left: tile.left, top: tile.top }}
                src={TILE_URL[mapMode](guideScene.z, tile.y, tile.x)}
                onError={(e) => {
                  const target = e.currentTarget;
                  const fb = DIRECT_FALLBACK_URL[mapMode](guideScene.z, tile.y, tile.x);
                  if (target.src !== fb) target.src = fb;
                }}
              />
            ))}

            <div className="static-pins-layer">
              {volume.cards.map((card, idx) => {
                const pt = guideScene.project(card.coord[0], card.coord[1]);
                if (
                  pt.x < -30 ||
                  pt.x > mapSize.w + 30 ||
                  pt.y < -30 ||
                  pt.y > mapSize.h + 30
                ) {
                  return null;
                }
                const isSelected = currentCard?.id === card.id;
                const isTasted = tastedDishSet.has(card.id);
                return (
                  <button
                    key={card.id}
                    type="button"
                    className={`static-pin-marker${isSelected ? " active" : ""}${
                      isTasted ? " is-tasted" : ""
                    }`}
                    style={{
                      left: `${pt.x}px`,
                      top: `${pt.y}px`,
                      borderColor: volMeta.badgeColor,
                    }}
                    onClick={() => onSelectCard(card.id)}
                  >
                    <span
                      className="pin-num"
                      style={{ background: volMeta.badgeColor }}
                    >
                      {isTasted ? "✓" : idx + 1}
                    </span>
                    <span className="pin-text">{card.title}</span>
                  </button>
                );
              })}
            </div>

            {currentCard && (
              <aside className="static-map-inspector">
                <img
                  src={assetUrl(currentCard.photoUrl ?? `/photos/${currentCard.id}.jpg`)}
                  alt={currentCard.title}
                  className="inspector-thumb"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0.25";
                  }}
                />
                <div className="inspector-copy">
                  <div className="inspector-top">
                    <span className="inspector-no">{currentCard.flavorProfile}</span>
                    <strong>{currentCard.title}</strong>
                    {currentCard.famousSpots[0] && (
                      <small>🏮 {currentCard.famousSpots[0].name}</small>
                    )}
                  </div>
                  <p className="inspector-tagline">{currentCard.tagline}</p>
                </div>
              </aside>
            )}

            <div className="static-map-float-actions">
              <button
                type="button"
                className="inspect-btn"
                onClick={() => onOpenFoodMap(volume.id, currentCard?.id)}
              >
                📍 打开全屏寻味地图沙盘 ↗
              </button>
            </div>
          </div>
        </figure>
      </section>

      {/* 4. 单列全宽：本卷详尽美食图解卡片流 */}
      <section
        id="vol-block-cards"
        className="encyclopedia-cards"
        data-testid="volume-cards"
      >
        <div className="block-title-row">
          <h3>
            三、{pack.name} · {volume.title}深度图解食单（共 {volume.cards.length} 道）
          </h3>
          <span>每张食单详列味型、技法、道地主料、典故非遗及寻味老字号坐标</span>
        </div>

        <div className="card-single-list">
          {volume.cards.map((card, idx) => {
            const isTasted = tastedDishSet.has(card.id);
            const isWish = wishlistDishSet.has(card.id);
            const isSelected = currentCard?.id === card.id;
            const photoSrc = assetUrl(card.photoUrl ?? `/photos/${card.id}.jpg`);
            const record = dishCardToRecord(card, pack);

            return (
              <article
                key={card.id}
                id={`card-${card.id}`}
                className={`ency-card ency-card-wide dish-card${isSelected ? " on" : ""}${
                  isTasted ? " is-dish-tasted" : ""
                }`}
                data-testid={`card-${card.id}`}
                onMouseEnter={() => onSelectCard(card.id)}
              >
                <div className="ency-card-media">
                  <button
                    type="button"
                    className="card-visual card-visual-btn"
                    onClick={() => setLightboxCard(card)}
                    aria-label={`查看${card.title}高清实拍大图`}
                  >
                    <img
                      src={photoSrc}
                      alt={card.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0.25";
                      }}
                    />
                    <div className="card-visual-shade" />
                    <span
                      className="dish-photo-vol-pill"
                      style={{ background: volMeta.badgeColor }}
                    >
                      {volMeta.icon} {volume.index}·{volMeta.shortTitle}
                    </span>
                  </button>
                </div>

                <div className="ency-card-body">
                  <div className="ency-card-meta-top">
                    <div className="ency-card-meta-left">
                      <span className="ency-card-index">
                        {volume.index} · {volume.title} · #{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="dish-style-badge">{card.cuisineStyle}</span>
                      <span className="dish-flavor-badge">{card.flavorProfile}</span>
                      {card.heritageTag && (
                        <span className="dish-heritage-badge">★ {card.heritageTag}</span>
                      )}
                    </div>
                    <span className="ency-card-coord">
                      WGS84: {card.coord[1].toFixed(4)}°N, {card.coord[0].toFixed(4)}°E
                    </span>
                  </div>

                  <div className="ency-card-title-row">
                    <h4>{card.title}</h4>
                    {isTasted && <span className="scenic-checked-pill">✓ 已品尝</span>}
                  </div>

                  <p className="tagline">{card.tagline}</p>

                  {/* 四维风味规格网格：味型特征、烹饪技法、道地主料、起源与非遗 */}
                  <div className="dish-four-dims-grid">
                    <div className="dish-dim-item">
                      <span>味型特征</span>
                      <strong>{card.flavorProfile}</strong>
                    </div>
                    <div className="dish-dim-item">
                      <span>核心烹饪技法</span>
                      <strong>{card.cookingMethod}</strong>
                    </div>
                    <div className="dish-dim-item">
                      <span>道地主料与灵魂调味</span>
                      <strong>{card.mainIngredients}</strong>
                    </div>
                    <div className="dish-dim-item">
                      <span>起源年代与非遗级别</span>
                      <strong>
                        {[card.originEra, card.heritageTag].filter(Boolean).join(" · ") ||
                          "传统名馔 / 地方风味代表"}
                      </strong>
                    </div>
                  </div>

                  {/* 深度饮食志正文 */}
                  <p className="ency-card-detail">{card.body || card.storyAndCraft}</p>

                  {/* 寻味老字号与名店推荐列表 */}
                  {card.famousSpots && card.famousSpots.length > 0 && (
                    <div className="dish-famous-spots-box">
                      <span className="dfs-label">🏮 推荐寻味老字号与地道食肆：</span>
                      <div className="dfs-spots-grid">
                        {card.famousSpots.map((spot) => (
                          <div key={spot.name} className="dfs-spot-chip">
                            <strong>{spot.name}</strong>
                            <span>📍 {spot.addressHint}</span>
                            {spot.note && <em>{spot.note}</em>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 互动操作栏 */}
                  <div className="ency-card-actions">
                    <button
                      type="button"
                      className={`btn-checkin-tasted${isTasted ? " on" : ""}`}
                      data-testid={`dish-checkin-${card.id}`}
                      onClick={() => toggleTasted(record)}
                    >
                      {isTasted ? "✓ 已吃过打卡" : "✓ 吃过打卡"}
                    </button>
                    <button
                      type="button"
                      className={`btn-checkin-wish${isWish ? " on" : ""}`}
                      data-testid={`dish-wish-${card.id}`}
                      onClick={() => toggleWishlist(record)}
                    >
                      {isWish ? "★ 已在想吃清单" : "♡ 想吃清单"}
                    </button>
                    <button
                      type="button"
                      className="btn-card-locate"
                      data-testid={`dish-locate-${card.id}`}
                      onClick={() => onOpenFoodMap(volume.id, card.id)}
                    >
                      📍 寻味地图定位 ↗
                    </button>
                    <button
                      type="button"
                      className="btn-card-zoom"
                      onClick={() => setLightboxCard(card)}
                    >
                      查看高清实拍大图
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 高清大图灯箱 */}
      {lightboxCard && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxCard.title}
          onClick={() => setLightboxCard(null)}
        >
          <div className="photo-lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="photo-lightbox-close"
              onClick={() => setLightboxCard(null)}
            >
              关闭 ✕
            </button>
            <img
              src={assetUrl(lightboxCard.photoUrl ?? `/photos/${lightboxCard.id}.jpg`)}
              alt={lightboxCard.title}
            />
            <div className="photo-lightbox-caption">
              <h3>
                {pack.name} · {lightboxCard.title}
              </h3>
              <p className="tagline">{lightboxCard.tagline}</p>
              <p>{lightboxCard.body || lightboxCard.storyAndCraft}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
