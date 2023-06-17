const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk  = require("redux-thunk").default;

const GET_DATA_REQUEST="GET_DATA_REQUEST";
const GET_DATA_SUCCESS="GET_DATA_SUCCESS";
const GET_DATA_ERROR="GET_DATA_SUCCESS";
const API_URL="https://jsonplaceholder.typicode.com/users";

//state
const initialDataState={
    users:[],
    isLoading:false,
    errors:"",
}
//actions
const getDataRequest=()=>{
    return{
        type:GET_DATA_REQUEST,
    }
}
const getDataSuccess=(user)=>{
    return{
        type:GET_DATA_SUCCESS,
        payload:user,
    }
}
const getDataError=(error)=>{
    return{
        type:GET_DATA_ERROR,
        payload:error
    }
}

// reducer
const dataReducer=(state=initialDataState,action)=>{
    switch(action.type){
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                users:action.payload,
            }
        case GET_DATA_ERROR:
            return {
                ...state,
                isLoading:false,
                errors:action.payload,
            }
        default:
            return state

    }
}
const fatchData=()=>{
  return async(dispatch)=>{
    dispatch(getDataRequest());
    try{
        const response=await axios.get(API_URL)
        const data=response.data;
        dispatch(getDataSuccess(data))
      }catch(err){
        dispatch(getDataError(err))
      }
  }
   
}
const store=createStore(dataReducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fatchData())