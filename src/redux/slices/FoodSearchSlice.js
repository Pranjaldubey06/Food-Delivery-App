import { createSlice } from "@reduxjs/toolkit"

const foodSearchSlice=createSlice({
    name:"search",
    initialState:{
        search:"",
    },
    reducers:{
        setSearch:(state,action)=>{
            state.search=action.payload;
        },
    },
});

export const {setSearch}= foodSearchSlice.actions;
export default foodSearchSlice.reducer
