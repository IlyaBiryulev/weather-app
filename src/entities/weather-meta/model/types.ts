type WindData = {
  speed: number;
  angle: number;
  dir: string;
};

export type CurrentWeather = {
  icon: string;
  icon_num: number;
  summary: string;
  temperature: number;
  wind: WindData;
  precipitation: {
    total: number;
    type: string;
  };
  cloud_cover: number;
};

type AllDayData = {
  weather: string;
  icon: number;
  temperature: number;
  temperature_min: number;
  temperature_max: number;
  wind: WindData;
  cloud_cover: {
    total: number;
  };
  precipitation: {
    total: number;
    type: string;
  };
};

export type DailyWeather = {
  day: string;
  weather: string;
  icon: number;
  summary: string;
  all_day: AllDayData;
  morning: string;
  afternoon: string;
  evening: string;
};

export type Weather = {
  lat: string;
  lon: string;
  elevation: number;
  timezone: string;
  units: string;
  current: CurrentWeather;
  daily: {
    data: DailyWeather[];
  };
};
