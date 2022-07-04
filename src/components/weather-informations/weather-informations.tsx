import React from "react"
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
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface WeatherInformationsProps {
  city: string;
}

const options = {
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  scales: {
    x: {
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
    }
  }
};

const WeatherInformations = ({city}: WeatherInformationsProps) => {
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
      temp: day.temp_c
    }
  ))

  const dt = {
    labels: time?.map((el)=>el.time),
    datasets: [
      {
        label: '',
        data: time?.map((el)=>el.temp),
        borderColor: '#41006c',
        backgroundColor: 'white',
        pointStyle: 'circle',
        pointRadius: 4,
        pointHoverRadius: 15
      }
    ]
  };

  return(
    <div className={style.weatherInformations}>
      <Line data={dt} options={options} updateMode={"resize"} height={"100%"} />
    </div>
  )
}

export { WeatherInformations };