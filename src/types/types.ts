export interface Data {
  location: unknown;
  current: Current;
}

interface Current {
  last_updated_epoch: number;
  last_updated: number;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}
interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface HistoryResponse {
  location: unknown;
  forecast: Forecast;
}

interface Forecast {
  forecastday: ForecastDay[];
}

interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: unknown;
  hour: Hour[];
}

interface Day{
  maxtemp_c: number;
  maxtemp_f: number,
  mintemp_c: number,
  mintemp_f: number,
  avgtemp_c: number,
  avgtemp_f: number,
  maxwind_mph: number,
  maxwind_kph: number,
  totalprecip_mm: number,
  totalprecip_in: number,
  avgvis_km: number,
  avgvis_miles: number,
  avghumidity: number,
  condition: Condition,
  uv: number,
}

interface Hour {
  time_epoch: number,
  time: string,
  temp_c: number,
  temp_f: number,
  condition: Condition,
  wind_mph: number,
  wind_kph: number,
  wind_degree: number,
  wind_dir: number,
  pressure_mb: number,
  pressure_in: number,
  precip_mm: number,
  humidity: number,
  cloud: number,
  feelslike_c: number,
  feelslike_f: number,
  windchill_c: number,
  windchill_f: number,
  heatindex_c: number,
  heatindex_f: number,
  dewpoint_c: number,
  dewpoint_f: number,
  will_it_rain: number,
  will_it_snow: number,
  is_day: number,
  vis_km: number,
  vis_miles: number,
  chance_of_rain: number,
  chance_of_snow: number,
  gust_mph: number,
  gust_kph: number,
}