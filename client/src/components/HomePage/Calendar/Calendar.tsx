import React from 'react';

import "@fullcalendar/react/dist/vdom";
import FullCalendar from '@fullcalendar/react'
import { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Tooltip } from "bootstrap";
import moment from "moment";

import styles from './Calendar.module.css'

const Calendar = () => {
  return (
    <div className={styles.calendar} id="calendar">
      <h2>CALENDAR HERE</h2>
      <div className='calendar-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={[
            { title: 'event 1', date: '2022-10-01' },
            { title: 'event 2', date: '2022-10-02' }
          ]}
          />
      </div>
    </div>
  )
}

export default Calendar;
