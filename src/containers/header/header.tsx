import React from "react";
import style from './header.module.css';
import Cities from "../../components/cities/cities";
import {Logo} from "../../components/logo/logo";
import {DateInformation} from "../../components/date-information/date-information";

interface HeaderProps {
  day: string;
  city: string;
}

const Header = ({day, city}: HeaderProps) => {
  return (
    <header className={style.header}>
      <Logo/>
      <Cities/>
      <DateInformation day={day} city={city}/>
    </header>
  );
};

export { Header };