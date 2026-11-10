import { useEffect, useState } from "react";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type FoodCategoryId,
  type SpecialTopicId,
} from "../content/types";
import { useFoodFootprints } from "../lib/foodFootprints";
import { CityFoodOverview } from "./CityFoodOverview";
import { FoodSidebarIndex, type FoodFolio } from "./FoodSidebarIndex";
import { FoodVolumeEssay } from "./FoodVolumeEssay";
import { PhotoAuditModal } from "./PhotoAuditModal";

export interface CityFoodGazetteerProps {
  pack: CityFoodPack;
  allCities: CityFoodPack[];
  folio: FoodFolio;
  activeCardId: string | null;
  onSelectFolio: (folio: FoodFolio) => void;
  onSelectCard: (cardId: string | null) => void;
  onSelectCity: (cityId: string) => void;
  onOpenPortal: () => void;
  onOpenTopicsHub: (topicId?: SpecialTopicId) => void;
  onOpenFoodMap: (category?: FoodCategoryId, cardId?: string) => void;
  onOpenPassport: () => void;
  onOpenSearchModal: () => void;
}

export function CityFoodGazetteer({
  pack,
  allCities,
  folio,
  activeCardId,
  onSelectFolio,
  onSelectCard,
  onSelectCity,
  onOpenPortal,
  onOpenTopicsHub,
  onOpenFoodMap,
  onOpenPassport,
  onOpenSearchModal,
}: CityFoodGazetteerProps) {
  const {
    tastedDishes,
    visitedCitySet,
    visitedProvinceSet,
    toggleCityVisited,
  } = useFoodFootprints();

  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [pendingScrollCardId, setPendingScrollCardId] = useState<string | null>(null);

  const isCityVisited = visitedCitySet.has(pack.id);
  const activeVolume =
    folio === "overview"
      ? undefined
      : pack.volumes.find((v) => v.id === folio) ?? pack.volumes[0];

  useEffect(() => {
    if (activeVolume && !activeCardId && !pendingScrollCardId) {
      onSelectCard(activeVolume.cards[0]?.id ?? null);
    }
  }, [activeVolume?.id, pack.id]);

  useEffect(() => {
    if (!pendingScrollCardId) return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(`card-${pendingScrollCardId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setPendingScrollCardId(null);
    }, 80);
    return () => window.clearTimeout(timer);
  }, [folio, pendingScrollCardId]);

  function handleJumpToCard(category: FoodCategoryId, cardId: string) {
    onSelectCard(cardId);
    if (folio !== category) {
      onSelectFolio(category);
      setPendingScrollCardId(cardId);
    } else {
      const el = document.getElementById(`card-${cardId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="gazetteer city-food-gazetteer single-column-shell" data-testid="city-food-gazetteer">
      {/* 1. 顶部全局导航栏 */}
      <header className="clean-global-topbar">
        <div className="cgt-inner">
          <div className="cgt-left">
            <button
              type="button"
              className="cgt-home-btn"
              data-testid="back-china-portal"
              onClick={onOpenPortal}
              title="返回全国34省美食大地图"
            >
              <span className="seal seal-sm">食味</span>
              <span>🌏 全国美食地图</span>
            </button>

            <button
              type="button"
              className="cgt-topics-btn"
              data-testid="gazetteer-open-topics"
              onClick={() => onOpenTopicsHub()}
            >
              📚 七大中华美食专题馆
            </button>

            <span className="cgt-divider" aria-hidden="true">
              /
            </span>

            <div className="cgt-current-city">
              <span className="cgt-prov-badge">{pack.provinceLabel}</span>
              <span className="cgt-region-badge">{pack.cuisineTag}</span>
              <strong className="cgt-city-name">{pack.name}</strong>
              <button
                type="button"
                className={`cgt-visited-btn${isCityVisited ? " on" : ""}`}
                data-testid="topbar-toggle-visited"
                onClick={() => toggleCityVisited(pack.id)}
              >
                {isCityVisited ? "✓ 已寻味此城" : "✓ 本城寻味打卡"}
              </button>
            </div>

            <button
              type="button"
              className="cgt-switch-city-btn"
              data-testid="open-city-switcher"
              onClick={onOpenSearchModal}
            >
              🔍 切换城市 / 搜全国美食 ({allCities.length}城 · ⌘K) ▾
            </button>
          </div>

          <div className="cgt-right mast-tools">
            <button
              type="button"
              className="text-btn"
              data-testid="open-food-passport"
              onClick={onOpenPassport}
            >
              🛂 美食护照 ({tastedDishes.length}道 · {visitedProvinceSet.size}省)
            </button>
            <button
              type="button"
              className="text-btn"
              data-testid="open-photo-audit"
              onClick={() => setAuditModalOpen(true)}
            >
              🖼️ 美图巡检 ✓
            </button>
            <button
              type="button"
              className="text-btn map-entry"
              data-testid="open-food-map"
              onClick={() =>
                onOpenFoodMap(
                  folio === "overview" ? undefined : folio,
                  activeCardId ?? undefined,
                )
              }
            >
              🗺️ 全屏寻味地图 ↗
            </button>
          </div>
        </div>
      </header>

      {/* 2. 城市饮食题头横幅 */}
      <div className="clean-city-banner mast food-city-banner">
        <div className="ccb-main">
          <p className="brand-kicker">
            {pack.provinceLabel} · {pack.cuisineTag} · 主导味型：{pack.dominantFlavor} · 碳水谱系：
            {pack.stapleType}
          </p>
          <h1>{pack.heroHeadline}</h1>
          <p className="mast-line">{pack.heroDek}</p>
        </div>
      </div>

      {/* 3. 单行粘性五卷食单切换条 */}
      <nav
        className="volume-pills clean-volume-ribbon"
        aria-label="城市风味总览与五卷食单切换"
      >
        <button
          type="button"
          className={`pill-overview-btn${folio === "overview" ? " on" : ""}`}
          data-testid="pill-overview"
          onClick={() => {
            onSelectFolio("overview");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ★ 城市风味总览
        </button>
        <span className="ribbon-sep" aria-hidden="true" />
        {pack.volumes.map((volume) => {
          const meta = FOOD_VOLUME_META[volume.id];
          const isOn = folio === volume.id;
          return (
            <button
              key={volume.id}
              type="button"
              className={isOn ? "on" : ""}
              data-testid={`pill-${volume.id}`}
              onClick={() => {
                onSelectFolio(volume.id);
                onSelectCard(volume.cards[0]?.id ?? null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {meta.icon} {volume.index} · {volume.title} ({volume.cards.length})
            </button>
          );
        })}
        <span className="ribbon-sep" aria-hidden="true" />
        <button
          type="button"
          className="pill-map-btn"
          data-testid="pill-open-map"
          onClick={() =>
            onOpenFoodMap(
              folio === "overview" ? undefined : folio,
              activeCardId ?? undefined,
            )
          }
        >
          📍 老字号地图沙盘 ↗
        </button>
      </nav>

      {/* 4. 左侧常驻食单索引 + 右侧纯单列宽幅阅读流 */}
      <div className="workspace workspace-with-sidebar">
        <FoodSidebarIndex
          pack={pack}
          allCities={allCities}
          folio={folio}
          activeVolume={activeVolume}
          activeCardId={activeCardId}
          onSelectFolio={(nextFolio) => {
            onSelectFolio(nextFolio);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onSelectCard={handleJumpToCard}
          onSelectCity={(cid) => {
            onSelectCity(cid);
            onSelectFolio("overview");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onOpenCitySwitcher={onOpenSearchModal}
        />

        <main className="reading" id="reading">
          {folio === "overview" && (
            <CityFoodOverview
              pack={pack}
              allCities={allCities}
              onSelectVolume={(cat) => {
                onSelectFolio(cat);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onSelectCard={handleJumpToCard}
              onSelectCity={(cid) => {
                onSelectCity(cid);
                onSelectFolio("overview");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onOpenFoodMap={onOpenFoodMap}
            />
          )}

          {activeVolume && (
            <FoodVolumeEssay
              pack={pack}
              volume={activeVolume}
              activeCardId={activeCardId}
              onSelectCard={(cid) => onSelectCard(cid)}
              onOpenFoodMap={onOpenFoodMap}
            />
          )}
        </main>
      </div>

      {/* 美食图片语义与分辨率巡检弹窗 */}
      <PhotoAuditModal
        open={auditModalOpen}
        pack={pack}
        onClose={() => setAuditModalOpen(false)}
        onJumpToCard={handleJumpToCard}
      />
    </div>
  );
}
