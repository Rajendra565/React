import React from 'react'

function Todoitmes() {
    const items=[
        {
          "TodoName":"Buy milk",
          "TodoDate":"20/10/2010"
          
        },
        {
          "TodoName":"Go to collage",
          "TodoDate":"25/04/2024"
          
        },
        {
          "TodoName":"Go to collage",
          "TodoDate":"25/04/2024"
          
        },
        {
          "TodoName":"Go to collage",
          "TodoDate":"25/04/2024"
          
        },
        {
          "TodoName":"Go to collage",
          "TodoDate":"25/04/2024"
          
        },
        {
          "TodoName":"Go to collage",
          "TodoDate":"25/04/2024"
          
        },
    
      ]
  return (
    <div>
    {items.map(val=>{
        return (<div className="w-100 d-flex justify-content-center flex-column mb-2">
            <div className=" row d-flex justify-content-between align-items-center">
                <div className=" col-6 ">
                    <b>{val.TodoName}</b>
                </div>
                <div className=" col-4 ">
                  <b>{val.TodoDate}</b>
                </div>
                <div className=" col-2 ">
                    <button className=' btn btn-danger'>Delet</button>
                </div>
            </div>
        </div>)
    })}
     
    </div>
  )
}

export default Todoitmes
