import React from "react";
import Item from "./Item";

const Items = ({ items, deleteItem, setUpdatedObject }) => {
  return (
    <section className="items">
      {items.map((singleItem) => {
        return (
          <Item
            key={singleItem.id}
            singleItem={singleItem}
            deleteItem={deleteItem}
            setUpdatedObject={setUpdatedObject}
          />
        );
      })}
    </section>
  );
};

export default Items;
