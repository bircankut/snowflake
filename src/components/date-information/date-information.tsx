import React from "react";
import style from './date-information.module.css'

interface DateInformationProps {
  day: string;
  city: string;
}

const DateInformation = ({day, city}: DateInformationProps) => {
    let date = new Date();
    const formatter = new Intl.DateTimeFormat([],{
      timeZone: city,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    const time = formatter.format(date);

  return (
    <div className={style.date}>
      {day} {time}
    </div>
  );
};

export { DateInformation };