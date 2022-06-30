import { useRouter } from 'next/router'
import { Header } from '../src/containers/header/header'
import useSWR from 'swr';

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
    <div>
      <Header day={day} timeZone={TimeZones[`${city}`]}/>
      <p>City: {city}</p>
      {data?.current?.temp_c}
    </div>
  )
}

export default City
