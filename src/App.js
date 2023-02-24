import logo from "./logo.svg";
import "./App.css";
import { EjemploUseEfect } from "./Components/EjemploUseEfect";
import { AjaxComponent } from "./Components/AjaxComponent";
import { FormularioComponent } from "./Components/FormularioComponent";
import { FormularioUseRef } from "./Components/FormularioUseRef";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido al curso Use- Ref</p>
        {/* <AjaxComponent /> */}
        {/* <EjemploUseEfect /> */}
        {/* <FormularioComponent /> */}
        <FormularioUseRef />
        
      </header>
    </div>
  );
}

export default App;
