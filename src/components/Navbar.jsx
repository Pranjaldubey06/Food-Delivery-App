import React, { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaTruck, FaHeart, FaUserFriends } from "react-icons/fa";
import { IoMdWallet, IoMdHelpCircle } from "react-icons/io";
import { AiFillTag } from "react-icons/ai";
import { BsSaveFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/FoodSearchSlice";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [state, setState] = useState("light-mode");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.querySelector("body").className = state;
  }, [state]);

  // Check login status on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("Loggedin");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Loggedin");  // Remove login status
    setIsLoggedIn(false);
    navigate("/Login");  // Redirect to login page
  };

  const toggleDarkMode = () => {
    setState(state === "light-mode" ? "dark-mode" : "light-mode");
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 sticky top-0 bg-transparent z-50">
      {/* Left side */}
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

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <CiSearch size={25} />
        <input
          type="search"
          name="search"
          placeholder="search-foods"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>

      {/* Dark Mode Toggle */}
      <div className="icon" onClick={toggleDarkMode}>
        {state === "light-mode" ? <CiLight size={32} /> : <MdDarkMode size={32} />}
      </div>

      {/* Login/Logout Button */}
      <div>
        {!isLoggedIn ? (
          <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition">
            <Link to="/Login" className="text-white hover:underline">
              Login
            </Link>
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>

      {nav && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
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
