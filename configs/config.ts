import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const apiKey = "AIzaSyAuze6v4dAbSu-xrHeKXMU8w3iaWT6sOfw";

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

const app = initializeApp(firebaseConfig);
// console.log('initialized');
export const config = firebaseConfig;
export const db = getFirestore(app);
export const authentication = getAuth(app);

