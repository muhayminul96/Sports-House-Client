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
    shortDescription,
    quantity,
    price,
    img,
  } = item;
  return (
    <Card style={{ width: "18rem" }} className="fw-5 mx-auto">
      <Card.Img variant="top" src="https://i.ibb.co/S0NZdmS/basketball.jpg" />
      <Card.Body>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <Card.Text>{shortDescription}</Card.Text>
        <h5>Supplier {supplier}</h5>
        <h5>price {price}</h5>
        <h5>Quantity {quantity} </h5>
        <Button
          onClick={() => {
            navigate(`/item/${_id}`);
          }}
          variant="dark"
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
