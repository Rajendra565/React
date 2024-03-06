import React from 'react'

function ListItems({liItems}) {
  return (
    <div>
    {liItems.map(val=> <li key={val} className="list-group-item bg-danger text-white">{val}</li>)}
     
    </div>
  )
}

export default ListItems
