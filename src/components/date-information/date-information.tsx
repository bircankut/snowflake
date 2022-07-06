import React from 'react'
import { Clock } from '../clock/clock'
import style from './date-information.module.css'

interface DateInformationProps {
  day: string
  timeZone: string
}

const DateInformation = ({ day, timeZone }: DateInformationProps) => {
  return (
    <div className={style.date}>
      <span className={style.dateText}>{day}</span>
      <Clock timeZone={timeZone} />
    </div>
  )
}

export { DateInformation }
