import { useEffect, useMemo, useRef, useState } from "react";
import maplibregl, { type Map as MlMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type DishCard,
  type FoodCategoryId,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { dishCardToRecord, useFoodFootprints } from "../lib/foodFootprints";
import { SouthChinaSea } from "./Inset";

export type FoodBasemapMode = "street" | "topo" | "satellite";

export interface FoodMapViewProps {
  city: CityFoodPack;
  allCities?: CityFoodPack[];
  initialCategory?: FoodCategoryId | "all";
  initialCardId?: string | null;
  onSelectCity: (cityId: string) => void;
  onBackToGazetteer: (category?: FoodCategoryId, cardId?: string) => void;
  onBackToPortal: () => void;
  onOpenPassport: () => void;
}

const TILE = 256;

const TILE_URL: Record<FoodBasemapMode, (z: number, y: number, x: number) => string> = {
  street: (z, y, x) => assetUrl(`tiles-cache/street/${z}/${y}/${x}.jpg`),
  topo: (z, y, x) => assetUrl(`tiles-cache/topo/${z}/${y}/${x}.jpg`),
  satellite: (z, y, x) => assetUrl(`tiles-cache/satellite/${z}/${y}/${x}.jpg`),
};

const DIRECT_FALLBACK_URL: Record<FoodBasemapMode, (z: number, y: number, x: number) => string> = {
  street: (z, y, x) =>
    `https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${z}`,
  topo: (z, y, x) =>
    z >= 14
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

export function FoodMapView({
  city,
  allCities = [],
  initialCategory = "all",
  initialCardId = null,
  onSelectCity,
  onBackToGazetteer,
  onBackToPortal,
  onOpenPassport,
}: FoodMapViewProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const mlContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MlMap | null>(null);

  const {
    tastedDishSet,
    wishlistDishSet,
    tastedDishes,
    visitedProvinceSet,
    toggleTasted,
    toggleWishlist,
  } = useFoodFootprints();

  const [basemap, setBasemap] = useState<FoodBasemapMode>("street");
  const [activeCategories, setActiveCategories] = useState<FoodCategoryId[]>(() =>
    initialCategory && initialCategory !== "all"
      ? [initialCategory]
      : ["dacai", "xiaochi", "zhushi", "fengwu", "shijie"],
  );
  const [selectedCardId, setSelectedCardId] = useState<string | null>(initialCardId);
  const [searchQuery, setSearchQuery] = useState("");
  const [cameraCenter, setCameraCenter] = useState<[number, number]>(city.center);
  const [cameraZoom, setCameraZoom] = useState<number>(Math.max(11, city.defaultZoom + 1));
  const [stageSize, setStageSize] = useState({ w: 1020, h: 760 });
  const [webglReady, setWebglReady] = useState(false);

  // Flatten all cards in the city
  const allCityCards = useMemo(() => {
    const list: { card: DishCard; volumeTitle: string; volumeIndex: string }[] = [];
    for (const vol of city.volumes) {
      for (const card of vol.cards) {
        list.push({ card, volumeTitle: vol.title, volumeIndex: vol.index });
      }
    }
    return list;
  }, [city]);

  // Filtered cards by active categories & search query
  const visibleCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const catSet = new Set(activeCategories);
    return allCityCards.filter(({ card }) => {
      if (!catSet.has(card.category)) return false;
      if (q) {
        const spotMatch = card.famousSpots.some(
          (s) => s.name.toLowerCase().includes(q) || s.addressHint.toLowerCase().includes(q),
        );
        return (
          card.title.toLowerCase().includes(q) ||
          card.flavorProfile.toLowerCase().includes(q) ||
          card.cuisineStyle.toLowerCase().includes(q) ||
          card.mainIngredients.toLowerCase().includes(q) ||
          spotMatch
        );
      }
      return true;
    });
  }, [allCityCards, activeCategories, searchQuery]);

  const activeCardEntry = useMemo(() => {
    if (selectedCardId) {
      const found = allCityCards.find((item) => item.card.id === selectedCardId);
      if (found) return found;
    }
    return visibleCards[0] ?? allCityCards[0] ?? null;
  }, [selectedCardId, allCityCards, visibleCards]);

  // Sync when city or initialCardId changes
  useEffect(() => {
    if (initialCategory && initialCategory !== "all") {
      setActiveCategories([initialCategory]);
    } else {
      setActiveCategories(["dacai", "xiaochi", "zhushi", "fengwu", "shijie"]);
    }
    const targetCard = initialCardId
      ? allCityCards.find((c) => c.card.id === initialCardId)?.card
      : allCityCards[0]?.card;
    if (targetCard) {
      setSelectedCardId(targetCard.id);
      setCameraCenter(targetCard.coord);
      setCameraZoom(initialCardId ? 13 : Math.max(11, city.defaultZoom + 1));
    } else {
      setCameraCenter(city.center);
      setCameraZoom(Math.max(11, city.defaultZoom + 1));
    }
  }, [city.id, initialCategory, initialCardId, allCityCards, city.center, city.defaultZoom]);

  // Measure stage container
  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const measure = () => {
      const rect = node.getBoundingClientRect();
      if (rect.width > 80 && rect.height > 80) {
        setStageSize({ w: Math.round(rect.width), h: Math.round(rect.height) });
      }
    };
    measure();
    const obs = new ResizeObserver(measure);
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Initialize MapLibre GL instance
  useEffect(() => {
    const container = mlContainerRef.current;
    if (!container) return;
    let map: MlMap | null = null;
    try {
      map = new maplibregl.Map({
        container,
        style: {
          version: 8,
          sources: {
            street: {
              type: "raster",
              tiles: [assetUrl("tiles-cache/street/{z}/{y}/{x}.jpg")],
              tileSize: 256,
            },
            topo: {
              type: "raster",
              tiles: [assetUrl("tiles-cache/topo/{z}/{y}/{x}.jpg")],
              tileSize: 256,
            },
            satellite: {
              type: "raster",
              tiles: [assetUrl("tiles-cache/satellite/{z}/{y}/{x}.jpg")],
              tileSize: 256,
            },
          },
          layers: [
            {
              id: "bg",
              type: "background",
              paint: { "background-color": "#FAF6F0" },
            },
            {
              id: "layer-topo",
              type: "raster",
              source: "topo",
              layout: { visibility: "none" },
            },
            {
              id: "layer-satellite",
              type: "raster",
              source: "satellite",
              layout: { visibility: "none" },
            },
            {
              id: "layer-street",
              type: "raster",
              source: "street",
              layout: { visibility: "visible" },
            },
          ],
        },
        center: cameraCenter,
        zoom: cameraZoom,
        pitch: 28,
        bearing: 0,
        minZoom: 3.5,
        maxZoom: 16.5,
        attributionControl: false,
      });

      map.on("load", () => {
        setWebglReady(true);
      });

      map.on("move", () => {
        if (!map) return;
        const c = map.getCenter();
        setCameraCenter([c.lng, c.lat]);
        setCameraZoom(map.getZoom());
      });

      mapRef.current = map;
    } catch {
      setWebglReady(false);
    }

    return () => {
      if (map) {
        map.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Sync basemap layer visibility in MapLibre
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !webglReady) return;
    try {
      (["street", "topo", "satellite"] as FoodBasemapMode[]).forEach((mode) => {
        const lid = `layer-${mode}`;
        if (map.getLayer(lid)) {
          map.setLayoutProperty(lid, "visibility", basemap === mode ? "visible" : "none");
        }
      });
    } catch {
      // ignore if style not ready
    }
  }, [basemap, webglReady]);

  function flyToDish(card: DishCard) {
    setSelectedCardId(card.id);
    setCameraCenter(card.coord);
    setCameraZoom(13.5);
    if (mapRef.current && webglReady) {
      try {
        mapRef.current.flyTo({
          center: card.coord,
          zoom: 13.5,
          pitch: 34,
          duration: 750,
          essential: true,
        });
      } catch {
        // fallback handled by state
      }
    }
  }

  function resetCityCamera() {
    setCameraCenter(city.center);
    const z = Math.max(11, city.defaultZoom + 1);
    setCameraZoom(z);
    if (mapRef.current && webglReady) {
      try {
        mapRef.current.flyTo({
          center: city.center,
          zoom: z,
          pitch: 24,
          bearing: 0,
          duration: 700,
          essential: true,
        });
      } catch {
        // ignore
      }
    }
  }

  function toggleCategoryFilter(cat: FoodCategoryId) {
    setActiveCategories((prev) => {
      if (prev.includes(cat)) {
        if (prev.length === 1) return ["dacai", "xiaochi", "zhushi", "fengwu", "shijie"];
        return prev.filter((c) => c !== cat);
      }
      return [...prev, cat];
    });
  }

  // Slippy tile & coordinate projection for instant rendering and marker positioning
  const scene = useMemo(() => {
    const z = Math.max(4, Math.min(15, Math.round(cameraZoom)));
    const centerPx = worldPx(cameraCenter[0], cameraCenter[1], z);
    const originX = centerPx.x - stageSize.w / 2;
    const originY = centerPx.y - stageSize.h / 2;
    const x0 = Math.floor(originX / TILE);
    const y0 = Math.floor(originY / TILE);
    const x1 = Math.floor((originX + stageSize.w) / TILE);
    const y1 = Math.floor((originY + stageSize.h) / TILE);
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
    return { z, tiles, project };
  }, [cameraCenter, cameraZoom, stageSize]);

  const sameProvCities = useMemo(
    () => allCities.filter((c) => c.province === city.province),
    [allCities, city.province],
  );

  return (
    <div className="food-map-desk" data-testid="food-map-view">
      {/* 左侧寻味沙盘控制台 */}
      <aside className="food-map-console" aria-label={`${city.name}寻味地图控制台`}>
        <div className="fmc-top-nav">
          <button
            type="button"
            className="fmc-back-btn"
            data-testid="map-back-gazetteer"
            onClick={() => onBackToGazetteer(activeCardEntry?.card.category, activeCardEntry?.card.id)}
          >
            ← 返回《{city.name}》食单长卷
          </button>
          <button
            type="button"
            className="fmc-portal-btn"
            data-testid="map-back-portal"
            onClick={onBackToPortal}
          >
            🌏 全国地图
          </button>
        </div>

        <div className="fmc-city-header">
          <div className="fmc-seal-row">
            <span className="seal seal-sm">寻味</span>
            <div>
              <span className="fmc-kicker">
                {city.provinceLabel} · {city.cuisineTag}
              </span>
              <h2>{city.name}老字号与美食寻味沙盘</h2>
            </div>
          </div>
          <p className="fmc-dek">
            收录本城 {allCityCards.length} 道代表名馔、街头小吃、粉面碳水、地理标志风物与百年食街实测坐标。
          </p>
        </div>

        {/* 省内兄弟城市快捷切换 */}
        {sameProvCities.length > 1 && (
          <div className="fmc-sister-cities">
            <span className="fmc-sec-label">{city.provinceLabel}寻味名城切换：</span>
            <div className="fmc-sister-chips">
              {sameProvCities.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  className={`fmc-sister-chip${sc.id === city.id ? " on" : ""}`}
                  onClick={() => onSelectCity(sc.id)}
                >
                  {sc.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 五卷色彩图层开关 */}
        <div className="fmc-category-filters" role="group" aria-label="按美食卷目筛选坐标">
          <div className="fmc-sec-head">
            <span>五卷风味坐标图层（点击过滤）</span>
            <button
              type="button"
              className="fmc-show-all-btn"
              onClick={() =>
                setActiveCategories(["dacai", "xiaochi", "zhushi", "fengwu", "shijie"])
              }
            >
              全显
            </button>
          </div>
          <div className="fmc-cat-grid">
            {(Object.keys(FOOD_VOLUME_META) as FoodCategoryId[]).map((catId) => {
              const meta = FOOD_VOLUME_META[catId];
              const isOn = activeCategories.includes(catId);
              const count = allCityCards.filter((c) => c.card.category === catId).length;
              return (
                <button
                  key={catId}
                  type="button"
                  className={`fmc-cat-pill${isOn ? " on" : ""}`}
                  style={
                    isOn
                      ? {
                          borderColor: meta.badgeColor,
                          background: `${meta.badgeColor}18`,
                        }
                      : undefined
                  }
                  data-testid={`map-filter-${catId}`}
                  onClick={() => toggleCategoryFilter(catId)}
                >
                  <span className="fmc-cat-dot" style={{ background: meta.badgeColor }} />
                  <span>
                    {meta.icon} {meta.shortTitle} ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 搜索框 */}
        <div className="fmc-search-box">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 搜索本城菜名、老字号店名、街区..."
            data-testid="map-dish-search"
          />
          {searchQuery && (
            <button type="button" onClick={() => setSearchQuery("")}>
              ✕
            </button>
          )}
        </div>

        {/* 坐标列表 */}
        <div className="fmc-card-list" role="list" aria-label="本城美食坐标列表">
          {visibleCards.map(({ card }, idx) => {
            const meta = FOOD_VOLUME_META[card.category];
            const isSelected = activeCardEntry?.card.id === card.id;
            const isTasted = tastedDishSet.has(card.id);
            const firstSpot = card.famousSpots[0];
            return (
              <div
                key={card.id}
                role="listitem"
                className={`fmc-card-item${isSelected ? " active" : ""}${
                  isTasted ? " is-tasted" : ""
                }`}
                data-testid={`map-list-item-${card.id}`}
                onClick={() => flyToDish(card)}
              >
                <span
                  className="fmc-item-num"
                  style={{ background: isSelected ? meta.badgeColor : undefined }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="fmc-item-body">
                  <div className="fmc-item-title-row">
                    <strong>{card.title}</strong>
                    <span
                      className="fmc-item-cat-tag"
                      style={{ color: meta.badgeColor, borderColor: `${meta.badgeColor}55` }}
                    >
                      {meta.shortTitle}
                    </span>
                  </div>
                  <small className="fmc-item-flavor">{card.flavorProfile}</small>
                  {firstSpot && (
                    <small className="fmc-item-spot">
                      📍 {firstSpot.name}（{firstSpot.addressHint}）
                    </small>
                  )}
                </div>
                <button
                  type="button"
                  className={`fmc-item-checkin${isTasted ? " on" : ""}`}
                  title={isTasted ? "已打卡吃过" : "一键打卡吃过"}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTasted(dishCardToRecord(card, city));
                  }}
                >
                  {isTasted ? "✓" : "+"}
                </button>
              </div>
            );
          })}
        </div>
      </aside>

      {/* 右侧交互地图主舞台 */}
      <main className={`food-map-stage mode-${basemap}`} ref={stageRef}>
        {/* 顶部地图 HUD 工具条 */}
        <header className="food-map-hud">
          <div className="fmh-left">
            <span className="fmh-badge">WGS84 实测寻味坐标</span>
            <strong>
              {city.name} · 当前展示 {visibleCards.length} 处风味与老字号坐标
            </strong>
            <span className="fmh-coords">
              {cameraCenter[1].toFixed(3)}°N, {cameraCenter[0].toFixed(3)}°E · z{scene.z}
            </span>
          </div>
          <div className="fmh-controls">
            <div className="static-mode-pills">
              <button
                type="button"
                className={basemap === "street" ? "on" : ""}
                onClick={() => setBasemap("street")}
              >
                街区寻味图
              </button>
              <button
                type="button"
                className={basemap === "topo" ? "on" : ""}
                onClick={() => setBasemap("topo")}
              >
                山河水土图
              </button>
              <button
                type="button"
                className={basemap === "satellite" ? "on" : ""}
                onClick={() => setBasemap("satellite")}
              >
                高清卫星图
              </button>
            </div>
            <div className="static-zoom-btns">
              <button
                type="button"
                title="放大"
                onClick={() => {
                  const nextZ = Math.min(15, Math.round(cameraZoom + 1));
                  setCameraZoom(nextZ);
                  mapRef.current?.zoomTo(nextZ);
                }}
              >
                +
              </button>
              <span className="zoom-readout">z{scene.z}</span>
              <button
                type="button"
                title="缩小"
                onClick={() => {
                  const nextZ = Math.max(4, Math.round(cameraZoom - 1));
                  setCameraZoom(nextZ);
                  mapRef.current?.zoomTo(nextZ);
                }}
              >
                −
              </button>
            </div>
            <button type="button" className="fmh-reset-btn" onClick={resetCityCamera}>
              重置全城视野
            </button>
            <button
              type="button"
              className="fmh-passport-btn"
              onClick={onOpenPassport}
            >
              🛂 美食护照 ({tastedDishes.length}道 · {visitedProvinceSet.size}省)
            </button>
          </div>
        </header>

        {/* 底层高清缓存瓦片层（保障任何环境下0ms渲染底图） */}
        <div className="food-map-tiles-fallback" aria-hidden="true">
          {scene.tiles.map((tile) => (
            <img
              key={`fmap-${basemap}-${scene.z}-${tile.x}-${tile.y}`}
              className="static-tile"
              alt=""
              width={TILE}
              height={TILE}
              style={{ left: tile.left, top: tile.top }}
              src={TILE_URL[basemap](scene.z, tile.y, tile.x)}
              onError={(e) => {
                const target = e.currentTarget;
                const fb = DIRECT_FALLBACK_URL[basemap](scene.z, tile.y, tile.x);
                if (target.src !== fb) target.src = fb;
              }}
            />
          ))}
        </div>

        {/* MapLibre GL WebGL 容器 */}
        <div
          ref={mlContainerRef}
          className="food-maplibre-canvas"
          style={{ opacity: webglReady ? 1 : 0 }}
        />

        {/* 美食与老字号坐标交互图钉层（按卷目设色） */}
        <div className="food-map-pins-layer">
          {visibleCards.map(({ card }, idx) => {
            const pt = scene.project(card.coord[0], card.coord[1]);
            if (pt.x < -40 || pt.x > stageSize.w + 40 || pt.y < -40 || pt.y > stageSize.h + 40) {
              return null;
            }
            const meta = FOOD_VOLUME_META[card.category];
            const isSelected = activeCardEntry?.card.id === card.id;
            const isTasted = tastedDishSet.has(card.id);
            return (
              <button
                key={card.id}
                type="button"
                className={`food-map-pin${isSelected ? " active" : ""}${
                  isTasted ? " is-tasted" : ""
                }`}
                style={{
                  left: `${pt.x}px`,
                  top: `${pt.y}px`,
                  borderColor: meta.badgeColor,
                }}
                data-testid={`food-map-pin-${card.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  flyToDish(card);
                }}
              >
                <span
                  className="fmp-badge"
                  style={{ background: meta.badgeColor }}
                >
                  {isTasted ? "✓" : idx + 1}
                </span>
                <span className="fmp-label">{card.title}</span>
              </button>
            );
          })}
        </div>

        <SouthChinaSea visible={scene.z <= 6} />

        {/* 右下角：当前选中美食与老店详情交互弹窗 */}
        {activeCardEntry && (
          <aside
            className="food-map-popup-card"
            data-testid="food-map-popup"
            aria-label={`${activeCardEntry.card.title}寻味详情卡片`}
          >
            <div className="fmpp-media">
              <img
                src={assetUrl(
                  activeCardEntry.card.photoUrl ?? `/photos/${activeCardEntry.card.id}.jpg`,
                )}
                alt={activeCardEntry.card.title}
                onError={(e) => {
                  e.currentTarget.style.opacity = "0.25";
                }}
              />
              <span
                className="fmpp-vol-badge"
                style={{
                  background: FOOD_VOLUME_META[activeCardEntry.card.category].badgeColor,
                }}
              >
                {FOOD_VOLUME_META[activeCardEntry.card.category].icon}{" "}
                {activeCardEntry.volumeIndex} · {activeCardEntry.volumeTitle}
              </span>
              {activeCardEntry.card.heritageTag && (
                <span className="fmpp-heritage-badge">{activeCardEntry.card.heritageTag}</span>
              )}
            </div>

            <div className="fmpp-body">
              <div className="fmpp-head">
                <div>
                  <span className="fmpp-style">{activeCardEntry.card.cuisineStyle}</span>
                  <h3>{activeCardEntry.card.title}</h3>
                </div>
                <span className="fmpp-flavor-pill">{activeCardEntry.card.flavorProfile}</span>
              </div>

              <p className="fmpp-tagline">{activeCardEntry.card.tagline}</p>

              <div className="fmpp-spots-box">
                <span className="fmpp-spots-title">🏮 推荐寻味老字号与名店坐标：</span>
                <ul className="fmpp-spots-list">
                  {activeCardEntry.card.famousSpots.map((spot) => (
                    <li key={spot.name}>
                      <strong>{spot.name}</strong>
                      <span>{spot.addressHint}</span>
                      {spot.note && <em>{spot.note}</em>}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="fmpp-actions">
                <button
                  type="button"
                  className={`btn-checkin-tasted${
                    tastedDishSet.has(activeCardEntry.card.id) ? " on" : ""
                  }`}
                  data-testid={`map-popup-tasted-${activeCardEntry.card.id}`}
                  onClick={() => toggleTasted(dishCardToRecord(activeCardEntry.card, city))}
                >
                  {tastedDishSet.has(activeCardEntry.card.id) ? "✓ 已吃过打卡" : "🥢 吃过打卡"}
                </button>
                <button
                  type="button"
                  className={`btn-checkin-wish${
                    wishlistDishSet.has(activeCardEntry.card.id) ? " on" : ""
                  }`}
                  data-testid={`map-popup-wish-${activeCardEntry.card.id}`}
                  onClick={() => toggleWishlist(dishCardToRecord(activeCardEntry.card, city))}
                >
                  {wishlistDishSet.has(activeCardEntry.card.id) ? "★ 已在想吃清单" : "♡ 想吃种草"}
                </button>
                <button
                  type="button"
                  className="btn-read-card"
                  onClick={() =>
                    onBackToGazetteer(activeCardEntry.card.category, activeCardEntry.card.id)
                  }
                >
                  📖 阅读正文详述 →
                </button>
              </div>
            </div>
          </aside>
        )}
      </main>
    </div>
  );
}
