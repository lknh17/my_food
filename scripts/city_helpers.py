#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Compact helpers for CityFoodPack specs."""

from __future__ import annotations

from typing import Any, Dict, List, Optional, Sequence, Tuple

Spot = Tuple[str, str, str]
CardSpec = Dict[str, Any]


def spot(name: str, addr: str, note: str = "") -> Dict[str, str]:
    out = {"name": name, "addressHint": addr}
    if note:
        out["note"] = note
    return out


def C(
    id_: str,
    title: str,
    flavor: str,
    method: str,
    ingredients: str,
    tagline: str,
    body: str,
    spots: Sequence[Spot],
    wiki: str,
    query: Optional[str] = None,
    eight: Optional[str] = None,
    era: str = "清末民初传统名作",
    heritage: str = "地方非遗 / 城市名片",
    cuisine_style: Optional[str] = None,
    coord: Optional[List[float]] = None,
) -> CardSpec:
    card: CardSpec = {
        "id": id_,
        "title": title,
        "flavorProfile": flavor,
        "cookingMethod": method,
        "mainIngredients": ingredients,
        "tagline": tagline,
        "body": body,
        "famousSpots": [spot(*s) for s in spots],
        "wiki": wiki,
        "originEra": era,
        "heritageTag": heritage,
    }
    if query:
        card["query"] = query
    if eight:
        card["eightCuisine"] = eight
    if cuisine_style:
        card["cuisineStyle"] = cuisine_style
    if coord:
        card["coord"] = coord
    return card


def vol(lede: str, cards: List[CardSpec], subtitle: Optional[str] = None) -> Dict[str, Any]:
    out: Dict[str, Any] = {"lede": lede, "cards": cards}
    if subtitle:
        out["subtitle"] = subtitle
    return out


def city(
    id_: str,
    name: str,
    province: str,
    region_group: str,
    center: List[float],
    cuisine_tag: str,
    eight: str,
    dominant: str,
    staple: str,
    hero_headline: str,
    hero_dek: str,
    signature: List[str],
    ov_subtitle: str,
    leads: List[str],
    radar: List[Tuple[str, int, str]],
    facts: List[Tuple[str, str, str]],
    chains: List[Dict[str, str]],
    volumes: Dict[str, Dict[str, Any]],
    zoom: int = 11,
) -> Dict[str, Any]:
    return {
        "id": id_,
        "name": name,
        "province": province,
        "regionGroup": region_group,
        "center": center,
        "defaultZoom": zoom,
        "cuisineTag": cuisine_tag,
        "eightCuisine": eight,
        "dominantFlavor": dominant,
        "stapleType": staple,
        "heroHeadline": hero_headline,
        "heroDek": hero_dek,
        "signatureDishes": signature,
        "overview": {
            "subtitle": ov_subtitle,
            "leadParagraphs": leads,
            "flavorRadar": radar,
            "culinaryFacts": facts,
            "causalityChains": chains,
        },
        "volumes": volumes,
    }
