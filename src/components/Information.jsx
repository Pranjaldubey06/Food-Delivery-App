import React from 'react';
import { GiCook } from "react-icons/gi";

const Information = () => {
  // Retrieve the user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  
  // If no user is logged in, default to "User"
  const userName = user ? user.name : "User";

  return (
    <div className='p-4 py-4'>
      <div className='bg-orange-500 '>
        <div className="text-center">
          <h3 className='font-semibold '>Hiii.. {userName}</h3>
          <h5 className='text-lg font-semibold'>{new Date().toUTCString().slice(0, 16)}</h5>
          <h1 className='font-semibold text-white text-4xl underline'>
            RESTRO-<span className="font-bold text-white">FOOD</span> 
            <span className='text-black '> WELCOMES</span> YOU:
          </h1>
          <div className="flex justify-center">
            <GiCook size={52} className='text-orange-500' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
