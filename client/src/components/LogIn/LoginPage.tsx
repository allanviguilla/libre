import React from 'react';
import GoogleButton from 'react-google-button';
import { authentication, db } from '../../../../configs/config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const LoginPage = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar.events');
    provider.addScope('https://www.googleapis.com/auth/calendar');
    provider.addScope('https://www.googleapis.com/auth/ƒcalendar.settings.readonly');
    provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly');
    provider.addScope('https://www.googleapis.com/auth/calendar.readonly');
    signInWithPopup(authentication, provider)
    .then((res: any) => {
      const { displayName, email, photoUrl, oauthAccessToken, refreshToken } = res._tokenResponse;
      getDoc(doc(db, "users", email))
        .then((userData: any) => {
          const friends = userData.data() === undefined ? [] : userData.data().friends;
          setDoc(doc(db, "users", email), {
            displayName: displayName,
            email: email,
            photoUrl: photoUrl,
            oauthAccessToken: oauthAccessToken,
            refreshToken: refreshToken,
            friends: friends,
          })
        })
    })
    .catch(err => {
      console.log('error signing in: ', err)
    })
  }

  return (
    <div id="login-page">
      <h2>Libre</h2>
      <GoogleButton onClick={signInWithGoogle}/>
    </div>
  )
}

export default LoginPage;