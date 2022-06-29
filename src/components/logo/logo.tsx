import React from "react";
import style from './logo.module.css'

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return(
    <div className={style.logo}>
      logo
    </div>
  )
}

export { Logo };