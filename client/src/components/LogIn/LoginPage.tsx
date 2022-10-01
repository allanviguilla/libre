import exp from "constants";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { authentication } from "../../../../configs/config";

const LoginPage = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div id="login-page">
      <button onClick={signInWithGoogle}>
        Login
      </button>
    </div>

  )
}

export default LoginPage;