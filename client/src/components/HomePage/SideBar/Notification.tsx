import { StylesProvider } from '@chakra-ui/react';
import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ doc }) => {

  const { senderDisplayName } = doc

  // check type property to see what kind of request
  return (
    <div className={styles.notificationCard}>
      {senderDisplayName} has sent an invitation to  [ event name ]

    </div>
  )
}

export default Notification;