const {createStore}=require('redux')
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const INCRESE_BY_VALUE="INCRESE_BY_VALUE";
const RESET="RESET";

//state
const initialCounterState={
    count:0,
}

//actions
const incrementCounter=()=>{
    return{
        type:INCREMENT,
    }
}
const decrementCounter=()=>{
    return{
        type:DECREMENT,
    }
}
const increaseByValueCounter=(value)=>{
    return{
        type:INCRESE_BY_VALUE,
        payload:value
    }
}
const resetCounter=()=>{
    return{
        type:RESET,
    }
}
//reducer
const counterReducer=(state=initialCounterState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count:state.count+1,
            }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
        case INCRESE_BY_VALUE:
            return{
                ...state,
                count:state.count-action.payload
            }
        case RESET:
            return{
                ...state,
                count:0
            }
        default:
            return state;
    }
}

//store
const counterStore=createStore(counterReducer);

counterStore.dispatch(incrementCounter())
counterStore.dispatch(incrementCounter())
counterStore.dispatch(incrementCounter())
counterStore.dispatch(incrementCounter())
console.log(counterStore.getState())
counterStore.dispatch(decrementCounter())
console.log(counterStore.getState())
