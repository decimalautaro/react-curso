import React, {useRef} from 'react'


export const FormularioUseRef = () => {

    const nombreValue = useRef()
    const apellidoValue = useRef()
    const emailValue = useRef()
    const miCaja = useRef()


    const mostrar = (e)=>{
        e.preventDefault();
        console.log(nombreValue.current.value )
        console.log(apellidoValue.current.value )
        console.log(emailValue.current.value )


        let {current: caja} = miCaja;
        console.log(miCaja) 
        caja.classList.add("fondoVerde")
        caja.innerHTML = "Formulario ENVIADO!! "


    }
  return (
    <div>
        <h1>Form</h1>

        <div className='miCaja' ref={miCaja} >
            <h2>Pruebas con useRef</h2>
        </div>

        <form onSubmit={mostrar}>
             <input type='text' placeholder='Nombre' ref={nombreValue}/>
             <input type='text' placeholder='Apellido' ref={apellidoValue} />
             <input type='email' placeholder='Email' ref={emailValue}/> 
             <br/> 

             <input type='submit' value='enviar' />


        </form>
        <button onClick={()=>nombreValue.current.select() }>Empezar a rellenar form</button>

    </div>
  )
}
