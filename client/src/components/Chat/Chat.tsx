import React, { useState, useEffect } from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {config} from '../../../../configs/config';

// import { doc, setDoc } from "firebase/firestore";

// ==============================================
// INITIALIZE FIREBASE SDK from doc
// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBzC-epjFPwzW88k_jzeiJrgtiG680xj80",
//   authDomain: "chat-demo-firebase-40936.firebaseapp.com",
//   projectId: "chat-demo-firebase-40936",
//   storageBucket: "chat-demo-firebase-40936.appspot.com",
//   messagingSenderId: "724324090088",
//   appId: "1:724324090088:web:201e4a1692d8c28c44495d",
//   measurementId: "G-FDWEL1E98M"
// };

// // Initialize Firebase
firebase.initializeApp(config);
// // const analytics = firebase.analytics();
// const auth = firebase.auth();

const firestore = firebase.firestore();

const Chat = () => {
  return (
    <div id="chat">
      <h1>Hello, James</h1>
      <ChatRoom />
    </div>
  )
}


function ChatRoom() {
  const messagesRef = firestore.collection('chat-test-db');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  console.log(messages);

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

export default Chat;
