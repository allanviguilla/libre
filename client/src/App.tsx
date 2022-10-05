import React, { useState } from 'react'
import { connect } from 'react-redux';

import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LogIn/LoginPage'
import Example from './containers/Example/Example';
import Chat from './components/Chat/Chat';
import { ChakraProvider } from '@chakra-ui/react';

interface UserInterface {
  displayName: string,
  email: string,
  photoUrl: string,
  oauthAccessToken: string,
  refreshToken: string,
  friends: Array<string>,
  bio?: string,
  profile?: string

}

const App = (props) => {
  const { currUser } = props;

  return (
    <ChakraProvider>
      <div id="app">
        {/* <Example /> */}
        { currUser ?  <HomePage /> : <LoginPage/> }
      </div>
    </ChakraProvider>
  )
}

// wrap ui component with redux

// map state
function mapStatetoProps(state) {
  const { currUser } = state;
  return { currUser };
};

export default connect(mapStatetoProps)(App);