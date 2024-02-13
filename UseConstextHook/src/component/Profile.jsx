
import React, {useContext} from 'react';

function Profile() {
const {user}=useContext(useContext)

if(!user) return<div>plase login</div>
 else return <div>Welcome {user.username}</div>
  
}

export default Profile
