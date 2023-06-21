import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Features/accountSlice";



const store=configureStore({
    reducer:{
        account:accountReducer,
    }
})

export default store