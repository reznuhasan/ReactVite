import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../features/ProductFeature/productSlice';

function Products() {
    const products=useSelector(state=>state.products)
    console.log(products)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])
  return (
    <div>

    </div>
  )
}

export default Products