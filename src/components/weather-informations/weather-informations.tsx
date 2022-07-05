import React, {useMemo, useState} from "react"
import style from './weather-informations.module.css'
import useSWR from "swr"
import {HistoryResponse} from "../../types/types"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, ChartOptions, LegendOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface WeatherInformationsProps {
  city: string;
}

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: '#918aa0'
      },
      grid: {
        display: false,
        drawBorder: false,
      },
      display: true,
      title: {
        display: true
      }
    },
    y: {
      display: false,
      title: {
        display: true,
      },
    }
  },
  plugins: {
    title: {
      display: true,
      text: ' ',
    },
    datalabels: {
      color: '#918aa0',
      align: 'top',
      offset: 15,
    },
    legend: {
      display: false
    }
  },
};

const WeatherInformations = ({city}: WeatherInformationsProps) => {
  const [selectedData, setSelectedData]= useState('temperature');

  function select(sel: string){
    setSelectedData(sel);
  }
  const date  = new Date();
  const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toJSON().slice(0,10);

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR<HistoryResponse>(`/api/history?q=${city}&dt=${endTime}&end_dt=${endTime}`, fetcher);

  const time = data?.forecast?.forecastday?.[0].hour?.map?.((day)=>(
    {
      time: new Date(day.time)
        .toLocaleTimeString('en-US',
          {timeZone:'UTC',hour12:true, hour:'numeric'}
        ),
      temperature: day.temp_c,
      wind: day.wind_mph,
      humidity: day.humidity,
    }
  )).filter((el, index) => index % 3 === 0)



  const color = useMemo(() => {
    if (typeof document === 'undefined') {
      return;
    }

    // @ts-ignore
    var ctx = document.getElementById('line-chart').getContext("2d")
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#6b0098');
    gradient.addColorStop(1, '#b44dbd');
    return gradient;
  }, [])


  const dt = {
    labels: time?.map((el)=>el.time),
    datasets: [
      {
        label: '',
        data: time?.map((el)=> el[selectedData as keyof typeof el] || el.temperature),
        borderColor: color || 'red',
        backgroundColor: 'white',
        pointStyle: 'circle',
        pointRadius: 4,
        pointHoverRadius: 15
      }
    ]
  };

  return(
    <div className={style.weatherInformations}>
      <Line id="line-chart" data={dt} options={options as any} updateMode={"resize"} height={"100%"} />
      <hr className={style.hr}/>
      <div className={style.buttonBox}>
        <button className={selectedData === 'temperature' ? `${style.buttonSelected}`: `${style.button}`} onClick={()=> select('temperature')}>Temperature</button>
        <button className={selectedData === 'humidity' ? `${style.buttonSelected}`: `${style.button}`} onClick={()=> select('humidity')}>Humidity</button>
        <button className={selectedData === 'wind' ? `${style.buttonSelected}`: `${style.button}`} onClick={()=> select('wind')}>Wind</button>
      </div>
    </div>
  )
}

export { WeatherInformations };