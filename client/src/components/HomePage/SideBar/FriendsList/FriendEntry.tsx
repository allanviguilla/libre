import { HStack, Stack, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from './FriendsList.module.css';
import { BsChatDots } from 'react-icons/bs';
import{ RiDeleteBin5Line } from 'react-icons/ri'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { connect } from "react-redux";
import { addAttendee, removeAttendee } from "../../../../redux/actions/attendees";
import { toggleSideBar } from "../../../../redux/actions/sideBar";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

const FriendEntry = (props) => {
  const [clicked, setClicked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { friend, currUser, addAttendee, removeAttendee, toggleSideBar, setChatWith } = props;

  const handleClick = () => {
    setClicked(!clicked);
    clicked ? removeAttendee(friend) :addAttendee(friend);
  }

  const handleDelete = () => {

  }

  return (
    <div className={styles.friendDiv}>
      <HStack className={clicked ? styles.friendClicked : styles.friend}>
        <div><input onClick={() => handleClick()} type="checkbox" className={styles.checkboxRound}></input></div>
        <div style={{width: '100%'}}>
          <p>{friend.displayName}</p>
        </div>
      </HStack>
      <HStack>
        { clicked ?
          <Stack>
            <HStack>
              <Avatar name={friend.displayName} src={friend.photoUrl} />
              <p></p>
            </HStack>
            <HStack>
              <BsChatDots onClick={() => {
                toggleSideBar('chats')
                setChatWith(friend)
                }}/>
                <RiDeleteBin5Line />


            </HStack>
          </Stack>
        : null}
      </HStack>
    </div>
  )
}

function mapStatetoProps(state) {
  const { currUser, attendees } = state;
  return { currUser, attendees };
};

const mapDispatchToProps = { addAttendee, removeAttendee, toggleSideBar };

export default connect(mapStatetoProps, mapDispatchToProps)(FriendEntry);