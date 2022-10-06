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
  Flex
} from '@chakra-ui/react';

import styles from './Calendar.module.css';
import { ParsedEvent } from "../../Utilities/parser";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  detail: ParsedEvent;
}

const EventDetails = ({ detail, isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Event Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Flex wrap="wrap" gap="1.75rem">
          <p><span style={{fontWeight: "700"}}>Event name:</span>{detail.title}</p>
          <p><span style={{fontWeight: "700"}}>Start time:</span> {detail.start} </p>
          <p><span style={{fontWeight: "700"}}>End time:</span> {detail.end}</p>
          <p><span style={{fontWeight: "700"}}>Location:</span> {detail.location}</p>
          <p><span style={{fontWeight: "700"}}>Description:</span> {detail.extendedProps.description}</p>
          <p><span style={{fontWeight: "700"}}>Organizer:</span> {detail.extendedProps.organizer}</p>
          <p><span style={{fontWeight: "700"}}>Attendees:</span>
            {
              detail.extendedProps.attendees.map((attendee) =>
                <p>{attendee}</p>
              )
            }
          </p>
        </Flex>
        </ModalBody>
        <Flex justify="center">
        <button className={`${styles.button} ${styles.cancel}`} onClick={onClose}>Close</button>
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default EventDetails;