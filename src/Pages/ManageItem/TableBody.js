import React from "react";

const TableBody = ({ item, handleDelete }) => {
  const {
    _id,
    name,
    supplier,
    supplierEmail,
    description,
    quantity,
    sold,
    price,
    img,
  } = item;

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{sold}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableBody;
