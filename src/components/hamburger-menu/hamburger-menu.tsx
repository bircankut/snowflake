import React from 'react'
import { Logo } from '../logo/logo'
import style from './hamburger-menu.module.css'
import Link from 'next/link'
import { CITIES, CITY_NAMES } from '../../constants/city'

interface HamburgerMenuProps {
  toggleMenu: () => void
}

const HamburgerMenu = ({ toggleMenu }: HamburgerMenuProps) => {
  return (
    <div className={style.container}>
      <button className={style.logoBox} onClick={toggleMenu}>
        <Logo />
      </button>
      <ul className={style.linkBox}>
        {CITIES.map((city) => (
          <li key={city} className={style.text} onClick={toggleMenu}>
            <Link href={`/${city}`}>
              <a>{CITY_NAMES[city]}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { HamburgerMenu }
