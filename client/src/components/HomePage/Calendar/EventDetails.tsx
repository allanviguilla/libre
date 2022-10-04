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

const EventDetails = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Event Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Event name: MVP Standup </p>
          <p>Event start time: 10/03/2022 09:30 AM </p>
          <p>Event end time: 10/03/2022 10:30 AM </p>
          <p>Location: Thomas's Google Meet Room</p>
          <p>Organizer: Thomas Herpner</p>
          <p>Attendees: Nick, Kat, Allen, Qingzhou, James, Dan</p>
        </ModalBody>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </Modal>
  )
}

export default EventDetails;