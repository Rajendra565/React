import React from 'react'

function ButtonGroup() {
    const btnName=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    
  return (
    <div>
    <div className=" d-flex flex-wrap w-100 align-items-center gap-3 mb-4 justify-content-center ">
    {btnName.map((val,index)=>{

        return <button key={index} className=' p-2 px-3  bg-dark-subtle ' style={{border:"none", width:'45px' ,height:'45px',cursor:'pointer',borderRadius:'50%'}}>{val}</button>
    })}
      
      
      </div>
    </div>
  )
}

export default ButtonGroup
