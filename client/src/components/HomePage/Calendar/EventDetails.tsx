import React from "react";
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
  Input,
  Stack,
  HStack,
  VStack,
  Flex,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Avatar,
  AvatarGroup
} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import styles from './Calendar.module.css';
import { ParsedEvent } from "../../Utilities/parser";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  detail: ParsedEvent;
}

const EventDetails = ({ detail, isOpen, onClose}) => {
  const {attendees} = detail.extendedProps
  console.log(attendees)


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Event Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UnorderedList styleType="none" spacing="1.5rem" >
            <ListItem>
              <p><span style={{ fontWeight: "700" }}>Event name: </span>{detail.title}</p>
            </ListItem>
            <ListItem>
              <p><span style={{ fontWeight: "700" }}>Start time: </span>{detail.start} </p>
            </ListItem>
            <ListItem>
              <p><span style={{ fontWeight: "700" }}>End time: </span>{detail.end}</p>
            </ListItem>
            <ListItem>
              <p><span style={{ fontWeight: "700" }}>Location: </span>{detail.location}</p>
            </ListItem>
            <ListItem>
              <p><span style={{ fontWeight: "700" }}>Description: </span>{detail.extendedProps.description}</p>
            </ListItem>
            <ListItem>
              <p><span style={{ fontWeight: "700" }}>Organizer: </span>{detail.extendedProps.organizer}</p>
            </ListItem>
            <ListItem>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton style={{ paddingLeft: 0 }}>
                    <Box flex='1' textAlign='left' >
                      <span style={{ fontWeight: "700" }}>Attendees: </span>
                      <AvatarGroup size='md' max={2}style={{display:"inline-flex"}} >
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        {
                      detail.extendedProps.attendees.map((attendee, index) =>
                      <Avatar key={index} name={attendee} src='https://bit.ly/code-beast' />
                      )
                    }
                      </AvatarGroup>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {
                      detail.extendedProps.attendees.map((attendee) =>
                      <Flex alignItems='center' gap='4' marginBottom="0.5em">
                        <Avatar name='Christian Nwamba' size='sm' src='https://bit.ly/code-beast' />
                        <span>{attendee}</span>
                      </Flex>
                      )
                    }
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <p>


              </p>
            </ListItem>
          </UnorderedList>
        </ModalBody>
        <Flex justify="center">
          <button className={`${styles.button} ${styles.cancel}`} onClick={onClose}>Close</button>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default EventDetails;