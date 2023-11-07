import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [inputObject, setInputObject] = useState("");

  const handleChange = (e) => {
    setInputObject(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputObject) {
      toast.error("please provide a value !");
      return;
    }
    addItem(inputObject);
    setInputObject("");
  };

  return (
    <form>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={inputObject}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClick} type="submit">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
