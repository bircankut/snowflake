import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import React from 'react'
import Link from 'next/link'
import { CITIES } from "../src/types/city";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>
        <img className={styles.imageContainer} src="/landing-icon.svg" />
      </div>
      <div className={styles.textBox}>
        <span className={styles.weatherHeader}>Choice Your City</span>
        <ul className={styles.buttonBox}>
          {CITIES.map((cityName) => (
            <li key={cityName} className={styles.button}>
              <Link href={`/${cityName}`}>
                <a>{cityName}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
