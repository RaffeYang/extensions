import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  tophubAccessKey: string;
  rememberTag: boolean;
  trendsNumber: string;
  showTrendsTitle: boolean;
  showWeibo: boolean;
  showBaiDu: boolean;
  showZhiHu: boolean;
  showDouYin: boolean;
  showBiliBili: boolean;
  showTouTiao: boolean;
}

export const {
  tophubAccessKey,
  rememberTag,
  trendsNumber,
  showTrendsTitle,
  showWeibo,
  showBaiDu,
  showZhiHu,
  showDouYin,
  showBiliBili,
  showTouTiao,
} = getPreferenceValues<Preferences>();
