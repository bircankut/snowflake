import React from 'react'
import style from './weekly-weather.module.css'
import useSWR from 'swr'
import { WeeklyDay } from '../week-day/week-day'
import { HistoryResponse } from '../../types/types'

interface WeeklyWeatherProps {
  city: string
}

const WeeklyWeather = ({ city }: WeeklyWeatherProps) => {
  const date = new Date()
  const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    .toJSON()
    .slice(0, 10)
  const startTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - 5
  )
    .toJSON()
    .slice(0, 10)

  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  const { data } = useSWR<HistoryResponse>(
    `/api/history?q=${city}&dt=${startTime}&end_dt=${endTime}`,
    fetcher
  )

  return (
    <div className={style.weeklyWeather}>
      <div className={style.weekBox}>
        {data?.forecast?.forecastday?.map((day) => (
          <WeeklyDay
            key={day.date_epoch}
            day={day.day.maxtemp_c}
            text={day.day.condition.text}
            date={day.date}
          />
        ))}
      </div>
    </div>
  )
}

export { WeeklyWeather }
