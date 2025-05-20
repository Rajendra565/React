import React,{useState} from 'react'
import Child from './Child.jsx'


function App() {
  let name="rajendra"
  let [couter, setCounter] = useState(0)
  return (
    <div>

    <div className="">
      <p>this is parent {couter}</p>
      <button onClick={()=>{setCounter(couter++)}}>click me </button>
    </div>
      <Child temp={couter} setCounter={setCounter}/>
      {/* <Child /> */}
    </div>
  )
}

export default App