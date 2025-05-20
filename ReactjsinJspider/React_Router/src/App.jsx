// import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import  Landingpage from "./components/landingpage"
import AdminLogin from "./components/adminLogin"
import Userlogin from "./components/userlogin"
function App() {
  return (
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/userlogin" element={<Userlogin/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>   
      
    </div>
  )
}

export default App
