import { createSlice } from "@reduxjs/toolkit";

const initialState={
    point:0,
}

const bonusSlice=createSlice({
    name:"bonus",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.point=state.point+1
        }
    }

})
export const {increment} =bonusSlice.actions

export default bonusSlice.reducer