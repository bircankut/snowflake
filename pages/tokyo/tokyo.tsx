import React from "react";
import { Header } from "../../src/containers/header/header";
import style from './tokyo.module.css'

interface TokyoProps {}

const Tokyo = ({}: TokyoProps) => {
  return (
    <div className={style.tokyo}>
      <Header/>
      <div>tokyo</div>
    </div>
  );
};

export default Tokyo ;