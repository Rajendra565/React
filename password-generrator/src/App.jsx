import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setPassword]=useState("");



  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvuwxyz";
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="~`!@#$%^&*{}[]_+"
    }

    for(let i=1;i<= length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
    }
    setPassword(pass);

  },
  [length,numberAllowed,charAllowed,setPassword]);
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])
  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-3xl px-3 my-8 text-orange-500 bg-gray-700 pb-6  ">
        <div className="flex shadow rounded-lg overflow-hidden mb-4 p-5 ">
          <input className='rounded-lg outline-none w-full py-1 ' type="text" value={password} placeholder='password' readOnly/>
          <button className='bg-blue-800 text-white py-0.5 px-3 shrink-0 outline-none' >copy</button>
 
        </div>
        <div className="">
        <div className="flex gap-2 pl-5">
            <input className='bg-black cursor-pointer' type="range" name="" id="" value={length} min={1} max={100} 
              onChange={(e)=>{
                setLength(e.target.value)
              }}
            />
            <label>length: {length}</label>
            <div className='flex gap-x-1'>
            <input type="checkbox" id="number Input" onChange={()=>{
              setnumberAllowed((prev)=>!prev)
            }} />
            <label >Number</label>
            </div>
            <div className='flex gap-x-1'>
            <input type="checkbox" id="sting Input"  className='' onChange={()=>{
              setcharAllowed((prev)=>!prev)
            }}/>
            <label id='CharactersInput' >Characters</label></div>
            
          </div>
          </div>
      </div>
     
      
    </>
  )
}

export default App
