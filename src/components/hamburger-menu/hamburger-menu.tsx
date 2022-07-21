import React from 'react'
import { Logo } from '../logo/logo'
import style from './hamburger-menu.module.css'
import Link from 'next/link'

interface HamburgerMenuProps{
  hamburgerMenu: () => void;
}

const HamburgerMenu = ({hamburgerMenu}: HamburgerMenuProps) => {
  return (
    <div className={style.container}>
     <button className={style.logoBox} onClick={hamburgerMenu}>
       <Logo/>
     </button>
      <ul className={style.linkBox}>
        <li className={style.text} onClick={hamburgerMenu}>
          <Link href="/berlin">
            <a>Berlin</a>
          </Link>
        </li>
        <li className={style.text} onClick={hamburgerMenu}>
          <Link href="/london">
            <a>London</a>
          </Link>
        </li>
        <li className={style.text} onClick={hamburgerMenu}>
          <Link href="/tokyo">
            <a>Tokyo</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export { HamburgerMenu }