import React,{useEffect} from 'react';
import Navbar from "../components/Navbar";
// import Home from "./components/Home";
import Information from "../components/Information";
import CategoryMenu from "../components/CategoryMenu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import Banner from './Banner';


const Home = () => {
  useEffect(() => {
    document.title = "Food Ordering App";
  }, []);
  return (
   
    <div>
  
  <Navbar/>

<Banner/>

<Information/>
<CategoryMenu/>
<FoodItem/>
<Cart/>
    </div>
  )
}

export default Home
