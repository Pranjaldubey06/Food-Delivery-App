// import React,{useEffect, useState} from 'react';
// import Navbar from "../components/Navbar";
// // import Home from "./components/Home";
// import Information from "../components/Information";
// import CategoryMenu from "../components/CategoryMenu";
// import FoodItem from "../components/FoodItem";
// import Cart from "../components/Cart";
// import Banner from './Banner';


// const Home = () => {
  
// useEffect(() => {
//     document.title = "Food Ordering App";
//   }, []);
//   return (
   
//     <div>
  
//   <Navbar/>
// <Banner/>
// <Information/>
// <CategoryMenu/>
// <FoodItem/>
// <Cart/>
//     </div>
//   )
// }

// export default Home
import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Information from "../components/Information";
import CategoryMenu from "../components/CategoryMenu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import Banner from './Banner';
import { Zoom } from 'react-awesome-reveal';

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.title = "Food Ordering App";

    
    const timer = setTimeout(() => {
      setShowSplash(false);
    },3000);

    return () => clearTimeout(timer); 
  }, []);

  if (showSplash) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        backgroundColor: "bg-orange-500" 
      }}
      className='bg-orange-500'
      >
        <Zoom>      
          <img 
          src=" https://d3aa3s3yhl0emm.cloudfront.net/output/lx/design/180e98f4ead1425e9d75c1500d5b803e_1024x1024.jpg"
          alt="Splash Screen" 
          style={{ width: "500px", height: "auto" }} 
        />
        </Zoom>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Banner />
      <Information />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </div>
  );
};

export default Home;
