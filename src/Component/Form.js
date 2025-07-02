import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItems = { id: Date.now(), description, quantity, packed: false };
    console.log(newItems);
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for your 😍 Trip</h3>

      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {
          ////creating option dynamicly
        }
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
