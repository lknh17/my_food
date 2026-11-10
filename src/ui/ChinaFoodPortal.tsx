import { useEffect, useMemo, useRef, useState } from "react";
import {
  ADCODE_TO_PROVINCE,
  EIGHT_CUISINES_META,
  FLAVOR_BAND_META,
  PROVINCE_LABELS,
  PROVINCE_TABS,
  PROVINCE_VIEWPORTS,
  STAPLE_BAND_META,
  getCityThematicStyle,
} from "../content/provincesMeta";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type EightCuisineId,
  type FoodCategoryId,
  type PortalThematicMode,
  type ProvinceId,
  type SpecialTopicId,
  type SpecialTopicPack,
  type StapleType,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { dishCardToRecord, useFoodFootprints } from "../lib/foodFootprints";
import { SouthChinaSea } from "../map/Inset";

const TILE = 256;

type VisualMode = "topo" | "street" | "satellite";

const TILE_URL: Record<VisualMode, (z: number, y: number, x: number) => string> = {
  topo: (z, y, x) => assetUrl(`tiles-cache/topo/${z}/${y}/${x}.jpg`),
  street: (z, y, x) => assetUrl(`tiles-cache/street/${z}/${y}/${x}.jpg`),
  satellite: (z, y, x) => assetUrl(`tiles-cache/satellite/${z}/${y}/${x}.jpg`),
};

const DIRECT_FALLBACK_URL: Record<VisualMode, (z: number, y: number, x: number) => string> = {
  topo: (z, y, x) =>
    `https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}`,
  street: (z, y, x) =>
    `https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${x}&y=${y}&z=${z}`,
  satellite: (z, y, x) => `https://webst02.is.autonavi.com/appmaptile?style=6&x=${x}&y=${y}&z=${z}`,
};

interface ChinaProvFeature {
  properties?: {
    name?: string;
    adcode?: number | string;
    center?: [number, number];
    centroid?: [number, number];
    adchar?: string;
  };
  geometry?: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
}

const SPECIAL_TOPIC_SHORTCUTS: {
  id: SpecialTopicId;
  icon: string;
  title: string;
  tag: string;
}[] = [
  { id: "eight-cuisines", icon: "🥢", title: "八大菜系全席", tag: "鲁川粤苏闽浙湘徽" },
  { id: "noodles-compendium", icon: "🍜", title: "中华面全集", tag: "北面南汤百味面" },
  { id: "rice-noodles-compendium", icon: "🥣", title: "中华粉全集", tag: "八桂云贵湘赣嗦粉" },
  { id: "hotpot-jianghu", icon: "🍲", title: "火锅江湖", tag: "牛油铜锅酸汤牛肉" },
  { id: "morning-feast", icon: "🥟", title: "碳水早点与早茶", tag: "一盅两件过早江湖" },
  { id: "bbq-nightmarket", icon: "🔥", title: "烧烤与夜市", tag: "红柳把把烧夜宵" },
  { id: "pastries-sweet-soups", icon: "🍡", title: "传统糕点与糖水", tag: "苏式茶点广式糖水" },
];

const THEMATIC_MODE_TABS: { id: PortalThematicMode; icon: string; label: string }[] = [
  { id: "cuisine", icon: "🏮", label: "八大菜系与地方风味圈" },
  { id: "flavor", icon: "🌶️", label: "全国咸甜麻辣味型带" },
  { id: "staple", icon: "🌾", label: "南粉北面碳水版图" },
  { id: "visited", icon: "🥢", label: "我的寻味打卡点亮图" },
];

function worldPx(lng: number, lat: number, zoom: number) {
  const scale = TILE * 2 ** zoom;
  const x = ((lng + 180) / 360) * scale;
  const latRad = (lat * Math.PI) / 180;
  const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * scale;
  return { x, y, scale };
}

function projectRing(
  ring: number[][],
  project: (lng: number, lat: number) => { x: number; y: number },
): string {
  if (!ring || ring.length < 3) return "";
  const stride = ring.length > 220 ? Math.ceil(ring.length / 220) : 1;
  const parts: string[] = [];
  for (let i = 0; i < ring.length; i += stride) {
    const pt = project(ring[i][0], ring[i][1]);
    parts.push(`${parts.length === 0 ? "M" : "L"}${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`);
  }
  parts.push("Z");
  return parts.join(" ");
}

export interface ChinaFoodPortalProps {
  cities: CityFoodPack[];
  topics?: SpecialTopicPack[];
  selectedCityId: string;
  onSelectCity: (cityId: string) => void;
  onEnterGazetteer: (cityId: string, category?: FoodCategoryId, cardId?: string) => void;
  onOpenTopicsHub: (topicId?: SpecialTopicId) => void;
  onOpenFoodMap: (cityId: string, category?: FoodCategoryId, cardId?: string) => void;
  onOpenPassport: () => void;
  onOpenSearchModal: () => void;
}

export function ChinaFoodPortal({
  cities,
  topics = [],
  selectedCityId,
  onSelectCity,
  onEnterGazetteer,
  onOpenTopicsHub,
  onOpenFoodMap,
  onOpenPassport,
  onOpenSearchModal,
}: ChinaFoodPortalProps) {
  const mapStageRef = useRef<HTMLDivElement>(null);
  const [provinceFilter, setProvinceFilter] = useState<ProvinceId | "all">("all");
  const [macroRegionFilter, setMacroRegionFilter] = useState<string>("全部");
  const [search, setSearch] = useState("");
  const [visualMode, setVisualMode] = useState<VisualMode>("topo");
  const [thematicMode, setThematicMode] = useState<PortalThematicMode>("cuisine");
  const [thematicGroupFilter, setThematicGroupFilter] = useState<string | null>(null);
  const [visitedListFilter, setVisitedListFilter] = useState<"all" | "visited" | "unvisited">("all");
  const [mapCenter, setMapCenter] = useState<[number, number]>(PROVINCE_VIEWPORTS.all.center);
  const [mapZoom, setMapZoom] = useState<number>(PROVINCE_VIEWPORTS.all.zoom);
  const [stageSize, setStageSize] = useState({ w: 1060, h: 780 });
  const [chinaFeats, setChinaFeats] = useState<ChinaProvFeature[]>([]);
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number; center: [number, number] } | null>(null);

  const {
    tastedDishes,
    tastedDishSet,
    visitedCityIds,
    visitedCitySet,
    visitedProvinceSet,
    toggleTasted,
    toggleCityVisited,
  } = useFoodFootprints();

  const litProvinces = useMemo(() => {
    const set = new Set<ProvinceId>(visitedProvinceSet);
    for (const c of cities) {
      if (visitedCitySet.has(c.id)) set.add(c.province);
    }
    return set;
  }, [visitedProvinceSet, cities, visitedCitySet]);

  const activePack = useMemo(
    () => cities.find((c) => c.id === selectedCityId) ?? cities[0],
    [cities, selectedCityId],
  );

  const totalDishesCount = useMemo(
    () =>
      cities.reduce(
        (acc, c) => acc + c.volumes.reduce((vAcc, v) => vAcc + v.cards.length, 0),
        0,
      ),
    [cities],
  );

  // Load China 34 provinces GeoJSON
  useEffect(() => {
    let cancelled = false;
    fetch(assetUrl("data/china-100000-full.json"))
      .then((r) => r.json())
      .then((fc) => {
        if (cancelled) return;
        setChinaFeats(Array.isArray(fc?.features) ? fc.features : []);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  // Observe map stage container dimensions
  useEffect(() => {
    const node = mapStageRef.current;
    if (!node) return;
    const measure = () => {
      const rect = node.getBoundingClientRect();
      if (rect.width > 100 && rect.height > 100) {
        setStageSize({ w: Math.round(rect.width), h: Math.round(rect.height) });
      }
    };
    measure();
    const obs = new ResizeObserver(measure);
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  function selectProvinceOnMap(prov: ProvinceId | "all") {
    setProvinceFilter(prov);
    const vp = PROVINCE_VIEWPORTS[prov] ?? PROVINCE_VIEWPORTS.all;
    setMapCenter(vp.center);
    setMapZoom(vp.zoom);
    if (prov !== "all") {
      const firstCity = cities.find((c) => c.province === prov);
      if (firstCity) onSelectCity(firstCity.id);
    }
  }

  function focusCityOnMap(city: CityFoodPack) {
    onSelectCity(city.id);
    setMapCenter(city.center);
    setMapZoom(Math.max(mapZoom, 7));
  }

  // Compute thematic style per city and province
  const cityThematicMap = useMemo(() => {
    const map = new Map<string, { color: string; badge: string; groupKey: string }>();
    for (const c of cities) {
      map.set(c.id, getCityThematicStyle(c, thematicMode, visitedCitySet.has(c.id)));
    }
    return map;
  }, [cities, thematicMode, visitedCitySet]);

  const provColorMap = useMemo(() => {
    const map = new Map<ProvinceId, string>();
    for (const c of cities) {
      if (!map.has(c.province)) {
        const st = cityThematicMap.get(c.id);
        if (st) map.set(c.province, st.color);
      }
    }
    return map;
  }, [cities, cityThematicMap]);

  const visibleProvinceTabs = useMemo(() => {
    if (macroRegionFilter === "全部") return PROVINCE_TABS;
    return PROVINCE_TABS.filter(
      (p) => p.id === "all" || p.regionMacro === macroRegionFilter,
    );
  }, [macroRegionFilter]);

  const filteredCities = useMemo(() => {
    const q = search.trim().toLowerCase();
    return cities.filter((c) => {
      if (visitedListFilter === "visited" && !visitedCitySet.has(c.id)) return false;
      if (visitedListFilter === "unvisited" && visitedCitySet.has(c.id)) return false;
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
      if (thematicGroupFilter) {
        const st = cityThematicMap.get(c.id);
        if (!st || st.groupKey !== thematicGroupFilter) return false;
      }
      if (provinceFilter !== "all" && c.province !== provinceFilter) return false;
      return true;
    });
  }, [
    cities,
    search,
    visitedListFilter,
    visitedCitySet,
    thematicGroupFilter,
    cityThematicMap,
    provinceFilter,
  ]);

  // Project slippy tiles and 34 province boundaries
  const mapScene = useMemo(() => {
    const z = Math.max(4, Math.min(10, Math.round(mapZoom)));
    const centerPx = worldPx(mapCenter[0], mapCenter[1], z);
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

    const provPaths: {
      key: string;
      d: string;
      provId?: ProvinceId;
      isSelectedProv: boolean;
      name: string;
    }[] = [];
    const provLabels: {
      key: string;
      name: string;
      x: number;
      y: number;
      provId?: ProvinceId;
    }[] = [];

    chinaFeats.forEach((feat, fIdx) => {
      if (feat.properties?.adchar === "JD") return;
      const adcode = String(feat.properties?.adcode ?? "");
      const provId = ADCODE_TO_PROVINCE[adcode];
      const isSelectedProv = Boolean(provId && provinceFilter === provId);
      const name = feat.properties?.name ?? "";
      const geom = feat.geometry;
      if (!geom) return;
      if (geom.type === "Polygon") {
        const d = projectRing((geom.coordinates as number[][][])[0], project);
        if (d) provPaths.push({ key: `p-${fIdx}`, d, provId, isSelectedProv, name });
      } else if (geom.type === "MultiPolygon") {
        (geom.coordinates as number[][][][]).forEach((poly, pIdx) => {
          const d = projectRing(poly[0], project);
          if (d) provPaths.push({ key: `p-${fIdx}-${pIdx}`, d, provId, isSelectedProv, name });
        });
      }
      const cAt = feat.properties?.centroid ?? feat.properties?.center;
      if (cAt && name) {
        const pt = project(cAt[0], cAt[1]);
        if (pt.x > 40 && pt.x < stageSize.w - 40 && pt.y > 30 && pt.y < stageSize.h - 30) {
          provLabels.push({ key: `pl-${fIdx}`, name, x: pt.x, y: pt.y, provId });
        }
      }
    });

    return { z, tiles, project, provPaths, provLabels, scale: centerPx.scale };
  }, [mapCenter, mapZoom, stageSize, chinaFeats, provinceFilter]);

  if (!activePack) return null;

  const activeHeroCard = activePack.volumes[0]?.cards[0];
  const activeHeroPhoto =
    activeHeroCard?.photoUrl ?? `/photos/${activeHeroCard?.id ?? "cd-mapo-tofu"}.jpg`;
  const activeViewportMeta = PROVINCE_VIEWPORTS[provinceFilter] ?? PROVINCE_VIEWPORTS.all;

  return (
    <div className="china-food-portal" data-testid="china-food-portal">
      {/* 顶部全局朱砂宣纸品牌题头 + 七大中华美食专题直通车 */}
      <header className="cfp-top-masthead">
        <div className="cfp-mast-main">
          <div className="cfp-brand-group">
            <span className="seal">食味</span>
            <div className="cfp-brand-copy">
              <span className="cfp-kicker">
                CHINESE CULINARY ATLAS & ENCYCLOPEDIA · 丹砂宣纸 · 烟火食单
              </span>
              <h1>
                食味 · 中华风味图志
                <small>一座城为什么是这种味道</small>
              </h1>
              <p>
                覆盖全国 <strong>34</strong> 省级行政区 · <strong>{cities.length}</strong> 座核心美食名城 ·{" "}
                <strong>{totalDishesCount}</strong> 道镇桌大菜与市井小吃 · <strong>7</strong> 大中华美食专题
              </p>
            </div>
          </div>

          <div className="cfp-mast-actions">
            <button
              type="button"
              className="cfp-action-btn btn-topics-hub"
              data-testid="portal-open-topics-hub"
              onClick={() => onOpenTopicsHub()}
            >
              📚 七大中华美食专题馆 ({topics.length || 7})
            </button>
            <button
              type="button"
              className="cfp-action-btn btn-passport"
              data-testid="portal-open-passport"
              onClick={onOpenPassport}
            >
              🛂 我的美食护照 (已尝 {tastedDishes.length} 道 · 点亮 {litProvinces.size} 省)
            </button>
            <button
              type="button"
              className="cfp-action-btn btn-search-cmd"
              data-testid="portal-open-search"
              onClick={onOpenSearchModal}
            >
              🔍 搜全国美食/城市 (⌘K)
            </button>
          </div>
        </div>

        {/* 七大中华美食专题横向长卷快捷栏 */}
        <nav className="cfp-topics-showcase-bar" aria-label="七大中华美食专题馆快捷入口">
          <span className="cfp-topics-bar-label">📜 七大中华美食专题卷：</span>
          <div className="cfp-topics-bar-chips">
            {SPECIAL_TOPIC_SHORTCUTS.map((tp) => (
              <button
                key={tp.id}
                type="button"
                className="cfp-topic-shortcut-chip"
                data-testid={`portal-topic-chip-${tp.id}`}
                onClick={() => onOpenTopicsHub(tp.id)}
              >
                <span className="cfp-topic-icon">{tp.icon}</span>
                <strong>{tp.title}</strong>
                <small>{tp.tag}</small>
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* 主工作区：左侧 34 省与美食名城检索台 + 右侧全国风味大地图舞台 */}
      <div className="cfp-workspace">
        <aside className="cfp-sidebar" aria-label="全国34省与美食名城检索控制台">
          {/* 搜索框 */}
          <div className="cfp-search-box">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`🔍 搜索 34 省 · ${cities.length} 城 · 招牌大菜与小吃...`}
              data-testid="portal-city-search"
            />
            {search && (
              <button type="button" onClick={() => setSearch("")}>
                ✕
              </button>
            )}
          </div>

          {/* 34 省级行政区筛选矩阵 */}
          <div className="cfp-prov-section">
            <div className="cfp-sec-head">
              <span>一、按 34 省级行政区寻味（点击飞往该省）</span>
              {provinceFilter !== "all" && (
                <button type="button" onClick={() => selectProvinceOnMap("all")}>
                  🌏 返回全国全图
                </button>
              )}
            </div>

            {/* 六大地理饮食片区快筛 */}
            <div className="cfp-macro-region-tabs" role="tablist" aria-label="饮食大区快筛">
              {[
                "全部",
                "西南巴蜀云贵",
                "岭南闽琼港澳台",
                "江南淮扬徽浙",
                "湘赣荆楚",
                "齐鲁中原秦晋",
                "京津冀西北关东",
              ].map((macro) => (
                <button
                  key={macro}
                  type="button"
                  className={`cfp-macro-tab${macroRegionFilter === macro ? " on" : ""}`}
                  onClick={() => setMacroRegionFilter(macro)}
                >
                  {macro}
                </button>
              ))}
            </div>

            <div className="cfp-prov-pills" role="group" aria-label="省份筛选">
              {visibleProvinceTabs.map((prov) => {
                const isLit = prov.id !== "all" && litProvinces.has(prov.id);
                return (
                  <button
                    key={prov.id}
                    type="button"
                    className={`${provinceFilter === prov.id ? "on" : ""}${
                      isLit ? " is-lit-prov" : ""
                    }`}
                    data-testid={`province-${prov.id}`}
                    onClick={() => selectProvinceOnMap(prov.id)}
                  >
                    {isLit ? "✓ " : ""}
                    {prov.id === "all" ? "全国总览 (34省)" : prov.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 美食名城列表 */}
          <div className="cfp-city-list-wrap">
            <div className="cfp-sec-head">
              <span>
                二、美食名城名录（共 {filteredCities.length} 城 · 点击预览或进入食单）
              </span>
            </div>

            <div className="cfp-visited-filter-row" role="group" aria-label="寻味状态筛选">
              <button
                type="button"
                className={`cfp-vf-btn${visitedListFilter === "all" ? " on" : ""}`}
                onClick={() => setVisitedListFilter("all")}
              >
                全部 ({cities.length})
              </button>
              <button
                type="button"
                className={`cfp-vf-btn${visitedListFilter === "visited" ? " on" : ""}`}
                onClick={() => {
                  setVisitedListFilter("visited");
                  setThematicMode("visited");
                }}
              >
                🥢 已寻味 ({visitedCityIds.length})
              </button>
              <button
                type="button"
                className={`cfp-vf-btn${visitedListFilter === "unvisited" ? " on" : ""}`}
                onClick={() => {
                  setVisitedListFilter("unvisited");
                  setThematicMode("visited");
                }}
              >
                待寻味 ({Math.max(0, cities.length - visitedCityIds.length)})
              </button>
            </div>

            <div className="cfp-city-grid" role="navigation" aria-label="全国美食城市入口列表">
              {filteredCities.map((city) => {
                const isSelected = city.id === activePack.id;
                const isVisited = visitedCitySet.has(city.id);
                const tStyle = cityThematicMap.get(city.id);
                return (
                  <div
                    key={city.id}
                    className={`cfp-city-card-btn${isSelected ? " on" : ""}${
                      isVisited ? " is-visited-city" : ""
                    }`}
                    data-testid={`city-${city.id}`}
                    onMouseEnter={() => setHoveredCityId(city.id)}
                    onMouseLeave={() => setHoveredCityId(null)}
                    onClick={() => {
                      if (isSelected) {
                        onEnterGazetteer(city.id);
                      } else {
                        focusCityOnMap(city);
                      }
                    }}
                    onDoubleClick={() => onEnterGazetteer(city.id)}
                  >
                    <div className="cfp-city-btn-top">
                      <div className="cfp-city-name-wrap">
                        <strong>{city.name}</strong>
                        <span
                          className="cfp-city-cuisine-dot"
                          style={{ background: tStyle?.color ?? "#B91C1C" }}
                        />
                      </div>
                      <button
                        type="button"
                        className={`cfp-visited-toggle${isVisited ? " on" : ""}`}
                        data-testid={`toggle-visited-${city.id}`}
                        title={isVisited ? `已寻味${city.name}` : `点亮${city.name}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCityVisited(city.id);
                        }}
                      >
                        {isVisited ? "✓ 已尝" : "+ 打卡"}
                      </button>
                    </div>
                    <small className="cfp-city-meta">
                      {city.provinceLabel.slice(0, 2)} · {city.cuisineTag}
                    </small>
                    <small className="cfp-city-dishes">
                      {city.signatureDishes.slice(0, 3).join(" · ")}
                    </small>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* 右侧：全国 34 省风味交互大地图 + 城市必吃预览面板 */}
        <main
          className={`cfp-map-stage mode-${visualMode}${dragging ? " is-dragging" : ""}`}
          ref={mapStageRef}
          onMouseDown={(e) => {
            if ((e.target as HTMLElement).closest("button, aside, nav")) return;
            setDragging(true);
            dragStartRef.current = { x: e.clientX, y: e.clientY, center: mapCenter };
          }}
          onMouseMove={(e) => {
            if (!dragging || !dragStartRef.current) return;
            const dx = e.clientX - dragStartRef.current.x;
            const dy = e.clientY - dragStartRef.current.y;
            const degPerPx = 360 / mapScene.scale;
            setMapCenter([
              dragStartRef.current.center[0] - dx * degPerPx,
              Math.max(15, Math.min(50, dragStartRef.current.center[1] + dy * degPerPx * 0.88)),
            ]);
          }}
          onMouseUp={() => {
            setDragging(false);
            dragStartRef.current = null;
          }}
          onMouseLeave={() => {
            setDragging(false);
            dragStartRef.current = null;
          }}
        >
          {/* 顶部当前省域风土横幅与底图控制 */}
          <div className="cfp-map-topbar">
            <div className="cfp-map-banner">
              <span className="cfp-banner-tag">
                {provinceFilter === "all"
                  ? "🌏 中华三十四省风味全景"
                  : `📍 ${PROVINCE_LABELS[provinceFilter]} · ${activeViewportMeta.culinaryTitle}`}
              </span>
              <p>{activeViewportMeta.desc}</p>
            </div>

            <div className="cfp-map-controls">
              <div className="static-mode-pills">
                <button
                  type="button"
                  className={visualMode === "topo" ? "on" : ""}
                  onClick={() => setVisualMode("topo")}
                >
                  山河水土
                </button>
                <button
                  type="button"
                  className={visualMode === "street" ? "on" : ""}
                  onClick={() => setVisualMode("street")}
                >
                  政区街巷
                </button>
                <button
                  type="button"
                  className={visualMode === "satellite" ? "on" : ""}
                  onClick={() => setVisualMode("satellite")}
                >
                  卫星实景
                </button>
              </div>
              <div className="static-zoom-btns">
                <button
                  type="button"
                  title="放大"
                  onClick={() => setMapZoom((z) => Math.min(9, z + 1))}
                >
                  +
                </button>
                <span className="zoom-readout">z{mapScene.z}</span>
                <button
                  type="button"
                  title="缩小"
                  onClick={() => setMapZoom((z) => Math.max(4, z - 1))}
                >
                  −
                </button>
              </div>
              <button
                type="button"
                className="cfp-reset-btn"
                onClick={() => selectProvinceOnMap("all")}
              >
                重置全国视野
              </button>
            </div>
          </div>

          {/* 四大饮食地理专题设色工具条 */}
          <div className="cfp-thematic-toolbar" data-testid="portal-thematic-toolbar">
            <div className="cfp-thematic-modes" role="tablist" aria-label="图面饮食专题设色模式">
              <span className="cfp-toolbar-label">风味版图设色：</span>
              {THEMATIC_MODE_TABS.map((tm) => (
                <button
                  key={tm.id}
                  type="button"
                  role="tab"
                  aria-selected={thematicMode === tm.id}
                  className={`cfp-thematic-tab${thematicMode === tm.id ? " on" : ""}`}
                  data-testid={`thematic-mode-${tm.id}`}
                  onClick={() => {
                    setThematicMode(tm.id);
                    setThematicGroupFilter(null);
                  }}
                >
                  <span>{tm.icon}</span>
                  <span>{tm.label}</span>
                </button>
              ))}
            </div>

            {/* 专题设色图例与一键筛选条 */}
            <div className="cfp-thematic-legend-strip" data-testid="thematic-legend-strip">
              {thematicMode === "cuisine" &&
                (Object.keys(EIGHT_CUISINES_META) as EightCuisineId[]).map((cid) => {
                  const meta = EIGHT_CUISINES_META[cid];
                  const isOn = thematicGroupFilter === cid;
                  return (
                    <button
                      key={cid}
                      type="button"
                      className={`cfp-legend-pill${isOn ? " on" : ""}`}
                      style={
                        isOn
                          ? { borderColor: meta.color, background: `${meta.color}28` }
                          : undefined
                      }
                      data-testid={`legend-cuisine-${cid}`}
                      onClick={() =>
                        setThematicGroupFilter((prev) => (prev === cid ? null : cid))
                      }
                    >
                      <span className="cfp-legend-dot" style={{ background: meta.color }} />
                      <span>
                        {meta.code} · {meta.shortLabel}
                      </span>
                    </button>
                  );
                })}

              {thematicMode === "flavor" &&
                FLAVOR_BAND_META.map((fb) => {
                  const isOn = thematicGroupFilter === fb.id;
                  return (
                    <button
                      key={fb.id}
                      type="button"
                      className={`cfp-legend-pill${isOn ? " on" : ""}`}
                      style={
                        isOn ? { borderColor: fb.color, background: `${fb.color}28` } : undefined
                      }
                      data-testid={`legend-flavor-${fb.id}`}
                      onClick={() =>
                        setThematicGroupFilter((prev) => (prev === fb.id ? null : fb.id))
                      }
                    >
                      <span className="cfp-legend-dot" style={{ background: fb.color }} />
                      <span>{fb.label}</span>
                    </button>
                  );
                })}

              {thematicMode === "staple" &&
                (Object.keys(STAPLE_BAND_META) as StapleType[]).map((stKey) => {
                  const sb = STAPLE_BAND_META[stKey];
                  const isOn = thematicGroupFilter === sb.id;
                  return (
                    <button
                      key={sb.id}
                      type="button"
                      className={`cfp-legend-pill${isOn ? " on" : ""}`}
                      style={
                        isOn ? { borderColor: sb.color, background: `${sb.color}28` } : undefined
                      }
                      data-testid={`legend-staple-${sb.id}`}
                      onClick={() =>
                        setThematicGroupFilter((prev) => (prev === sb.id ? null : sb.id))
                      }
                    >
                      <span className="cfp-legend-dot" style={{ background: sb.color }} />
                      <span>{sb.label}</span>
                    </button>
                  );
                })}

              {thematicMode === "visited" && (
                <>
                  <button
                    type="button"
                    className={`cfp-legend-pill${
                      thematicGroupFilter === "visited-yes" ? " on" : ""
                    }`}
                    onClick={() =>
                      setThematicGroupFilter((prev) =>
                        prev === "visited-yes" ? null : "visited-yes",
                      )
                    }
                  >
                    <span className="cfp-legend-dot" style={{ background: "#B91C1C" }} />
                    <span>✓ 已寻味城市 ({visitedCityIds.length} 城 · 朱砂红点亮)</span>
                  </button>
                  <button
                    type="button"
                    className={`cfp-legend-pill${
                      thematicGroupFilter === "visited-no" ? " on" : ""
                    }`}
                    onClick={() =>
                      setThematicGroupFilter((prev) =>
                        prev === "visited-no" ? null : "visited-no",
                      )
                    }
                  >
                    <span className="cfp-legend-dot" style={{ background: "#78716C" }} />
                    <span>
                      待寻味城市 ({Math.max(0, cities.length - visitedCityIds.length)} 城)
                    </span>
                  </button>
                  <button
                    type="button"
                    className="cfp-legend-pill on"
                    onClick={onOpenPassport}
                  >
                    🛂 打开我的中华美食护照 ↗
                  </button>
                </>
              )}

              {thematicGroupFilter && (
                <button
                  type="button"
                  className="cfp-legend-pill on"
                  onClick={() => setThematicGroupFilter(null)}
                >
                  ✕ 显示全部 ({cities.length}城)
                </button>
              )}
            </div>
          </div>

          {/* 1. 本地缓存瓦片底层 */}
          {mapScene.tiles.map((tile) => (
            <img
              key={`cfp-${visualMode}-${mapScene.z}-${tile.x}-${tile.y}`}
              className="static-tile"
              alt=""
              width={TILE}
              height={TILE}
              decoding="async"
              style={{ left: tile.left, top: tile.top }}
              src={TILE_URL[visualMode](mapScene.z, tile.y, tile.x)}
              onError={(e) => {
                const target = e.currentTarget;
                const fb = DIRECT_FALLBACK_URL[visualMode](mapScene.z, tile.y, tile.x);
                if (target.src !== fb) target.src = fb;
              }}
            />
          ))}

          {/* 2. 全国 34 省级行政区 WGS84 矢量边界与专题设色层 */}
          <svg
            className="cfp-map-svg"
            viewBox={`0 0 ${stageSize.w} ${stageSize.h}`}
            aria-label="全国34省美食版图与城市分布图"
          >
            {mapScene.provPaths.map((pp) => {
              const isLit = Boolean(pp.provId && litProvinces.has(pp.provId));
              const pColor = pp.provId ? provColorMap.get(pp.provId) : undefined;
              const fillStyle = pp.isSelectedProv
                ? "rgba(185, 28, 28, 0.28)"
                : thematicMode === "visited"
                  ? isLit
                    ? "rgba(185, 28, 28, 0.24)"
                    : "rgba(28, 25, 23, 0.08)"
                  : pColor
                    ? `${pColor}22`
                    : "rgba(180, 83, 9, 0.12)";
              const strokeStyle = pp.isSelectedProv
                ? "#B91C1C"
                : thematicMode === "visited" && isLit
                  ? "#B91C1C"
                  : pColor ?? "#78716C";

              return (
                <path
                  key={pp.key}
                  d={pp.d}
                  fill={fillStyle}
                  stroke={strokeStyle}
                  strokeWidth={pp.isSelectedProv ? 2.2 : 1.1}
                  className={`cfp-prov-path${pp.isSelectedProv ? " selected" : ""}`}
                  onClick={() => {
                    if (pp.provId) selectProvinceOnMap(pp.provId);
                  }}
                />
              );
            })}

            {mapScene.provLabels.map((pl) => (
              <text
                key={pl.key}
                x={pl.x}
                y={pl.y}
                textAnchor="middle"
                className="cfp-prov-label"
              >
                {pl.name}
              </text>
            ))}
          </svg>

          {/* 3. 全国核心美食名城交互坐标点图层 */}
          <div className="cfp-pins-layer">
            {cities.map((city) => {
              const pt = mapScene.project(city.center[0], city.center[1]);
              if (
                pt.x < -30 ||
                pt.x > stageSize.w + 30 ||
                pt.y < -30 ||
                pt.y > stageSize.h + 30
              ) {
                return null;
              }
              const tStyle = cityThematicMap.get(city.id);
              if (thematicGroupFilter && tStyle && tStyle.groupKey !== thematicGroupFilter) {
                return null;
              }
              if (provinceFilter !== "all" && city.province !== provinceFilter) {
                // Keep non-selected province pins subtle unless filtered
              }
              const isSelected = city.id === activePack.id;
              const isHovered = city.id === hoveredCityId;
              const isCityVisited = visitedCitySet.has(city.id);

              return (
                <button
                  key={city.id}
                  type="button"
                  className={`cfp-city-pin${isSelected ? " active" : ""}${
                    isHovered ? " hovered" : ""
                  }${isCityVisited ? " is-visited" : ""}`}
                  style={{
                    left: `${pt.x}px`,
                    top: `${pt.y}px`,
                    borderColor: isSelected ? "#B91C1C" : tStyle?.color ?? "#B45309",
                  }}
                  data-testid={`map-pin-${city.id}`}
                  title={`${city.provinceLabel} · ${city.name}（${city.signatureDishes
                    .slice(0, 3)
                    .join("、")}）`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (thematicMode === "visited") {
                      toggleCityVisited(city.id);
                      onSelectCity(city.id);
                    } else if (isSelected) {
                      onEnterGazetteer(city.id);
                    } else {
                      focusCityOnMap(city);
                    }
                  }}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    onEnterGazetteer(city.id);
                  }}
                >
                  <span
                    className="cfp-pin-dot"
                    style={{ background: isSelected ? "#B91C1C" : tStyle?.color ?? "#B45309" }}
                  />
                  <span className="cfp-pin-name">
                    {city.name}
                    {tStyle?.badge ? <em> · {tStyle.badge}</em> : null}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 南海诸岛插图 */}
          <SouthChinaSea visible={mapScene.z <= 6} />

          {/* 4. 右下角：当前选中美食名城深度预览与必吃榜浮窗 */}
          <aside className="cfp-city-preview-card" data-testid="portal-city-preview">
            <div className="cfp-preview-media">
              <img
                src={assetUrl(activeHeroPhoto)}
                alt={activePack.name}
                onError={(e) => {
                  e.currentTarget.style.opacity = "0.25";
                }}
              />
              <div className="cfp-preview-badges">
                <span className="cfp-badge-prov">
                  {activePack.provinceLabel} · {activePack.cuisineTag}
                </span>
                <span className="cfp-badge-staple">{activePack.stapleType}</span>
              </div>
            </div>

            <div className="cfp-preview-body">
              <div className="cfp-preview-title-row">
                <div>
                  <span className="cfp-preview-flavor">{activePack.dominantFlavor}</span>
                  <h2>{activePack.name} · 寻味食单预览</h2>
                </div>
                <button
                  type="button"
                  className={`cfp-preview-visited-btn${
                    visitedCitySet.has(activePack.id) ? " on" : ""
                  }`}
                  data-testid="preview-toggle-visited"
                  onClick={() => toggleCityVisited(activePack.id)}
                >
                  {visitedCitySet.has(activePack.id) ? "✓ 已寻味此城" : "+ 点亮此城"}
                </button>
              </div>

              <p className="cfp-preview-dek">{activePack.heroDek}</p>

              {/* 本城代表名馔一键打卡体验 */}
              <div className="cfp-preview-dishes" data-testid="portal-preview-dishes">
                <span className="cfp-preview-sec-title">
                  🥢 本城必吃名馔（点击「吃过」一键收入美食护照，双击直达词条）：
                </span>
                <div className="cfp-preview-dish-chips">
                  {activePack.volumes
                    .flatMap((v) => v.cards)
                    .slice(0, 6)
                    .map((card) => {
                      const isTasted = tastedDishSet.has(card.id);
                      const vMeta = FOOD_VOLUME_META[card.category];
                      return (
                        <div
                          key={card.id}
                          className={`cfp-dish-chip${isTasted ? " on" : ""}`}
                        >
                          <button
                            type="button"
                            className="cfp-dish-chip-main"
                            onClick={() =>
                              onEnterGazetteer(activePack.id, card.category, card.id)
                            }
                          >
                            <span
                              className="cfp-dish-cat-dot"
                              style={{ background: vMeta.badgeColor }}
                            />
                            <span>{card.title}</span>
                          </button>
                          <button
                            type="button"
                            className={`cfp-dish-chip-check${isTasted ? " on" : ""}`}
                            data-testid={`preview-checkin-${card.id}`}
                            title={isTasted ? "已吃过（点击取消）" : "标记吃过"}
                            onClick={() => toggleTasted(dishCardToRecord(card, activePack))}
                          >
                            {isTasted ? "✓ 吃过" : "+ 吃过"}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="cfp-preview-actions">
                <button
                  type="button"
                  className="btn-enter-gazetteer"
                  data-testid="enter-city-gazetteer"
                  onClick={() => onEnterGazetteer(activePack.id)}
                >
                  📖 进入《{activePack.name}》五卷风味食单 →
                </button>
                <button
                  type="button"
                  className="btn-enter-foodmap"
                  data-testid="enter-city-foodmap"
                  onClick={() => onOpenFoodMap(activePack.id)}
                >
                  📍 老字号寻味地图 ↗
                </button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
