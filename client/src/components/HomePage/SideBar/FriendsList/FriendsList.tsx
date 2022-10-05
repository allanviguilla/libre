import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { HStack, VStack } from '@chakra-ui/react'
import styles from './../Sidebar.module.css'
import { friendsReqResponse } from '../dummyData';
import FriendEntry from './FriendEntry';
import { connect } from 'react-redux';

const FriendsList = (props) => {
  const { currUser } = props;

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
          currUser.friends.map((friend) =>
            <FriendEntry key={friend.displayName} friend={friend} />
          )
        }
      </VStack>
    </div>
  )
}

function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

const mapDispatchToProps = {};

export default connect(mapStatetoProps, mapDispatchToProps)(FriendsList);
