import { HStack, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from './../Sidebar.module.css';
import { BsChatDots } from 'react-icons/bs';
import{ RiDeleteBin5Line } from 'react-icons/ri'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const FriendEntry = ({ friend }) => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  return (
    <div className={styles.friendDiv}>
      <HStack className={clicked ? styles.friendClicked : styles.friend}>
        <div><input onClick={() => setClicked(!clicked)} type="checkbox" className={styles.checkboxRound}></input></div>
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
              <BsChatDots />
              <RiDeleteBin5Line />
            </HStack>
          </Stack>
        : null}
      </HStack>
    </div>
  )
}

export default FriendEntry;