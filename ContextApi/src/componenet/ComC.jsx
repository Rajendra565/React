import React from 'react'
// import { useContext } from 'react'
// import { Context } from 'react'
import { frist,lastName } from './ComA'



function ComC() {
    
  return (
    <>
    <frist.Consumer>{((fname)=>{

        return(
            <lastName.Consumer>
            {((lastname)=>{
                return (
                    
                          <h1>{fname}{lastname}</h1>
                )
            })}

            </lastName.Consumer>
        )
    })}
    </frist.Consumer>
      
      
    </>
  )
}

export default ComC
