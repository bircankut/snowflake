import { useRouter } from 'next/router'
import { Header } from '../src/containers/header/header'

const City = () => {
  const router = useRouter()
  const { city } = router.query
  return (
    <div>
      <Header/>
      <p>City: {city}</p>
    </div>
  )
}

export default City
