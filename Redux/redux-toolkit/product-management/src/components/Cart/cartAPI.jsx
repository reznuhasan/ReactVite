import axios from "axios"


export const fetchCart=()=>{
    return axios.get('http://localhost:3000/carts');
}
export const addCart=(item)=>{
    return axios.post('http://localhost:3000/carts',item);
}