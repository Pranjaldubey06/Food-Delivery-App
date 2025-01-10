import React from 'react';
import logo from "../images/logo.png";
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <Zoom>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

 <img  src={logo} alt='imagelogo'/> 

        </div> 
        </Zoom>
        <button className="w-auto mt-5 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
            <Link to="/Login" className="text-white hover:underline">
              Login
            </Link>
          </button>
              </div>
  )
}

export default Logo;
