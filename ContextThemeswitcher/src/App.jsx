import { useState } from 'react'
import Card from './Component/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className="">
    <Card/>
    </div>
   </>
  )
}

export default App
