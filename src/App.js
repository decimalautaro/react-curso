import logo from "./logo.svg";
import "./App.css";

import { UseEfect } from "./Components/UseEfect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido al curso</p>
        <UseEfect />
      </header>
    </div>
  );
}

export default App;
