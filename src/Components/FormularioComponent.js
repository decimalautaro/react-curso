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
            biografia:datos.biografia.value,
            enviar: datos.enviar.value
        }
        console.log(usuario)
        setUsuario(usuario)
    }

    const cambiarDatos = e =>{
        let nameInput = e.target.name
        let usuarioModificar = usuario

        // usuarioModificar [nameInput] = e.target.value

        setUsuario(estadoPrevio =>{
            return{
                ...estadoPrevio, 
                [nameInput]: e.target.value

            }
        })
    }
    return (
        <>
            <h1>Formularios con react</h1>

            { usuario.enviar &&
            ( <div className='infoUser label '>
            {usuario.nombre} {usuario.apellido} es un {usuario.genero} y
            su biografia es: <p>{usuario.biografia}</p>

        </div>)
            }
           

            <form onSubmit={conseguirDatoForm}>
                <input name='nombre' type="text" placeholder='Nombre' onChange={cambiarDatos}/>
                <input name='apellido' type="text" placeholder='Apellido' onChange={cambiarDatos}/>
                <select name='genero' onChange={cambiarDatos}>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name='biografia' placeholder='Biografia' onChange={cambiarDatos}></textarea>
                <input name='enviar' type="submit" value="Enviar" />

            </form>
        </>

    )
}
