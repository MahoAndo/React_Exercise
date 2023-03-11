import "./App.css";
import data from "./assets/data.json";
import Card from "./assets/data.json";

function App() {
  return (
    <>
      {data.map((person) => (
        <Card key={person.fullName} {...person} />
      ))}
    </>
  );
}

export default App;
