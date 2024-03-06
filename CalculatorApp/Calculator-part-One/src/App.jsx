
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from './Componenet/AppName';
import ButtonGroup from './Componenet/ButtonGroup';

function App() {
  

  return (
    <>
    <div className="hero">
    <div className="Card d-flex flex-col">
    <AppName></AppName>
    <div className="calu pt-2 ">
      <input type="text" className='input' />
        <div className="btn-Group d-flex align-items-center w-100 container">
        <ButtonGroup/>
          
        </div>
    </div>

    </div>
    </div>
  
    </>
  )
}

export default App
