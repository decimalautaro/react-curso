import logo from "./logo.svg";
import "./App.css";
import { EjemploUseEfect } from "./Components/EjemploUseEfect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido al curso</p>
        <EjemploUseEfect />
      </header>
    </div>
  );
}

export default App;
