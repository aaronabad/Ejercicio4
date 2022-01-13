import logo from "./logo.svg";
import "./App.css";

function App() {
  const loco = "Cambio desde Ryzen 7";
  const otro = "Otro cambio desde el instituto";
  const tercero = "El tercer cambio desde el instituto";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload {loco} - {otro}.
        </p>
        <p>
          Mensaje de {tercero}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
