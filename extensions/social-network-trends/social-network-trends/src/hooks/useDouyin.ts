import { DOUYIN_TOPHUB } from "../utils/constants";
import { Trend } from "../types/types";
import { useCachedPromise } from "@raycast/utils";
import { fetchTrend } from "../utils/common-utils";

export function useDouyin() {
  return useCachedPromise(() => {
    return fetchTrend(DOUYIN_TOPHUB) as Promise<Trend[]>;
  });
}
