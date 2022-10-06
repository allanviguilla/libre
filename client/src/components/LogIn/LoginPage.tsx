import React from 'react';
import { connect } from 'react-redux';
import GoogleButton from 'react-google-button';
import { authentication, db } from '../../../../configs/config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { signin } from '../../redux/actions/currUser';

const LoginPage = (props) => {
  const { currUser, signin } = props;

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar.events');
    provider.addScope('https://www.googleapis.com/auth/calendar');
    provider.addScope('https://www.googleapis.com/auth/calendar.settings.readonly');
    provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly');
    provider.addScope('https://www.googleapis.com/auth/calendar.readonly');
    signInWithPopup(authentication, provider)
    .then((res: any) => {
      const { displayName, email, photoUrl, oauthAccessToken, refreshToken } = res._tokenResponse;
      console.log(res);
      // save user information into database
      getDoc(doc(db, "users", email))
      .then((userData: any) => {
          const friends = userData.data() === undefined ? [] : userData.data().friends;
          const friendGroups = userData.data() === undefined ? [] : userData.data().friendGroups;
          setDoc(doc(db, "users", email), {
            displayName: displayName,
            email: email,
            photoUrl: photoUrl,
            oauthAccessToken: oauthAccessToken,
            refreshToken: refreshToken,
            friends: friends,
            friendGroups: friendGroups,
          })

          // set the redux state with user information
          signin({ displayName, email, photoUrl, oauthAccessToken, refreshToken, friends });
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

// map state
function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

// map methods to update the state
const mapDispatchToProps =  { signin };


// export default LoginPage;
export default connect(mapStatetoProps, mapDispatchToProps)(LoginPage);