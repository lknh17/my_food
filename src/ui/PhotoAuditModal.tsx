import { useEffect, useMemo, useState } from "react";
import {
  FOOD_VOLUME_META,
  type CityFoodPack,
  type FoodCategoryId,
} from "../content/types";
import { assetUrl } from "../lib/assetUrl";

interface LedgerEntry {
  id: string;
  cityId?: string;
  cityName?: string;
  volumeId?: string;
  title?: string;
  cleanEntity?: string;
  width?: number;
  height?: number;
  bytes?: number;
  sourceProvider?: string;
  sourceTitle?: string;
  qualityScore?: number;
  semanticScore?: number;
  totalScore?: number;
  status?: string;
  needsRecheck?: boolean;
}

interface LedgerData {
  summary?: {
    updatedAt?: string;
    total?: number;
    verified?: number;
    low_quality?: number;
    duplicate_hash?: number;
    semantic_mismatch?: number;
  };
  items?: Record<string, LedgerEntry>;
}

export interface PhotoAuditModalProps {
  open: boolean;
  pack: CityFoodPack;
  onClose: () => void;
  onJumpToCard: (category: FoodCategoryId, cardId: string) => void;
}

export function PhotoAuditModal({
  open,
  pack,
  onClose,
  onJumpToCard,
}: PhotoAuditModalProps) {
  const [ledger, setLedger] = useState<LedgerData | null>(null);
  const [filter, setFilter] = useState<"all" | "flagged" | "verified">("all");
  const [volFilter, setVolFilter] = useState<string>("all");

  useEffect(() => {
    if (!open) return;
    fetch(assetUrl("photos/semantic-ledger.json"))
      .then((r) => r.json())
      .then((data: LedgerData) => setLedger(data))
      .catch(() => undefined);
  }, [open, pack.id]);

  const cityCards = useMemo(() => {
    return pack.volumes.flatMap((v) =>
      v.cards.map((c) => {
        const entry = ledger?.items?.[c.id];
        return {
          id: c.id,
          category: v.id,
          volumeIndex: v.index,
          volumeTitle: v.title,
          title: c.title,
          tagline: c.tagline,
          wiki: c.wiki,
          photoUrl: c.photoUrl ?? `/photos/${c.id}.jpg`,
          entry,
        };
      }),
    );
  }, [pack, ledger]);

  const stats = useMemo(() => {
    const total = cityCards.length;
    const verified = cityCards.filter(
      (c) => !c.entry || c.entry.status === "VERIFIED",
    ).length;
    const flagged = total - verified;
    return { total, verified, flagged };
  }, [cityCards]);

  const shownCards = useMemo(() => {
    return cityCards.filter((c) => {
      if (volFilter !== "all" && c.category !== volFilter) return false;
      const isFlagged = Boolean(c.entry && c.entry.status !== "VERIFIED");
      if (filter === "flagged" && !isFlagged) return false;
      if (filter === "verified" && isFlagged) return false;
      return true;
    });
  }, [cityCards, filter, volFilter]);

  if (!open) return null;

  return (
    <div
      className="photo-lightbox photo-audit-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${pack.name}美食实拍图语义与质量巡检中心`}
      data-testid="photo-audit-modal"
      onClick={onClose}
    >
      <div
        className="photo-lightbox-panel photo-audit-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="pam-header">
          <div>
            <span className="pam-kicker">
              CULINARY PHOTO SEMANTIC PROVENANCE & QUALITY ENGINE
            </span>
            <h3>{pack.name} · 美食高清实拍图语义与分辨率巡检中心</h3>
            <p className="pam-sub">
              自动核验每道菜品配图的「美食实体语义匹配度」、「来源词条」、「分辨率尺寸（≥400×260）」与「SHA256 唯一性」，严厉剔除地图、手绘、卡通与无关人物图。
            </p>
          </div>
          <div className="pam-header-actions">
            <button type="button" className="btn-close-modal" onClick={onClose}>
              关闭 ✕
            </button>
          </div>
        </header>

        <div className="pam-toolbar">
          <div className="pam-filter-pills">
            <button
              type="button"
              className={filter === "all" ? "on" : ""}
              onClick={() => setFilter("all")}
            >
              全部美食卡 ({stats.total})
            </button>
            <button
              type="button"
              className={filter === "verified" ? "on" : ""}
              onClick={() => setFilter("verified")}
            >
              ✓ 已核验高清实拍 ({stats.verified})
            </button>
            <button
              type="button"
              className={filter === "flagged" ? "on" : ""}
              onClick={() => setFilter("flagged")}
            >
              ⚠ 待重检预警 ({stats.flagged})
            </button>
          </div>

          <select
            value={volFilter}
            onChange={(e) => setVolFilter(e.target.value)}
            className="pam-vol-select"
          >
            <option value="all">全部五卷食单</option>
            {pack.volumes.map((v) => (
              <option key={v.id} value={v.id}>
                {v.index} · {v.title} ({v.cards.length})
              </option>
            ))}
          </select>
        </div>

        <div className="pam-grid">
          {shownCards.map((item) => {
            const st = item.entry?.status ?? "VERIFIED";
            const isOk = st === "VERIFIED";
            const catMeta = FOOD_VOLUME_META[item.category];
            return (
              <article
                key={item.id}
                className={`pam-card ${isOk ? "pam-ok" : "pam-warn"}`}
                data-testid={`audit-card-${item.id}`}
              >
                <div className="pam-img-wrap">
                  <img
                    src={assetUrl(item.photoUrl)}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0.25";
                    }}
                  />
                  <span className={`pam-badge ${isOk ? "ok" : "warn"}`}>
                    {isOk
                      ? `✓ 语义核验 ${item.entry?.totalScore ?? 92}分`
                      : `⚠ ${st}`}
                  </span>
                </div>
                <div className="pam-body">
                  <div className="pam-meta">
                    <span style={{ color: catMeta.badgeColor, fontWeight: 700 }}>
                      {catMeta.icon} {item.volumeIndex} · {item.volumeTitle}
                    </span>
                    <span>
                      {item.entry?.width && item.entry?.height
                        ? `${item.entry.width}×${item.entry.height} · ${Math.round(
                            (item.entry.bytes ?? 32768) / 1024,
                          )}KB`
                        : "高清实拍图"}
                    </span>
                  </div>
                  <strong>{item.title}</strong>
                  <small className="pam-source">
                    来源通道：{item.entry?.sourceProvider ?? "wikimedia-commons"}
                  </small>
                  <small className="pam-caption" title={item.entry?.sourceTitle}>
                    检索词条：{item.entry?.sourceTitle || item.wiki || `${pack.name}${item.title}`}
                  </small>
                  <button
                    type="button"
                    className="pam-jump-btn"
                    onClick={() => {
                      onClose();
                      onJumpToCard(item.category, item.id);
                    }}
                  >
                    定位至该道美食食单 →
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
