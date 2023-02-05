import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario,setUsuario] = useState ({})

    const conseguirDatoForm = e =>{
        e.preventDefault();

        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido:datos.apellido.value,
            genero: datos.genero.value,
            biografia:datos.biografia.value
        }
        console.log(usuario)
        setUsuario(usuario)
    }
    return (
        <>
            <h1>Formularios con react</h1>

            { usuario.biografia && usuario.biografia.length >= 1 &&
            ( <div className='infoUser label '>
            {usuario.nombre} {usuario.apellido} es un {usuario.genero} y
            su biografia es: <p>{usuario.biografia}</p>

        </div>)
            }
           

            <form onSubmit={conseguirDatoForm}>
                <input name='nombre' type="text" placeholder='Nombre' />
                <input name='apellido' type="text" placeholder='Apellido' />
                <select name='genero'>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name='biografia' placeholder='Biografia'></textarea>
                <input type="submit" value="Enviar" />

            </form>
        </>

    )
}
