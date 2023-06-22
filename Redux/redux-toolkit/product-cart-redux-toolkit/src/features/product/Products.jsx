import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './productSlice';
import { Row } from 'react-bootstrap';
import Product from './product';

function Products() {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.product.products)
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])
  return (
    <div>
          <h1>Total Product:{products.length}</h1>
          <Row xs={1} md={2} className="g-4">
            {
              products.map(product=><Product product={product} key={product.id}></Product>)
            }
          </Row>

    </div>
  )
}

export default Products