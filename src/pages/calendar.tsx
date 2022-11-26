import React, { useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; //
import HogeDialog from "./hogedialog";

export default function Calendar() {
  const handleteClickAr = useCallback((arg: DateClickArg) => {
    <HogeDialog />
  }, []);

  return (
    <div>
        <FullCalendar 
          plugins={[dayGridPlugin, interactionPlugin]} initialView="dayGridMonth" 
          locales={allLocales} locale="ja"
          businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}  weekends={true} 
          titleFormat={{ year: 'numeric', month: 'short' }}
          dateClick={handleteClickAr}
          />
    </div>
  );
}