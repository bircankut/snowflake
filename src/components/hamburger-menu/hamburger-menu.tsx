import React from 'react'
import { Logo } from '../logo/logo'
import style from './hamburger-manu.module.css'

interface HamburgerMenuProps{
  hamburgerMenu: Function
}

const HamburgerMenu = ({hamburgerMenu}: HamburgerMenuProps) => {
  return (
    <div className={style.container}>
     <button className={style.logoBox} onClick={()=>hamburgerMenu()}>
       <Logo/>
     </button>
    </div>
  )
}

export { HamburgerMenu }