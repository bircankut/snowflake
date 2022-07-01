import React from "react"
import style from './weather-informations.module.css'

interface WeatherInformationsProps {}

const WeatherInformations = ({}: WeatherInformationsProps) => {
  return(
    <div className={style.weatherInformations}>
      weather informations
    </div>
  )
}

export { WeatherInformations };