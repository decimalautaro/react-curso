import React, { useState, useEffect } from "react";

export const UseEfect = () => {
  const [usuario, setUsuario] = useState("lautaro");
  const [fecha, setFecha] = useState("03-11-1994");
  const [contador, setContador] = useState(0);

  const cambiarFecha = () => {
    setFecha(new Date().toLocaleDateString());
  };

  const modificarUser = (e) => {
    setUsuario(e.target.value);
  };

  useEffect(() => {
    console.log("Se ha cargado el componente de UseEfect!");
  }, []);

  useEffect(() => {
    console.log("se a modificado el usuario: " + contador);

    setContador(contador + 1);
  }, [usuario]);
  return (
    <div>
      <h1>UseEfect</h1>
      <strong className={contador > 10 ? "label label-green" : "label"}>
        {usuario}
      </strong>
      <strong className="label">{fecha}</strong>

      <p>
        <input
          type="text"
          onChange={modificarUser}
          placeholder="cambiar nombre"
        />
        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>
    </div>
  );
};
