import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/item/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
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
    <Card className="mx-auto my-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{shortDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Price {price} taka</ListGroupItem>
        <ListGroupItem>quantity {quantity} </ListGroupItem>
        <ListGroupItem>sold {0} </ListGroupItem>
        <ListGroupItem>Supplier {supplier}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ItemDetails;
