import React from 'react'
import { WEATHER_ICONS } from '../../constants/weather'
import style from './week-day.module.css'

interface WeeklyDayProps {
  day: number
  text: string
  date: string
}

const WeeklyDay = ({ day, text, date }: WeeklyDayProps) => {
  const dt = new Date(`${date}`)
  const currentDay = dt.toLocaleDateString('en-us', { weekday: 'long' })
  return (
    <div className={style.weekDay}>
      <span className={style.temperatureText}>{day}</span>
      <img className={style.icon} src={WEATHER_ICONS[text]} alt="weather icon" />
      <span className={style.temperatureText}>{currentDay}</span>
    </div>
  )
}

export { WeeklyDay }
