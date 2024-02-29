// import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  switch,
  Link,
  Router,
} from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>

    <Navbar/>

    <switch>
    <Route path='/about'>
    <About/>

    </Route>
    <Route path='/'>
    <Home/>

    </Route>

    </switch>

    {/* <Home/> */}
    {/* <About/> */}
    </Router> 
      
    </>
  );
}

export default App
