import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../utils";
import GlobalContext from "../context/GlobalContext";
import CalendarHeader from "../components/CalendarHeader";
import EventModal from "../components/EventModal";
import Sidebar from "../components/CalendarSidebar";
import Month from "../components/Months";

const Events = () => {
 
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  return (
    <div className="events h-full">
      <div className="eventHeader my-8 justify-center">
      </div>
      {showEventModal && <EventModal />}
      <div className="eventContainer flex flex-col mx-10 border p-5 gap-5 rounded-xl mb-10">
        <CalendarHeader/>
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
      </div>
  );
};

export default Events;
