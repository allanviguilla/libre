import { HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from './../Sidebar.module.css';
import { BsChatDots } from 'react-icons/bs';
import{ RiDeleteBin5Line } from 'react-icons/ri'

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
          <div>

            <BsChatDots />
            <RiDeleteBin5Line />
          </div>
        : null}
      </HStack>
    </div>
  )
}

export default FriendEntry;