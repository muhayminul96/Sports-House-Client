import React, { useEffect, useRef, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const updateQuantety = useRef(0);
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/item/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleQuantity = (id, work) => {
    let quantity;
    let sold;
    if (work === "shift") {
      if (item.quantity > 0) {
        quantity = item.quantity - 1;
        sold = item.sold + 1;
      } else {
        alert("This is stoke out");
        sold = item.sold;
        quantity = item.quantity;
      }
    } else {

      if (parseInt(updateQuantety.current.value)) {
        const updateQuantetyValue = parseInt(updateQuantety.current.value);
        updateQuantety.current.value = "";
        console.log(updateQuantetyValue);
        if (updateQuantetyValue >= 0) {
          quantity = updateQuantetyValue;
          sold = item.sold;
          console.log(quantity, sold);
        } else {
          alert("quantity must be a positive number");
          sold = item.sold;
          quantity = item.quantity;
          
        }
      } else {
        alert("quantity must be a number");
        sold = item.sold;
        quantity = item.quantity;
      }
    }

    const newItem = { ...item, quantity: quantity, sold: sold };
    setItem(newItem);
    console.log(newItem);

    fetch(`http://localhost:5000/item/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity, sold }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
    sold,
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
      <Card.Body className="text-center">
        <Card.Title>Update Stoke</Card.Title>
        <Card.Text className="d-flex ">
          <input
            type="number"
            className="w-50 text-right"
            ref={updateQuantety}
          ></input>{" "}
          <button
            className=" ms-1 btn btn-dark"
            onClick={() => {
              handleQuantity(_id, "restoke");
            }}
          >
            Update Stoke
          </button>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link
          onClick={() => {
            handleQuantity(_id, "shift");
          }}
          className="btn btn-dark"
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
