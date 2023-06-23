import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from './cartSlice';
function Carts() {
  const items = useSelector(state => state.items.items)
  const dispatch=useDispatch();
  const totalPrice=()=>{
    const prices=items.reduce((accumlator,item)=>{
      return accumlator+(item.price*item.quantity)
    },0)
    return prices
  }
  return (
    <div>
      {

        items.map(item => {
          const { title, thumbnail, price, description, stock, category, rating,quantity } = item
          return (
            <div key={item.id} style={{ "display": "flex", "width": "400px", "justifyContent": "space-between", "margin": "10px" }}>
              <img src={thumbnail} alt="" width="60px" height="60px" />
              <h3>{title}</h3>
              <h3>price:{price*quantity}</h3>
              <h1>Quantity:{quantity}</h1>
              <button onClick={()=>dispatch(removeToCart(item))}>X</button>
            </div>
          )
        })
      }
      <hr />
     <h1>Total Price:{totalPrice()}</h1>

    </div>
  )
}

export default Carts