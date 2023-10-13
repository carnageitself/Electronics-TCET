import React from 'react'
import Widgets from '../components/Widgets'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'

const Home = () => {
  return (
    <div className="home flex flex-col z-0 scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-grey-transparent scrollbar-thumb-rounded-md">
        <div className="homeContainer flex-1 flex sm:flex-row flex-col gap-4 mx-20 justify-between mt-10">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
          </div>
            <div className="charts flex-6 flex sm:flex-row flex-col mx-20 mt-10 sm:justify-between justify-center gap-10">
              <div className="left flex flex-1 shadow-xl w-[100%] justify-center h-[400px]"><PieChart/></div>
              <div className="right flex flex-1 shadow-xl w-full justify-center h-[400px]"><BarChart size={200}/></div>
            </div>
        </div>
  )
}

export default Home