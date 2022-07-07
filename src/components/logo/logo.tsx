import React from 'react'
import Image from 'next/image'
import style from './logo.module.css'

const Logo = () => {
  return (
    <div className={style.logo}>
      <Image src="/snowflake.svg" height={30} width={30} alt='logo'/>
    </div>
  )
}

export { Logo }
