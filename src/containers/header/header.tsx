import React from 'react'
import style from './header.module.css'
import CityNavBar from '../../components/city-nav-bar/city-nav-bar'
import { Logo } from '../../components/logo/logo'
import { DateInformation } from '../../components/date-information/date-information'

interface HeaderProps {
  timeZone: string
}

const Header = ({ timeZone }: HeaderProps) => {
  const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' })

  return (
    <header className={style.header}>
      <Logo />
      <CityNavBar />
      <DateInformation day={currentDay} timeZone={timeZone} />
    </header>
  )
}

export { Header }
