import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './productSlice';

function Products() {
  const dispatch=useDispatch();
  const product=useSelector(state=>state)
  console.log(product)
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])
  return (
    <div>
        <h1>Product Page</h1>
    </div>
  )
}

export default Products