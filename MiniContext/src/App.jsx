import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Porfile from './Components/Porfile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
    <h1>Rejendra</h1>
    <Login/>
    <Porfile/>
    </UserContextProvider>
    </>
  )
}

export default App
