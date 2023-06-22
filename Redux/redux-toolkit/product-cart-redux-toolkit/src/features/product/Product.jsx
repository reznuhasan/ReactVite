import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

function Product({product}) {
    const {title,price,rating,stock,category,description,thumbnail}=product
  return (
    <div>
       <Col>
          <Card>
            <Card.Img variant="top" style={{ height: '300px' }} src={thumbnail} />
            <Card.Body>
              <Card.Title>Name:{title}</Card.Title>
              <Card.Text>
                <p>description:{description}</p>
                <h3>Price:{price}</h3>
                <div className="d-flex justify-content-between">
                    <h5>stock:{stock}</h5>
                    <h5>category:{category}</h5>
                </div>
              </Card.Text>
            </Card.Body>
            <Button variant="warning">Add To Cart</Button>
          </Card>
        </Col>
    </div>
  )
}

export default Product