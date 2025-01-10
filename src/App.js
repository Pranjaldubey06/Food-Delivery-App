// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sucsess from "./components/Sucsess";
import ProtectedRoute from "./components/ProtectedRoute";
import Ragistration from "./components/Ragistration";
import Login from "./components/Login";
import Logo from "./components/Logo";

//  import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Information from "./components/Information";
// import CategoryMenu from "./components/CategoryMenu";
// import FoodItem from "./components/FoodItem";
// import Cart from "./components/Cart";
// import HeadlineCards from "./components/HeadlineCards";
// import TopratedFood from "./components/TopratedFood";

function App() {
  useEffect(() => {
    document.title = "Food Ordering App";
  }, []);
  return (
    <div>
      {/* <Logo/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/Success"
            element={<ProtectedRoute element={<Sucsess />} />}
          />

          <Route path="/Ragistration" element={<Ragistration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logo" element={<Logo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
