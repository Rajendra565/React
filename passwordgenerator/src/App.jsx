import { useCallback, useState,useEffect,useRef } from 'react'

import './App.css'

function App() {
 
  const [lenght, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("Rajendrabadatya")

  const passwordcopy=useRef(null);

  const passwordgenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
   
    if(numAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += '~`!@#$%^&*(){}[]'
    }
    

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char)
      
    }
    // console.log(pass)
    setpassword(pass)

  },[lenght,numAllowed,charAllowed,password])
  

  const copytheclipborder=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[lenght,numAllowed,charAllowed,passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md bg-gray-800 m-auto px-3 py-2 ">
            <h2 className=' text-white text-4xl my-3'>Password Generrator</h2>
        <div className="w-100 h-fit px-5 py-4 flex rounded-lg ">
            <input type="text" placeholder='Enter password' value={setpassword("rajendra")} className=' w-full p-2 rounded-sm outline-none' readOnly
              ref={passwordcopy}
            />
            <button className='bg-blue-700 px-3 py-2.3 font-bold rounded-sm text-white shrink-0' onClick={copytheclipborder}>copy</button>
        </div>
        <div className="flex gap-x-3 px-2 my-3 ">
          <div className="flex gap-x-1">
            <input type="range" 
            min={1} max={100}
            value={lenght}
            onChange={(e)=>{
              setlength(e.target.value)
            }}/>
             <label htmlFor="" className=' text-white'>length {lenght}</label>
          </div>
          <div className="flex text-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=>setnumAllowed((pre)=>!pre)}/>
            <label htmlFor="" className='text-orange-400'>Number</label>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput'
            onChange={()=>setcharAllowed((pre)=> !pre)}
             />
            <label htmlFor="" className=' text-orange-400'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
