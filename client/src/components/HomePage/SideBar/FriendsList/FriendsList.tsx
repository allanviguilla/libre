import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { HStack, VStack } from '@chakra-ui/react'
import styles from './../Sidebar.module.css'
import { friendsReqResponse } from '../dummyData';
import FriendEntry from './FriendEntry';

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
            <FriendEntry friend={friend} />
          )
        }
      </VStack>
    </div>
  )
}

export default FriendsList;
