import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Put config credentials here for app initialization and rename this file to config.ts
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const authentication = getAuth(app)
