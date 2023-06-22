import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Features/accountSlice";
import bonusReducer from "./Features/bonusSlice";


const store=configureStore({
    reducer:{
        account:accountReducer,
        bonus:bonusReducer,
    }
})

export default store