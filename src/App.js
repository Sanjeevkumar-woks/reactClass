import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PersnolData />
    </div>
  );
}

function PersnolData() {
  return (
    <div className="Data">
      <img src={require("./img.jpg")} alt="Logo" width="300px" height="300px" />
      <h3>goku-DragonBallz</h3>
    </div>
  );
}
