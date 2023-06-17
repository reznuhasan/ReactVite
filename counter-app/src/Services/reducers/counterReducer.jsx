import { decrement, increment, incrementByNumber, reset } from "../constants/counterConstent"

const initialCounter={
    counter:0
}
export const counterReducer = (state=initialCounter, action) => {
    switch (action.type) {
        case increment:
            return {
                counter: state.counter + 1,
            }
        case decrement:
            return {
                counter:state.counter - 1
            }
        case reset:
            return {
                counter:0
            }
        case incrementByNumber:
            return{
                counter:state.counter+action.payload,
            }
        default:
            return state;
    }
}