import React from "react";
import useItems from "../../hooks/useItems";

const ManageItem = () => {
  const [items, setItems] = useItems();
  const handleDelete = id => {
     const permission = window.confirm('Are you Sure? If deleted you cannot back it.')
     if(permission){
        fetch(`http://localhost:5000/item/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
            console.log(data.deletedCount)
            if(data.deletedCount >= 0 ){
                const rest = items.filter(item => item._id !== id)
                setItems(rest)
            }
        })
        
     }      
  }
  return (
    <div>
      {items.map((item) => (
        <>
          <p>
            {item.name} <button onClick={()=>handleDelete(item._id)}> Delete</button>
          </p>
        </>
      ))}
    </div>
  );
};

export default ManageItem;
