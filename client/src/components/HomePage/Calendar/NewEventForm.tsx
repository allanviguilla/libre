import React from "react";
import { useForm } from 'react-hook-form';
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
  Button,
  Stack,
  HStack,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';

import styles from './Calendar.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NewEventForm = ({isOpen, onClose}) => {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()


  function onSubmit(event) {
    console.log(event);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id={styles.newEventForm} onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing='24px'>
              {/* <FormControl isInvalid={errors.eventName}>                 */}
              <FormControl>
                <FormLabel htmlFor='eventName'>Event Name *</FormLabel>
                <Input
                  id='eventName'
                  placeholder='event name'
                  {...register('eventName', {
                    required: 'This is required',
                    // minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                  type='text'
                />
                {/* <FormErrorMessage>
                  {errors.eventName && errors.eventName.message}
                </FormErrorMessage> */}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='eventStartTime'>Event Start Time *</FormLabel>
                <Input
                  id='eventStartTime'
                  placeholder='start time of the event'
                  {...register('eventStartTime', {
                    required: 'This is required',
                    // minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                  type='datetime-local'
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='eventEndTime'>Event End Time *</FormLabel>
                <Input
                  id='eventEndTime'
                  placeholder='end time of the event'
                  {...register('eventEndTime', {
                    required: 'This is required',
                    // minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                  type='datetime-local'
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='eventLocation'>Location *</FormLabel>
                <Input
                  id='eventLocation'
                  placeholder='event location'
                  {...register('eventLocation', {
                    required: 'This is required',
                    // minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                  type='text'
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='eventDescription'>Description</FormLabel>
                <Input
                  id='eventDescription'
                  placeholder='event description'
                  type='text'
                />
              </FormControl>
                {/* <label>Event name:<input type="text" name="eventName" required></input></label>
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
                <label>Event description:<input className={styles.description} type="text" name="eventDescription" required></input></label> */}
              <FormControl>
                <p>* indicates required fields.</p><br></br>
              </FormControl>
              </VStack>
            </form>
          </ModalBody>
          <HStack>
            {/* <button type="submit">Submit</button> */}
            {/* <button onClick={onClose}>Cancel</button> */}
            <Button isLoading={isSubmitting} type='submit'>Submit</Button>
            <Button onClick={onClose} type='submit'>Cancel</Button>
          </HStack>
        </ModalContent>
      </Modal>
  )
}

export default NewEventForm;