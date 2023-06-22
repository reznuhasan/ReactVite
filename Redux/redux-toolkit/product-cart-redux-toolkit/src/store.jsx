import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import itemReducer from "./features/cart/cartSlice"
const store=configureStore({
    reducer:{
        product:productReducer,
        cart:itemReducer
    }
})

export default store;