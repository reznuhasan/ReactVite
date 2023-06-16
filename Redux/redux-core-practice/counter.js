const {createStore} =require('redux');

const INC="INCREMENT"
const DEC="DECREMENT"
const RESET="RESET";
const IncByValue="INCREMENT_BY_VAlUE"

//state
const initialCounterState={
    count:0
}
//actions
const incrementCounter=()=>{
    return {
        type:INC
    }
}
const incrementByValueCounter=(value)=>{
    return{
        type:IncByValue,
        payload:value
    }
}
const decrementCounter=()=>{
    return {
        type:DEC
    }
}
const resetCounter=()=>{
    return {
        type:RESET,
        payload:0
    }
}
//reducer
const counterReducer=(state=initialCounterState,action)=>{
    switch(action.type){
        case INC:
            return {count:state.count+1}
        case IncByValue:
            return {count:state.count+action.payload}
        case DEC:
            return {count:state.count-1}
        case RESET:
            return {count:action.payload}
        default:
            return state;
    }
}
const store=createStore(counterReducer);
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
console.log(store.getState());
store.dispatch(decrementCounter());
console.log(store.getState());
store.dispatch(resetCounter());
console.log(store.getState());
store.dispatch(incrementByValueCounter(10));
console.log(store.getState());

