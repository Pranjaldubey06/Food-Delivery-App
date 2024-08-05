import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);
// const totalItems=useSelector((state)=>state.cart.totalItems)
 const totalQty =cartItems.reduce((totalQty,item)=>totalQty+item.qty,0);
   
 const totalPrice=cartItems.reduce(
  (total,item)=>total+item.qty*item.price,0)

const Navigate=useNavigate() ;

return (
    <>
      <div
        className={`fixed right-0 top-0 h-full w-full p-5 lg:w-[20vw] bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full pointer-events-none"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="font-bold text-xl text-orange-500">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-bg-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {/* Cart-Item */}
        {cartItems.length > 0 ?cartItems.map((food) => {
          return (
            <CartItem
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          );
        }):<h1 className=" text-center font-semibold text-black">oops!your cart is empty</h1>}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items:{totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount:{totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button onClick={()=>Navigate("/success")} className="bg-orange-500 font-bold px-3 text-white py-2 w-[90vw] lg:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={` rounded-xl bg-white shadow-md text-5xl p-3 fixed bottom-10 right-4 cursor-pointer  ${totalQty > 0 &&"animate-bounce delay-500 transition-all"}`}
      />
      
       
    </>
  );
};

export default Cart;
