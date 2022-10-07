import React, { useState } from 'react';
import { Input } from '@chakra-ui/react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

const AddFriend = () => {
  const [newUser, setNewUser] = useState(false);

  const handleSubmit = () => {
    const input:any = document.getElementById('add-email');
    console.log('INPUT', input.value)

  }

  return (
    <div>
      <Accordion allowMultiple>
        <AccordionItem>
         <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Add Friend
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <form>
            Enter their email: <input id="add-email" type="email" required></input>
            <button type="submit">Add</button>
          </form>
        </AccordionPanel>
       </AccordionItem>
      </Accordion>
    </div>

  )
}

export default AddFriend;
