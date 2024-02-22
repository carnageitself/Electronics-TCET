import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/elex.png";
import GlobalContext from "../context/GlobalContext";
import {FiChevronLeft} from "react-icons/fi";
import {FiChevronRight} from "react-icons/fi";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center justify-between">
      <h1 className="mr-10 text-2xl text-gray-800 font-semibold border rounded px-2 py-3">
        Events Schedule
      </h1>
     <div className="flex items-center">
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-800 mx-2">
          <FiChevronLeft/>
        </span>
      </button>
     
      <h2 className="mx-5 text-xl text-gray-800 font-semibold ">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-800 mx-2">
          <FiChevronRight/>
        </span>
      </button>
      </div>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5 border-gray-500 shadow-md"
      >
        Today
      </button>
    </header>
  );
}
