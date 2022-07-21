import React, { useState } from 'react'
import style from './weather-chart.module.css'
import useSWR from 'swr'
import { HistoryResponse } from '../../types/types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import moment from 'moment'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
)

interface WeatherChartProps {
  city: string
}

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: '#918aa0',
      },
      grid: {
        display: false,
        drawBorder: false,
      },
      display: true,
      title: {
        display: true,
      },
    },
    y: {
      display: false,
      title: {
        display: true,
      },
    },
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
      display: false,
    },
  },
}

const WeatherChart = ({ city }: WeatherChartProps) => {
  const [selectedData, setSelectedData] = useState('temperature')

  function select(sel: string) {
    setSelectedData(sel)
  }
  const date = new Date()
  const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    .toJSON()
    .slice(0, 10)

  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  const { data } = useSWR<HistoryResponse>(
    `/api/history?q=${city}&dt=${endTime}&end_dt=${endTime}`,
    fetcher
  )

  const time = data?.forecast?.forecastday?.[0].hour
    ?.map?.((day) => ({
      time: moment(new Date(day.time), "H:s").format("h A"),
      temperature: day.temp_c,
      wind: day.wind_mph,
      humidity: day.humidity,
    }))
    .filter((el, index) => index % 3 === 0)

  const dt = {
    labels: time?.map((el) => el.time),
    datasets: [
      {
        label: '',
        data: time?.map(
          (el) => el[selectedData as keyof typeof el] || el.temperature
        ),
        borderColor: '#b44dbd',
        backgroundColor: 'white',
        pointStyle: 'circle',
        pointRadius: 4,
        pointHoverRadius: 15,
      },
    ],
  }

  return (
    <div className={style.weatherInformations}>
      <Line
        id="line-chart"
        data={dt}
        options={options as never}
        updateMode={'resize'}
        height={'100%'}
      />
      <hr className={style.hr} />
      <div className={style.buttonBox}>
        <button
          className={
            selectedData === 'temperature'
              ? `${style.buttonSelected}`
              : `${style.button}`
          }
          onClick={() => select('temperature')}
        >
          Temperature
        </button>
        <button
          className={
            selectedData === 'humidity'
              ? `${style.buttonSelected}`
              : `${style.button}`
          }
          onClick={() => select('humidity')}
        >
          Humidity
        </button>
        <button
          className={
            selectedData === 'wind'
              ? `${style.buttonSelected}`
              : `${style.button}`
          }
          onClick={() => select('wind')}
        >
          Wind
        </button>
      </div>
    </div>
  )
}

export { WeatherChart }
export default WeatherChart
