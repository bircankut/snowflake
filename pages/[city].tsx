import { Suspense, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Header } from '../src/containers/header/header'
import useSWR from 'swr'
import style from '../styles/city.module.css'
import { Information } from '../src/components/information/information'
import { WeeklyWeather } from '../src/components/weekly-weather/weekly-weather'
import { HamburgerMenu } from '../src/components/hamburger-menu/hamburger-menu'
import { Logo } from '../src/components/logo/logo'
import { TIME_ZONES } from '../src/constants/city'
import { CITY } from '../src/types/city'

const DynamicWeatherInformations = dynamic(
  () => import('../src/components/weather-chart/weather-chart'),
  {
    suspense: true,
    ssr: false,
  }
)

const City = () => {
  const router = useRouter()
  const city = ((router.query.city as string) || '').toLowerCase() as CITY
  const [isMenuActive, setIsMenuActive] = useState(false)
  const { data: currentWeatherData } = useSWR(`/api/current?q=${city}`)

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <div
      className={style.city}
      style={{ backgroundImage: `url("/${city}.jpg")` }}
    >
      <button className={style.logoBox} onClick={toggleMenu}>
        <Logo />
      </button>
      {isMenuActive && <HamburgerMenu toggleMenu={toggleMenu} />}
      <Header timeZone={TIME_ZONES[city]} />
      <div className={style.context}>
        <Information data={currentWeatherData} city={city} />
        <Suspense fallback="...">
          <DynamicWeatherInformations city={city} />
        </Suspense>
        <WeeklyWeather city={city} />
      </div>
    </div>
  )
}

export default City
