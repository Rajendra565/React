import React from 'react'
import Todoitmes from './Todoitmes'

function InputBox() {
  return (
    <div>
        <div className="w-100 d-flex justify-content-center mx-3 flex-column gap-4">
            <div className=" row d-flex justify-content-between align-items-center">
                <div className=" col-6 ">
                    <input className='' type="text" placeholder='Enter todo here' style={{border:"2px solid #000" ,outline:"none" }} />
                </div>
                <div className=" col-4 ">
                    <input type="date" name="" id="" style={{border:"2px solid #000" ,outline:"none" }}  />
                </div>
                <div className=" col-2 ">
                    <button className=' btn btn-success'>Add</button>
                </div>
            </div>
            <Todoitmes ></Todoitmes>
            {/* {
                todoitem.map(val=>{

                })

            }
             */}
            
        </div>
    </div>
  )
}

export default InputBox
