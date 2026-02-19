import { BILI_TOPHUB } from "../utils/constants";
import { Trend } from "../types/types";
import { useCachedPromise } from "@raycast/utils";
import { fetchTrend } from "../utils/common-utils";

export function useBili() {
  return useCachedPromise(() => {
    return fetchTrend(BILI_TOPHUB) as Promise<Trend[]>;
  });
}
