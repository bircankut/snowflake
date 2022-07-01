import React from "react"
import style from './weather-information.module.css'

interface WeatherInformationProps {
  city: string;
  data: object;
}

const Countries: { [key: string]: string; } = {
  'Berlin': 'Berlin, DE',
  'London': 'London, UK',
  'Tokyo': 'Tokyo, JP',
}

const WeatherInformation = ({data, city}: WeatherInformationProps) => {
  return(
    <div className={style.weatherInformation}>
      <div className={style.cityTemputureBox}>
        <img src="" alt=""/>
        <span>klfka</span>
      </div>
      <div className={style.cityInformationBox}>
        <span>dfjsdfk</span>
        <p>{Countries[city as string]}</p>
      </div>
    </div>
  )
}

export { WeatherInformation };