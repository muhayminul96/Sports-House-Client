import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import TableBody from '../ManageItem/TableBody';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
    }
  
    useEffect(() => {
      fetch(`http://localhost:5000/myitems?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyItems(data));
    }, []);

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
            const rest = myItems.filter((item) => item._id !== id);
            setMyItems(rest);
          }
        });
    }
  };
  return (
      <Container className="container-fluid">
        <div className="my-2 text-end">
        <Button
          variant="dark"
          onClick={() => navigate("/additem")}
          size="lg"
        >
          Add Item
        </Button>
        </div>
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
          <th>Name</th>
          <th>Quantity</th>
          <th>Sold</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {myItems.map((item) => (
          <TableBody key={item._id} item={item} handleDelete={handleDelete}></TableBody>
        ))}
      </tbody>
    </Table>
    </Container>
  );
};

export default MyItems;