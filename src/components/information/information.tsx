import React from "react"
import style from './information.module.css'
import {Data} from "../../types/types";

interface InformationProps {
  city: string;
  data: Data;
}

const Countries: { [key: string]: string; } = {
  'Berlin': 'BERLIN, DE',
  'London': 'LONDON, UK',
  'Tokyo': 'TOKYO, JP',
}

export const ICONS: { [key: string]: string } = {
  'Sunny': '/icons/sunny.png',
  'Partly cloudy': '/icons/partlyCloudy.png',
  'Light rain shower': '/icons/lightRainyShower.png',
  'Cloudy': '/icons/cloudy.png',
  'Overcast': '/icons/overcast.png',
  'Mist': '/icons/mist.png',
  'Partly rain possible': '/icons/partlyRainPossible.png',
  'Patchy snow possible': '/icons/partlySnowPossible.png',
  'Patchy sleet possible': '/icons/partlySleetPossible.png',
  'Patchy freezing drizzle possible': '/icons/patchyFreezingDrizzlePossible.png',
  'Patchy light drizzle': '/icons/patchyFreezingDrizzlePossible.png',
  'Light drizzle': '/icons/patchyFreezingDrizzlePossible.png',
  'Freezing drizzle': '/icons/patchyFreezingDrizzlePossible.png',
  'Heavy freezing drizzle': '/icons/patchyFreezingDrizzlePossible.png',
  'Thundery outbreaks possible': '/icons/thunderyOutbreaksPossible.png',
  'Blowing snow':'/icons/blowingSnow.png',
  'Blizzard': '/icons/blizzard.png',
  'Fog': '/icons/mist.png',
  'Freezing fog': '/icons/mist.png',
  'Patchy light rain': '/icons/lightRainyShower.png',
  'Light rain': '/icons/lightRainyShower.png',
  'Moderate rain at times': '/icons/lightRainyShower.png',
  'Moderate rain': '/icons/lightRainyShower.png',
  'Heavy rain at times': '/icons/lightRainyShower.png',
  'Heavy rain': '/icons/lightRainyShower.png',
  'Light freezing rain': '/icons/lightRainyShower.png',
  'Moderate or heavy freezing rain': '/icons/lightRainyShower.png',
  'Light sleet': '/icons/partlySleetPossible.png',
  'Moderate or heavy sleet': '/icons/partlySleetPossible.png',
  'Patchy light snow':'/icons/blowingSnow.png',
  'Light snow':'/icons/blowingSnow.png',
  'Patchy moderate snow':'/icons/blowingSnow.png',
  'Moderate snow':'/icons/blowingSnow.png',
  'Patchy heavy snow':'/icons/blowingSnow.png',
  'Heavy snow':'/icons/blowingSnow.png',
  'Ice Pellets':'/icons/icePellets.png',
  'Moderate or heavy rain shower': '/icons/lightRainyShower.png',
  'Torrential rain shower': '/icons/lightRainyShower.png',
  'Light sleet showers': '/icons/partlySleetPossible.png',
  'Moderate or heavy sleet showers': '/icons/partlySleetPossible.png',
  'Light snow showers':'/icons/blowingSnow.png',
  'Moderate or heavy snow showers':'/icons/blowingSnow.png',
  'Light showers of ice pellets':'/icons/icePellets.png',
  'Patchy rain possible': '/icons/partlyRainPossible.png',
  'Moderate or heavy showers of ice pellets':'/icons/icePellets.png',
  'Patchy light rain with thunder': '/icons/patchyLightRainWithThunder.png',
  'Moderate or heavy rain with thunder': '/icons/patchyLightRainWithThunder.png',
  'Patchy light snow with thunder': '/icons/patchyLightSnowWithThunder.png',
  'Moderate or heavy snow with thunder': '/icons/patchyLightSnowWithThunder.png',
  'Clear': '/icons/clear.png',
}

const Information = ({data, city}: InformationProps) => {
  return(
    <div className={style.information}>
      <div className={style.cityTemputureBox}>
        <img className={style.icons} src={ICONS[data?.current?.condition.text]} alt="weather icon"/>
        <span className={style.weatherTemperature}>{data?.current?.temp_c}&deg;</span>
      </div>
      <div className={style.line}/>
      <div className={style.cityInformationBox}>
        <span className={style.weatherText}>{data?.current?.condition.text}</span>
        <p className={style.cityText}>{Countries[city as string]}</p>
      </div>
    </div>
  )
}

export { Information };