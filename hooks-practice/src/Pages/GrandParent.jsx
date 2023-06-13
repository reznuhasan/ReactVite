import React, { createContext, useReducer } from 'react'
import Parent from './Parent'
const initialState = {
    count: 0,
}
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT": return { count: state.count + action.value }
        case "DECREMENT": return { count: state.count - action.value }
    }
}
export const countContext = createContext();
function GrandParent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Grand Parent Count:{state.count}</h1>
            <countContext.Provider value={{ countDispatch: dispatch }}>
                <Parent />
            </countContext.Provider>
        </div>
    )
}

export default GrandParent