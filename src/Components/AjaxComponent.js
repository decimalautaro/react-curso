import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true)

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

  // const getUsuariosAjaxPms = () =>{
  //   fetch ("https://reqres.in/api/users?page=1")
  //   .then((respuesta) => respuesta.json())
  //   .then(
      
  //     (resultadoFinal) =>{
  //       setUsuarios(resultadoFinal.data);
  //       console.log(usuarios)
  //   },
  //   error =>{
  //       console.log(error);
  //   })
  // }

const  getUsuariosAjaxAsynAwait =  ()=>{

  setTimeout(async ()=>{
    
    const  peticion = await fetch ("https://reqres.in/api/users?page=1")
    const {data} =  await peticion.json()
  
    setUsuarios(data)
    setCargando(false)
    console.log(data)


  },3000)


}

  useEffect(() => {
   
 
    // getUsuariosEstaticos();
    // getUsuariosAjaxPms();
    getUsuariosAjaxAsynAwait()

  },[]);


  if (cargando == true) {
    
    return (
      <div className="cargando">
        cargando datos...
      </div>
    )
  }else{
    
    return (
      <div>
        <h2>Listado de usuarios via AJAX</h2>
  
        <ol className="usuarios">
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} width= "80" />
                {usuario.first_name} {usuario.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

};
