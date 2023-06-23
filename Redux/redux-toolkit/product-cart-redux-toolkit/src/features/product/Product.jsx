import React, { useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { addCartItem } from '../cart/cartSlice'
import { useDispatch } from 'react-redux'
function Product({ product }) {
  const dispatch = useDispatch();

  const { title, price, rating, stock, category, description, thumbnail } = product
  const handleItemAdd=()=>{
    
    dispatch(addCartItem(product))
  }
  return (
  
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" style={{ height: '300px' }} src={thumbnail} />
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
              </Card.Text>
              <Button variant="warning" onClick={handleItemAdd}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Card>
      </Col>
    </div>
  )
}

export default Product