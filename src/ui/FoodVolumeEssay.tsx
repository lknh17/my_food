import { useEffect, useMemo, useState } from "react";
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
  onOpenFoodMap?: (category?: FoodCategoryId, cardId?: string) => void;
}

function getConnoisseurTips(card: DishCard, city: CityFoodPack): { eatingTip: string; pairingTip: string } {
  if (card.eatingTip && card.pairingTip) {
    return { eatingTip: card.eatingTip, pairingTip: card.pairingTip };
  }
  const f = card.flavorProfile;
  let defaultEating = `趁热上桌先闻其香，夹取${card.mainIngredients.split("、")[0] || "主料"}蘸满原汤卤汁细品，层次最佳。`;
  let defaultPairing = "宜佐一盏温润清茶或本地时令冰饮解腻，风味更显绵长。";

  if (card.category === "zhushi") {
    defaultEating = `讲究「面/粉出锅即食」，先喝一口头汤感受本鲜，再将浇头臊子与粉面充分拌匀大口吸食。`;
    defaultPairing = "绝配卤蛋、拍黄瓜、糖蒜或一碟现炸酥肉，碳水满足感拉满。";
  } else if (card.category === "xiaochi") {
    defaultEating = `刚出炉或刚出锅黄金三分钟内口感最妙，外皮酥脆或软糯、内馅滚烫多汁，切勿久放。`;
    defaultPairing = `搭配${city.name}本地盖碗清茶、冰镇酸梅汤或传统甜酒酿最为合拍。`;
  } else if (f.includes("麻辣") || f.includes("香辣")) {
    defaultEating = `红油香气裹挟主料，入口先觉醇香再泛麻感，汤汁拌入热气腾腾的五常白米饭堪称灵魂。`;
    defaultPairing = "黄金搭档：红糖冰粉、老荫茶或冰镇唯怡豆奶，瞬间抚平燥辣。";
  } else if (f.includes("鲜") || f.includes("甜")) {
    defaultEating = `切忌重手加醋加辣掩盖本味，先品一口高汤或酥皮原香，再细嚼嫩滑肉质。`;
    defaultPairing = "宜配三年陈绍兴温黄酒、明前绿茶或清爽时蔬，衬托河海本鲜。";
  }

  return {
    eatingTip: card.eatingTip || defaultEating,
    pairingTip: card.pairingTip || defaultPairing,
  };
}

export function FoodVolumeEssay({
  pack,
  volume,
  activeCardId,
  onSelectCard,
}: FoodVolumeEssayProps) {
  const {
    tastedDishSet,
    wishlistDishSet,
    toggleTasted,
    toggleWishlist,
    setBatchTasted,
  } = useFoodFootprints();

  const [lightboxCard, setLightboxCard] = useState<DishCard | null>(null);

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
  }, [volume.id, pack.id]);

  const tastedInVolCount = useMemo(
    () => volume.cards.filter((c) => tastedDishSet.has(c.id)).length,
    [volume.cards, tastedDishSet],
  );
  const allVolTasted =
    volume.cards.length > 0 && tastedInVolCount === volume.cards.length;

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
            {pack.provinceLabel} · 《{pack.name}风味图志》 · {volume.index} · 东方美食图解专卷
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
              一、本卷美食高清实拍橱窗（共 {volume.cards.length} 道代表作）
            </h3>
            <span>点击缩略图切换主图，点击主图可放大鉴赏或直达下方详述卡片</span>
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

      {/* 3. 单列全宽：本卷详尽美食图解卡片流 */}
      <section
        id="vol-block-cards"
        className="encyclopedia-cards"
        data-testid="volume-cards"
      >
        <div className="block-title-row">
          <h3>
            二、{pack.name} · {volume.title}深度图解食单（共 {volume.cards.length} 道）
          </h3>
          <span>每张食单详列味型、技法、道地主料、行家吃法与百年老店指引</span>
        </div>

        <div className="card-single-list">
          {volume.cards.map((card, idx) => {
            const isTasted = tastedDishSet.has(card.id);
            const isWish = wishlistDishSet.has(card.id);
            const isSelected = currentCard?.id === card.id;
            const photoSrc = assetUrl(card.photoUrl ?? `/photos/${card.id}.jpg`);
            const record = dishCardToRecord(card, pack);
            const tips = getConnoisseurTips(card, pack);

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

                  {/* 🥢 行家吃法口诀与黄金搭配栏 */}
                  <div className="dish-connoisseur-tips-box" data-testid={`dish-tips-${card.id}`}>
                    <div className="dct-item">
                      <span className="dct-badge">🥢 行家吃法口诀</span>
                      <p>{tips.eatingTip}</p>
                    </div>
                    <div className="dct-item">
                      <span className="dct-badge pairing">🍵 黄金搭配推荐</span>
                      <p>{tips.pairingTip}</p>
                    </div>
                  </div>

                  {/* 寻味老字号与名店推荐列表 */}
                  {card.famousSpots && card.famousSpots.length > 0 && (
                    <div className="dish-famous-spots-box">
                      <span className="dfs-label">🏮 寻味老字号与街区指引：</span>
                      <div className="dfs-spots-grid">
                        {card.famousSpots.map((spot) => (
                          <div key={spot.name} className="dfs-spot-chip">
                            <strong>{spot.name}</strong>
                            <span>{spot.addressHint}</span>
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
                      className="btn-card-zoom"
                      onClick={() => setLightboxCard(card)}
                    >
                      🔍 查看高清实拍大图
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
