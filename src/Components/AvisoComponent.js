import React, { useEffect } from "react";

export const AvisoComponent = () => {
  useEffect(() => {
    alert("el componente AvisoComponent esta MONTADO!");

    return () => {
      alert("COMPONENTE DESMONTADO!");
    };
  }, []);

  return (
    <div>
      <hr />
      <h3>Hola LAUTARO como estas?</h3>
      <button onClick={(e) => alert("Apretaste el boton!")}>
        Mostrar alerta
      </button>
    </div>
  );
};
