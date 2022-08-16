import { CITY } from "../types/city"

export const CITY_NAMES = {
  [CITY.BERLIN]: "Berlin",
  [CITY.LONDON]: "London",
  [CITY.TOKYO]: "Tokyo"
} as const;

export const CITY_NAMES_WITH_COUNTRIES = {
  [CITY.BERLIN]: 'BERLIN, DE',
  [CITY.LONDON]: 'LONDON, UK',
  [CITY.TOKYO]: 'TOKYO, JP',
} as const;

export const TIME_ZONES = {
  [CITY.BERLIN]: 'Europe/Berlin',
  [CITY.LONDON]: 'Europe/London',
  [CITY.TOKYO]: 'Asia/Tokyo',
} as const;

export const CITIES = [CITY.BERLIN, CITY.LONDON, CITY.TOKYO] as const;
