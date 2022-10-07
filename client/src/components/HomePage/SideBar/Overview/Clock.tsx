import React from 'react';
import { useTime } from 'react-timer-hook';
import { Center } from '@chakra-ui/react'

export default (props) => {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour' });

  return (
      <Center fontSize="4xl">
        <span>{prependZero(hours)}</span><span>:</span><span>{prependZero(minutes)}</span> <span>{ampm.toUpperCase()}</span>
      </Center>
  )
}

function prependZero(number) {
  return number < 10 ? "0" + number : number
  }