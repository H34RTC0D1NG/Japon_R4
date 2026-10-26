import CampoForm from '../Moleculas/CampoForm'
import '../../Css/Formularios/IniciarForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function IniciarForm() {

    const [Correo, setCorreo] = useState('')
    const [Pass,     setPass] = useState('')

    const Navegar = useNavigate()

    const Iniciar = (e : React.SubmitEvent <HTMLFormElement> ) => {
        e.preventDefault();

        if (Correo.trim() === '') {
            alert('Debe Ingresar Su Correo') 
            return
        } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo)) {
            alert('Ingresa Un Correo Valido')
            return
        } if (Pass.trim() === '') {
            alert('Ingresa Tu Contraseña')
            return
        } if (Correo === 'isa.mejias@duocuc.cl' && Pass === 'holamundo') {
            alert('Bienvenido Señor Isam')
            Navegar('/IniciarSession')
            return
        } alert('Correo o Contraseña Invalidos')

    }

    return (
        <form onSubmit = {Iniciar} noValidate className = 'iniciar_form'>

            <CampoForm 
            
                Etiqueta = 'Correo Electronico'
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

            <button type = 'submit' className = 'btn btn-danger'>
                    Iniciar Sessión   
            </button>

            <Link to = '/Registrarse'>
                Registrarse
            </Link>

        </form>
    )
} export default IniciarForm