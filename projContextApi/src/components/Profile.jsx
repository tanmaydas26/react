import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {

  const { user } = useContext(UserContext);
  
  if (!user) return <div>please login</div>
  return <div className='text-3xl text-white'>Welcome { user.username }</div>
}

export default Profile
