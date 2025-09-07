import React from 'react';
// import { GiCook } from "react-icons/gi";
// import { MdDeliveryDining } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";


const Information = () => {
  // Retrieve the user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  
  // If no user is logged in, default to "User"
  const userName = user ? user.name : "User";

  return (
    <div className='p-4 py-4'>
      <div className='bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600  border rounded-lg'>
        <div className="text-center h-auto">
          <h3 className='font-semibold '>Hello..{userName}</h3>
          <h5 className='text-lg font-semibold'>{new Date().toUTCString().slice(0, 16)}</h5>
          <h1 className='font-semibold text-white text-4xl '>
            RESTRO-<span className="font-bold text-white">FOOD</span> 
            <span className='text-black '> WELCOMES</span> YOU
          </h1>
          <div className="flex justify-center">
          <IoFastFoodOutline size={52} className='text-black' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
