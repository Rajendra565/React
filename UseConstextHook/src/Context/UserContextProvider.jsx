import React, { useState } from 'react'
import UserContext from './UserContext'


const UserContextProvider=({childer})=>{
    const [user,setUser ]=useState(null)
return (
    <>
    <UserContext.Provider value={{user,setUser}}>


        {childer}
    </UserContext.Provider>
    </>
)
}


export default UserContextProvider
