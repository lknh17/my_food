import { useCallback, useEffect, useMemo, useState } from "react";
import { allCityFoodPacks, getCityFoodPack } from "./content/cities";
import { allSpecialTopics } from "./content/topics";
import type { FoodCategoryId, SpecialTopicId } from "./content/types";
import { ChinaFoodPortal } from "./ui/ChinaFoodPortal";
import { CityFoodGazetteer } from "./ui/CityFoodGazetteer";
import { CitySwitcherModal } from "./ui/CitySwitcherModal";
import { FoodPassportModal } from "./ui/FoodPassportModal";
import type { FoodFolio } from "./ui/FoodSidebarIndex";
import { SpecialTopicsHub } from "./ui/SpecialTopicsHub";

export type AppDesk = "portal" | "topics" | "gazetteer";

const VALID_CATEGORIES = new Set<string>([
  "overview",
  "dacai",
  "xiaochi",
  "zhushi",
  "fengwu",
  "shijie",
]);

const VALID_TOPICS = new Set<string>([
  "eight-cuisines",
  "noodles-compendium",
  "rice-noodles-compendium",
  "hotpot-jianghu",
  "morning-feast",
  "bbq-nightmarket",
  "pastries-sweet-soups",
  "tea-and-wine",
  "seasonal-feast",
  "heritage-banquets",
]);

export function App() {
  const [desk, setDesk] = useState<AppDesk>("portal");
  const [activeCityId, setActiveCityId] = useState<string>("chengdu");
  const [activeTopicId, setActiveTopicId] = useState<SpecialTopicId>("eight-cuisines");
  const [activeCategory, setActiveCategory] = useState<FoodFolio>("overview");
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [passportOpen, setPassportOpen] = useState<boolean>(false);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  const activeCity = useMemo(
    () => getCityFoodPack(activeCityId),
    [activeCityId],
  );

  // Parse URL hash on initial load and hashchange
  useEffect(() => {
    const applyFromHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) return;
      const params = new URLSearchParams(raw);
      const viewParam = params.get("view");
      const cityParam = params.get("city");
      const volParam = params.get("vol") ?? params.get("folio");
      const topicParam = params.get("topic");
      const cardParam = params.get("card");

      if (cityParam) {
        const matched = getCityFoodPack(cityParam);
        if (matched) setActiveCityId(matched.id);
      }
      if (volParam && VALID_CATEGORIES.has(volParam)) {
        setActiveCategory(volParam as FoodFolio);
      }
      if (cardParam) {
        setActiveCardId(cardParam);
      }
      if (topicParam && VALID_TOPICS.has(topicParam)) {
        setActiveTopicId(topicParam as SpecialTopicId);
      }

      if (viewParam === "topics" || (!viewParam && topicParam)) {
        setDesk("topics");
      } else if (viewParam === "gazetteer" || viewParam === "map" || (!viewParam && cityParam)) {
        setDesk("gazetteer");
      } else if (viewParam === "portal") {
        setDesk("portal");
      }
    };

    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  // Sync URL hash when state updates
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("view", desk);
    if (desk === "topics") {
      params.set("topic", activeTopicId);
    } else if (desk === "gazetteer") {
      params.set("city", activeCity.id);
      params.set("vol", activeCategory);
      if (activeCardId) {
        params.set("card", activeCardId);
      }
    } else if (activeCityId && activeCityId !== "chengdu") {
      params.set("city", activeCity.id);
    }
    const nextHash = `#${params.toString()}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, [desk, activeCity.id, activeCityId, activeCategory, activeCardId, activeTopicId]);

  // Global Cmd+K / Ctrl+K shortcut for City & Dish search modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchModalOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleEnterGazetteer = useCallback(
    (cityId: string, category?: FoodCategoryId, cardId?: string) => {
      const pack = getCityFoodPack(cityId);
      setActiveCityId(pack.id);
      setActiveCategory(category ?? "overview");
      setActiveCardId(cardId ?? null);
      setDesk("gazetteer");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [],
  );

  const handleOpenTopicsHub = useCallback((topicId?: SpecialTopicId) => {
    if (topicId) setActiveTopicId(topicId);
    setDesk("topics");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="app shiwei-app"
      data-desk={desk}
      data-city={activeCity.id}
      data-testid="app"
    >
      {desk === "portal" && (
        <ChinaFoodPortal
          cities={allCityFoodPacks}
          topics={allSpecialTopics}
          selectedCityId={activeCity.id}
          onSelectCity={(cid) => setActiveCityId(cid)}
          onEnterGazetteer={handleEnterGazetteer}
          onOpenTopicsHub={handleOpenTopicsHub}
          onOpenPassport={() => setPassportOpen(true)}
          onOpenSearchModal={() => setSearchModalOpen(true)}
        />
      )}

      {desk === "topics" && (
        <SpecialTopicsHub
          topics={allSpecialTopics}
          activeTopicId={activeTopicId}
          onSelectTopic={(tid) => {
            setActiveTopicId(tid);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onEnterCityGazetteer={handleEnterGazetteer}
          onBackToPortal={() => setDesk("portal")}
          onOpenPassport={() => setPassportOpen(true)}
          onOpenSearchModal={() => setSearchModalOpen(true)}
        />
      )}

      {desk === "gazetteer" && (
        <CityFoodGazetteer
          pack={activeCity}
          allCities={allCityFoodPacks}
          folio={activeCategory}
          activeCardId={activeCardId}
          onSelectFolio={(nextFolio) => setActiveCategory(nextFolio)}
          onSelectCard={(cid) => setActiveCardId(cid)}
          onSelectCity={(cid) => {
            setActiveCityId(cid);
            setActiveCategory("overview");
            setActiveCardId(null);
          }}
          onOpenPortal={() => setDesk("portal")}
          onOpenTopicsHub={handleOpenTopicsHub}
          onOpenPassport={() => setPassportOpen(true)}
          onOpenSearchModal={() => setSearchModalOpen(true)}
        />
      )}

      {/* 全局美食与城市搜索弹窗 (⌘K) */}
      <CitySwitcherModal
        open={searchModalOpen}
        cities={allCityFoodPacks}
        currentCity={activeCity}
        onSelectCity={(cid) => handleEnterGazetteer(cid)}
        onSelectDish={(cid, cat, cardId) => handleEnterGazetteer(cid, cat, cardId)}
        onOpenChinaPortal={() => setDesk("portal")}
        onClose={() => setSearchModalOpen(false)}
      />

      {/* 我的食单 · 寻味记录与想吃清单弹窗 */}
      <FoodPassportModal
        open={passportOpen}
        onClose={() => setPassportOpen(false)}
        cities={allCityFoodPacks}
        onSelectCity={(cid) => handleEnterGazetteer(cid)}
        onSelectDish={(cid, cat, cardId) => handleEnterGazetteer(cid, cat, cardId)}
      />
    </div>
  );
}
