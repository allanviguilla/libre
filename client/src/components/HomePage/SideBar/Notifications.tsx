import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import { connect } from 'react-redux';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../../../configs/config';

const Notifications = ( props ) => {
  const { currUser } = props
  console.log('currUser : :', currUser)
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const getAllDocs = async () => {
      try {
        const dbRef = collection(db, 'notifications')
        const temp = [];
        const allDocs = await getDocs(dbRef)
        allDocs.forEach((doc) => {
          // console.log(doc.id, ' => ', doc.data())
          temp.push(doc.data())
        })
        setDocs(temp);
        // console.log('temp : ', docs)
      }
      catch (err) {
        console.log('error : ', err)
      }
    }
    getAllDocs()
  }, [])

  const mappedArray = docs.map((doc, i) => {
   return <Notification key={i} doc={doc} />
  })

  return (
    <div>
      {mappedArray}
    </div>
  )
}

function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

export default connect(mapStatetoProps, {})(Notifications);

// export default Notifications;