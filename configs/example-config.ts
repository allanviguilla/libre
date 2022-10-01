import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Put config credentials here for app initialization
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)
