// import React from 'react'
import { createContext } from 'react'
import Comc from './ComC'




const frist=createContext()
const lastName=createContext()
function ComA() {
  return (
    <>
    <frist.Provider value={"Rajendra"}>
    <lastName.Provider value={"Kumar"}>

    <Comc/>
    </lastName.Provider>
    </frist.Provider>
      
    </>
  )
}

export default ComA;
export {frist,lastName}
