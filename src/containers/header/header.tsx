import React from "react";
import style from './header.module.css';
import Cities from "../../components/cities/cities";
import {Logo} from "../../components/logo/logo";
import {DateInformation} from "../../components/date-information/date-information";

interface HeaderProps {
  day: string;
  timeZone: string;
}

const Header = ({day, timeZone}: HeaderProps) => {
  return (
    <header className={style.header}>
      <Logo/>
      <Cities/>
      <DateInformation day={day} timeZone={timeZone}/>
    </header>
  );
};

export { Header };