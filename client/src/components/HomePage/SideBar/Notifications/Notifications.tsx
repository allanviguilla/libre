import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import { connect } from "react-redux";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../../../configs/config";
import styles from "./Notification.module.css";

const Notifications = (props) => {
  const { currUser } = props;
  const [docs, setDocs] = useState([]);
  const [userDocs, setUserDocs] = useState([]);
  const [events, setEvents] = useState([]);

  const getAllDocs = async () => {
    try {
      const dbRef = collection(db, "notifications");
      const temp = [];
      const allDocs = await getDocs(dbRef);
      allDocs.forEach(async (doc) => {
        if (
          doc.data().status === "awaiting" &&
          currUser.email === doc.data().receiverEmail
        ) {
          let docData = doc.data();
          docData["id"] = doc.id;
          temp.push(docData);
        }
      });
      setDocs(temp);
    } catch (err) {
      console.log("error fetching notifications: ", err);
    }
  };

  // const getAllEvents = async () => {
  //   try {
  //     const dbRef = collection(db, "events");
  //     const temp = [];
  //     const allEvents = await getDocs(dbRef);
  //     allEvents.forEach((event) => {
  //       if (event.data().attendeesArray.includes(currUser.email)) {
  //         let eventData = event.data();
  //         eventData["id"] = event.id;
  //         temp.push(eventData);
  //       }
  //       setEvents(temp);
  //     });
  //   } catch (err) {
  //     console.log("error fetching events: ", err);
  //   }
  // };

  useEffect(() => {
    getAllDocs(), getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const dbRef = collection(db, "users");
      const temp = [];
      const allDocs = await getDocs(dbRef);
      allDocs.forEach(async (doc) => {
        temp.push(doc.data());
      });
      setUserDocs(temp);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  // doc is a single notification
  const mappedArray = docs.map((doc, i) => {
    // console.log(doc, "DOC");
    let currPhoto;
    for (let i = 0; i < userDocs.length; i++) {
      if (doc.senderEmail === userDocs[i].email) {
        currPhoto = userDocs[i].photoUrl;
      }
    }
    // let currEvent;
    // for (let j = 0; j < events.length; j++) {
    //   if (doc.eventId === events[i].id) {
    //     currEvent = events[i];
    //     console.log('currEvent' currEvent)
    //   }
    // }

    return (
      <Notification
        key={i}
        document={doc}
        currUser={currUser}
        getAllDocs={getAllDocs}
        currPhoto={currPhoto}
        // currEvent={currEvent}
      />
    );
  });

  return (
    <div>
      <p className={styles.header}>Notifications</p>
      <div className={styles.notificationsContainer}>{mappedArray}</div>
    </div>
  );
};

function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
}

export default connect(mapStatetoProps, {})(Notifications);
