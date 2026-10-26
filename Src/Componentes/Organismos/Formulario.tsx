import CampoForm from '../Moleculas/CampoForm'
import { useState } from 'react'

function Formulario() {

    const [Nombre,   setNombre] = useState('');
    const [Correo,   setCorreo] = useState('');
    const [Mensaje, setMensaje] = useState('');

    const Envio = (e : React.SubmitEvent <HTMLFormElement> ) => {
        e.preventDefault();

        if (Nombre.trim() === '') {
        
            alert('Debe Ingresar Su Nombre')
            return
        
        } if (Correo.trim() === '') {
        
            alert('Debe Ingresar Su Correo')
            return
        
        } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo)) {
        
            alert('Ingrese Un Correo Valido')
            return
        
        } if (Mensaje.trim() === '') {
            
            alert('Al Menos Escribe Algo')
            return

        } alert('Formulario Enviado Exitosamente')
    }

    return (
        <form onSubmit = {Envio} noValidate>

            <CampoForm

                Etiqueta = 'Nombre Completo'
                Tipo     = 'Text'
                Nombre   = 'Nombre'
                Valor    = {Nombre}
                Change   = {setNombre}
            
            />

            <CampoForm
            
                Etiqueta = 'Correo Electronico'
                Tipo     = 'Email'
                Nombre   = 'Correo'
                Valor    = {Correo}
                Change   = {setCorreo}
            
            />

            <CampoForm
            
                Etiqueta = 'Mensaje'
                Tipo     = 'Text'
                Nombre   = 'Mensaje'
                Valor    = {Mensaje}
                Change   = {setMensaje}
            
            />

            <button type = 'submit' className = 'btn btn-primary'>
                Enviar Mensaje
            </button>
            
        </form>

    )
} export default Formulario