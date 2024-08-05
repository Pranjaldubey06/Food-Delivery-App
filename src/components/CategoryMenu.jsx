import React, { useEffect } from "react";
import { useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch,useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlices";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state)=>state.category.category)

  return (
    <div className="mx-4">
      <h2 className="font-semibold"> Find The Best Food</h2>
      <div className="my-5 flex gap-3 overflow-scroll lg:overflow-x-hidden  ">
      <button
              onClick={() => dispatch(setCategory("All"))}
          
              className={`px-3 py-2 bg-black font-bold text-white hover:bg-orange-500 ${selectedCategory==="All"&& "bg-orange-500 text-white"}`}            >
              All
            </button>
       
       
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-black font-bold text-white hover:bg-orange-500 ${
selectedCategory===category && "bg-orange-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
