import {createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    items:[],
    error:'',
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const prevItems=state.items;
            const newItem=action.payload;
            const indexValue=prevItems.findIndex(item=>newItem.id===item.id);
            if(indexValue>-1){
                prevItems[indexValue].quantity+=1;
            }else{
                state.items.push({...action.payload,quantity:1});
            }
        }

    }
})
export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer;