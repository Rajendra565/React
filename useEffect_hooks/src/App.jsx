import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  let [count, setCount] = useState(0)
  const hendalclick=()=>{
    setCount(count+1)
  }
  let [number,setnumber]=useState(0)
  useEffect(()=>{
    hendalToEffect
    console.log('Rajendra')
  },[number])
  const hendalToEffect=()=>{
    setnumber(number+2);
  }


  return (
    <>
      <h1 className=' bg-black  text-white p-4'>Rajendra kuamr badatya {count} </h1>

      <button className='btn btn-danger' onClick={hendalclick}>Click Me</button>
      <h1>{number}</h1>
      <button className=' btn btn-info' onClick={hendalToEffect}>number change</button>
    </>
  )
}

export default App
