import { useState } from "react";
import Item from "./Item";

export default function PakageList({ items, onDeleteItem, onTougle, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortItem;

  if (sortBy === "input") sortItem = items;
  if (sortBy === "description")
    sortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortItem.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onTougle={onTougle}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
