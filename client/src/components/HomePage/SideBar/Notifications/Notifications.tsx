import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import { connect } from 'react-redux';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../../../../configs/config';
import styles from './Notification.module.css';
// import { StylesProvider } from '@chakra-ui/react';

const Notifications = (props) => {
  const { currUser } = props
  // console.log('currUser : :', currUser)
  const [docs, setDocs] = useState([]);

  const getAllDocs = async () => {
    try {
      const dbRef = collection(db, 'notifications')
      const temp = [];
      const allDocs = await getDocs(dbRef)
      allDocs.forEach(async (doc) => {
        if (doc.data().status === 'awaiting' && currUser.email === doc.data().receiverEmail) {
          temp.push(doc.data())
        }
      })
      setDocs(temp);
    }
    catch (err) {
      console.log('error : ', err)
    }
  }

  useEffect(() => {
    getAllDocs()
  }, [])


  const mappedArray = docs.map((doc, i) => {
    return <Notification key={i} document={doc} currUser={currUser} getAllDocs={getAllDocs} />
  })

  return (
    <div>
      <p className={styles.header}>Notifications</p>
      <div className={styles.notificationsContainer}>
        {mappedArray}
      </div>
    </div>
  )
}

function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

export default connect(mapStatetoProps, {})(Notifications);

// export default Notifications;