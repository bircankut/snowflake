import React from "react";
import style from './header.module.css';
import Cities from "../../components/cities/cities";
import {Logo} from "../../components/logo/logo";
import {Date} from "../../components/date/date";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className={style.header}>
      <Logo/>
      <Cities/>
      <Date/>
    </header>
  );
};

export { Header };