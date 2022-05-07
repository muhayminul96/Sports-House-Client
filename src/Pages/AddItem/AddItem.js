import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddItem = () => {
  const { register, handleSubmit, setValue , reset } = useForm();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
  }
  // Submit your data into Redux store
  const onSubmit = (data) => {
    data.supplierEmail = user.email;
    data.sold = 0;
    data.quantity = parseInt(data.quantity);
    data.price = parseFloat(data.price);

    if (data.price <= 0 || data.quantity <= 0) {
      alert("your price and quantity is more then 0");
    } else {
      fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          reset();
        });
    }
  };
  //   like id, name, image, description, price, quantity, supplier name, sold,

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column mt-3">
      <h1 className="fw-bolder text-primary">Add Items</h1>
      <input
        placeholder="Name"
        className="w-50 mx-auto mb-2"
        {...register("name")}
      />
      <textarea
        placeholder="Description"
        className="w-50 mx-auto mb-2"
        {...register("description")}
      />
      <input
        placeholder="Price"
        type="number"
        className="w-50 mx-auto mb-2"
        {...register("price")}
      />
      <input
        placeholder="Quantity"
        type="number"
        className="w-50 mx-auto mb-2"
        {...register("quantity")}
      />
      <input
        placeholder="Supplier name"
        className="w-50 mx-auto mb-2"
        {...register("supplier")}
      />
      <input
        placeholder="Image Url"
        className="w-50 mx-auto mb-2"
        {...register("img")}
        required
      />

      <input
        type="submit"
        className="w-25 mx-auto my-3 btn btn-dark"
        value="Add Item"
      />
    </form>
  );
};

export default AddItem;
