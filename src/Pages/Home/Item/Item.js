import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    supplier,
    supplierEmail,
    description,
    quantity,
    price,
    img,
  } = item;
  return (
    <Card style={{ width: "18rem" }} className="fw-5 mx-auto">
      <Card.Img variant="top" src={img} />
      <Card.Body style={{ height: "350px", marginTop:'10px' }}>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <h5>Supplier {supplier}</h5>
        <h5>price {price}</h5>
        <h5>Quantity {quantity} </h5>
      </Card.Body>
      <Button
        onClick={() => {
          navigate(`/item/${_id}`);
        }}
        variant="dark"
      >
        Details
      </Button>
    </Card>
  );
};

export default Item;
