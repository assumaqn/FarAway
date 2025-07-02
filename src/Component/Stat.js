export default function Stat({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your Packing List 🚀 </em>
      </p>
    );
  const numbItems = items.length;
  const numbPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numbPacked / numbItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything! Ready To Go"
          : `
        You have ${numbItems} item in your list, and you are already packed
        ${numbPacked} item (${percentPacked}%)`}
      </em>
    </footer>
  );
}
