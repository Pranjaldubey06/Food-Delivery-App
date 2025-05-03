import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/CartSlices";

const FoodCard = ({ id, price, name, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const user = JSON.parse(localStorage.getItem("user")); 

  const handleAddToCart = () => {
    if (!user) {
      
      navigate("/login");
    } else {
      
      dispatch(addToCart({ id, price, name, rating, img, qty: 1 }));
      handleToast({ name });
    }
  };

  return (
    <div className="font-bold w-[250px] h-[300px] bg-gray-200 p-3 flex flex-col rounded-xl shadow-xl">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out rounded-md"
      />
      <div className="text-sm flex justify-between">
        <h2 className="mt-2 text-black">{name}</h2>
        <span className="text-orange-500 mt-2">₹{price}</span>
      </div>
      <p className="text-sm font-normal mt-2 text-black">{desc?.slice(0, 50)}...</p>
      
    
      <div className="flex justify-between items-center mt-auto">
        <span className="flex items-center text-black">
          <FaStar className="text-yellow-300 mr-1" />
          {rating}
        </span>
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 px-3 py-1 text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="">AddToCart</span> 
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
