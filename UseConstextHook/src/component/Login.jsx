import React, {useState,useContext} from 'react'
// eslint-disable-next-line no-unused-vars
import UserContext from '../Context/UserContext'


function Login() {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')


    const {setuser}=useContext(useContext)



    const handleSubmit=(e)=>{
        e.preventDefault()
        setuser({username,password})

    }
  return (
    <div>
      <h2>Login </h2>
      <input type="text" placeholder='Enter username' value={username}  onChange={(e)=>setusername(e.target.value)}/>

      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
