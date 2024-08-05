import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlices";

const FoodCard = ({ id, price, name, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className=" font-bold w-[250px] bg-white p-3 flex flex-col">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2 className="mt-2">{name}</h2>
        <span className="text-orange-500 mt-2">₹{price}</span>
      </div>
      <p className="text-sm font-normal mt-2">{desc?.slice(0, 50)}...</p>
      <div className="flex justify-between mt-4 ">
        <span className="flex justify-center items-center">
          <FaStar className="text-yellow-300 mr-1" />
          {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, price, name, rating, img, qty: 1 }));

            handleToast({ name });
          }}
          className="p-1 text-white bg-orange-500 hover:bg-orange-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
