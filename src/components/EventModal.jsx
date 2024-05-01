import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { MdAccessTime } from "react-icons/md";
import Swal from "sweetalert2";
import TrashIcon from "./TrashIcon";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "olive",
  "black",
  "orange",
  "brown",
  "crimson",
];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
    showAdd();
  }

  function showAdd() {
    Swal.fire({
      title: "Event Successfully Added!",
      text: "",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }

  function deleteConfirmation() {
    Swal.fire({
      title: "Delete Event?",
      text: "Are you sure you want to delete this event? All of this data will be permanently removed. This action cannot be undone.",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatchCalEvent({
          type: "delete",
          payload: selectedEvent,
        });
        setShowEventModal(false);
      }
    });
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-50">
      <Card className="bg-white rounded-lg shadow-2xl w-1/4 border border-gray-400">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Event Details
          </Typography>
        </CardHeader>

        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div className="flex items-center gap-3">
              {/* <BsTextLeft className="text-gray-700" size={24} /> */}
              <Input
                label="Add title"
                type="text"
                name="title"
                value={title}
                required
                className="pt-3 "
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              {/* <span className="material-icons-outlined text-gray-700">
                <MdOutlineSegment size={24} />
              </span> */}
              <Input
                label="Add a description"
                type="text"
                name="description"
                value={description}
                required
                className="pt-3"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons-outlined text-gray-800">
                <MdAccessTime size={24} />
              </span>
              <p className="text-gray-800 font-semibold">
                {daySelected.format("dddd, DD MMMM YYYY")}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* <span className="material-icons-outlined text-gray-300">
                <GrBookmark size={24} className="text-gray-300" />
              </span> */}
              <div className="flex gap-x-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    style={{ backgroundColor: `${lblClass}`, opacity: 0.7 }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <CardFooter className="flex justify-between border-t p-3 mt-5">
          <div className="flex">
            {selectedEvent && (
              <span
                onClick={() => {
                  deleteConfirmation();
                }}
                className="  stroke-black
                hover:stroke-white
                hover:bg-blue-500
                rounded
                px-2
                py-2
                cursor-pointer"
              >
                <TrashIcon />
              </span>
            )}
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
