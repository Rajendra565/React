import React from 'react'

function CurrentTime() {
    let time=new Date();
   

  return (
    <div>
      <p className=' fs-3 lead fw-medium'>This is the Current Time: {time.toLocaleDateString()} - { time.toLocaleTimeString()}  </p>
    </div>
  )
}

export default CurrentTime
