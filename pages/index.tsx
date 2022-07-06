import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import React from "react"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>
        <img className={styles.imageContainer} src='/landingIcon.png'/>
      </div>
      <span className={styles.weatherHeader}>Choice Your City</span>
      <ul className={styles.buttonBox}>
        <li className={styles.button}>
          <Link href="/berlin">
            <a>Berlin</a>
          </Link>
        </li>
        <li className={styles.button}>
          <Link href="/london">
            <a>London</a>
          </Link>
        </li>
        <li className={styles.button}>
          <Link href="/tokyo">
            <a>Tokyo</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
