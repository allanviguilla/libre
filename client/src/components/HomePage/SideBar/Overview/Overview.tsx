import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react'
import { connect } from 'react-redux'
import Clock from './Clock'
import EventCards from './EventCards'



const Overview = (props) => {
  const { newEventCount, currUser, } = props;

  return (
    <div>
      <Text fontSize='4xl'>
        Enjoy Your Libre!
      </Text>
      <Clock />
      <EventCards currUser={currUser} newEventCount={newEventCount} />
    </div>
  )
}

export default connect((state) => ({ currUser: state.currUser, newEventCount: state.newEventCount }), {})(Overview)