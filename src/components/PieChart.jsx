import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, RadialLinearScale, ArcElement} from "chart.js"
import { PolarArea } from 'react-chartjs-2'
import { Tilt } from 'react-tilt'

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement
)

const PieChart = () => {

  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };

  return (
    <div className='p-2'>
      <Tilt scale={0}>
      <PolarArea data={data} height={350} width={350}></PolarArea>
      </Tilt>
    </div>
  )
}

export default PieChart