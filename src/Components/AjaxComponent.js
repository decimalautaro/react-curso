import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  // const getUsuariosEstaticos = () => {
  //   setUsuarios([
  //     {
  //       id: 1,
  //       nombre: "lautaro",
  //       apellido: "decima",
  //     },
  //     {
  //       id: 2,
  //       nombre: "andres",
  //       apellido: "murgo",
  //     },
  //     {
  //       id: 3,
  //       nombre: "emanuel",
  //       apellido: "cortinez",
  //     },
  //     {
  //       id: 4,
  //       nombre: "alejandro",
  //       apellido: "renna",
  //     },
  //     {
  //       id: 5,
  //       nombre: "Juan",
  //       apellido: "de los santos",
  //     },
  //   ]);
  // };

  const getUsuariosAjaxPms = () =>{
    fetch ("https://reqres.in/api/users?page1")
    .then((respuesta) => respuesta.json())
    .then(
      
      (resultadoFinal) =>{
        setUsuarios(resultadoFinal.data);
        console.log(usuarios)
    },
    error =>{
        console.log(error);
    })
  }

  useEffect(() => {
   
 
    // getUsuariosEstaticos();
    getUsuariosAjaxPms();
    

  },[]);
  return (
    <div>
      <h2>Listado de usuarios via AJAX</h2>

      <ol className="usuarios">
        {usuarios.map((usuario) => {
          return (
            <li key={usuario.id}>
              {" "}
              {usuario.first_name} {usuario.last_name}{" "}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
