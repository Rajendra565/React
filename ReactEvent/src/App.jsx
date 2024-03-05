
import './App.css'
import AppName from './component/AppName'
import List from './component/List'

function App() {
  const listItem=['Apple','pal',"hadlkjf"]
 

  return (
    <>
    <div className=" ">
    <AppName/>
    {listItem.map((val)=>{

    <List ItemList={val}/>
    })}
    </div>
    </>
  )
}

export default App
