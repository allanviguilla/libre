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
  const [userDocs, setUserDocs] = useState([]);
  // const [currPhoto, setCurrPhoto] = useState('');

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
    getAllUsers()
  }, [])


  const getAllUsers = async () => {
    try {
      const dbRef = collection(db, 'users')
      const temp = [];
      const allDocs = await getDocs(dbRef)
      allDocs.forEach(async (doc) => {
          temp.push(doc.data())
      })
      setUserDocs(temp);
      // console.log(temp)
    }
    catch (err) {
      console.log('error : ', err)
    }
  }

  const mappedArray = docs.map((doc, i) => {
    // console.log(userDocs, 'userDocs')
    // console.log(doc, 'single doc')
    // if (doc.senderEmail === userDocs.)
    let currPhoto;
    for (let i = 0; i < userDocs.length; i++) {
      if (doc.senderEmail === userDocs[i].email) {
        currPhoto = userDocs[i].photoUrl
        // console.log(currPhoto)
      }
    }

    return <Notification key={i} document={doc} currUser={currUser} getAllDocs={getAllDocs} currPhoto={currPhoto}/>
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