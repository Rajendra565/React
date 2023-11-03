import { useState } from 'react'

import './App.css'

function App() {
 let [counter,setcounter]=useState(0);



 let addvalue=()=>{
   if(counter>=5){
    alert('your value is mixmum 5')
   }
   else{
     counter=counter + 1;
    setcounter(counter);
   }
  

   
  
 }
 let removevalue=()=>{

  if(counter<=0){
    alert("Your value is 0");
  }
  else{
    counter=counter-1;
    setcounter(counter);
  }

    
  
  
 }

  return (
    <>
      <h1>Chai Aur Code  {counter}</h1>
      <h2>Counter value: {counter}</h2>



      <button onClick={addvalue}>Add value</button>
      <button onClick={removevalue}>Remove value</button>

      <footer> footer: {counter}</footer>
    </>
  )
}

export default App
