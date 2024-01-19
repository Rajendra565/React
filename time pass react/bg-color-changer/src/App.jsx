import { useState } from 'react'
import './App.css'


function App() {

  let colorset=["olive","red","green","blue","gray","yellow","pink","purple","lavender","white","black"]
  
  let [color, setcolor] = useState('olive');


  let autoColor=()=>{
    setcolor(color=colorset[(Math.floor(Math.random()*(colorset.length)))])
  }


  let redColor=()=>{
    setcolor('red')
  }
  let greenColor=()=>{
    setcolor('green')
  }
  let blueColor=()=>{
    setcolor('blue')
  }
  let oliveColor=()=>{
    setcolor('olive')
  }
  let grayColor=()=>{
    setcolor('gray')
  }
  let yellowColor=()=>{
    setcolor('yellow')
    
  }
  let pinkColor=()=>{
    setcolor('pink')
    
  }
  let purpleColor=()=>{
    setcolor('purple')
    
  }
  let lavenderColor=()=>{
    setcolor('lavender')
    
  }
  let whiteColor=()=>{
    setcolor('white')
    
  }
  let blackColor=()=>{
    setcolor('black')
    
  }

  return (
    <>
      <div className='hero  w-full h-screen flex justify-center items-end pb-10' style={{backgroundColor:color}}>



      <div className="btn-container flex flex-col items-center ">
          <button className='btn text-black font-bold bg-gray-300 py-2 rounded-2xl px-3 my-3 border-2 border-gray-500 w-fit ' onClick={autoColor}> Auto</button>

        <div className="btn border-black border-none bg-white rounded-lg flex gap-4 px-4 py-4 flex-wrap container w-fit">
          <button className='btn text-white font-bold bg-red-500 py-2 rounded-2xl px-3 border-2 border-gray-500' onClick={redColor} >Red</button>
          <button className='btn text-white font-bold bg-green-500 py-2 rounded-2xl px-3 border-2 border-gray-500' onClick={greenColor}>Green</button>
          <button className='btn text-white font-bold bg-blue-500 py-2 rounded-2xl px-3 border-2 border-gray-500' onClick={blueColor}>Blue</button>
          <button className='btn text-white font-bold  py-2 rounded-2xl px-3 border-2 border-gray-500' style={{backgroundColor:'olive'}} onClick={oliveColor}>Olive</button>
          <button className='btn text-white font-bold  py-2 rounded-2xl px-3 border-2 border-gray-500' style={{backgroundColor:'gray'}} onClick={grayColor}>Gray</button>
          <button className='btn text-black font-bold  py-2 rounded-2xl px-3 border-2 border-gray-500' style={{backgroundColor:'yellow'}} onClick={yellowColor}>yellow</button>
          <button className='btn text-black font-bold  py-2 rounded-2xl px-3 border-2 border-gray-500' style={{backgroundColor:'pink'}} onClick={pinkColor}>Pink</button>
          <button className='btn text-white font-bold  py-2 rounded-2xl px-3 border-2 border-gray-500' style={{backgroundColor:'purple'}} onClick={purpleColor}>Purple</button>
          <button className='btn text-black font-bold  py-2 rounded-2xl px-3 border-2 border-gray-500' style={{backgroundColor:'lavender'}} onClick={lavenderColor}>Lavender</button>
          <button className='btn text-black font-bold  py-2 rounded-2xl px-3 border-2 border-gray-500' style={{backgroundColor:'white'}} onClick={whiteColor}>White</button>
          <button className='btn text-white font-bold  py-2 rounded-2xl px-3 border-2 border-gray-500' style={{backgroundColor:'Black'}} onClick={blackColor}>Black</button>
          
        </div>


      </div>

        
      </div>
      
    </>
  )
}

export default App
