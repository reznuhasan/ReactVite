import { DECREMENT, INCREMENT, INCREMENT_BY_VAlUE, RESET } from "../Constants/counterConstant"

const initialCounterState={
    count:0
}

export const counterReducer=(state=initialCounterState,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                count:state.count+1,
            }
        case DECREMENT:
            return{
                count:state.count-1,
            }
        case RESET:
            return{
                count:0
            }
        case INCREMENT_BY_VAlUE:
            return{
                count:state.count+action.payload,
            }
        default:
            return state;
    }
}