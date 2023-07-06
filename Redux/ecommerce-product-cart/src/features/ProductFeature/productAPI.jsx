import axios from "axios"

export const productAPI=()=>{
    return axios.get('http://localhost:3000/products')
}