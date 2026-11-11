import { useEffect, useMemo, useState } from "react";
import { allSpecialTopics, getSpecialTopicPack } from "../content/topics";
import type {
  FoodCategoryId,
  SpecialTopicId,
  SpecialTopicPack,
  TopicFoodItem,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { useFoodFootprints, type TastedDishInput } from "../lib/foodFootprints";

export interface SpecialTopicsHubProps {
  topics?: SpecialTopicPack[];
  activeTopicId: SpecialTopicId;
  onSelectTopic: (topicId: SpecialTopicId) => void;
  onEnterCityGazetteer: (cityId: string, category?: FoodCategoryId, cardId?: string) => void;
  onBackToPortal: () => void;
  onOpenPassport: () => void;
  onOpenSearchModal: () => void;
}

const TOPIC_ICONS: Record<SpecialTopicId, string> = {
  "eight-cuisines": "🥢",
  "noodles-compendium": "🍜",
  "rice-noodles-compendium": "🥣",
  "hotpot-jianghu": "🍲",
  "morning-feast": "🥟",
  "bbq-nightmarket": "🔥",
  "pastries-sweet-soups": "🍡",
  "tea-and-wine": "🍵",
  "seasonal-feast": "🌾",
  "heritage-banquets": "🏮",
};

const FALLBACK_EXTRA_TOPIC_PACKS: SpecialTopicPack[] = [
  {
    id: "tea-and-wine",
    index: "专题八",
    title: "中华名茶与美酒图志",
    kicker: "CHINESE TEA & LIQUOR COMPENDIUM",
    subtitle: "六大茶类核心山场与四大香型传世佳酿的东方杯中风物志",
    lede: "茶与酒是中式筵席的一双羽翼：清茗涤烦解腻、佳酿助兴提鲜。从西湖狮峰明前龙井、武夷岩骨花香大红袍、云南古树普洱，到绍兴冬酿花雕、赤水河畔酱香白酒，一方水土的泉冽与微生菌群共同酿就了流动的华夏风味。",
    metrics: [
      { label: "核心茶类谱系", value: "六大茶类", note: "绿红乌龙白黄黑" },
      { label: "传世名酒香型", value: "四大主香", note: "酱香浓香清香米酒" },
      { label: "代表产区名物", value: "16+ 款", note: "核心山场与古窖池" },
    ],
    subGroups: [
      {
        id: "famous-teas",
        title: "江南与闽滇名茶绝品",
        subtitle: "明前春芽与岩骨花香",
        regionBadge: "浙闽皖滇 · 核心茶山",
        description: "采自高山云雾与丹霞砾壤，经杀青、摇青、焙火等非遗手艺，凝练出清幽兰香与醇厚回甘。",
        items: [
          {
            id: "hangzhou-longjing2",
            title: "西湖狮峰明前龙井",
            cityId: "hangzhou",
            cityName: "杭州",
            province: "zj",
            provinceLabel: "浙江省",
            schoolOrStyle: "绿茶之冠 · 扁炒青工艺",
            flavorProfile: "嫩栗豆香 · 鲜爽回甘",
            soulIngredient: "狮峰山群体种明前头采一芽一叶",
            craftHighlight: "辉锅十大手法全凭掌温感知，色绿、香郁、味甘、形美",
            famousShop: "狮峰龙井茶园 / 湖畔居茶楼",
            description: "西湖群山白砂土与钱塘水汽滋养，明前采摘经抖、搭、搨、捺手工炒制，茶汤杏绿清澈，豆花香与嫩栗香沁人心脾。",
            coord: [120.123, 30.225],
            photoUrl: "/photos/hangzhou-longjing2.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "seasonal-feast",
    index: "专题九",
    title: "二十四节气四时寻味历",
    kicker: "24 SOLAR TERMS SEASONAL FEAST",
    subtitle: "春尝江鲜山笋、夏食清补凉面、秋品膏蟹桂花、冬煨羊肉暖锅",
    lede: "「不时不食」是中国人顺应天时的最高饮食哲学。随着二十四节气更迭，大地与江海轮番献上最鲜嫩的时令风物：春雷惊起江南春笋，夏至蝉鸣催热凉面冷淘，秋风吹肥阳澄湖大闸蟹，冬至瑞雪映红铜锅涮羊肉。",
    metrics: [
      { label: "四时节令周期", value: "24 节气", note: "春生夏长秋收冬藏" },
      { label: "时令不时不食", value: "四季名物", note: "山笋江鲜膏蟹暖锅" },
    ],
    subGroups: [
      {
        id: "autumn-crab-feast",
        title: "秋分霜降 · 江南膏蟹与桂花秋宴",
        subtitle: "秋风起，蟹脚痒；菊花开，闻蟹来",
        regionBadge: "苏浙沪 · 水乡秋味",
        description: "九雌十雄大闸蟹膏满黄肥，佐以温热的三年陈绍兴花雕与糖桂花甜品，成就江南秋日极致风雅。",
        items: [
          {
            id: "yangzhou-xie",
            title: "清蒸大闸蟹与蟹粉名馔",
            cityId: "yangzhou",
            cityName: "扬州",
            province: "js",
            provinceLabel: "江苏省",
            schoolOrStyle: "江南时令 · 金秋蟹宴",
            flavorProfile: "膏黄脂满 · 鲜甜醇厚",
            soulIngredient: "湖产青背白肚金爪黄毛大闸蟹、镇江香醋、紫苏姜茶",
            craftHighlight: "紫苏叶铺屉清蒸锁住蟹黄原汁，或现拆蟹粉入狮子头与小笼",
            famousShop: "扬州迎宾馆 / 苏州得月楼",
            description: "霜降前后母蟹凝脂、公蟹膏白粘唇，蘸姜丝镇江香醋细品，鲜甜满口。",
            coord: [119.412, 32.394],
            photoUrl: "/photos/yangzhou-xie.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "heritage-banquets",
    index: "专题十",
    title: "中华传世名宴全席",
    kicker: "CHINESE HERITAGE BANQUETS",
    subtitle: "从孔府官府礼宴、洛阳牡丹水席、淮扬红楼宴到顺德民间全鱼席",
    lede: "名宴是中华饮食礼仪与庖厨技艺的集大成者。无论是讲究冷热荤素、上菜章法的官府世家宴席，还是以二十四道汤水连环上桌的洛阳水席，抑或乡土宗族红白喜事的巴蜀九大碗、潮汕卤鹅全席，皆浓缩了一方人文气度。",
    metrics: [
      { label: "礼宴与民间席", value: "四大谱系", note: "官府水席商帮乡宴" },
      { label: "非遗宴席规制", value: "百年传承", note: "刀工火候与筵席礼序" },
    ],
    subGroups: [
      {
        id: "state-and-literati-banquet",
        title: "淮扬国宴与红楼文人雅席",
        subtitle: "文思豆腐刀工入微，清炖狮子头醇和南北",
        regionBadge: "江苏扬州 · 国宴主轴",
        description: "以淮扬细作刀工与清汤奶汤为骨，咸甜适中、南北皆宜，代表中式大型宴席的最高审美标准。",
        items: [
          {
            id: "yangzhou-wensi",
            title: "淮扬国宴头道 · 文思豆腐羹",
            cityId: "yangzhou",
            cityName: "扬州",
            province: "js",
            provinceLabel: "江苏省",
            schoolOrStyle: "苏菜 · 淮扬国宴头汤",
            flavorProfile: "清鲜柔和 · 入口即化",
            soulIngredient: "内酯嫩豆腐、金华火腿丝、冬笋丝、极品清鸡汤",
            craftHighlight: "一块嫩豆腐横片竖切数千缕细如发丝，入沸汤绽开如秋菊",
            famousShop: "扬州迎宾馆 / 趣园茶社",
            description: "起源于清代扬州天宁寺文思和尚，千丝万缕悬浮清澈鸡汤之中，不见油星而鲜美绝伦。",
            coord: [119.418, 32.402],
            photoUrl: "/photos/yangzhou-wensi.jpg",
          },
        ],
      },
    ],
  },
];

function inferCategoryFromTopic(topicId: SpecialTopicId): FoodCategoryId {
  if (topicId === "noodles-compendium" || topicId === "rice-noodles-compendium") return "zhushi";
  if (
    topicId === "eight-cuisines" ||
    topicId === "hotpot-jianghu" ||
    topicId === "heritage-banquets" ||
    topicId === "seasonal-feast"
  ) {
    return "dacai";
  }
  if (topicId === "tea-and-wine") return "fengwu";
  return "xiaochi";
}

function topicItemToRecordInput(
  item: TopicFoodItem,
  topicId: SpecialTopicId,
): TastedDishInput {
  return {
    cardId: item.id,
    title: item.title,
    cityId: item.cityId,
    cityName: item.cityName,
    province: item.province,
    provinceLabel: item.provinceLabel,
    category: inferCategoryFromTopic(topicId),
    cuisineStyle: item.schoolOrStyle,
    photoUrl: item.photoUrl ?? `/photos/${item.id}.jpg`,
    coord: item.coord,
  };
}

export function SpecialTopicsHub({
  topics: topicsProp,
  activeTopicId,
  onSelectTopic,
  onEnterCityGazetteer,
  onBackToPortal,
  onOpenPassport,
  onOpenSearchModal,
}: SpecialTopicsHubProps) {
  const topics = useMemo<SpecialTopicPack[]>(() => {
    const base = topicsProp && topicsProp.length > 0 ? [...topicsProp] : [...allSpecialTopics];
    const existingIds = new Set(base.map((t) => t.id));
    for (const extra of FALLBACK_EXTRA_TOPIC_PACKS) {
      if (!existingIds.has(extra.id)) {
        base.push(extra);
      }
    }
    return base;
  }, [topicsProp]);

  const activeTopic = useMemo(
    () =>
      topics.find((t) => t.id === activeTopicId) ??
      getSpecialTopicPack(activeTopicId) ??
      topics[0],
    [topics, activeTopicId],
  );

  const {
    tastedDishes,
    tastedDishSet,
    wishlistDishes,
    wishlistDishSet,
    toggleTasted,
    toggleWishlist,
  } = useFoodFootprints();

  const [subGroupFilter, setSubGroupFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [lightboxItem, setLightboxItem] = useState<TopicFoodItem | null>(null);

  useEffect(() => {
    setSubGroupFilter("all");
    setSearchQuery("");
    const firstItem = activeTopic?.subGroups[0]?.items[0] ?? null;
    setSelectedItemId(firstItem?.id ?? null);
  }, [activeTopic?.id]);

  const allTopicItems = useMemo(() => {
    if (!activeTopic) return [];
    return activeTopic.subGroups.flatMap((sg) =>
      sg.items.map((item) => ({
        item,
        subGroupId: sg.id,
        subGroupTitle: sg.title,
        regionBadge: sg.regionBadge,
      })),
    );
  }, [activeTopic]);

  const filteredSubGroups = useMemo(() => {
    if (!activeTopic) return [];
    const q = searchQuery.trim().toLowerCase();
    return activeTopic.subGroups
      .filter((sg) => subGroupFilter === "all" || sg.id === subGroupFilter)
      .map((sg) => {
        if (!q) return sg;
        return {
          ...sg,
          items: sg.items.filter(
            (item) =>
              item.title.toLowerCase().includes(q) ||
              item.cityName.toLowerCase().includes(q) ||
              item.provinceLabel.toLowerCase().includes(q) ||
              item.schoolOrStyle.toLowerCase().includes(q) ||
              item.flavorProfile.toLowerCase().includes(q) ||
              item.soulIngredient.toLowerCase().includes(q) ||
              item.famousShop.toLowerCase().includes(q),
          ),
        };
      })
      .filter((sg) => sg.items.length > 0);
  }, [activeTopic, subGroupFilter, searchQuery]);

  const tastedInTopicCount = useMemo(
    () => allTopicItems.filter(({ item }) => tastedDishSet.has(item.id)).length,
    [allTopicItems, tastedDishSet],
  );

  if (!activeTopic) return null;

  return (
    <div className="special-topics-hub single-column-shell" data-testid="special-topics-hub">
      {/* 1. 顶部全局导航栏 */}
      <header className="clean-global-topbar">
        <div className="cgt-inner">
          <div className="cgt-left">
            <button
              type="button"
              className="cgt-home-btn"
              data-testid="topics-back-portal"
              onClick={onBackToPortal}
            >
              <span className="seal seal-sm">食味</span>
              <span>🏮 返回寻味画报首页</span>
            </button>
            <span className="cgt-divider">/</span>
            <div className="cgt-current-city">
              <span className="cgt-prov-badge">十大中华饮食专题馆</span>
              <strong className="cgt-city-name">
                {TOPIC_ICONS[activeTopic.id] ?? "📜"} {activeTopic.title}
              </strong>
            </div>
          </div>

          <div className="cgt-right mast-tools">
            <button
              type="button"
              className="text-btn"
              data-testid="topics-open-search"
              onClick={onOpenSearchModal}
            >
              🔍 搜全国美食/城市 (⌘K)
            </button>
            <button
              type="button"
              className="text-btn map-entry"
              data-testid="topics-open-passport"
              onClick={onOpenPassport}
            >
              🥢 我的食单 (已尝 {tastedDishes.length} · 想吃 {wishlistDishes.length})
            </button>
          </div>
        </div>
      </header>

      {/* 2. 十大专题横向切换条 */}
      <nav
        className="volume-pills clean-volume-ribbon topics-switch-ribbon"
        aria-label="十大中华饮食专题切换"
      >
        {topics.map((tp) => {
          const isOn = tp.id === activeTopic.id;
          return (
            <button
              key={tp.id}
              type="button"
              className={isOn ? "on" : ""}
              data-testid={`topic-tab-${tp.id}`}
              onClick={() => onSelectTopic(tp.id)}
            >
              <span>{TOPIC_ICONS[tp.id] ?? "📜"}</span>
              <span>
                {tp.index} · {tp.title}
              </span>
            </button>
          );
        })}
      </nav>

      {/* 3. 左侧常驻专题流派目录 + 右侧纯单列宽幅专题食单 */}
      <div className="workspace workspace-with-sidebar">
        <aside
          className="topic-sidebar-index"
          data-testid="special-topic-sidebar"
          aria-label={`${activeTopic.title}流派与名录索引`}
        >
          <div className="tsi-box tsi-primary-box">
            <div className="tsi-head tsi-head-flex">
              <div>
                <span className="tsi-kicker">{activeTopic.index} · 流派索引</span>
                <h3>
                  {TOPIC_ICONS[activeTopic.id] ?? "📜"} {activeTopic.title} ({allTopicItems.length})
                </h3>
              </div>
              <span className="tsi-checkin-pill">
                ✓ 已尝 {tastedInTopicCount}/{allTopicItems.length}
              </span>
            </div>

            <div className="tsi-vol-groups">
              {activeTopic.subGroups.map((sg) => (
                <div key={sg.id} className="tsi-vol-group">
                  <button
                    type="button"
                    className="tsi-vol-group-head"
                    onClick={() => {
                      setSubGroupFilter(sg.id === subGroupFilter ? "all" : sg.id);
                      const el = document.getElementById(`topic-sg-${sg.id}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    <strong>{sg.title}</strong>
                    <span>{sg.items.length} 道 →</span>
                  </button>
                  <div className="tsi-vol-group-chips">
                    {sg.items.map((item) => {
                      const isTasted = tastedDishSet.has(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`tsi-mini-chip${
                            selectedItemId === item.id ? " on" : ""
                          }${isTasted ? " is-checked-spot" : ""}`}
                          onClick={() => {
                            if (subGroupFilter !== "all" && subGroupFilter !== sg.id) {
                              setSubGroupFilter("all");
                            }
                            setSelectedItemId(item.id);
                            window.setTimeout(() => {
                              const el = document.getElementById(`topic-card-${item.id}`);
                              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }, 40);
                          }}
                        >
                          {isTasted ? "✓ " : ""}
                          {item.cityName}·{item.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tsi-box">
            <div className="tsi-head">
              <span className="tsi-kicker">ALL {topics.length} SPECIAL TOPICS</span>
              <h4>十大中华饮食专题速切</h4>
            </div>
            <ul className="tsi-vol-switch">
              {topics.map((tp) => {
                const count = tp.subGroups.reduce((a, g) => a + g.items.length, 0);
                return (
                  <li key={tp.id}>
                    <button
                      type="button"
                      className={tp.id === activeTopic.id ? "on" : ""}
                      onClick={() => onSelectTopic(tp.id)}
                    >
                      <span>
                        {TOPIC_ICONS[tp.id] ?? "📜"} {tp.index} · {tp.title}
                      </span>
                      <em>{count}道</em>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* 右侧纯单列宽幅阅读流 */}
        <main className="reading" id="topic-reading">
          <article className="essay single-column-essay" data-testid={`topic-essay-${activeTopic.id}`}>
            {/* 专题卷首总论 */}
            <header className="volume-header topic-hero-header">
              <p className="running-head">
                {activeTopic.kicker} · {activeTopic.index} · 东方饮食文化专题长卷
              </p>
              <h2>
                {TOPIC_ICONS[activeTopic.id] ?? "📜"} {activeTopic.title}
                <small>{activeTopic.subtitle}</small>
              </h2>
              <div className="lede-box">
                <p className="lede">{activeTopic.lede}</p>
              </div>

              {activeTopic.metrics && activeTopic.metrics.length > 0 && (
                <div className="metric-strip" aria-label="本专题核心指标">
                  {activeTopic.metrics.map((m) => (
                    <div key={m.label} className="metric-card">
                      <span>{m.label}</span>
                      <strong>{m.value}</strong>
                      <small>{m.note}</small>
                    </div>
                  ))}
                  <div className="metric-card highlight-card">
                    <span>我的本专题品鉴进度</span>
                    <strong>
                      {tastedInTopicCount} / {allTopicItems.length} 道
                    </strong>
                    <small>点击下方卡片「✓ 吃过」收入食单</small>
                  </div>
                </div>
              )}
            </header>

            {/* 流派筛选与搜索工具条 */}
            <section className="volume-block" aria-label="流派筛选与检索">
              <div className="topic-filter-toolbar">
                <div className="topic-sg-pills" role="group" aria-label="按流派与地域筛选">
                  <button
                    type="button"
                    className={`sfcb-pill${subGroupFilter === "all" ? " on" : ""}`}
                    onClick={() => setSubGroupFilter("all")}
                  >
                    全部流派 ({allTopicItems.length})
                  </button>
                  {activeTopic.subGroups.map((sg) => (
                    <button
                      key={sg.id}
                      type="button"
                      className={`sfcb-pill${subGroupFilter === sg.id ? " on" : ""}`}
                      data-testid={`topic-sg-filter-${sg.id}`}
                      onClick={() =>
                        setSubGroupFilter(subGroupFilter === sg.id ? "all" : sg.id)
                      }
                    >
                      {sg.title} ({sg.items.length})
                    </button>
                  ))}
                </div>

                <div className="topic-search-input-wrap">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`🔍 在《${activeTopic.title}》中搜索菜名、城市、灵魂食材或老店...`}
                    data-testid="topic-item-search"
                  />
                  {searchQuery && (
                    <button type="button" onClick={() => setSearchQuery("")}>
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* 各大流派与单列宽幅美食卡片 */}
            <div className="volume-single-flow">
              {filteredSubGroups.map((sg, sgIdx) => (
                <section
                  key={sg.id}
                  id={`topic-sg-${sg.id}`}
                  className="topic-subgroup-section"
                  data-testid={`topic-subgroup-${sg.id}`}
                >
                  <div className="topic-sg-header">
                    <div className="topic-sg-title-row">
                      <span className="sec-num">0{sgIdx + 1}</span>
                      <div>
                        <span className="topic-sg-badge">{sg.regionBadge}</span>
                        <h3>
                          {sg.title}
                          <small>{sg.subtitle}</small>
                        </h3>
                      </div>
                    </div>
                    <p className="topic-sg-desc">{sg.description}</p>
                  </div>

                  <div className="card-single-list">
                    {sg.items.map((item, idx) => {
                      const isTasted = tastedDishSet.has(item.id);
                      const isWish = wishlistDishSet.has(item.id);
                      const isSelected = selectedItemId === item.id;
                      const recordInput = topicItemToRecordInput(item, activeTopic.id);
                      const photoSrc = assetUrl(item.photoUrl ?? `/photos/${item.id}.jpg`);

                      return (
                        <article
                          key={item.id}
                          id={`topic-card-${item.id}`}
                          className={`ency-card ency-card-wide dish-card${
                            isSelected ? " on" : ""
                          }${isTasted ? " is-dish-tasted" : ""}`}
                          data-testid={`topic-card-${item.id}`}
                          onMouseEnter={() => setSelectedItemId(item.id)}
                        >
                          <div className="ency-card-media">
                            <button
                              type="button"
                              className="card-visual card-visual-btn"
                              onClick={() => setLightboxItem(item)}
                              aria-label={`查看${item.title}高清大图`}
                            >
                              <img
                                src={photoSrc}
                                alt={item.title}
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.style.opacity = "0.25";
                                }}
                              />
                              <div className="card-visual-shade" />
                              <span className="dish-photo-city-pill">
                                🏮 {item.provinceLabel} · {item.cityName}
                              </span>
                            </button>
                          </div>

                          <div className="ency-card-body">
                            <div className="ency-card-meta-top">
                              <div className="ency-card-meta-left">
                                <span className="ency-card-index">
                                  {sg.title} · #{String(idx + 1).padStart(2, "0")}
                                </span>
                                <span className="dish-style-badge">{item.schoolOrStyle}</span>
                                <span className="dish-flavor-badge">{item.flavorProfile}</span>
                              </div>
                            </div>

                            <div className="ency-card-title-row">
                              <h4>
                                {item.cityName} · {item.title}
                              </h4>
                              {isTasted && <span className="scenic-checked-pill">✓ 已品尝</span>}
                            </div>

                            <div className="dish-four-dims-grid">
                              <div className="dish-dim-item">
                                <span>味型特征</span>
                                <strong>{item.flavorProfile}</strong>
                              </div>
                              <div className="dish-dim-item">
                                <span>道地灵魂主料</span>
                                <strong>{item.soulIngredient}</strong>
                              </div>
                              <div className="dish-dim-item">
                                <span>核心工艺绝活</span>
                                <strong>{item.craftHighlight}</strong>
                              </div>
                              <div className="dish-dim-item">
                                <span>代表寻味名店</span>
                                <strong>🏮 {item.famousShop}</strong>
                              </div>
                            </div>

                            <p className="ency-card-detail">{item.description}</p>

                            <div className="ency-card-actions">
                              <button
                                type="button"
                                className={`btn-checkin-tasted${isTasted ? " on" : ""}`}
                                data-testid={`topic-tasted-${item.id}`}
                                onClick={() => toggleTasted(recordInput)}
                              >
                                {isTasted ? "✓ 已吃过打卡" : "🥢 吃过打卡"}
                              </button>
                              <button
                                type="button"
                                className={`btn-checkin-wish${isWish ? " on" : ""}`}
                                data-testid={`topic-wish-${item.id}`}
                                onClick={() => toggleWishlist(recordInput)}
                              >
                                {isWish ? "★ 已在想吃清单" : "♡ 想吃种草"}
                              </button>
                              <button
                                type="button"
                                className="btn-card-locate"
                                data-testid={`topic-enter-city-${item.id}`}
                                onClick={() =>
                                  onEnterCityGazetteer(
                                    item.cityId,
                                    inferCategoryFromTopic(activeTopic.id),
                                    item.id,
                                  )
                                }
                              >
                                进入《{item.cityName}》城市食单 ↗
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </main>
      </div>

      {/* 高清美图灯箱 */}
      {lightboxItem && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
        >
          <div className="photo-lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="photo-lightbox-close"
              onClick={() => setLightboxItem(null)}
            >
              关闭 ✕
            </button>
            <img
              src={assetUrl(lightboxItem.photoUrl ?? `/photos/${lightboxItem.id}.jpg`)}
              alt={lightboxItem.title}
            />
            <div className="photo-lightbox-caption">
              <h3>
                {lightboxItem.cityName} · {lightboxItem.title}
              </h3>
              <p className="tagline">
                {lightboxItem.schoolOrStyle} · {lightboxItem.flavorProfile} · 推荐名店：
                {lightboxItem.famousShop}
              </p>
              <p>{lightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
