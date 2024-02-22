import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center border-gray-500 shadow-md"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Create Event</span>
    </button>
  );
}
