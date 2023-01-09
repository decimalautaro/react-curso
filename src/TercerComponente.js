import React from "react";
import PropsType from "prop-types";

export const TercerComponente = ({ nombre, apellido, ficha }) => {
  return (
    <div>
      <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha.altura}</li>
      </ul>
    </div>
  );
};

TercerComponente.propsType = {
  nombre: PropsType.string,
  apellido: PropsType.string,
  ficha: PropsType.object,
};
