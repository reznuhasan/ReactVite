import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const fetchProduct=createAsyncThunk("product/fetchProduct",async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data
})



const initialState={
    isLoading:false,
    products:[],
    error:"",
}

const productSlice=createSlice({
    name:"product",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
          })
          .addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
      },
})

export default productSlice.reducer;