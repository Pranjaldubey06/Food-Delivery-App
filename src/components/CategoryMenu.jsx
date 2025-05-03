import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlices";

  const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = ["All", ...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-4">

      <h2 className="font-semibold text-lg md:text-xl mb-4">Find The Best Food</h2>
      <div className="flex gap-3 overflow-x-auto no-scrollbar lg:justify-start p-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={`px-2 rounded-full transition-all font-medium text-sm md:text-base 
              ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-orange-600 hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
