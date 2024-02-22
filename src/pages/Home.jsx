import React from 'react'
import Widgets from '../components/Widgets'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'

const Home = () => {
  return (
    <div className="home flex flex-col z-0">
        <div className="homeContainer flex-1 flex sm:flex-row flex-col gap-4 mx-20 justify-between mt-10">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
          </div>
            <div className="charts flex-6 flex sm:flex-row flex-col mx-20 mt-10 sm:justify-between justify-center gap-10 mb-20">
              <div className="left flex flex-1 w-[100%] justify-center h-[400px] border rounded-lg"><PieChart/></div>
              <div className="right flex flex-1 w-full justify-center h-[400px] border rounded-lg"><BarChart size={200}/></div>
            </div>
        </div>
  )
}

export default Home