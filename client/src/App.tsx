import React, { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LogIn/LoginPage'
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
        {
          user ?  <HomePage /> : <LoginPage setUser={setUser}/>
        }
      </div>
    </ChakraProvider>
  )
}

export default App
