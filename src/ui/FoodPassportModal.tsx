import { useMemo, useState } from "react";
import { EIGHT_CUISINES_META } from "../content/provincesMeta";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type EightCuisineId,
  type FoodCategoryId,
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

type PassportTabMode = "tasted" | "wishlist" | "all-catalog";

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
    toggleTasted,
    toggleWishlist,
    updateNote,
  } = useFoodFootprints();

  const [activeTab, setActiveTab] = useState<PassportTabMode>("tasted");
  const [categoryFilter, setCategoryFilter] = useState<FoodCategoryId | "all">("all");
  const [cuisineFilter, setCuisineFilter] = useState<EightCuisineId | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState<string>("");

  const allCatalogDishes = useMemo<TastedDishRecord[]>(() => {
    if (!open || cities.length === 0) return tastedDishes;
    const records: TastedDishRecord[] = [];
    for (const city of cities) {
      for (const vol of city.volumes) {
        if (vol.id === "shijie") continue;
        for (const card of vol.cards) {
          records.push(dishCardToRecord(card, city));
        }
      }
    }
    return records;
  }, [open, cities, tastedDishes]);

  const stats = useMemo(() => {
    const dacaiCount = tastedDishes.filter((d) => d.category === "dacai").length;
    const xiaochiCount = tastedDishes.filter((d) => d.category === "xiaochi").length;
    const zhushiCount = tastedDishes.filter((d) => d.category === "zhushi").length;
    const fengwuCount = tastedDishes.filter((d) => d.category === "fengwu" || d.category === "shijie").length;

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
      wishlistCount: wishlistDishes.length,
      cuisineCounts,
      unlockedEightCount,
    };
  }, [tastedDishes, wishlistDishes]);

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
        if (cuisineFilter !== "all") {
          const itemCuisine = inferEightCuisineFromRecord(item);
          if (itemCuisine !== cuisineFilter) return false;
        }
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
  }, [activeTab, tastedDishes, wishlistDishes, allCatalogDishes, categoryFilter, cuisineFilter, searchQuery]);

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
        aria-label="我的食单 · 寻味记录与想吃清单"
      >
        {/* 顶部朱砂宣纸题头 */}
        <header className="passport-header">
          <div className="passport-header-left">
            <span className="seal passport-seal">食单</span>
            <div>
              <span className="passport-kicker">
                PERSONAL CULINARY NOTEBOOK · 个人私房味觉账本
              </span>
              <h2>
                🥢 我的食单 · 寻味记录与想吃清单
                <small>
                  已尝佳肴 {stats.totalTasted} 道 · 想吃种草 {stats.wishlistCount} 道 · 八大菜系已品鉴{" "}
                  {stats.unlockedEightCount} / 8 席
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
            ✕ 收起食单
          </button>
        </header>

        <div className="passport-body">
          {/* 一、核心品鉴统计指标卡 */}
          <section className="passport-stats-grid passport-stats-grid-clean" aria-label="食单统计概览">
            <div className="passport-stat-card highlight-red">
              <span className="pstat-label">🥢 已尝佳肴总计</span>
              <strong className="pstat-val">{stats.totalTasted} 道</strong>
              <small className="pstat-sub">已收录进个人味觉私房账本</small>
            </div>
            <div className="passport-stat-card highlight-amber">
              <span className="pstat-label">🍲 镇桌大菜 & 🥟 小吃</span>
              <strong className="pstat-val">
                {stats.dacaiCount} 大菜 · {stats.xiaochiCount} 小吃
              </strong>
              <small className="pstat-sub">宴席硬菜与市井烟火双收</small>
            </div>
            <div className="passport-stat-card highlight-green">
              <span className="pstat-label">🍜 粉面碳水 & 🌿 风物</span>
              <strong className="pstat-val">
                {stats.zhushiCount} 粉面 · {stats.fengwuCount} 风物
              </strong>
              <small className="pstat-sub">南粉北面与道地物产记录</small>
            </div>
            <div className="passport-stat-card highlight-seal">
              <span className="pstat-label">♡ 想吃种草清单</span>
              <strong className="pstat-val">{stats.wishlistCount} 道</strong>
              <small className="pstat-sub">待解锁的下一餐寻味目标</small>
            </div>
          </section>

          {/* 二、八大菜系品鉴进度条 */}
          <section className="passport-section">
            <div className="passport-sec-head">
              <h3>八大菜系与地方风味品鉴进度（已品鉴 {stats.unlockedEightCount} / 8 大菜系）</h3>
              <span>
                {cuisineFilter === "all"
                  ? "点击任意菜系印章可筛选下方菜品"
                  : "已开启菜系筛选 · 再次点击可恢复全部"}
              </span>
            </div>
            <div className="cuisine-progress-grid">
              {(Object.keys(EIGHT_CUISINES_META) as EightCuisineId[]).map((cid) => {
                const meta = EIGHT_CUISINES_META[cid];
                const count = stats.cuisineCounts[cid] ?? 0;
                const pct = Math.min(100, Math.round((count / 5) * 100));
                const isUnlocked = count > 0;
                const isSelected = cuisineFilter === cid;
                return (
                  <button
                    key={cid}
                    type="button"
                    className={`cuisine-prog-card${isUnlocked ? " unlocked" : ""}${
                      isSelected ? " active-filter" : ""
                    }`}
                    onClick={() =>
                      setCuisineFilter((prev) => (prev === cid ? "all" : cid))
                    }
                  >
                    <div className="cprog-top">
                      <span className="cprog-seal" style={{ background: meta.color }}>
                        {meta.code}
                      </span>
                      <div className="cprog-title">
                        <strong>{meta.shortLabel}</strong>
                        <small>{isUnlocked ? `已尝 ${count} 道` : "待品鉴"}</small>
                      </div>
                    </div>
                    <div className="cprog-bar-track">
                      <div
                        className="cprog-bar-fill"
                        style={{
                          width: `${isUnlocked ? Math.max(20, pct) : 0}%`,
                          background: meta.color,
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 三、可筛选食单列表：已吃过佳肴 / 想吃种草单 / 全库名馔速查 */}
          <section className="passport-section" data-testid="passport-dish-list-section">
            <div className="passport-tabs-toolbar">
              <div className="passport-mode-tabs" role="tablist" aria-label="食单视图切换">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "tasted"}
                  className={`passport-tab-btn${activeTab === "tasted" ? " on" : ""}`}
                  data-testid="passport-tab-tasted"
                  onClick={() => setActiveTab("tasted")}
                >
                  🥢 已吃过佳肴 ({stats.totalTasted})
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "wishlist"}
                  className={`passport-tab-btn${activeTab === "wishlist" ? " on" : ""}`}
                  data-testid="passport-tab-wishlist"
                  onClick={() => setActiveTab("wishlist")}
                >
                  ♡ 想吃种草单 ({stats.wishlistCount})
                </button>
                {allCatalogDishes.length > 0 && (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "all-catalog"}
                    className={`passport-tab-btn${activeTab === "all-catalog" ? " on" : ""}`}
                    data-testid="passport-tab-catalog"
                    onClick={() => setActiveTab("all-catalog")}
                  >
                    📖 全库名馔速挑 ({allCatalogDishes.length})
                  </button>
                )}
              </div>

              <div className="passport-search-wrap">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="🔍 搜索菜名、城市、味型或品鉴笔记..."
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

            {/* 分类筛选条 */}
            <div className="passport-filter-strip" role="group" aria-label="按美食品类筛选">
              <button
                type="button"
                className={`passport-pill${categoryFilter === "all" ? " on" : ""}`}
                onClick={() => setCategoryFilter("all")}
              >
                全部品类
              </button>
              {(["dacai", "xiaochi", "zhushi", "fengwu"] as FoodCategoryId[]).map((catId) => {
                const vMeta = FOOD_VOLUME_META[catId];
                return (
                  <button
                    key={catId}
                    type="button"
                    className={`passport-pill${categoryFilter === catId ? " on" : ""}`}
                    onClick={() => setCategoryFilter(catId)}
                  >
                    {vMeta.icon} {vMeta.title}
                  </button>
                );
              })}
              {cuisineFilter !== "all" && (
                <button
                  type="button"
                  className="passport-pill on"
                  onClick={() => setCuisineFilter("all")}
                >
                  ✕ 清除「{EIGHT_CUISINES_META[cuisineFilter].shortLabel}」筛选
                </button>
              )}
            </div>

            {/* 菜品卡片网格 */}
            {displayedList.length === 0 ? (
              <div className="passport-empty-box">
                <p>
                  当前筛选条件下暂无菜品记录。可在首页或城市食单中点击「✓ 吃过」或「♡ 想吃」随时收录心仪美味！
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
                      <div
                        className="pdish-media"
                        style={{ cursor: "pointer" }}
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
                              placeholder="记录品鉴心得（如：老店锅气、口感风味）..."
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
                            title="点击编辑个人品鉴笔记"
                          >
                            {item.note ? `「${item.note}」` : "✎ 点击写下品鉴心得..."}
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
                            {isItemWish ? "★ 已想吃" : "♡ 想吃"}
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
                            查看菜谱 →
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
