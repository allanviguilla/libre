import React, { useState } from 'react'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LogIn/LoginPage'
import { ChakraProvider } from '@chakra-ui/react';

interface UserInterface {
  email: string,
  name: string,
  bio?: string,
  profile: string
}

const dummyUser = {
  email: 'hackreactor@gmail.com',
  name: 'eric do',
  bio: 'im better than julien',
  profile: 'ericprofile.com'
}

const App = () => {
  const [user, setUser] = useState<UserInterface | null>(dummyUser)
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
