export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PakageList />
      <Stat />
    </div>
  );
}

function Logo() {
  return <h1 className="logo">🌴 Far Away 💼</h1>;
}

function Form() {
  return <h3 className="add-form">What you need for your 😍 Trip</h3>;
}

function PakageList() {
  return <div className="list">List</div>;
}
function Stat() {
  return (
    <footer className="stats">
      <em>
        You have X item in your list, and you are already packed X item(X%)
      </em>
    </footer>
  );
}
