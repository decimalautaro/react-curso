import logo from "./logo.svg";
import "./App.css";
import { MiComponente } from "./MiComponente";
import { SegundoComponente } from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";
import { EventosComponentes } from "./EventosComponentes";

function App() {
  const ficha_medica = {
    altura: 182,
    edad: "28 años",
    salud: "correcta",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Bienvenido al curso</p>
        <EventosComponentes />
        <TercerComponente ficha={ficha_medica} />

        <MiComponente />

        <SegundoComponente />
      </header>
    </div>
  );
}

export default App;
