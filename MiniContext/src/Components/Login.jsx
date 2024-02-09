import { useState } from 'react'
import UserContext from '../Context/UserContext'
function Login() {

const [username,setUsername]=useState('')
const [password,setpassword]=useState('')

const {setUser}=UserContext(UserContext)


const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({username,password})

}
  return (
    <div>
      <h2>Login</h2>
      <input type="text " 
      value={username} onChange={(e)=>{
        setUsername(e.target.value)
      }} placeholder='Useename ' />
      <input type="text " 
      value={password} onChange={(e)=>{
        setpassword(e.target.value)
      }} placeholder='password' />
      <button onClick={handleSubmit}></button>
    </div>
  )
}

export default Login
