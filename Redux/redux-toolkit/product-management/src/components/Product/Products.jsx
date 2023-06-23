import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncProduct } from './ProductSlice';
import Product from './Product';
import './Products.css'
function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    dispatch(asyncProduct());
  }, []);

  return (
    <div className='products'>
      {
        products.map(product=><Product product={product} key={product.id}></Product>)
      }
    </div>
  );
}

export default Products;