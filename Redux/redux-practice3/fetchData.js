const { default: axios } = require("axios")
const {createStore,applyMiddleware}=require("redux")
const thunk = require('redux-thunk').default;
const GET_DATA_REQUEST="GET_DATA_REQUEST"
const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
const GET_DATA_ERROR="GET_DATA_ERROR"
const API_URL="https://jsonplaceholder.typicode.com/users";

const initialUserState={
    isLoading:false,
    user:[],
    error:""
}

const fetchData=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:GET_DATA_REQUEST})
            const res=await axios.get(API_URL);
            dispatch({type:GET_DATA_SUCCESS,payload:res.data})
        }catch(error){
          dispatch({type:GET_DATA_ERROR,payload:error.message})
        }
    }
}

const userReducer=(state=initialUserState,action)=>{
    switch(action.type){
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case GET_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                user:action.payload,
            }
        case GET_DATA_ERROR:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
        default:
           return state;
    }
}

const store=createStore(userReducer,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchData())