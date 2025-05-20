import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset ,incrementByAmount} from './features/counter/counterSlice'

function App() {
  const [amount,setAmount]=React.useState(0)
  const count=useSelector((state) => state.counter.value)
  const dispatch=useDispatch() 
  function handlerIncrementClick() {
    if(count >= 10) {
      alert('Count cannot be greater than 10')
      return
    }
    else{

      dispatch(increment())
    }
  }
  function handlerDecrementClick() {
    if(count <= 0) {
      alert('Count cannot be less than 0')
      return
    }
    else{
      dispatch(decrement())
    }
  }
  function handlerResetClick(){
    if(count === 0) {
      alert('Count is already 0')
      return
    }
    else{
      dispatch(reset())
    }
  }
  function handlerIncByAmountClick() {
    if(count + Number(amount) > 10) {
      alert('Count cannot be greater than 10')
      return
    }
    else if(count + Number(amount) < 0) {
      alert('Count cannot be less than 0')
      return
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
    }
  }

  return (
    <div>
      <button onClick={handlerIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handlerDecrementClick}>-</button>

<br />
      <button onClick={handlerResetClick}>Reset</button>
      <br />
    <input value={amount} type='number' placeholder='Enter you amout' onChange={(e)=>{setAmount(e.target.value)}} />
    <button onClick={handlerIncByAmountClick}>Inc by Amount</button>
    </div>
  )
}

export default App