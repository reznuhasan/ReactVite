import React, { useEffect, useReducer } from "react";
const initialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'SUCCESS':
            return {loading:false,post:action.result,error:''}
        case 'ERROR':
            return {
                loading:false,
                post:{},
                error:'There was a problem fetching'
            }
        default : return state
    }
}

const Post=()=>{
    const [count,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>res.json())
        .then(data=>dispatch({result:data,type:'SUCCESS'}))
        .catch(()=>dispatch({type:'ERROR'}))
    },[])
    return(
        <div>
           {(count.loading)?'Loading...':count.post.title}
           {count.error || null}
        </div>
    )
}

export default Post;