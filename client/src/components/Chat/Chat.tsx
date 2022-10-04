import React, { useState, useEffect } from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
// firebase.initializeApp(firebaseConfig);
// // const analytics = firebase.analytics();
// const auth = firebase.auth();
// const firestore = firebase.firestore();


const Chat = () => {
  return (
    <div id="chat">
      <h1>Hello, world</h1>
    </div>
  )
}

export default Chat;
