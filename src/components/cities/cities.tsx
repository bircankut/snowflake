import React from "react";
import type { NextPage } from 'next'
import style from './cities.module.css'
import Link from "next/link";

interface CitiesProps {}

const Cities = ({}: CitiesProps) => {
  return(
    <ul className={`${style.cities} ${style.font}`}>
      <li>
        <Link href="/berlin">
          <a>Berlin</a>
        </Link>
      </li>
      <li>
        <Link href="/london">
          <a>London</a>
        </Link>
      </li>
      <li>
        <Link href="/tokyo">
          <a>Tokyo</a>
        </Link>
      </li>
    </ul>
  )
}

export default Cities