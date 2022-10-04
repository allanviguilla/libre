import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Including the API Key is not a security risk per Google Cloud.
  // https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
  apiKey: "AIzaSyAuze6v4dAbSu-xrHeKXMU8w3iaWT6sOfw",
  authDomain: "libre-4dfda.firebaseapp.com",
  projectId: "libre-4dfda",
  storageBucket: "libre-4dfda.appspot.com",
  messagingSenderId: "645278607294",
  appId: "1:645278607294:web:75a21135e14b91229a7bef",
  measurementId: "G-4EXC8ENWYY"
};

// James's config
// const firebaseConfig = {
//   apiKey: "AIzaSyBzC-epjFPwzW88k_jzeiJrgtiG680xj80",
//   authDomain: "chat-demo-firebase-40936.firebaseapp.com",
//   projectId: "chat-demo-firebase-40936",
//   storageBucket: "chat-demo-firebase-40936.appspot.com",
//   messagingSenderId: "724324090088",
//   appId: "1:724324090088:web:201e4a1692d8c28c44495d",
//   measurementId: "G-FDWEL1E98M"
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const authentication = getAuth(app);