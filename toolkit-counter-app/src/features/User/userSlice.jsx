import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    isLoading: false,
    user: [],
    error: "",
}
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data


})
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builders) => {
        builders.addCase(fetchUsers.pending,(state)=>{
            state.isLoading=true,
            state.error="",
            state.user=[]
        }),
        builders.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.error="",
            state.user=action.payload
        }),
        builders.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading=false,
            state.error=action.payload,
            state.user=[]
        })

    }


})

export default userSlice.reducer;