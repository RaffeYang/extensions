import { ZHIHU_TOPHUB } from "../utils/constants";
import { Trend } from "../types/types";
import { useCachedPromise } from "@raycast/utils";
import { fetchTrend } from "../utils/common-utils";

export function useZhihu() {
  return useCachedPromise(() => {
    return fetchTrend(ZHIHU_TOPHUB) as Promise<Trend[]>;
  });
}
