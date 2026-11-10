import { useMemo, useState } from "react";
import { PROVINCE_TABS } from "../content/provincesMeta";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type DishCard,
  type FoodCategoryId,
  type ProvinceId,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { dishCardToRecord, useFoodFootprints } from "../lib/foodFootprints";

export interface CitySwitcherModalProps {
  open: boolean;
  cities: CityFoodPack[];
  currentCity?: CityFoodPack;
  onSelectCity: (cityId: string) => void;
  onSelectDish?: (cityId: string, category: FoodCategoryId, cardId: string) => void;
  onOpenChinaPortal: () => void;
  onClose: () => void;
}

const HOT_FOOD_KEYWORDS = [
  "火锅",
  "烤鸭",
  "牛肉面",
  "螺蛳粉",
  "早茶",
  "小笼包",
  "肉夹馍",
  "烧烤",
  "臭鳜鱼",
  "过桥米线",
  "佛跳墙",
  "热干面",
  "锅包肉",
  "手抓羊肉",
];

interface DishSearchHit {
  city: CityFoodPack;
  volumeIndex: string;
  volumeTitle: string;
  card: DishCard;
}

export function CitySwitcherModal({
  open,
  cities,
  currentCity,
  onSelectCity,
  onSelectDish,
  onOpenChinaPortal,
  onClose,
}: CitySwitcherModalProps) {
  const [search, setSearch] = useState("");
  const [provinceFilter, setProvinceFilter] = useState<ProvinceId | "all">(
    currentCity?.province ?? "all",
  );
  const { tastedDishSet, visitedCitySet, toggleTasted, toggleCityVisited } =
    useFoodFootprints();

  const totalDishCount = useMemo(
    () =>
      cities.reduce(
        (acc, c) => acc + c.volumes.reduce((vAcc, v) => vAcc + v.cards.length, 0),
        0,
      ),
    [cities],
  );

  const visibleCities = useMemo(() => {
    const q = search.trim().toLowerCase();
    return cities.filter((c) => {
      if (q) {
        const sigMatch = c.signatureDishes.some((d) => d.toLowerCase().includes(q));
        return (
          c.name.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q) ||
          c.provinceLabel.toLowerCase().includes(q) ||
          c.cuisineTag.toLowerCase().includes(q) ||
          c.dominantFlavor.toLowerCase().includes(q) ||
          sigMatch
        );
      }
      if (provinceFilter !== "all" && c.province !== provinceFilter) return false;
      return true;
    });
  }, [cities, search, provinceFilter]);

  const dishHits = useMemo<DishSearchHit[]>(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [];
    const hits: DishSearchHit[] = [];
    for (const city of cities) {
      for (const vol of city.volumes) {
        for (const card of vol.cards) {
          const spotMatch = card.famousSpots.some((s) =>
            s.name.toLowerCase().includes(q),
          );
          if (
            card.title.toLowerCase().includes(q) ||
            card.cuisineStyle.toLowerCase().includes(q) ||
            card.flavorProfile.toLowerCase().includes(q) ||
            card.mainIngredients.toLowerCase().includes(q) ||
            card.tagline.toLowerCase().includes(q) ||
            spotMatch
          ) {
            hits.push({
              city,
              volumeIndex: vol.index,
              volumeTitle: vol.title,
              card,
            });
            if (hits.length >= 42) return hits;
          }
        }
      }
    }
    return hits;
  }, [cities, search]);

  if (!open) return null;

  return (
    <div
      className="photo-lightbox city-switcher-modal"
      role="dialog"
      aria-modal="true"
      aria-label="全国34省美食名城与名馔检索指挥台"
      data-testid="city-switcher-modal"
      onClick={onClose}
    >
      <div
        className="photo-lightbox-panel city-switcher-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="csm-header">
          <div>
            <span className="csm-kicker">
              NATIONAL CULINARY COMMAND PALETTE · 全国 34 省 · {cities.length} 城 ·{" "}
              {totalDishCount} 道美食秒级检索 (⌘K)
            </span>
            <h3>搜索全国任意美食城市、镇桌大菜、街头小吃、粉面或百年老字号</h3>
          </div>
          <div className="csm-header-actions">
            <button
              type="button"
              className="btn-primary"
              data-testid="modal-goto-china-portal"
              onClick={() => {
                onClose();
                onOpenChinaPortal();
              }}
            >
              🌏 打开全国 34 省美食大地图 →
            </button>
            <button type="button" className="btn-close-modal" onClick={onClose}>
              关闭 ✕
            </button>
          </div>
        </header>

        <div className="csm-search-bar">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 输入菜名、小吃、食材、老字号或城市名（如：麻婆豆腐、螺蛳粉、烤鸭、牛肉面、成都...）"
            data-testid="city-search-input"
            autoFocus
          />
          {search && (
            <button
              type="button"
              className="csm-clear-btn"
              onClick={() => setSearch("")}
            >
              清除
            </button>
          )}
        </div>

        {/* 热门美食词条一键检索 */}
        <div className="csm-hot-keywords" role="group" aria-label="热门美食词条">
          <span className="csm-hot-label">🔥 寻味热词：</span>
          {HOT_FOOD_KEYWORDS.map((kw) => (
            <button
              key={kw}
              type="button"
              className={`csm-hot-chip${search === kw ? " on" : ""}`}
              data-testid={`hot-kw-${kw}`}
              onClick={() => setSearch(search === kw ? "" : kw)}
            >
              {kw}
            </button>
          ))}
        </div>

        {!search && (
          <div
            className="filter-row province-filter-row"
            role="group"
            aria-label="按34省级行政区筛选"
          >
            {PROVINCE_TABS.map((prov) => (
              <button
                key={prov.id}
                type="button"
                className={provinceFilter === prov.id ? "on" : ""}
                data-testid={`modal-province-${prov.id}`}
                onClick={() => setProvinceFilter(prov.id)}
              >
                {prov.label}
              </button>
            ))}
          </div>
        )}

        {/* 跨城美食词条匹配结果 */}
        {search && dishHits.length > 0 && (
          <section className="csm-landmark-results" data-testid="dish-search-results">
            <div className="csm-sec-title">
              <strong>
                🥢 跨城美食与老字号词条匹配（找到 {dishHits.length} 道风味，点击直达对应城市食单）
              </strong>
            </div>
            <div className="csm-landmark-grid">
              {dishHits.map(({ city, volumeIndex, volumeTitle, card }) => {
                const isTasted = tastedDishSet.has(card.id);
                const catMeta = FOOD_VOLUME_META[card.category];
                return (
                  <div
                    key={`${city.id}-${card.id}`}
                    role="button"
                    tabIndex={0}
                    className={`csm-landmark-card${isTasted ? " is-checked-spot" : ""}`}
                    data-testid={`dish-hit-${card.id}`}
                    onClick={() => {
                      if (onSelectDish) {
                        onSelectDish(city.id, card.category, card.id);
                      } else {
                        onSelectCity(city.id);
                      }
                      onClose();
                    }}
                  >
                    <img
                      src={assetUrl(card.photoUrl ?? `/photos/${card.id}.jpg`)}
                      alt={card.title}
                      loading="lazy"
                      className="csm-landmark-thumb"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0.25";
                      }}
                    />
                    <div className="csm-landmark-body">
                      <div className="csm-landmark-meta">
                        <span className="csm-lm-city">
                          {city.provinceLabel.slice(0, 2)} · {city.name}
                        </span>
                        <span
                          className="csm-lm-vol"
                          style={{ color: catMeta.badgeColor }}
                        >
                          {catMeta.icon} {volumeIndex}·{volumeTitle}
                        </span>
                      </div>
                      <div className="csm-landmark-title-row">
                        <strong>{card.title}</strong>
                        <button
                          type="button"
                          className={`cfp-visited-toggle${isTasted ? " on" : ""}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTasted(dishCardToRecord(card, city));
                          }}
                        >
                          {isTasted ? "✓ 已尝" : "+ 吃过"}
                        </button>
                      </div>
                      <small>{card.tagline}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 匹配城市列表 */}
        {(!search || visibleCities.length > 0) && (
          <>
            {search && (
              <div className="csm-sec-title">
                <strong>🏙️ 匹配美食城市 ({visibleCities.length})</strong>
              </div>
            )}
            <nav className="city-switch csm-city-grid" aria-label="美食城市切换">
              {visibleCities.map((city) => {
                const on = city.id === currentCity?.id;
                const isVisited = visitedCitySet.has(city.id);
                return (
                  <div
                    key={city.id}
                    role="button"
                    tabIndex={0}
                    className={`csm-city-card-btn${on ? " on" : ""}${
                      isVisited ? " visited" : ""
                    }`}
                    data-testid={`switch-city-${city.id}`}
                    onClick={() => {
                      onSelectCity(city.id);
                      onClose();
                    }}
                  >
                    <div className="csm-card-top">
                      <strong>{city.name}</strong>
                      <div style={{ display: "inline-flex", gap: "4px", alignItems: "center" }}>
                        <span className="csm-prov-tag">
                          {city.provinceLabel.slice(0, 2)}
                        </span>
                        <button
                          type="button"
                          className={`cfp-visited-toggle${isVisited ? " on" : ""}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCityVisited(city.id);
                          }}
                        >
                          {isVisited ? "✓ 已尝" : "+ 打卡"}
                        </button>
                      </div>
                    </div>
                    <small>
                      {city.cuisineTag} · {city.dominantFlavor}
                    </small>
                    <p className="csm-basin">
                      {city.signatureDishes.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                );
              })}
            </nav>
          </>
        )}
      </div>
    </div>
  );
}
