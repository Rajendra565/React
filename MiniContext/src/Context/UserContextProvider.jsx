import { useState } from 'react'
// import React {useState} from 'react'

import UserContext from './UserContext'


const UserContextProvider=({Children})=>{
    const [user,setUser]=useState(null)

    return(
        <>
        <UserContext.Provider value={user,setUser}>{Children}
        </UserContext.Provider>
            
        </>
    )
}

// function UserContextProvider() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default UserContextProvider;

// export {Use}