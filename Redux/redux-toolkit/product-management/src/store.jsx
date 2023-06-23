import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./components/Product/ProductSlice";


const store=configureStore({
    reducer:{
        product:productReducer,
    }
})

export default store