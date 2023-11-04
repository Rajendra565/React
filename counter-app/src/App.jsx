import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
 let [Color,setColor]=useState("red");

  

  let addnumber=()=>{
    if(counter>=10){
      alert("you value is 10 ")
    }
    else{
       counter=counter+1;
    setCounter(counter)
    }
   
  }
  let Removenumber=()=>{
    if(counter<=0){
      alert("please add value")
    }
    else{
       counter=counter-1;
    setCounter(counter)
    
    }
   
  }
  let style={
    color:{Color},
    
  };
  let redcolor=()=>{
    setColor("red")
  }
  let greencolor=()=>{
    setColor("green")
  }

  return (
    <>
    <h1>Hello world</h1>
    <p>Counter {counter}</p>
     <button style={style} onClick={addnumber}>Add</button>
     <button onClick={Removenumber}>Remove {counter}</button>
     <footer>This is footer{counter}</footer>
     <button onClick={redcolor}>red</button>
     <button onClick={greencolor}>green</button>
     
    </>
  )
}

export default App
