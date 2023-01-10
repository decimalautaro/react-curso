import React, { useState, useEffect } from "react";

export const UseEfect = () => {
  const [usuario, setUsuario] = useState("lautaro");
  const [fecha, setFecha] = useState("03-11-1994");

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
    console.log("se a cambiado el usuario!!");
  }, [usuario]);
  return (
    <div>
      <h1>UseEfect</h1>
      <strong className="label">{usuario}</strong>
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
