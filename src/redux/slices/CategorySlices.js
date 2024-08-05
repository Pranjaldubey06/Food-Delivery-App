import React from 'react'
import { createSlice } from '@reduxjs/toolkit';


const CategorySlices = createSlice({
    name:"category",
    initialState:{
        category:"All",
    },
    reducers:{
        setCategory:(state,action)=>{
            state.category=action.payload;
        },
    },
});
export const {setCategory}=CategorySlices.actions

export default CategorySlices.reducer;
