import React, {useEffect, useState} from "react";
import style from './clock.module.css'

interface ClockProps {
  timeZone: string;
}

const Clock = ({timeZone}: ClockProps) => {
  const [time, setTime] = useState(new Date());
  const [formatter, setFormatter] = useState<Intl.DateTimeFormat | null>(null); // location.localtime
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const _formatter = new Intl.DateTimeFormat([], {
      timeZone: timeZone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    setFormatter(_formatter)
  }, [timeZone]);

  useEffect(() => {
    const _intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    setIntervalId(_intervalId);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, [])

  const timeText = formatter && formatter.format(time);

  return (
    <div className={style.clock}>
      {timeText}
    </div>
  );
};

export { Clock };