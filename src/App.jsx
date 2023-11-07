import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const setLocalStorage = (dataItems) => {
  const serializedData = JSON.stringify(dataItems);
  localStorage.setItem("list", serializedData);
};

const getLocalStorage = () => {
  const list = JSON.parse(localStorage.getItem("list"));
  return list;
};
const App = () => {
  const [items, setItems] = useState(getLocalStorage() || []);

  const addItem = (item) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: item,
      completed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added to the list");
  };

  const deleteItem = (id) => {
    const newItemList = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItemList);
    setLocalStorage(newItemList);
    toast.success("Item Removeds");
  };

  const setUpdatedObject = (complete, id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: complete };
      }
      return item;
    });
    setItems(updatedItems);
    setLocalStorage(updatedItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items
        items={items}
        setUpdatedObject={setUpdatedObject}
        deleteItem={deleteItem}
      />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
