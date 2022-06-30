import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../src/containers/header/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const day = new Date().toLocaleString('en-us', {  weekday: 'long' });
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}

export default Home
