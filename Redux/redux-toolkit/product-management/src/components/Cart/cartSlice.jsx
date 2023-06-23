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
        },
        removeToCart(state,action){
            const prevItems=state.items;
            const delItem=action.payload;
            state.items=prevItems.filter(item=>item.id!==delItem.id)
        }

    }
})
export const {addToCart,removeToCart}=cartSlice.actions;
export default cartSlice.reducer;