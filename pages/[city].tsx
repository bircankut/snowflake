import { useRouter } from 'next/router'
import { Header } from '../src/containers/header/header'
import useSWR from 'swr'
import style from '../styles/city.module.css'

const TimeZones: { [key: string]: string; } = {
  'Berlin': 'Europe/Berlin',
  'London': 'Europe/London',
  'Tokyo': 'Asia/Tokyo',
}
const images: { [key: string]: string; } = {
  'Berlin': '/Berlin.jpg',
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
        <p>City: {city}</p>
        {data?.current?.temp_c}
      </div>
    </div>
  )
}

export default City
