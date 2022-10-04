import React, { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LogIn/LoginPage'
import Example from './containers/Example/Example';
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
  const [user, setUser] = useState<UserInterface | null>({});

  return (
    <ChakraProvider>
      <div id="app">
        <Example />
        {
          user ?  <HomePage /> : <LoginPage setUser={setUser}/>
        }
      </div>
    </ChakraProvider>
  )
}

export default App
