import React, { useState } from 'react'
import { useAuth } from './Context/AuthProvider';
import {toast} from 'react-hot-toast';
const Logout = () => {
    const [authUser, setauthUser] = useAuth();
    const handleLogout=()=>{
     try{
   setauthUser({
    ...authUser,
    user: null,
   });
   localStorage.removeItem('users');
   toast.success("Logout succesful");
     window.location.reload();
   window.location.reload();
     }catch(error){
       toast.error("Logout failed:"+ error.message);
     }
    };
  return (
    <button  onClick={handleLogout}className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
  )
}

export default Logout