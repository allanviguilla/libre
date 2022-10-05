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


  function onSubmit(values) {
    console.log(values);
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
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
              <FormControl isInvalid={errors.eventName}>
                <FormLabel htmlFor='name'>Event Name *</FormLabel>
                <Input
                  id='name'
                  placeholder='event name'
                  {...register('name', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                  type='text'
                />
                <FormErrorMessage>
                  {errors.eventName && errors.eventName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.attendees}>
                <FormLabel htmlFor='attendees'>Attendees *</FormLabel>
                <Input
                  id='attendees'
                  placeholder='who will be attending the event'
                  {...register('attendees', {
                    required: 'This is required',
                  })}
                  type='email'
                  multiple
                  required
                />
                <FormErrorMessage>
                  {errors.eventName && errors.eventName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='startTime'>Event Start Time *</FormLabel>
                <Input
                  id='startTime'
                  placeholder='start time of the event'
                  {...register('startTime', {
                    required: 'This is required',
                  })}
                  type='datetime-local'
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='endTime'>Event End Time *</FormLabel>
                <Input
                  id='endTime'
                  placeholder='end time of the event'
                  {...register('endTime', {
                    required: 'This is required',
                  })}
                  type='datetime-local'
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='location'>Location *</FormLabel>
                <Input
                  id='location'
                  placeholder='event location'
                  {...register('location', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                  type='text'
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <Input
                  id='descroiption'
                  placeholder='event description'
                  {...register('description')}
                  type='text'
                />
              </FormControl>
              </VStack>
              <HStack mt={6}>
                <Button isLoading={isSubmitting} type='submit'>Submit</Button>
                <Button onClick={onClose} type='submit'>Cancel</Button>
              </HStack>
            </form>
          </ModalBody>

        </ModalContent>
      </Modal>
  )
}

export default NewEventForm;