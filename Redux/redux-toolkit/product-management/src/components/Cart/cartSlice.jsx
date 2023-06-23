import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCart, fetchCart } from "./cartAPI";

const initialState={
    isLoading:false,
    items:[],
    error:'',
}
export const getProduct=createAsyncThunk('cart/getProduct',async()=>{
    const res=await fetchCart();
    return res.data;
})
export const addProduct=createAsyncThunk('cart/addProduct',async(item)=>{
    const {id,title,price,category,thumbnail,rating,stock}=item;
    const res=await addCart({id,title,price,category,thumbnail,rating,stock,quantity:1})
})
const cartSlice=createSlice({
    name:"cart",
    initialState,
    extraReducers:(builders)=>{
        builders
        .addCase(getProduct.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.items=action.payload
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.items.push(action.payload)
        })
    }
})

export default cartSlice.reducer;