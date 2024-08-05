import React from "react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { AiFillTag } from "react-icons/ai";
import { BsSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/FoodSearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky top-0 bg-transparent z-50">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <MdMenu size={32} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          RESTRO-<span className="font-bold">FOOD</span>{" "}
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 text-black rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2 cursor-pointer">
            Delivery
          </p>
          <p className="p-2 cursor-pointer">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <CiSearch size={25} />
        <input
          type="search"
          name="search"
          id=""
          placeholder="search-foods"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <IoCloseOutline
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Restro-<span className="font-bold">food</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <FaTruck size={25} className="mr-4 font-bold" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <FaHeart size={25} className="mr-4 font-bold" />
              Favourites
            </li>
            <li className="text-xl py-4 flex">
              <IoMdWallet size={25} className="mr-4 font-bold" />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <IoMdHelpCircle size={25} className="mr-4 font-bold" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4 font-bold" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsSaveFill size={25} className="mr-4 font-bold" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4 font-bold" />
              Invites Friend
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
