
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
// import About from './components/About';
import React,{useState} from 'react'





function App() {
  const [mode,setmode]=useState('light')
  const [colormode,setcolormode]=useState('dark')
  const darkmode=()=>{
    if(mode=== 'light'){

      setmode('dark');
      setcolormode('light')
      document.body.style.background="#212529"
      
    }
    else{
      setmode('light');
      setcolormode('dark')
      document.body.style.background="white"
      
    }
    // alert("click to");
  }
   return (
   < >
   
   <div className="">
  <Navbar title="Text Uitils" mode={mode} colormode={colormode} darkmode={darkmode}/>
  
  </div>
  <div className="container my-4">
    
  <Forms  heading="Enter the text below" mode={mode} />
  </div>
  {/* <div className="container">
  <About className="mt-3"/>
  </div> */}
 
   </>
  );
 
}

export default App;
