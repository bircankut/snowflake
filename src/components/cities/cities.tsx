import React from "react";
import type { NextPage } from 'next'
import style from './cities.module.css'
import Link from "next/link";

interface CitiesProps {}

const Cities = ({}: CitiesProps) => {
  return(
    <ul className={style.cities}>
      <li>
        <Link href="/berlin/berlin">
          <a>Berlin</a>
        </Link>
      </li>
      <li>
        <Link href="/london/london">
          <a>London</a>
        </Link>
      </li>
      <li>
        <Link href="/tokyo/tokyo">
          <a>Tokyo</a>
        </Link>
      </li>
    </ul>
  )
}

export default Cities