/* eslint-disable react/prop-types */


function Items({foodlist}) {
    
  return (
    <div >
   
        <li className="list-group-item  ">
        <span className=' fs-5 fw-bold'>{foodlist}</span>
        <button className=' btn btn-info text-white fw-bold' >Add</button>
      </li>
    
      
    </div>
  )
}

export default Items
