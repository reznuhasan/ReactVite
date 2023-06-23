import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

function Cart({item}) {
  return (
    <div>
      <Card className="d-flex">
      <Card.Img variant="top" style={{ height: '40px' }} src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Price: ${item.price}</Card.Text>
        {/* <Button variant="danger" onClick={() => onRemove(item.id)}>
          Remove
        </Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cart