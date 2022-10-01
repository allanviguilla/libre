import React, { useState } from 'react'
import LoginPage from './components/LogIn/LoginPage'

interface UserInterface {

}

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <div id="app">
      <h2>Libre</h2>
      <LoginPage />
    </div>
  )
}

export default App
