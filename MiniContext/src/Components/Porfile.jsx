import  { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Porfile() {
    const {user}=useContext(UserContext)
    if(!user) return <div> please login</div>

    return <div>welcome {usser.username}</div>
  
}

export default Porfile
