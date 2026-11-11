import type { SpecialTopicId, SpecialTopicPack } from "../types";
import { eightCuisinesPack } from "./eightCuisines";
import { morningFeastPack } from "./morningFeast";
import { noodlesCompendiumPack } from "./noodlesCompendium";
import { riceNoodlesCompendiumPack } from "./riceNoodlesCompendium";
import { hotpotJianghuPack } from "./hotpotJianghu";
import { bbqNightmarketPack } from "./bbqNightmarket";
import { pastriesSweetSoupsPack } from "./pastriesSweetSoups";
import { teaAndWinePack } from "./teaAndWine";
import { seasonalFeastPack } from "./seasonalFeast";
import { heritageBanquetsPack } from "./heritageBanquets";

export const allSpecialTopics: SpecialTopicPack[] = [
  eightCuisinesPack,
  morningFeastPack,
  noodlesCompendiumPack,
  riceNoodlesCompendiumPack,
  hotpotJianghuPack,
  bbqNightmarketPack,
  pastriesSweetSoupsPack,
  teaAndWinePack,
  seasonalFeastPack,
  heritageBanquetsPack,
];

export const specialTopicsById: Record<SpecialTopicId, SpecialTopicPack> = {
  "eight-cuisines": eightCuisinesPack,
  "morning-feast": morningFeastPack,
  "noodles-compendium": noodlesCompendiumPack,
  "rice-noodles-compendium": riceNoodlesCompendiumPack,
  "hotpot-jianghu": hotpotJianghuPack,
  "bbq-nightmarket": bbqNightmarketPack,
  "pastries-sweet-soups": pastriesSweetSoupsPack,
  "tea-and-wine": teaAndWinePack,
  "seasonal-feast": seasonalFeastPack,
  "heritage-banquets": heritageBanquetsPack,
};

export function getSpecialTopicPack(id?: SpecialTopicId): SpecialTopicPack {
  if (id && specialTopicsById[id]) return specialTopicsById[id];
  return eightCuisinesPack;
}

export {
  eightCuisinesPack,
  morningFeastPack,
  noodlesCompendiumPack,
  riceNoodlesCompendiumPack,
  hotpotJianghuPack,
  bbqNightmarketPack,
  pastriesSweetSoupsPack,
  teaAndWinePack,
  seasonalFeastPack,
  heritageBanquetsPack,
};
