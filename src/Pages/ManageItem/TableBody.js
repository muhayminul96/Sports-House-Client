import React from "react";

const TableBody = ({ item, handleDelete }) => {
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
    <tr>
      <td>{_id.slice(6, 15)}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{supplier}</td>
      <td>{supplierEmail}</td>
      <td>
        <button onClick={() => handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableBody;
