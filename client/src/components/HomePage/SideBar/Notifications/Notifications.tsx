import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import { connect } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../../configs/config';

const Notifications = (props) => {
  const { currUser } = props
  // console.log('currUser : :', currUser)
  const [docs, setDocs] = useState([]);

  const getAllDocs = async () => {
    try {
      const dbRef = collection(db, 'notifications')
      const temp = [];
      const allDocs = await getDocs(dbRef)
      allDocs.forEach((doc) => {
        if (doc.data().status === 'awaiting' && currUser.email === doc.data().receiverEmail) {
          temp.push(doc.data())
        }
      })
      setDocs(temp);
      console.log('temporary doc array : ', docs)
    }
    catch (err) {
      console.log('error : ', err)
    }
  }

  useEffect(() => {
    getAllDocs()
  }, [])


  const mappedArray = docs.map((doc, i) => {
    return <Notification key={i} document={doc} currUser={currUser} getAllDocs={getAllDocs}/>
  })

  return (
    <div>
      <p>Notifications</p>
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