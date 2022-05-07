import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useItems from "../../../hooks/useItems";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const navigate = useNavigate();
  const [items, setItems] = useItems();
  return (
    <div className="container">
      <div className="my-2 text-end">
        <Button
          variant="dark"
          onClick={() => navigate("/manageitems")}
          size="lg"
        >
          Manage Inventory
        </Button>
      </div>
      <div className="items-container">
        {items.slice(0, 6).map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
