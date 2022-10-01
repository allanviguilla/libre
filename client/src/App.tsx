import React, { useState } from 'react'
import { authentication } from '../../configs/config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const App = () => {

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
    <div id="app">
      <h2>Libre</h2>
      <button onClick={signInWithGoogle}>
        Login
      </button>
    </div>
  )
}

export default App
