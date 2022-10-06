import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { HStack, VStack } from '@chakra-ui/react'
import styles from './../Sidebar.module.css'
import { friendsReqResponse } from '../dummyData';
import FriendEntry from './FriendEntry';
import { connect } from 'react-redux';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../../../../../../configs/config';
import { getEvents, getToken } from '../../../Utilities/http';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);

  const { currUser } = props;

  useEffect(() => {
    const hold = [];
    currUser.friends.map((friend, i) => {
      getDoc(doc(db, "users", friend))
        .then((res) => {
          const friendRes = res.data();
          const accessToken = getToken(friendRes.refreshToken);
          const friend = {...friendRes}
          friend.oauthAccessToken = accessToken;

        })
        .catch((err) => console.log(err))
    })
  }, [currUser])

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
        {/* {
          currUser.friends.map((friend) =>
            <FriendEntry key={friend.displayName} friend={friend} />
          )
        } */}
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
