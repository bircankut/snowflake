import React from "react";
import { Header } from "../../src/containers/header/header";
import style from './london.module.css'

interface LondonProps {}

const London = ({}: LondonProps) => {
  return (
    <div className={style.london}>
      <Header/>
      <div>london</div>
    </div>
  );
};

export default London ;