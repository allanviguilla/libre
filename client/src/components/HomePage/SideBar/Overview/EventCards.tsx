import React, { useEffect, useState } from 'react';
import { getEvents } from '../../../Utilities/http';
import { ParsedEvent, parseEvents, parseInfo } from '../../../Utilities/parser';
import { Text } from '@chakra-ui/react'
import EventCard from './EventCard'

export default (props) => {
  const { currUser } = props
  const [events, setEvents] = useState([])

  useEffect(() => {
    const today = new Date()
    //
    // get the next week event today. getFullYear(), today. getMonth(),  today. getDate()+7
    const dateRange = ({
      start: new Date().toISOString(),
      end: new Date(today.setHours(23, 59, 59, 999)).toISOString()
    })

    getEvents(currUser.email, dateRange, currUser.oauthAccessToken)
      .then((res) => {
        let parsed = parseEvents(res);
        setEvents(parsed)
      })
  }, [])

  return (
    <div>
      <Text fontSize='xl' my={5}>
        Upcoming Events Today
      </Text>
      {events.map((event,index) => (<EventCard key={index} event={event}/>))}
    </div>
  )
}