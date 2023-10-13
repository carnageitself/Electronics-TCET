import React from 'react'
import PracticalChart from '../components/PracticalChart'
import TheoryChart from '../components/TheoryChart'

const Attendance = () => {
  return (
    <div className='attendance'>
      <h1 className='flex justify-center mt-10'>Attendance</h1>
    <div className="flex-6 flex mx-20 mt-10 justify-between gap-10">
    <div className="right flex flex-1 shadow-xl w-[100%] justify-center h-[400px]"><TheoryChart/></div>
    <div className="left flex flex-1 shadow-xl w-[100%] justify-center h-[400px]"><PracticalChart/></div>
  </div>
  </div>
  )
}

export default Attendance