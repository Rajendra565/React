import React from 'react'

function InputBox() {
  return (
    <div>
       <div className="row">
            <div className="col">
              <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div className="col">
              <input type="date" name="" id="" />
            </div>
            <div className="col">
              <button className="btn btn-success">Add</button>
            </div>
          </div>
    </div>
  )
}

export default InputBox
