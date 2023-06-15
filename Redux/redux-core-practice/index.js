const {createStore} =require('redux')

const INC = "Increment"
const DEC = "Decrement"
const IncByValue = "incrementByValue"
//state
const initialCounterState = {
    count: 0,
}

//action
const incrementCounter = () => {
    return {
        type: INC
    }
}
const decrementCounter = () => {
    return {
        type: DEC
    }
}
const incrementByValueCounter = () => {
    return {
        type: IncByValue,
        payload: 4
    }
}
//reducer
const reducer = (state=initialCounterState, action) => {
    console.log(action.type)
    switch (action.type) {
        case INC:
            return { count: state.count + 1 }
        case DEC:
            return { count: state.count - 1 }
        case IncByValue:
            return { count: state.count + action.payload }
        default:
            return state;
    }
}

/*store have 3 method
1)getState() which show state situation
2)dispatch() which dispatch the action
3)subscribe() which used with view subscribe
*/
//create store

const store=createStore(reducer);

store.dispatch(incrementCounter());
console.log(store.getState())

store.dispatch(incrementByValueCounter());
console.log(store.getState())
store.dispatch(decrementCounter());
console.log(store.getState())