
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<h1>Home page</h1>}/>
        <Route path='/about' element={<h1>About page</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
