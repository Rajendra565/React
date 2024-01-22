// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card';

import '../node_modules/bo'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-green-300 text-black p-2 font-bold rounded-2xl mb-3 text-xl '>Tailwind Test</h1>
  
    
    <Card btnText="Click me"/>
    <Card name="Rajendra" image="https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    
    

    </>
  )
}

export default App
