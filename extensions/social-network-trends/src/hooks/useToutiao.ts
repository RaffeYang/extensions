import { TOUTIAO_TOPHUB } from "../utils/constants";
import { Trend } from "../types/types";
import { useCachedPromise } from "@raycast/utils";
import { fetchTrend } from "../utils/common-utils";

export function useToutiao() {
  return useCachedPromise(() => {
    return fetchTrend(TOUTIAO_TOPHUB) as Promise<Trend[]>;
  });
}
