import React from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/react'

export default (props) => {
  const { event } = props
  let { title, start, end } = event
  start = (new Date(start)).toLocaleString('en-US', {timeZone: 'America/Los_Angeles',})
  end = (new Date(end)).toLocaleString('en-US', {timeZone: 'America/Los_Angeles',})

  return (
    <Box m={3} p={5} shadow='md' borderWidth='1px'  borderRadius='md' maxW='sm' textAlign="start">
      <Heading fontSize='xl'>{title}</Heading>
      <p><span style={{ fontWeight: "700" }}>Start: </span>{start}</p>
      <p><span style={{ fontWeight: "700" }}>End: </span>{end}</p>
    </Box>
  )
}