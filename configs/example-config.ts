import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Put config credentials here for app initialization and rename this file to config.ts
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)
