import logo from "./logo.svg";
import "./App.css";
import { EjemploUseEfect } from "./Components/EjemploUseEfect";
import { AjaxComponent } from "./Components/AjaxComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido al curso</p>
        <AjaxComponent />
        <EjemploUseEfect />
      </header>
    </div>
  );
}

export default App;
