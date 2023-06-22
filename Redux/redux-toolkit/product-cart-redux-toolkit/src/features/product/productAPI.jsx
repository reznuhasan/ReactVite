import axios from "axios"


export const productAPI=()=>{
    return axios.get('http://localhost:8080/products')
}