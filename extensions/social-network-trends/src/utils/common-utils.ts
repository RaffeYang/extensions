import { Icon } from "@raycast/api";
import fetch from "node-fetch";
import { SocialTrend, TopHubNodeRes, Trend } from "../types/types";
import { showTrendsTitle, trendsNumber, tophubAccessKey } from "../types/preferences";

export const getNumberIcon = (index: number) => {
  const numberStr = index < 10 ? "0" + index : index.toString();
  return `number-${numberStr}-16` as Icon;
};

export const isEmpty = (str: string | undefined): boolean => {
  return typeof str === "undefined" || str === "";
};

export async function fetchTrend(api: string) {
  const accessKey = tophubAccessKey?.trim();
  if (!accessKey) {
    return [];
  }

  const response = await fetch(api, {
    headers: {
      Authorization: accessKey,
    },
  });
  if (!response.ok) {
    throw new Error(`TopHubData request failed: ${response.status}`);
  }

  const res = (await response.json()) as TopHubNodeRes;
  const items = res?.data?.items ?? [];
  return items.map((item) => {
    return {
      name: item.title,
      url: item.url,
      hot: item.extra,
    };
  });
}

export function getMenubarTitle(socialTrend: SocialTrend[]) {
  if (showTrendsTitle && socialTrend.length > 0 && socialTrend[0].data.length > 0) {
    return socialTrend[0].data[0].name;
  } else {
    return undefined;
  }
}

export function spliceTrends(socialTrend: Trend[], count: number = parseInt(trendsNumber)) {
  return [...socialTrend].splice(0, count);
}
