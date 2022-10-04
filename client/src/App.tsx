import React, { useState } from 'react'
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

const App = () => {
  const [user, setUser] = useState<UserInterface | null>(null);

  return (
    <ChakraProvider>
      <div id="app">
        <Example />
        {
          user ?  <HomePage /> : <LoginPage setUser={setUser}/>
        }
        <Chat />
      </div>
    </ChakraProvider>
  )
}

export default App
