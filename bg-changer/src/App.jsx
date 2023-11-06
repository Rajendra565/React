import {useState} from "react";

function App() {
 const [color,setColor]=useState("#414141")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
     
     <div className="fixed flex justify-center align-middle flex-wrap p-2 bottom-20 inset-x-0 px-0 ">
     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl p-5">

      <button onClick={()=>setColor("red")} className="p-3 rounded-full border" style={{backgroundColor:"red"}}> red</button>
      <button onClick={()=>setColor("green")} className="p-3 rounded-full border" style={{backgroundColor:"green"}}> green</button>
      <button onClick={()=>setColor("blue")} className="p-3 rounded-full border " style={{backgroundColor:"blue"}}> blue</button>
      <button onClick={()=>setColor("olive")} className="p-3 rounded-full border" style={{backgroundColor:"olive"}}> olive</button>
      <button onClick={()=>setColor("white")} className="p-3 rounded-full border" style={{backgroundColor:"white"}}> white</button>
     </div>

     </div>
     
    </div>
  )
}

export default App
