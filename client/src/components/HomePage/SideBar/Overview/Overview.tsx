import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react'
import { connect } from 'react-redux'
import Clock from './Clock'
import EventCards from './EventCards'



const Overview = (props) => {
  const { currUser, currUser: { displayName, email } } = props;

  return (
    <div>
      <Text fontSize='4xl'>
        Enjoy Your Libre!
      </Text>
      <Clock />
      <EventCards currUser={currUser}/>
    </div>
  )
}

export default connect((state) => ({ currUser: state.currUser }), {})(Overview)