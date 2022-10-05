import React, { useState, useEffect } from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {config} from '../../../../configs/config';


// =================== IMPORT AND WRITE DOCUMENTS FIREBASE ===========
import { doc, setDoc, updateDoc, getFirestore } from "firebase/firestore";

// // Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
const firestore = firebase.firestore();


// ========= create a document
// there is NO api to create a new COLLECTION
// but the BIG question, can we create a COLLECTION from a DOCUMENT
// because a DOCUMENT can create a COLLECTION on the console?

const chatRef = doc(firestore, "chat-test-db", "alpha-chat");

// Set the "capital" field of the city 'DC'
await setDoc(chatRef, {
  text: "hello, setDoc",
});

// COLLECTION has DOCUMENTS, in which each is a TEXT message
// BUT
// our desired schema is
// COLLECTION has DOCUMENTS, in which each is a CHAT ROOM
  // 
// where each CHAT ROOM is an object that contains a conversation info (like users, and emails)
// and a chat history array of objects, in which each object is a TEXT message

const Chat = () => {
  return (
    <div id="chat">
      <h1>Hello, James</h1>
      <ChatRoom />
    </div>
  )
}

function ChatRoom() {
  // choose the message collection
  const messagesRef = firestore.collection('chat-test-db');

  // query to return 25 items order by time
  const query = messagesRef.orderBy('createdAt').limit(25);

  // collect the data
  const [messages] = useCollectionData(query, {idField: 'id'});

  // console.log(messages);

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
