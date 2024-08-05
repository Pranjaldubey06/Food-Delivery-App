import React from "react";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";



import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlices";

const CartItem = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2">
      <MdDelete
        onClick={() => {dispatch(removeFromCart({ id, img, name, price, qty }))
      toast(`${name} Removed!`,{
        icon: "👋"
      });
    
    
    }}
        className=" absolute right-7 cursor-pointer"
      />
      <img src={img} alt="" className="w-[70px] h-[70px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-orange-500 font-bold">{price}</span>
          <div className="flex justify-between gap-2 absolute right-7">
            <GrFormSubtract
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:bg-orange-500 hover:border-none rounded-md p-1 text-xl transitition-all"
            />
            <span>{qty}</span>
            <IoIosAdd
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:bg-orange-500 hover:border-none rounded-md p-1 text-xl transitition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
