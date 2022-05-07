import React from "react";
import { Table } from "react-bootstrap";
import useItems from "../../hooks/useItems";
import TableBody from "./TableBody";

const ManageItem = () => {
  const [items, setItems] = useItems();
  const handleDelete = (id) => {
    const permission = window.confirm(
      "Are you Sure? If deleted you cannot back it."
    );
    if (permission) {
      fetch(`http://localhost:5000/item/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.deletedCount);
          if (data.deletedCount >= 0) {
            const rest = items.filter((item) => item._id !== id);
            setItems(rest);
          }
        });
    }
  };
  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
      size="lg"
      className="container"
    >
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Supplier</th>
          <th>Supplier Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TableBody key={item._id} item={item} handleDelete={handleDelete}></TableBody>
        ))}
      </tbody>
    </Table>

    // <div>
    //   {items.map((item) => (
    //     <>
    //       <p>
    //         {item.name} <button onClick={()=>handleDelete(item._id)}> Delete</button>
    //       </p>
    //     </>
    //   ))}
    // </div>
  );
};

export default ManageItem;
