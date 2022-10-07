import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Chat.css';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import admin from 'firebase-admin';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {config, db} from '../../../../../../configs/config';


// =================== IMPORT AND WRITE DOCUMENTS FIREBASE ===========
import { doc, setDoc, updateDoc, getFirestore, collection, addDoc, deleteDoc, deleteField, getDoc } from "firebase/firestore";

// // Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
const firestore = firebase.firestore();

let currUserEmail = '';
let chatLength = 0;

function Chat(props) {
  const {friend, currUser} = props;
  const identifier = [currUser.email, friend.email].sort().join('-');
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  setCurrUserEmail(currUser.email);

  // sendMessage retrieve the data of a specific chat room
  // then replace it with the new data (new message stored in event)
  // Input: e (event from sendMessage)
  // Output: none
  const sendMessage = async(e: { preventDefault: () => void; target: { value: any; }[]; }) => {
    e.preventDefault();
    // if (!e.target[0].value) return;
    // get the chat identifier from the Chat component state
    getDoc(doc(db, "chats", identifier))
      .then((chatData: any) => {
        // get the document that the has the chat history between two friends
        chatData = chatData.data();
        // add message to chat history
        const timeStamp = getTimeStamp();
        const text = e.target[0].value;
        const messageObject = {
          createdAt: timeStamp,
          text,
          email: currUser.email,
        };
        const chatHistory = chatData === undefined ? [] : chatData.chatHistory;
        chatHistory.push(messageObject);
        setMessages(chatHistory);
        chatLength = chatHistory.length;
        const members = chatData === undefined ? [] : [currUser.email, friend.email ].sort();
        // overwrite the existing document with the new chat history object
        setDoc(doc(db, "chats", identifier), {
          members,
          chatHistory,
        })
        setFormValue('');
      })
  }

  return (
    <div id="chat">
      {/* <h1>JAMES</h1> */}
      <p>Chat with {friend.displayName}</p>
      <ChatRoom friend={friend} currUser={currUser} message={messages}/>
      <form onSubmit={sendMessage} className='send-bar'>
          <input value={formValue} onChange={(e) =>
          setFormValue(e.target.value)}
          className="chat-bar__input"/>
          <button type="submit"> Send</button>
      </form>
    </div>
  )
}

function ChatRoom(props) {
  const {friend, currUser} = props;
  const identifier = [currUser.email, friend.email].sort().join('-');
  const [messages, setMessages] = useState(props.messages);

  useEffect(() => {
    // 1. look up chat history for the DM between two friends
    getDoc(doc(db, "chats", identifier))
      .then((chatData: any) => {
        // 2. update the current chat
        const chatHistory = chatData.data() === undefined ? [] : chatData.data().chatHistory;
        setMessages(chatHistory);
        // update the chat length
        chatLength = chatHistory.length;
        const members = chatData.data() === undefined ? [] : [currUser.email, friend.email ].sort();
        setDoc(doc(db, "chats", identifier), {
          // members
          members,
          chatHistory,
        })
      })
      // 3. create a new chat
      .catch(() => {
        const members = [currUser.email, friend.email ].sort();
        setDoc(doc(db, "chats", identifier), {
          // members
          members,
        })
      })
  }, [messages]);



  return(
    <>
      <div className="chat">
        <div className='messages'>
          {messages && messages.map((msg, index) => {
          return <ChatMessage
          key={index}
          message={msg}
          index={index}
          />
          }
          )}
        </div>
      </div>
    </>
  )
}


function ChatMessage(props) {
  // const { text, uid, id } = props.message;
  const { text, email } = props.message;
  const { index } = props;

  const currUserEmail = getCurrUserEmail();

  const messageClass = email === currUserEmail ? 'sent':'received';
  const isLast = (email === currUserEmail && index === (chatLength-1)) ? 'last' : '';


  return (
    <div className={`messages ${messageClass}`}>
      <p className={`message ${isLast}`}>{text}</p>
    </div>
  )
}

function setCurrUserEmail(data) {
  currUserEmail = data;
}

function getCurrUserEmail() {
  return currUserEmail;
}

const getTimeStamp = () => {
  const timeStamp = firebase.firestore.Timestamp.now();
  return timeStamp;
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
