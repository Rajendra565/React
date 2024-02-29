import React from 'react'

function Items(props) {
  return (
    <div>
      <div className="row flex  items-center">
            <div className="col  text-center">
             <b className=''>{props.items}</b>
            </div>
            <div className="col">
              <span>{props.date}</span>
            </div>
            <div className="col">
              <button className="btn btn-danger">Delet</button>
            </div>
          </div>
    </div>
  )
}

export default Items
