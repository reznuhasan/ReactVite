const addUser="ADD-USER";
const removeUser="REMOVE-USER";
//state
const initialUserState={
    user:[{name:"Rizwan"}]
}
//action
const addUserFunc=()=>{
    return{
        type:addUser,
        payload:{name:"Arif"}
    }
}
const removeUserFunc=()=>{
    return{
        type:removeUser,
    }
}
//reducer
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case addUser:
        return {
          ...state,
          user: [...state.user, action.payload]
        };
      case removeUser:
        return {
          ...state,
          user: state.user.slice(0, state.user.length - 1)
        };
      default:
        return state;
    }
  };

const {createStore}=require('redux');
const store=createStore(userReducer);

store.dispatch(addUserFunc());
console.log(store.getState())
store.dispatch(removeUserFunc());
console.log(store.getState())
