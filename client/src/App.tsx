import React, { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LogIn/LoginPage'
import { ChakraProvider } from '@chakra-ui/react';

interface UserInterface {
  email: string,
  displayName: string,
  photoUrl: string,
  oauthAccessToken: string,
  refreshToken: string,
  friends: Array<string>,
  bio?: string,
  profile?: string

}

const dummyUser = {
  email: 'hackreactor@gmail.com',
  displayName: 'eric do',
  oauthAccessToken: 'insert access token here',
  refreshToken: 'insert refresh token here',
  friends: ['hepner.thomas2@gmail.com'],
  bio: 'im better than julien',
  profile: 'ericprofile.com'
}

const App = () => {

  // TODO: set state of user after user-login

  // show calendar view
  // const [user, setUser] = useState<UserInterface | null>(dummyUser);

  // show user login view
  const [user, setUser] = useState<UserInterface | null>(null);

  console.log(user);
  return (
    <ChakraProvider>
      <div id="app">
        {
          user ?  <HomePage /> : <LoginPage />
        }
      </div>
    </ChakraProvider>
  )
}

export default App
