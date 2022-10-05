import React from 'react';

const Notification = ({ doc }) => {

  const { senderDisplayName } = doc

  // check type property to see what kind of request
  return (
    <div>
      {senderDisplayName} has sent an invitation to  [ event name ]

    </div>
  )
}

export default Notification;