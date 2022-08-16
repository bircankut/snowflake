import React from 'react'
import style from './information.module.css'
import { Data } from '../../types/types'
import { WEATHER_ICONS } from '../../constants/weather'
import { CITY_NAMES_WITH_COUNTRIES } from '../../constants/city'
import { CITY } from '../../types/city'

interface InformationProps {
  city: CITY
  data: Data
}

const Information = ({ data, city }: InformationProps) => {
  return (
    <div className={style.information}>
      <div className={style.cityTemputureBox}>
        <img
          className={style.icons}
          src={WEATHER_ICONS[data?.current?.condition.text]}
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
        <p className={style.cityText}>{CITY_NAMES_WITH_COUNTRIES[city]}</p>
      </div>
    </div>
  )
}

export { Information }
