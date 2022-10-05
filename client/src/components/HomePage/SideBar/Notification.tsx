import React from 'react';

const Notification = ({ doc }) => {

  const { senderDisplayName, type } = doc

  // accept:
  // decline:

  return (
    <div>
      {type === 'eventInvitation' ?
        <div>
          {senderDisplayName} has sent an invitation to [event name]
          <button>Accept</button>
          <button>Decline</button>
        </div>
        :
        null
      }
      {type === 'friendRequest' ?
        <div>
          {senderDisplayName} has sent you a friend request!
          <button>Accept</button>
          <button>Decline</button>
          </div>
        :
        null
      }
    </div>
  )
}

export default Notification;