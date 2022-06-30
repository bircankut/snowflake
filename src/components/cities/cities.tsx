import React from "react";
import type { NextPage } from 'next'
import style from './cities.module.css'
import Link from "next/link";

interface CitiesProps {}

const Cities = ({}: CitiesProps) => {
  return(
    <ul className={`${style.cities} ${style.font}`}>
      <li>
        <Link href="/Berlin">
          <a>Berlin</a>
        </Link>
      </li>
      <li>
        <Link href="/London">
          <a>London</a>
        </Link>
      </li>
      <li>
        <Link href="/Tokyo">
          <a>Tokyo</a>
        </Link>
      </li>
    </ul>
  )
}

export default Cities