import { StylesProvider } from '@chakra-ui/react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../../configs/config';
import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ doc }) => {

  const { senderDisplayName, type } = doc

  const declineRequest = () => {
    const docRef = doc(db, 'notifications', senderDisplayName)
    const data = {
      status: 'declined'
    }
    updateDoc(docRef, data)
    .then(() => {
      console.log('updated doc')
    })
    .catch((err) => {
      console.log('did not update')
    })
  }

  return (
    <div>
      {type === 'eventInvitation' ?
        <div>
          {senderDisplayName} has sent an invitation to [event name]
          <button>Accept</button>
          <button onClick={declineRequest}>Decline</button>
        </div>
        :
        null
      }
      {type === 'friendRequest' ?
        <div>
          {senderDisplayName} has sent you a friend request!
          <button>Accept</button>
          <button onClick={declineRequest}>Decline</button>
          </div>
        :
        null
      }
    </div>
  )
}

export default Notification;