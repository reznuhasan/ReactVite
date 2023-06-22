import { createSlice } from "@reduxjs/toolkit"



const initialState={
    count:1,
}

const accountSlice=createSlice({
    name:"account",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count=state.count+1
        },
        decrement:(state,action)=>{
            state.count=state.count-1
        },
        increseByValue:(state,action)=>{
            state.count=state.count+action.payload
        },
    }
})

export const {increment,decrement,increseByValue}=accountSlice.actions
export default accountSlice.reducer