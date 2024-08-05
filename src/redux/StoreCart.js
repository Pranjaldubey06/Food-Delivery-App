import {configureStore} from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";
import CategorySlices from "./slices/CategorySlices";
import FoodSearchSlice from "./slices/FoodSearchSlice";
const StoreCart = configureStore({
    reducer:{
        cart: CartSlices,
        category:CategorySlices,
        search:FoodSearchSlice,
        
 },
    
})
export default StoreCart;