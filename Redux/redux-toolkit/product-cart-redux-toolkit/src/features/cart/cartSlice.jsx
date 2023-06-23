import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { fetchItems, addItem, updateItem, deleteItem } from "./cartAPI";



export const fetchItem = createAsyncThunk("cart/fetchItem", async () => {
  const res = await fetchItems();
  return res.data
})
export const addCartItem = createAsyncThunk("cart/addCartItem", async (item) => {
  const {id, title, price,category,stock, thumbnail}=item;
  const res = await addItem({id, title, price,category,stock, thumbnail,quantity:1});
  return res.data
})
export const updateCartItem = createAsyncThunk("cart/updateCartItem", async ({ id, newItem }) => {
  const res = await updateItem({ id, newItem });
  return res.data
})
export const deleteCartItem = createAsyncThunk("cart/deleteCartItem", async (id) => {
  await deleteItem(id)
})


const initialState = {
  isLoading: false,
  items: [],
  error: "",
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        const index = state.items.findIndex((item) => item.id === updatedItem.id);
        if (index !== -1) {
          state.items[index] = updatedItem;
        }
      })
  },
})

export default cartSlice.reducer;