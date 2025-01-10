import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const navigate=useNavigate();
  const[input,setInput]=useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  })
 // for storing value in the local storage...   
const handleSubmit=(e)=>{
  e.preventDefault();
  localStorage.setItem("user",JSON.stringify(input));
  navigate("/login")
}
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
         
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}
            
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={input.confirmpassword}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            
          > 
            Ragister
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Have already an account? </span>
          <Link to="/Login" className="text-orange-500 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
