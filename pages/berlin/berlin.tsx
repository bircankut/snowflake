import React from "react";
import { Header } from "../../src/containers/header/header";
import style from './berlin.module.css'

interface BerlinProps {}

const Berlin = ({}: BerlinProps) => {
  return (
    <div className={style.berlin}>
      <Header/>
      <div>berlin</div>
    </div>
  );
};

export default Berlin ;