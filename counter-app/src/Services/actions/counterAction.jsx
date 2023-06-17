import { decrement, increment, incrementByNumber, reset } from "../constants/counterConstent"

const incrementCounter=()=>{
    return{
        type:increment
    }
}
const decrementCounter=()=>{
    return{
        type:decrement
    }
}
const resetCounter=()=>{
    return{
        type:reset
    }
}
const incrementByNumberCounter=(value)=>{
    return{
        type:incrementByNumber,
        payload:value
    }
}

export {incrementCounter,decrementCounter,resetCounter,incrementByNumberCounter}