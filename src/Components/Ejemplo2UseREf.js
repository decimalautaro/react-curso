import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

export const Ejemplo2UseREf = () => {
    const [numeroSaludo, setNumeroSaludo] = useState(0);

    const saludosEnCola = useRef(numeroSaludo)
    useEffect(()=>{
        saludosEnCola.current = numeroSaludo

        setTimeout(()=>{
            console.log("Saludo en cola:"+ saludosEnCola.current)
        },3000)
    }, [numeroSaludo])

    const enviarSaludo = e =>{
        setNumeroSaludo(numeroSaludo + 1)
    }

  return (
    <div>
        <h1>UseRef</h1>

        <h2>Saludos enviados {numeroSaludo}</h2>
        <button onClick={enviarSaludo }>Enviar saludo</button>

    </div>
  )
}
