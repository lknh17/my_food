import { useMemo } from "react";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type FoodCategoryId,
  type FoodVolume,
} from "../content/types";
import { dishCardToRecord, useFoodFootprints } from "../lib/foodFootprints";

export type FoodFolio = "overview" | FoodCategoryId;

export interface FoodSidebarIndexProps {
  pack: CityFoodPack;
  allCities: CityFoodPack[];
  folio: FoodFolio;
  activeVolume?: FoodVolume;
  activeCardId: string | null;
  onSelectFolio: (folio: FoodFolio) => void;
  onSelectCard: (category: FoodCategoryId, cardId: string) => void;
  onSelectCity: (cityId: string) => void;
  onOpenCitySwitcher: () => void;
}

function scrollToElement(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function FoodSidebarIndex({
  pack,
  allCities,
  folio,
  activeVolume,
  activeCardId,
  onSelectFolio,
  onSelectCard,
  onSelectCity,
  onOpenCitySwitcher,
}: FoodSidebarIndexProps) {
  const { tastedDishSet, toggleTasted } = useFoodFootprints();

  const sameProvinceCities = useMemo(
    () => allCities.filter((c) => c.province === pack.province),
    [allCities, pack.province],
  );

  const totalCityDishes = useMemo(
    () => pack.volumes.reduce((acc, v) => acc + v.cards.length, 0),
    [pack],
  );

  const tastedCityDishes = useMemo(
    () =>
      pack.volumes.reduce(
        (acc, v) => acc + v.cards.filter((c) => tastedDishSet.has(c.id)).length,
        0,
      ),
    [pack, tastedDishSet],
  );

  const sisterCitiesBox = (
    <div className="tsi-box">
      <div className="tsi-head tsi-head-flex">
        <div>
          <span className="tsi-kicker">{pack.provinceLabel} · 同省寻味</span>
          <h4>省内兄弟美食城 ({sameProvinceCities.length})</h4>
        </div>
        <button type="button" className="tsi-more-btn" onClick={onOpenCitySwitcher}>
          全国{allCities.length}城 ↗
        </button>
      </div>
      <div className="tsi-vol-group-chips">
        {sameProvinceCities.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`tsi-mini-chip${c.id === pack.id ? " on" : ""}`}
            onClick={() => onSelectCity(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );

  if (activeVolume) {
    const meta = FOOD_VOLUME_META[activeVolume.id];
    const tastedVolCount = activeVolume.cards.filter((c) => tastedDishSet.has(c.id)).length;

    return (
      <aside
        className="topic-sidebar-index food-sidebar-index"
        data-testid="food-sidebar-index"
        aria-label={`${pack.name}${activeVolume.title}食单索引`}
      >
        {/* 1. 本卷全部美食词条名录与一键打卡 */}
        <div className="tsi-box tsi-primary-box">
          <div className="tsi-head tsi-head-flex">
            <div>
              <span className="tsi-kicker">
                {pack.name} · {activeVolume.index}食单索引
              </span>
              <h3>
                {meta.icon} 本卷{activeVolume.title} ({activeVolume.cards.length})
              </h3>
            </div>
            <span className="tsi-checkin-pill" data-testid="sidebar-volume-progress">
              ✓ 已尝 {tastedVolCount}/{activeVolume.cards.length}
            </span>
          </div>

          <ul className="tsi-card-list" data-testid="sidebar-dish-items">
            {activeVolume.cards.map((card, idx) => {
              const isOn = activeCardId === card.id;
              const isTasted = tastedDishSet.has(card.id);
              return (
                <li key={card.id} className="tsi-card-row">
                  <button
                    type="button"
                    className={`tsi-card-btn${isOn ? " on" : ""}${
                      isTasted ? " is-checked-spot" : ""
                    }`}
                    data-testid={`sidebar-card-${card.id}`}
                    onClick={() => {
                      onSelectCard(activeVolume.id, card.id);
                      scrollToElement(`card-${card.id}`);
                    }}
                  >
                    <span className="tsi-num">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="tsi-card-copy">
                      <div className="tsi-card-title-row">
                        <strong>{card.title}</strong>
                        <span className="sidebar-flavor-tag">
                          {card.flavorProfile.split("·")[0].trim()}
                        </span>
                      </div>
                      <small>{card.tagline}</small>
                    </div>
                  </button>
                  <button
                    type="button"
                    className={`tsi-spot-check-btn${isTasted ? " on" : ""}`}
                    data-testid={`sidebar-checkin-${card.id}`}
                    title={isTasted ? `已吃过「${card.title}」，点击取消` : `标记吃过「${card.title}」`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTasted(dishCardToRecord(card, pack));
                    }}
                  >
                    {isTasted ? "✓" : "+"}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 2. 本卷章节快速跳转 */}
        <div className="tsi-box">
          <div className="tsi-head">
            <span className="tsi-kicker">VOLUME OUTLINE</span>
            <h4>本页食单章节导航</h4>
          </div>
          <ul className="tsi-outline-list">
            <li>
              <button type="button" onClick={() => scrollToElement("vol-block-header")}>
                01 · 卷首风土导语与打卡进度
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollToElement("vol-block-photos")}>
                02 · 本卷美食高清实拍橱窗 ({activeVolume.cards.length})
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollToElement("vol-block-guidemap")}>
                03 · 老字号与寻味街区导览地图
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollToElement("vol-block-cards")}>
                04 · {activeVolume.title}深度图解食单 ({activeVolume.cards.length})
              </button>
            </li>
          </ul>
        </div>

        {/* 3. 同城五卷切换 */}
        <div className="tsi-box">
          <div className="tsi-head">
            <span className="tsi-kicker">ALL 5 VOLUMES</span>
            <h4>{pack.name}五卷食单切换</h4>
          </div>
          <ul className="tsi-vol-switch">
            <li>
              <button
                type="button"
                className={folio === "overview" ? "on" : ""}
                onClick={() => onSelectFolio("overview")}
              >
                <span>★ 城市风味总览</span>
                <em>6维雷达</em>
              </button>
            </li>
            {pack.volumes.map((v) => {
              const vMeta = FOOD_VOLUME_META[v.id];
              return (
                <li key={v.id}>
                  <button
                    type="button"
                    className={v.id === activeVolume.id ? "on" : ""}
                    onClick={() => onSelectFolio(v.id)}
                  >
                    <span>
                      {vMeta.icon} {v.index} · {v.title}
                    </span>
                    <em>{v.cards.length}道</em>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {sisterCitiesBox}
      </aside>
    );
  }

  // Overview mode sidebar index
  return (
    <aside
      className="topic-sidebar-index food-sidebar-index"
      data-testid="food-sidebar-index"
      aria-label={`${pack.name}饮食总览与五卷食单索引`}
    >
      {/* 1. 总览章节大纲 */}
      <div className="tsi-box tsi-primary-box">
        <div className="tsi-head tsi-head-flex">
          <div>
            <span className="tsi-kicker">{pack.name} · 饮食总览目录</span>
            <h3>★ 风味总览章节</h3>
          </div>
          <span className="tsi-checkin-pill">
            ✓ 已尝 {tastedCityDishes}/{totalCityDishes}
          </span>
        </div>
        <ul className="tsi-outline-list">
          <li>
            <button type="button" onClick={() => scrollToElement("ov-hero")}>
              00 · 开篇：{pack.name}为什么是这种味道
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToElement("ov-radar-facts")}>
              01 · 六轴味型雷达与饮食地理档案
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToElement("ov-signature-gallery")}>
              02 · 必吃招牌名馔视觉画廊
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToElement("ov-causality")}>
              03 · 水土物产→风味演进三大因果链
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToElement("ov-volumes")}>
              04 · 五大食单分卷全景导读
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToElement("ov-neighbors")}>
              05 · 周边邻城风味对比与寻味圈
            </button>
          </li>
        </ul>
      </div>

      {/* 2. 全城五卷美食速查与一键打卡 */}
      <div className="tsi-box">
        <div className="tsi-head">
          <span className="tsi-kicker">CITY CULINARY INDEX</span>
          <h4>{pack.name}五卷美食速查</h4>
        </div>
        <div className="tsi-vol-groups">
          {pack.volumes.map((v) => {
            const vMeta = FOOD_VOLUME_META[v.id];
            return (
              <div key={v.id} className="tsi-vol-group">
                <button
                  type="button"
                  className="tsi-vol-group-head"
                  onClick={() => onSelectFolio(v.id)}
                >
                  <strong>
                    {vMeta.icon} {v.index} · {v.title}
                  </strong>
                  <span>全部 {v.cards.length} 道 →</span>
                </button>
                <div className="tsi-vol-group-chips">
                  {v.cards.map((c) => {
                    const isTasted = tastedDishSet.has(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        className={`tsi-mini-chip${isTasted ? " is-checked-spot" : ""}`}
                        onClick={() => onSelectCard(v.id, c.id)}
                      >
                        {isTasted ? "✓ " : ""}
                        {c.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {sisterCitiesBox}
    </aside>
  );
}
