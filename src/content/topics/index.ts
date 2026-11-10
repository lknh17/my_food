import type { SpecialTopicId, SpecialTopicPack } from "../types";
import { eightCuisinesPack } from "./eightCuisines";
import { noodlesCompendiumPack } from "./noodlesCompendium";
import { riceNoodlesCompendiumPack } from "./riceNoodlesCompendium";
import { hotpotJianghuPack } from "./hotpotJianghu";
import { morningFeastPack } from "./morningFeast";
import { bbqNightmarketPack } from "./bbqNightmarket";
import { pastriesSweetSoupsPack } from "./pastriesSweetSoups";

export const allSpecialTopics: SpecialTopicPack[] = [
  eightCuisinesPack,
  noodlesCompendiumPack,
  riceNoodlesCompendiumPack,
  hotpotJianghuPack,
  morningFeastPack,
  bbqNightmarketPack,
  pastriesSweetSoupsPack,
];

export const specialTopicsById: Record<SpecialTopicId, SpecialTopicPack> = {
  "eight-cuisines": eightCuisinesPack,
  "noodles-compendium": noodlesCompendiumPack,
  "rice-noodles-compendium": riceNoodlesCompendiumPack,
  "hotpot-jianghu": hotpotJianghuPack,
  "morning-feast": morningFeastPack,
  "bbq-nightmarket": bbqNightmarketPack,
  "pastries-sweet-soups": pastriesSweetSoupsPack,
};

export function getSpecialTopicPack(id?: SpecialTopicId): SpecialTopicPack {
  if (id && specialTopicsById[id]) return specialTopicsById[id];
  return eightCuisinesPack;
}

export {
  eightCuisinesPack,
  noodlesCompendiumPack,
  riceNoodlesCompendiumPack,
  hotpotJianghuPack,
  morningFeastPack,
  bbqNightmarketPack,
  pastriesSweetSoupsPack,
};
