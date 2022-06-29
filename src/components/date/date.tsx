import React from "react";
import style from './date.module.css'

interface DateProps {}

const Date = ({}: DateProps) => {
  return (
    <div className={style.date}>
      date
    </div>
  );
};

export { Date };