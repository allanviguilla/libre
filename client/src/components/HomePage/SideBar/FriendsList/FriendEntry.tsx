import { HStack, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from './FriendsList.module.css';
import { BsChatDots } from 'react-icons/bs';
import{ RiDeleteBin5Line } from 'react-icons/ri'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Chat from "../../../Chat/Chat";

const FriendEntry = ({ friend }) => {
  const [clicked, setClicked] = useState(false);
  // console.log(clicked);

  const [isChat, setIsChat] = useState(false);

  const handleClick = () => {
    console.log('I CLIUCKED FRIEND', friend)
  }
  return (
    <div className={styles.friendDiv}>
      <HStack className={clicked ? styles.friendClicked : styles.friend}>
        <div><input onClick={() => {
          setClicked(!clicked);
          setIsChat(false);
          handleClick()
          }} type="checkbox" className={styles.checkboxRound}></input></div>
        <div style={{width: '100%'}}>
          <p>{friend.displayName}</p>
        </div>
      </HStack>
      <HStack>
        { clicked ?
          <Stack>
            <HStack>
              <Avatar name={friend.displayName} src={friend.photoUrl} />
              <p>bio here </p>
            </HStack>
            <HStack>
              <BsChatDots onClick={() => {
                setIsChat(true);
              }}/>
              {isChat ? <Chat /> : null}
              <RiDeleteBin5Line />
            </HStack>
          </Stack>
        : null}
      </HStack>
    </div>
  )
}

export default FriendEntry;