import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItem,addCartItem,deleteCartItem,updateCartItem } from './cartSlice';
import Cart from './cart';


function Carts() {
  const dispatch=useDispatch();
  const items=useSelector(state=>state.cart.items)
  useEffect(()=>{
    dispatch(fetchItem())
  },[])
  
  return (
    <div>
          <h1>Shopping Cart</h1>

            {
             
              items.map(item=>
                {
                  
                  return <Cart item={item} key={item.id}></Cart>
                }
              )
            }

    </div>
  )
}

export default Carts