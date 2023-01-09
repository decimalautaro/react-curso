import React from "react";
import PropsType from "prop-types";

export const TercerComponente = ({ nombre, apellido, ficha }) => {
  return (
    <div>
      <ul>
        <li>{ficha.altura}</li>
      </ul>
    </div>
  );
};

TercerComponente.propsType = {
  nombre: PropsType.string.isRequired,
  apellido: PropsType.string,
  ficha: PropsType.object,
};

TercerComponente.defaultProps = {
  nombre: "lautaro andres",
  apellido: "decima",
};
