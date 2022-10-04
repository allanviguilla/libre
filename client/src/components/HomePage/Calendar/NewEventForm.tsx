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
  VStack
} from '@chakra-ui/react';

import styles from './Calendar.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NewEventForm = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id={styles.newEventForm}>
              <VStack spacing='24px'>
                <label>Event name:<input type="text" name="eventName" required></input></label>
                <label>Event start time:
                  <input
                    type="datetime-local"
                    id="event-start-time"
                    name="event-start-time"
                    required
                    ></input>
                </label>
                <label>Event end time:
                  <input
                    type="datetime-local"
                    id="event-start-time"
                    name="event-start-time"
                    required
                    ></input>
                </label>
                <label>Event location:<input type="text" name="eventLocation" required></input></label>
                <label>Event description:<input className={styles.description} type="text" name="eventDescription" required></input></label>
              </VStack>
            </form>
          </ModalBody>
          <HStack>
            <button>Submit</button>
            <button onClick={onClose}>Cancel</button>
          </HStack>
        </ModalContent>
      </Modal>
  )
}

export default NewEventForm;