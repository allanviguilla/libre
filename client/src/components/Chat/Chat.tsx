import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {config, db} from '../../../../configs/config';


// =================== IMPORT AND WRITE DOCUMENTS FIREBASE ===========
import { doc, setDoc, updateDoc, getFirestore, collection, addDoc, deleteDoc, deleteField, getDoc } from "firebase/firestore";

// // Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
const firestore = firebase.firestore();


// ========= create a document
// there is NO api to create a new COLLECTION
// but the BIG question, can we create a COLLECTION from a DOCUMENT
// because a DOCUMENT can create a COLLECTION on the console?

// const chatRef = doc(firestore, "chat-test-db", "alpha-chat");

// // Set the "capital" field of the city 'DC'
// await setDoc(chatRef, {
//   text: "hello, setDoc",
// });

// COLLECTION has DOCUMENTS, in which each is a TEXT message
// BUT
// our desired schema is
// COLLECTION has DOCUMENTS, in which each is a CHAT ROOM
  //
// where each CHAT ROOM is an object that contains a conversation info (like users, and emails)
// and a chat history array of objects, in which each object is a TEXT message

const Chat = (props) => {
  const {friend, currUser} = props;
  console.log('friend ', friend);
  console.log('currUser ', currUser);

  return (
    <div id="chat">
      <ChatRoom friend={friend} currUser={currUser}/>
    </div>
  )
}

function ChatRoom2() {
  return(
    <div>
      <p>Chatroom 2</p>
    </div>
  );
}

function ChatRoom(props) {
  const {friend, currUser} = props;
  // 0. get or create unique identifier for a chat conversation
  // what is current user email?
  // what is friend email they are chatting with?
  const identifier = [currUser.email, friend.email].sort().join('-');
  console.log(identifier);

  // 1. look up the doc
  getDoc(doc(db, "chats", identifier))
  .then((chatData: any) => {
    // console.log("Chat Data: ", chatData.data());
    const chatHistory = chatData.data() === undefined ? [] : chatData.data().chatHistory;
    const members = chatData.data() === undefined ? [] : [currUser.email, friend.email ].sort();
    setDoc(doc(db, "chats", identifier), {
      // members
      members,
      chatHistory,
    })
  })
  .catch(() => {
    // create a new doc with desired inputs
  })

  // 2. then display the history chat
  // 3. catch create a history chat


  // const db = firestore.collection('chat-test-db');
  //
  // let found: firebase.firestore.DocumentData;
  // // Print each document
  // db.get()
  // .then((snapshot) => {
  //   snapshot.forEach((doc) => {
  //     console.log('doc id ', doc.id);
  //     const data = doc.data();
  //     // console.log(Object.keys(data));
  //     console.log(doc.data());
  //     // if (doc.id === 'room-alpha-1') {
  //     //   found = doc.data();
  //     // }
  //   })
  // })
  // if (found) {
  //   console.log('found ', found);
  // }

  // 1. look up the doc
  // 2. then display the history chat
  // 3. catch create a history chat


  // addDoc
  // await addDoc(
  //   collection(db, 'chat-test-db'), {
  //     emails: [],
  //     users: [],
  //     chatHistory: [{}],
  //   }
  // )


  // grab documents from chat-test-db
  const messagesRef = firestore.collection('chat-test-db');

  // order messages ref around with
  const query = messagesRef.orderBy('createdAt').limit(25);

  // collect the data
  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    // const { uid } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      // uid
    })

    setFormValue('');
  }

  return(
    <>
      <div>
        <div>
          {messages && messages.map((msg, index) => {
          return <ChatMessage
          key={index}
          message={msg}
          />
          }
          )}
        </div>
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) =>
          setFormValue(e.target.value)}/>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}

function ChatMessage(props) {
  // const { text, uid, id } = props.message;
  const { text, uid } = props.message;


  const messageClass = uid ? 'sent':'received';

  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  )
}

// ================== REDUX ==========
// map state
function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

// map methods to update the state
// const mapDispatchToProps =  { signin };


// export default LoginPage;
export default connect(mapStatetoProps, {})(Chat);


// export default Chat;
