import axios from "axios"


export const fetchItems=()=>{
    return axios.get('http://localhost:8080/cart')
}
export const addItem=(item)=>{
    return axios.post('http://localhost:8080/cart',item)
}
export const updateItem=({id,itemUpdate})=>{
    return axios.patch(`http://localhost:8080/cart/${id}`,itemUpdate)
}
export const deleteItem=(id)=>{
    return axios.delete(`http://localhost:8080/cart/${id}`)
}
