import { DECREMENT, INCREMENT, INCREMENT_BY_VAlUE, RESET } from "../Constants/counterConstant"

export const incrementCounter=()=>{
    return {
        type:INCREMENT,
    }
}
export const decrementCounter=()=>{
    return {
        type:DECREMENT,
    }
}
export const incrementByValueCounter=(value)=>{
    return {
        type:INCREMENT_BY_VAlUE,
        payload:value
    }
}
export const resetCounter=()=>{
    return {
        type:RESET,
    }
}