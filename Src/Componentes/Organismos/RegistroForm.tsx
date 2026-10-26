import CampoForm from '../Moleculas/CampoForm'
import '../../Css/Formularios/RegistroForm.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function RegistroForm() {

    const [Nombre,     setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Correo,     setCorreo] = useState('');
    const [Pass,         setPass] = useState('');
    const [Confirm,   setConfirm] = useState('');

    const EnvioRegistro = (e : React.SubmitEvent <HTMLFormElement> ) => {
        e.preventDefault();

        if (Nombre.trim() === '') {
            alert('Debe Ingresar Su Nombre')
            return
        } if (Apellido.trim() === '') {
            alert('Debe Ingresar Su Apellido')
            return
        } if (Correo.trim() === '') {
            alert('Debe Ingresar o Crear Un Correo')
            return
        } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo)) {
            alert('Ingrese Un Correo Valido')
            return
        } if (Pass.length < 8) {
            alert('Debe Ingresar Una Contraseña De Al Menos 8 Caracteres')
            return 
        } if (Pass !== Confirm) {
            alert('Las Contraseñas No Coinciden')
            return 
        } alert('Registro Exitoso')

    }

    return (
        <form onSubmit = {EnvioRegistro} noValidate>
            
            <CampoForm 
            
                Etiqueta = 'Nombre'
                Tipo = 'Text'
                Nombre = 'Nombre'
                Valor = {Nombre}
                Change = {setNombre}
            
            />

            <CampoForm 
            
                Etiqueta = 'Apellido'
                Tipo = 'Text'
                Nombre = 'Apellido'
                Valor = {Apellido}
                Change = {setApellido}
            
            />

            <CampoForm 
            
                Etiqueta = 'Correo'
                Tipo = 'Email'
                Nombre = 'Correo'
                Valor = {Correo}
                Change = {setCorreo}
            
            />

            <CampoForm 
            
                Etiqueta = 'Contraseña'
                Tipo = 'Password'
                Nombre = 'Pass'
                Valor = {Pass}
                Change = {setPass}
            
            />

            <CampoForm 
            
                Etiqueta = 'Confirmar Contraseña'
                Tipo = 'Password'
                Nombre = 'Confirm'
                Valor = {Confirm}
                Change = {setConfirm}
            
            />

            <button type = 'submit' className = 'btn btn-primary'>
                Registrarse
            </button>

            <Link to = '/Iniciar'>
                Iniciar Sessión
            </Link>

        </form>
    )
} export default RegistroForm