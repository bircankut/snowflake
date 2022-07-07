import React from 'react'
import style from './information.module.css'
import { Data } from '../../types/types'

interface InformationProps {
  city: string
  data: Data
}

const Countries: { [key: string]: string } = {
  berlin: 'BERLIN, DE',
  london: 'LONDON, UK',
  tokyo: 'TOKYO, JP',
}

export const ICONS: { [key: string]: string } = {
  'Sunny': '/icons/sunny.svg',
  'Partly cloudy': '/icons/partly-cloudy.svg',
  'Light rain shower': '/icons/light-rain-shower.svg',
  'Cloudy': '/icons/cloudy.svg',
  'Overcast': '/icons/overcast.svg',
  'Mist': '/icons/mist.svg',
  'Partly rain possible': '/icons/partly-rain-possible.svg',
  'Patchy snow possible': '/icons/patchy-snow-possible.svg',
  'Patchy sleet possible': '/icons/patchy-sleet-possible.svg',
  'Patchy freezing drizzle possible':
    '/icons/patchy-freezing-drizzle-possible.svg',
  'Patchy light drizzle': '/icons/patchy-freezing-drizzle-possible.svg',
  'Light drizzle': '/icons/drizzle.svg',
  'Freezing drizzle': '/icons/drizzle.svg',
  'Heavy freezing drizzle': '/icons/drizzle.svg',
  'Thundery outbreaks possible': '/icons/thunder-possible.svg',
  'Blowing snow': '/icons/blowing-snow.svg',
  'Blizzard': '/icons/blizzard.svg',
  'Fog': '/icons/fog.svg',
  'Freezing fog': '/icons/freezing-fog.svg',
  'Patchy light rain': '/icons/partly-rain-possible.svg',
  'Light rain': '/icons/rain.svg',
  'Moderate rain at times': '/icons/rain.svg',
  'Moderate rain': '/icons/rain.svg',
  'Heavy rain at times': '/icons/rain.svg',
  'Heavy rain': '/icons/rain.svg',
  'Light freezing rain': '/icons/rain.svg',
  'Moderate or heavy freezing rain': '/icons/rain.svg',
  'Light sleet': '/icons/sleet.svg',
  'Moderate or heavy sleet': '/icons/sleet.svg',
  'Patchy light snow': '/icons/patchy-snow-possible.svg',
  'Light snow': '/icons/snow.svg',
  'Patchy moderate snow': '/icons/snow.svg',
  'Moderate snow': '/icons/snow.svg',
  'Patchy heavy snow': '/icons/patchy-snow-possible.svg',
  'Heavy snow': '/icons/snow.svg',
  'Ice Pellets': '/icons/ice-pellets.svg',
  'Moderate or heavy rain shower': '/icons/rain.svg',
  'Torrential rain shower': '/icons/rain.svg',
  'Light sleet showers': '/icons/sleet.svg',
  'Moderate or heavy sleet showers': '/icons/sleet.svg',
  'Light snow showers': '/icons/snow.svg',
  'Moderate or heavy snow showers': '/icons/snow.svg',
  'Light showers of ice pellets': '/icons/ice-pellets.svg',
  'Patchy rain possible': '/icons/partly-rain-possible.svg',
  'Moderate or heavy showers of ice pellets': '/icons/ice-pellets.svg',
  'Patchy light rain with thunder': '/icons/rain-with-thunder.svg',
  'Moderate or heavy rain with thunder':
    '/icons/rain-with-thunder.svg',
  'Patchy light snow with thunder': '/icons/snow-with-thunder.svg',
  'Moderate or heavy snow with thunder':
    '/icons/snow-with-thunder.svg',
  'Clear': '/icons/clear.svg',
}

const Information = ({ data, city }: InformationProps) => {
  return (
    <div className={style.information}>
      <div className={style.cityTemputureBox}>
        <img
          className={style.icons}
          src={ICONS[data?.current?.condition.text]}
          alt="weather icon"
        />
        <span className={style.weatherTemperature}>
          {data?.current?.temp_c}&deg;
        </span>
      </div>
      <div className={style.line} />
      <div className={style.cityInformationBox}>
        <span className={style.weatherText}>
          {data?.current?.condition.text}
        </span>
        <p className={style.cityText}>{Countries[city as string]}</p>
      </div>
    </div>
  )
}

export { Information }
