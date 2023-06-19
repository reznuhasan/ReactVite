import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import userReducer from "./features/User/userSlice"
import thunk from "redux-thunk";
const store=configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer,
    },
    middleware:[thunk],
})

export default store