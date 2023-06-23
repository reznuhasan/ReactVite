import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./ProductAPI";

export const asyncProduct=createAsyncThunk('product/asyncProduct',async()=>{
    const res=await fetchProduct();
    return res.data
})

const initialState={
    isLoading:false,
    products:[],
    error:'',
}

const productSlice=createSlice({
    name:"product",
    initialState,
    extraReducers:(builders)=>{
        builders
        .addCase(asyncProduct.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(asyncProduct.fulfilled,(state,action)=>{
            state.isLoading=false
            state.products=action.payload
        })
        .addCase(asyncProduct.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        })
    }
})


export default productSlice.reducer;