import React from 'react';

import "@fullcalendar/react/dist/vdom";
import FullCalendar from '@fullcalendar/react'
import { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Button, Tooltip } from "bootstrap";
import moment from "moment";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react'

import styles from './Calendar.module.css';


const Calendar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className={styles.calendar} id="calendar">
      <h2>CALENDAR HERE</h2>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>HELLO THIS IS EVENT FORM</p>
            <form>
              <label>Event name:<input type="text" name="eventName" required></input></label>
            </form>
          </ModalBody>
          <button onClick={onClose}>Submit</button>
        </ModalContent>
      </Modal>
      <div className={styles.calendarMain}>
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
          select={onOpen}
          />
      </div>
    </div>
  )
}

export default Calendar;


