import React from "react";
import style from './header.module.css';
import CityNavBar from "../../components/city-nav-bar/city-nav-bar";
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
      <CityNavBar/>
      <DateInformation day={day} timeZone={timeZone}/>
    </header>
  );
};

export { Header };