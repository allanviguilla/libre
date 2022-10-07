import React from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/react'

export default (props) => {
  const { event } = props
  let { title, start, end } = event
  // let start = start.slic
  console.log(event)
  // console.log(start, new Date(start))
  return (
    <Box mb={3} p={5} shadow='md' borderWidth='1px'>
      <Heading fontSize='xl'>{title}</Heading>
      <p><span style={{ fontWeight: "700" }}>Start: </span>{`${new Date(start)}`}</p>
      <p><span style={{ fontWeight: "700" }}>End: </span>{`${new Date(end)}`}</p>
    </Box>
  )
}