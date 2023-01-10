import React from "react";

export const SegundoComponente = () => {
  //   const libros = ["harry potter", "narnia", "señor de los anillos"];
  const libros = [];
  return (
    <div className="segundo-componente">
      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro, indice) => {
            return <li key={indice}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No se encuentra nada en la lista</p>
      )}
    </div>
  );
};
