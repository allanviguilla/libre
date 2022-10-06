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
  }, [currUser])


  const handleAddAttendee = () => {
    addAttendee({email:'qingzhouyan@gmail.com', photoUrl:'xxx.sdax.com'})
  }

  const handleRemoveAttendee = () => {
    removeAttendee({email:'qingzhouyan@gmail.com', photoUrl:'xxx.sdax.com'})
  }

  return (
    <div className={styles.friendsList}>
      <div className={styles.friendListHeader}>
        <h2>FriendsList</h2>
        <button>Add Friend</button>
        <HStack>
          <input type="text" placeholder='Search friends list ...' ></input>
          <BsSearch size={20} />
        </HStack>
      </div>
      <VStack>
        {
          friends.map((friend) =>
            <FriendEntry key={friend.displayName} friend={friend} />
          )
        }
      </VStack>
      <button onClick={handleAddAttendee}>add attendee</button>
      <button onClick={handleRemoveAttendee}>remove attendee</button>
    </div>
  )
}


function mapStatetoProps(state) {
  const { currUser, attendees } = state;
  return { currUser, attendees };
};

// addAttendee({email:'qingzhou@gmail.com', .....}) email is required
// when add, shift the new attendee to the first of the list
// removeAttendee({email:'qingzhou@gmail.com', .....}) email is required
// remove the attendee from the list
const mapDispatchToProps = { addAttendee, removeAttendee };

export default connect(mapStatetoProps, mapDispatchToProps)(FriendsList);
