// src/components/Login.js
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

const handleLogin=(e)=>{
e.preventDefault();
const loggedUser=JSON.parse(localStorage.getItem("user"))
if(input.email === loggedUser.email && input.password === loggedUser.password){
localStorage.setItem("Loggedin",true)
  navigate("/");

}else{
  alert("not valid user")
}


} 

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
       
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              
            
              value={input.name}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}
              
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-6">
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
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orane-600 transition"
            
          >
           Login
          </button>
        </form>
          {/* "Don't have an account?" section */}
          <div className="mt-4 text-center">
          <span className="text-gray-700">Don't Have an account? </span>
          <Link to="/Ragistration" className="text-orange-500 hover:underline">
            Ragister here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
