import { collection, getDoc, setDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../../configs/config';
import React from 'react';
import styles from './Notification.module.css';
import { BsCheckCircleFill, BsXLg } from 'react-icons/bs'
import { IconButton } from '@chakra-ui/react'

const Notification = ({ document, currUser, getAllDocs }) => {
  // console.log('document : ', document);
  const { email } = currUser
  const { senderDisplayName, type, eventId } = document

  // update calendar API to either accepted or declined

  const acceptRequest = () => {
    const docRef = doc(db, 'notifications', eventId)
    const data = {
      status: 'accepted'
    }
    updateDoc(docRef, data)
      .then(() => {
        console.log('accept event successful')
        getAllDocs()
      })
      .catch((err) => {
        console.log('did not update :', err)
      })

    if (type === 'friend-request') {
      const userRef = doc(db, 'users', email)
      getDoc(userRef)
        .then((userData: any) => {
          const friends = userData.data().friends.slice()
          friends.push(document.senderEmail)
          updateDoc(userRef, { friends: friends })
        })
        .catch(err => console.log(err))
    }
  }

  const declineRequest = async () => {
    const docRef = doc(db, 'notifications', eventId)
    const data = {
      status: 'declined'
    }
    updateDoc(docRef, data)
      .then(() => {
        console.log('decline event request successful')
        getAllDocs()
      })
      .catch((err) => {
        console.log('did not update:', err)
      })
  }

  return (
    <div className={styles.notificationCard}>
      <div className={styles.notificationText}>
        {type === 'event-invitation' ?
          `${senderDisplayName} has sent an invitation to event name` : `${senderDisplayName} has sent you a friend request!`}
      </div>
      <div className={styles.notificationButtons}>
        <IconButton
          variant='outline'
          colorScheme='orange'
          aria-label='Accept Button'
          fontSize='20px'
          size='lg'
          icon={<BsCheckCircleFill />}
          onClick={acceptRequest}
        />
        <IconButton
          variant='outline'
          colorScheme='orange'
          aria-label='Decline Button'
          fontSize='20px'
          size='lg'
          icon={<BsXLg />}
          onClick={declineRequest}
        />
      </div>
    </div>
  )
}

export default Notification;