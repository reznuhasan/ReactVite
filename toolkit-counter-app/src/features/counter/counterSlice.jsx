import { createSlice } from "@reduxjs/toolkit";


const initialState={
    count:1,
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count=(state.count+1)

        },
        decrement:(state,action)=>{
            state.count=state.count-1
        },
        increaseByValue:(state,action)=>{
            state.count=state.count+action.payload
        },
        reset:(state,action)=>{
            state.count=0
        }
    }
})

export const{increment,decrement,increaseByValue,reset} =counterSlice.actions
export default counterSlice.reducer;

