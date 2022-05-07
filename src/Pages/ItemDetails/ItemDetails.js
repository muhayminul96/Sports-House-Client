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

  const handleShift = (id) => {
    if (item.quantity > 0) {
      const quantity = item.quantity - 1;
      const sold = item.sold + 1;
      const newItem = { ...item, quantity: quantity, sold: sold };
      setItem(newItem);

      fetch(`http://localhost:5000/item/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({quantity,sold}),
      })
      .then(res => res.json())
      .then(data => console.log(data))

      console.log(quantity);
      console.log(sold);
      console.log(newItem);
    } else {
      alert("this is stoke out");
    }
  };
  const {
    _id,
    name,
    supplier,
    supplierEmail,
    description,
    quantity,
    price,
    img,
    sold
  } = item;
  return (
    <Card className="mx-auto my-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Price {price} taka</ListGroupItem>
        <ListGroupItem>quantity {quantity} </ListGroupItem>
        <ListGroupItem>sold {sold} </ListGroupItem>
        <ListGroupItem>Supplier {supplier}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link
          onClick={() => {
            handleShift(_id);
          }}
          className="btn btn-dark"
          href="#"
        >
          Shift
        </Card.Link>
        <Card.Link className="btn btn-dark" href="#">
          Another Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ItemDetails;
