
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './components/AppName'
import InputBox from './components/InputBox'


function App() {
  const items=[
    {
      "TodoName":"Buy milk",
      "TodoDate":"20/10/2010"
      
    },
    {
      "TodoName":"Go to collage",
      "TodoDate":"25/04/2024"
      
    }

  ]
 

  return (
    <>
    <div className=" d-flex flex-column gap-3">
    <AppName></AppName>
    <InputBox todoitem={items}></InputBox>
    
    </div>


    </>
  )
}

export default App
