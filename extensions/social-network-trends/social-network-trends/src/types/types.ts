export interface TopHubNodeRes {
  error: boolean;
  status: number;
  data: {
    items: TopHubItem[];
  };
}

export interface TopHubItem {
  title: string;
  url: string;
  extra?: string;
}

export interface Trend {
  name: string;
  url: string;
  hot?: string;
}

export interface SocialTrend {
  title: string;
  data: Trend[];
}
