import React from "react";

export const EventosComponentes = () => {
  const clickBoton = () => {
    alert("has dado click al button");
  };

  const dobleClic = () => {
    alert("diste 2 click");
  };

  const hasEntrado = (e) => {
    alert("entraste a la caja con el mouse");
  };
  const hasSalido = (e) => {
    alert("has salido de la caja");
  };

  return (
    <>
      <div>
        <h1>Evento en React </h1>
        <p>
          <button onClick={clickBoton}>Dame clic</button>
        </p>
        <p>
          <button onDoubleClick={dobleClic}> Dame 2 clic</button>
        </p>
        <div id="caja" onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>
          pasar por encima
        </div>
      </div>
    </>
  );
};
