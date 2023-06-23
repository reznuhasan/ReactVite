import {createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    items:[],
    error:'',
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.items.push(action.payload);
        }

    }
})
export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer;