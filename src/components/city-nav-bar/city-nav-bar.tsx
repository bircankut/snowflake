import React from 'react'
import style from './city-nav-bar.module.css'
import Link from 'next/link'

const CityNavBar = () => {
  return (
    <ul className={`${style.cities} ${style.font}`}>
      <li>
        <Link href="/berlin">
          <a>Berlin</a>
        </Link>
      </li>
      <li>
        <Link href="/london">
          <a>London</a>
        </Link>
      </li>
      <li>
        <Link href="/tokyo">
          <a>Tokyo</a>
        </Link>
      </li>
    </ul>
  )
}

export default CityNavBar
