import React, { useState } from 'react';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import ClearIcon from '@mui/icons-material/Clear';
import './App.css';
import List from './compomant/list';

function App() {
  const [item,setItem]=useState("");
  const [itemList,setItemList]=useState([]);
  const InputChange=(event)=>{
    setItem(event.target.value)
  }
  const onclickBtn=()=>{
    setItemList((val)=>{
      return [...val,item]
    })
    setItem("")
  }
  const DeleteItem=(id)=>{
    // console.log("Delet")
    setItemList((val)=>{
      val.filter((arrEle,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div className="App w-full h-screen bg-black flex items-center justify-center ">
      <div className="card  p-5 bg-white flex flex-col gap-5">
        <h1 className=" Heading capitalize  font-bold  text-center">Todo List</h1>

        <div className="input-div ">
          <input type="text" placeholder="Enter Item" className=" fs-2 " onChange={InputChange} value={item}/>
            <Button variant="contained" color="success" className=' p-3' onClick={onclickBtn}>
              <AddIcon/>
            </Button>
        </div>
        <ol>
        {itemList.map((val,index)=>{
          return(
          
          <List text={val} key={index} id={index} ons={DeleteItem}/>
         
         
          
          
          )
        })}
        </ol>
      </div>
    </div>
  );
}

export default App;
