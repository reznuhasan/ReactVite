import axios from "axios"
export const fetchProduct=()=>{
    return axios.get('http://localhost:3000/products')
}

