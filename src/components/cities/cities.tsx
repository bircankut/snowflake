import React from "react";
import type { NextPage } from 'next'
import style from './cities.module.css'

interface CitiesProps {}

const Cities = ({}: CitiesProps) => {
  return(
    <div className={style.cities}>
      cities
    </div>
  )
}

export default Cities