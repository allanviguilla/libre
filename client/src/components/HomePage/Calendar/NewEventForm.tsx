import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
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
  Flex,
  FormErrorMessage,
} from '@chakra-ui/react';
import { MultiSelect } from 'chakra-multiselect';
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
import {
  doc, setDoc, addDoc, getDoc, collection, writeBatch
} from "firebase/firestore";
import { authentication, db } from '../../../../../configs/config';
import styles from './Calendar.module.css';
import { computeSegDraggable } from "@fullcalendar/react";
import { resolve } from "path";
import { addListener } from "process";
import { getEvents, getToken } from '../../Utilities/http';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NewEventForm = ({isOpen, onClose, currUser}) => {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {

    const { attendees, startTime, endTime, location, description } = values;
    // const attendeesArray = attendees.split(',')

    console.log('attendees on submit... ', attendees);
    console.log('startTime... ', startTime);
    console.log('endTime... ', endTime);
    console.log('location... ', location);
    console.log('description... ', description);

    // save calendar event into database
    // addDoc(collection(db, "events"), {
    //     hostEmail: currUser.email,
    //     attendeesArray,
    //     startTime,
    //     endTime,
    //     location,
    //     description,
    //   })
    //   .then((docRef) => {
    //     for (let i = 0; i < attendeesArray.length; i++) {
    //       addDoc(collection(db, "notifications"), {
    //         eventId: docRef.id,
    //         receiverEmail: attendeesArray[i],
    //         senderDisplayName: currUser.displayName,
    //         senderEmail: currUser.email,
    //         type: 'event-invitation',
    //         status: 'awaiting',
    //       })
    //     }
    //   })
    //   .then(() => {
    //     onClose();
    //     alert("Your event has been created!");
    //   })
    //   .catch((error) => {
    //     onClose();
    //     alert("Your event was not created - please try again!");
    //   })

  }

  const [friends, setFriends] = useState([]);
  const [attendeesFormInput, setAttendeesFromInput] = useState([]);

  const [value, setValue] = useState([]);

  let attendeesArr = [];
  // let sample = ["nicolastiennguyen@gmail.com", "qingzhouyan@gmail.com", "hepner.thomas2@gmail.com", "james.emerson.vo.2503@gmail.com", "kathryn.kuroko@gmail.com"];

  useEffect(() => {
    let hold = [];
    attendeesArr = [];
    currUser.friends.map((friend, i) => {
      attendeesArr.push({ value: friend, label: friend });
      getDoc(doc(db, "users", friend))
        .then((res) => {
          const friend = res.data();
          getToken(friend.refreshToken)
            .then((res) => {
              friend.oauthAccessToken = res;
            })
          hold.push(friend);
          console.log(hold);
          if (hold.length === currUser.friends.length) {
            setFriends(hold)
          }
        })
        .catch((err) => console.log(err))
    })
    setAttendeesFromInput(attendeesArr);
    console.log('attendeesArr', attendeesArr);
  }, [currUser]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id={styles.newEventForm} onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing='1.75rem'>
              <FormControl isInvalid={errors.eventName}>
                <FormLabel htmlFor='name' className={styles.red}>
                  Event Name *
                </FormLabel>
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
                <FormLabel htmlFor='attendees'>
                  Attendees *
                </FormLabel>
                <FormLabel htmlFor='attendees-avatars'>
                <AvatarGroup size='md' max={5}>
                    {
                      friends.map((friend) =>
                        <Avatar name={friend.name} src={friend.photoUrl} />
                      )
                    }
                  </AvatarGroup>
                </FormLabel>
                <Select
                  isMulti
                  options={attendeesFormInput}
                  id="attendees"
                  {...register('attendees', {
                    required: 'This is required',
                  })}
                  placeholder="Invite your friends."
                  closeMenuOnSelect={false}
                  hasStickyGroupHeaders
                />
                {/* <MultiSelect
                  options={sample}
                  value={value}
                  onChange={setValue}
                /> */}
                {/* <Input
                  id='attendees'
                  placeholder='Who will be attending the event'
                  {...register('attendees', {
                    required: 'This is required',
                  })}
                  type='email'
                  multiple
                  required
                /> */}
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
                <FormLabel htmlFor='endTime'>
                  Event End Time *
                </FormLabel>
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
                <FormLabel htmlFor='location'>
                  Location *
                </FormLabel>
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
                <FormLabel htmlFor='description'>
                  Description
                </FormLabel>
                <Input
                  id='descroiption'
                  placeholder='event description'
                  {...register('description')}
                  type='text'
                />
              </FormControl>
              <HStack mt={6}>
                <Button
                  className={styles.button}
                  isLoading={isSubmitting}
                  type='submit'
                >
                  Submit
                </Button>
                <Button
                  onClick={onClose} type='submit'
                  className={`${styles.button} ${styles.cancel}`}
                >
                  Cancel
                </Button>
              </HStack>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}

// map Redux state
function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

// export default LoginPage;
export default connect(mapStatetoProps, {})(NewEventForm);
