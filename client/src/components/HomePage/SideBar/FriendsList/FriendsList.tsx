import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { HStack, VStack } from '@chakra-ui/react'
import styles from './../Sidebar.module.css'
import { friendsReqResponse } from '../dummyData';

const FriendsList = () => {
  return (
    <div className={styles.friendsList}>
      <div className={styles.friendListHeader}>
        <h2>FriendsList</h2>
        <button>Add Friend</button>
        <HStack>
          <input type="text" placeholder='Search friends list ...' ></input>
          <BsSearch size={20}/>
        </HStack>
      </div>

      <VStack>
        {
          friendsReqResponse.map((friend) =>
            <HStack className={styles.friendDiv}>
              <div><input type="checkbox" className={styles.checkboxRound}></input></div>
              <div style={{width: '100%'}} onClick={() => {console.log('clicked')}}><p>{friend.displayName}</p></div>
            </HStack>
          )
        }
      </VStack>
    </div>
  )
}

export default FriendsList;
