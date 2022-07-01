import React from "react"
import style from './weekly-weather.module.css'

interface WeeklyWeatherProps {}

const WeeklyWeather = ({}: WeeklyWeatherProps) => {
  return(
    <div className={style.weeklyWeather}>
      weekly weather
    </div>
  )
}

export { WeeklyWeather };