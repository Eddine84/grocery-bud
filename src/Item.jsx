import React, { useState } from "react";

const Item = ({ singleItem, deleteItem, setUpdatedObject }) => {
  const [isChecked, setIsChecked] = useState(singleItem.completed);
  const handleCheckBox = (e) => {
    setIsChecked(e.target.checked);
    setUpdatedObject(e.target.checked, singleItem.id);
  };

  const handleDelete = () => {
    deleteItem(singleItem.id);
  };

  return (
    <div className="single-item">
      <input type="checkbox" onChange={handleCheckBox} name="name" />
      <p
        style={{
          textDecoration: isChecked ? "line-through" : "",
        }}
      >
        {singleItem.name}
      </p>
      <button className="btn remove-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Item;
