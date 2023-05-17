import React from "react";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Events = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleSelect = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  }

const handleDelete = (selected) => {
  if (
    window.confirm(
      `Are you sure you want to delete the event '${selected.event.title}'`
    )
  ) {
    selected.event.remove();
  }
}

  return (
    <div className="events flex flex-col h-full">
      <div className="eventHeader my-8 flex justify-center">
        <h1 className="text-xl">ACADEMIC EVENTS</h1>
      </div>
      <div className="eventContainer flex justify-between mx-10 border shadow-lg p-5 gap-5">
        <div className="event w-[20%] flex flex-col">
          <h1 className="h-12 items-center">EVENTS</h1>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "lightgreen",
                  marginTop: "10px",
                  marginBottom: "0px",
                  borderRadius: "10px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                    
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="eventBox w-[80%]">
          <FullCalender
           plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          dayMaxEvents={true}
          selectMirror={true}
          select={handleSelect}
          eventClick={handleDelete}
          eventsSet={(events) => setCurrentEvents(events)}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
