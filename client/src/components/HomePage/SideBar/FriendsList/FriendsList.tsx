import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { HStack, VStack } from '@chakra-ui/react'
import styles from './../Sidebar.module.css'
import FriendEntry from './FriendEntry';
import { connect } from 'react-redux';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../../../../../../configs/config';
import { getEvents, getToken } from '../../../Utilities/http';
import { addAttendee, removeAttendee } from '../../../../redux/actions/attendees'

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);

  const { currUser, attendees, addAttendee, removeAttendee } = props;

  console.log(attendees)

  useEffect(() => {
    let hold = [];
    currUser.friends.map((friend, i) => {
      getDoc(doc(db, "users", friend))
        .then((res) => {
          const friend = res.data();
          hold.push(friend);
          if (hold.length === currUser.friends.length) {
            setFriends(hold)
          }
        })
        .catch((err) => console.log(err))
    })
  }, [currUser])

  return (
    <div className={styles.friendsList}>
      <div className={styles.spacer}></div>
      <div className={styles.friendsListNav}>
            <button className={styles.button}>Add Friend +</button>
                <span className={styles.search}>
                  <input className={styles.input} type="text" placeholder='Search friends list ...' ></input>&nbsp;
                  <BsSearch size={20}/>
                </span>
              <h2 className={styles.h2}>My Friends</h2>
          </div>
          <VStack className={styles.friendsItems}>
            {
              friends.map((friend) =>
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
