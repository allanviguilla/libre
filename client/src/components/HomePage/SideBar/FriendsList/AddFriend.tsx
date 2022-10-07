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
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../../../configs/config';
import { connect } from 'react-redux';


const AddFriend = (props) => {
  const [newUser, setNewUser] = useState(false);

  const { currUser } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const input:any = document.getElementById('add-email');
    console.log('INPUT', input.value)
    addDoc(collection(db, "notifications"), {
      receiverEmail: input.value,
      senderDisplayName: currUser.displayName,
      senderEmail: currUser.email,
      type: 'friend-request',
      status: 'awaiting'
    })
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
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <form onSubmit={(e) => handleSubmit(e)}>
            Enter their email: <input id="add-email" type="email" required></input>
            <button type="submit">Add</button>
          </form>
        </AccordionPanel>
       </AccordionItem>
      </Accordion>
    </div>

  )
}

function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

const mapDispatchToProps = {};

export default connect(mapStatetoProps, mapDispatchToProps)(AddFriend);
