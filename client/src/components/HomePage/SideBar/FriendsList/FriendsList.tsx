import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { HStack, useDisclosure, VStack } from '@chakra-ui/react'
import styles from './../Sidebar.module.css'
import FriendEntry from './FriendEntry';
import { connect } from 'react-redux';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../../../../../../configs/config';
import { getEvents, getToken } from '../../../Utilities/http';
import { addAttendee, removeAttendee } from '../../../../redux/actions/attendees'
import AddFriend from './AddFriend';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
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
      <div className={styles.friendListHeader}>
        <h2>FriendsList</h2>
        <button onClick={onOpen} ref={btnRef} >Add Friend</button>
        <AddFriend isOpen={isOpen} onClose={onClose}/>
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
    </div>
  )
}

function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

const mapDispatchToProps = {};

export default connect(mapStatetoProps, mapDispatchToProps)(FriendsList);
