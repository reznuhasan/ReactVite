import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Cart/cartSlice'
function Product({product}) {
    const dispatch=useDispatch()
    const {title,thumbnail,price,description,stock,category,rating}=product
    return (
        <div className="card">
            <img src={thumbnail} alt={title} style={{"width":"100%"}}/>
                <h1>Name:{title}</h1>
                <h3 className="price">Price:{price}</h3>
                <div className='content'>
                    <h5>Stock:{stock}</h5>
                    <h5>rating:{rating}</h5>
                </div>
                <h5>category:{category}</h5>
                <p><button onClick={()=>dispatch(addProduct(product))}>Add to Cart</button></p>
        </div>
    )
}

export default Product