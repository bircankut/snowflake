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

const DynamicWeatherInformations = dynamic(
  () => import('../src/components/weather-chart/weather-chart'),
  {
    suspense: true,
    ssr: false,
  }
)

const TimeZones: { [key: string]: string } = {
  berlin: 'Europe/Berlin',
  london: 'Europe/London',
  tokyo: 'Asia/Tokyo',
}

const City = () => {
  const router = useRouter()
  let { city } = router.query
  city = ((city as string) || '').toLowerCase()
  const [menu, setMenu]= useState(false)

  function hamburgerMenu(){
    setMenu(!menu)
  }

  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  const { data } = useSWR(`/api/current?q=${city}`, fetcher)
  const day = new Date().toLocaleString('en-us', { weekday: 'long' })

  return (
    <div
      className={style.city}
      style={{ backgroundImage: `url("/${city}.jpg")` }}
    >
        <button className={style.logoBox} onClick={()=> hamburgerMenu()}>
          <Logo/>
        </button>
      {menu && <HamburgerMenu hamburgerMenu={hamburgerMenu}/>}
      <Header day={day} timeZone={TimeZones[city as string]} />
      <div className={style.context}>
        <Information data={data} city={city as string} />
        <Suspense fallback="...">
          <DynamicWeatherInformations city={city as string} />
        </Suspense>
        <WeeklyWeather city={city as string} />
      </div>
    </div>
  )
}

export default City
