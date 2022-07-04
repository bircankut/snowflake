import { useRouter } from 'next/router'
import { Header } from '../src/containers/header/header'
import useSWR from 'swr'
import style from '../styles/city.module.css'
import { Information } from '../src/components/information/information'
import { WeeklyWeather } from '../src/components/weekly-weather/weekly-weather'
import {WeatherInformations} from "../src/components/weather-informations/weather-informations";

const TimeZones: { [key: string]: string; } = {
  'Berlin': 'Europe/Berlin',
  'London': 'Europe/London',
  'Tokyo': 'Asia/Tokyo',
}

const City = () => {
  const router = useRouter()
  const { city } = router.query;

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(`/api/current?q=${city}`, fetcher);
  const day = new Date().toLocaleString('en-us', {  weekday: 'long' });

  return (
    <div className={style.city} style={{backgroundImage: `url("/${city}.jpg")`}}>
      <Header day={day} timeZone={TimeZones[city as string]}/>
      <div className={style.context}>
        <Information data={data} city={city}/>
        <WeatherInformations city={city}/>
        <WeeklyWeather city={city}/>
      </div>
    </div>
  )
}

export default City
