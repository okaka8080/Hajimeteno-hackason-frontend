import React, { useState, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; //
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// てきとうに持ってきたサンプル
import HogeDialog from "./hogedialog";


export default function Calendar() {

  const handleDateClick = useCallback((arg: DateClickArg) => {
    alert(arg.dateStr);
  }, []);

  //dialogから
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
 
  return (
    <div>
        <FullCalendar 
          plugins={[dayGridPlugin, interactionPlugin]} initialView="dayGridMonth" 
          locales={allLocales} locale="ja"
          businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}  weekends={true} 
          titleFormat={{ year: 'numeric', month: 'short' }}
          dateClick={handleDateClick}
          />
      //dialogから
        <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <HogeDialog
        open={open}
        onClose={handleClose} selectedValue={""}        />
    </div>
  );
}