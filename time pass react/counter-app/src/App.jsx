import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)


  const addvalue=()=>{
    if(count>=10){
      alert("not more then 10")
    }
    else{

      setCount(count+1)
    }
    
  }

  const removevalue=()=>{
    if(count==0){
      alert("less then 0")
    }
    else{

      setCount(count-1)
    }
  }

  const reset=()=>{
    setCount(count=0)
  }
  return (
    <>
    <div className=" flex align-middle flex-col gap-7">
    <h1>Kumar Rajendra {count}</h1>
    <div className="btn flex gap-4 container">
    <button onClick={addvalue}><i className="fa-solid fa-plus"></i> </button>
    <button onClick={reset}>Reset {count}</button>
    <button onClick={removevalue}><i className="fa-solid fa-minus"></i></button>
    </div>
    <h1>Counter value {count}</h1>

    </div>
    </>
  )
}

export default App
