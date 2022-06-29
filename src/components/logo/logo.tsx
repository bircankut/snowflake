import React from "react"
import Image from 'next/image'
import style from './logo.module.css'

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return(
    <div className={style.logo}>
      <Image src='/snowflake.svg' height={30} width={30} />
    </div>
  )
}

export { Logo };