import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        nombre: "lautaro",
        apellido: "decima",
      },
    ]);
  };

  useEffect(() => {
    getUsuariosEstaticos();
  }, []);
  return (
    <div>
      <h2>Listado de usuarios via AJAX</h2>

      <ol className="usuarios">
        {usuarios.map((usuario) => {
          return (
            <li key={usuario.id}>
              {" "}
              {usuario.nombre} {usuario.apellido}{" "}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
