import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../../configs/config';
import React, { useState, useEffect } from 'react';
import styles from './Notification.module.css';
import { BsXLg } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'
import { Avatar, IconButton } from '@chakra-ui/react'

const Notification = ({ document, currUser, getAllDocs, currPhoto }) => {
  const { email } = currUser
  const { senderDisplayName, senderEmail, type, eventId } = document

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
      <div className={styles.notificationHeader}>
        <Avatar name={senderDisplayName} src={currPhoto} size="md"/>
        {type === 'event-invitation' ?
          <p className={styles.notificationHeaderText}>
            <span className={styles.senderDisplayName}><b>{senderDisplayName}</b></span>
            sent an invitation to
            <b> event name!</b>
          </p>
          :
          <p>
            <span className={styles.senderDisplayName}>
              <b>{senderDisplayName}</b>
            </span>sent you a <b>friend request!</b>
          </p>
        }
      </div>
      <hr className={styles.divider} />
      <div className={styles.notificationButtons}>
        <IconButton
          variant='outline'
          colorScheme='orange'
          aria-label='Accept Button'
          fontSize='18px'
          size='sm'
          icon={<GiCheckMark />}
          onClick={acceptRequest}
        />
        <IconButton
          variant='outline'
          colorScheme='orange'
          aria-label='Decline Button'
          fontSize='18px'
          size='sm'
          icon={<BsXLg />}
          onClick={declineRequest}
        />
      </div>
    </div>
  )
}

export default Notification;