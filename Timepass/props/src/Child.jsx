import React from 'react'
function Child({temp,setCounter}) {
  console.log(name) 

  return (
    <div style={{backgroundColor:"red",width:"200px",height:"200px"}}>
    <p>{temp}</p>
    <button onClick={()=>{setCounter(temp+2)}}>+</button>
    
    </div>
  )

}


// Child.defaultProps={
//   name:"pabitra"
// }

export default Child
