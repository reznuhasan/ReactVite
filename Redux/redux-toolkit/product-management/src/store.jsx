import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./components/Product/ProductSlice";
import cartReducer from "./components/Cart/cartSlice";


const store=configureStore({
    reducer:{
        product:productReducer,
        items:cartReducer
    }
})

export default store