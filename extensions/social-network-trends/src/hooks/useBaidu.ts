import { BAIDU_TOPHUB } from "../utils/constants";
import { Trend } from "../types/types";
import { useCachedPromise } from "@raycast/utils";
import { fetchTrend } from "../utils/common-utils";

export function useBaidu() {
  return useCachedPromise(() => {
    return fetchTrend(BAIDU_TOPHUB) as Promise<Trend[]>;
  });
}
