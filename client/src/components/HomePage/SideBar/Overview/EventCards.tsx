import React, { useEffect, useState, Fragment } from 'react';
import { getEvents } from '../../../Utilities/http';
import { ParsedEvent, parseEvents, parseInfo } from '../../../Utilities/parser';
import { Text, Box } from '@chakra-ui/react'
import EventCard from './EventCard'
import style from './EventCards.module.css'

export default (props) => {
  const { currUser } = props
  const [events, setEvents] = useState([])

  useEffect(() => {
    const today = new Date()
    //
    // get the next week event today. getFullYear(), today. getMonth(),  today. getDate()+7
    const dateRange = ({
      start: new Date().toISOString(),
      // get today's event
      end: new Date(today.setHours(23, 59, 59, 999)).toISOString()
      // get next week's event
      // end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10).toISOString()
    })

    getEvents(currUser.email, dateRange, currUser.oauthAccessToken)
      .then((res) => {
        let parsed = parseEvents(res);
        setEvents(parsed)
      })
  }, [])

  return (
    <div>
      {events.length ?
        <Fragment>
          <Text fontSize='xl' my={5}>
            Today's Upcoming Events
          </Text>
          <Box overflowY="scroll" maxHeight="380px"
            sx={{
              '&::-webkit-scrollbar': {
                width: '8px',
                borderRadius: '4px',
                backgroundColor: `rgba(0, 0, 0, 0)`,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `rgba(90, 90, 90, 1)`,
                borderRadius: '4px',
              },
            }}>
            {events.map((event, index) => (<EventCard key={index} event={event} />))}
          </Box>
        </Fragment>
        : null}
    </div>
  )
}