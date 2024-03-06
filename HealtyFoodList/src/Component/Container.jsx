import React from 'react'
import './Container.css'

function Container({children}) {
  return (
    <div>
    <div className="container ">
    {children}
    </div>
      
    </div>
  )
}

export default Container
