import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PakageList from "./PakageList";
import Stat from "./Stat";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  function handleTougle(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(`Are You Sure You Want To Delete?`);
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PakageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTougle={handleTougle}
        onClear={handleClearList}
      />
      <Stat items={items} />
    </div>
  );
}
