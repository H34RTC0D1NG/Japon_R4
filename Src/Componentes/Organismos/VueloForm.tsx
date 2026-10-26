import SelectorLlegada from '../Atomos/Inputs/SelectorLlegada'
import SelectorSalida from '../Atomos/Inputs/SelectorSalida'
import CampoForm from '../Moleculas/CampoForm'
import '../../Css/Paginas/Vuelo.css'
import { useState } from 'react'


function VueloForm() {

    const [Nombre, setNombre] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Salida, setSalida] = useState('');
    const [Llegada, setLlegada] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Pasajeros, setPasajeros] = useState('');

    const Envio = ( e : React.SubmitEvent <HTMLFormElement> ) => {
        e.preventDefault();

        if (Nombre.trim() === '') {
            alert('Debe Ingresar su Nombre')
            return
        } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo)) {
            alert('Ingrese Un Correo Valido')
            return
        } if (Salida === '') {
            alert('Seleccione el Lugar de Salida')
            return
        } if (Llegada === '') {
            alert('Seleccione Un Lugar De Llegada')
            return
        } if (Fecha === '') {
            alert('Seleccione Una Fecha')
            return
        } if (Pasajeros === '' && Number(Pasajeros) < 1) {
            alert('Debe Haber Al Menos 1 Psajero')
            return
        } alert('Vuelo Reservado De ' + Salida + ' A ' + Llegada)

    }

    return (
        <form onSubmit = {Envio} noValidate>

            <CampoForm 
            
                Etiqueta = 'Nombre Completo'
                Tipo = 'Text'
                Nombre = 'Nombre'
                Valor = {Nombre}
                Change = {setNombre}
            
            />

            <CampoForm 
            
                Etiqueta = 'Correo'
                Tipo = 'Email'
                Nombre = 'Correo'
                Valor = {Correo}
                Change = {setCorreo}

            />

            <div className = 'mb-3'>
                <label className = 'form-label'>
                    Lugar De Salida
                </label>

                <SelectorSalida Nombre = 'Salida' Valor = {Salida} Change = {setSalida} />

            </div>

            <div className = 'mb-3'>
                <label className = 'form-label'>
                    Lugar De Llegada
                </label>

                <SelectorLlegada Nombre = 'Llegada' Valor = {Llegada} Change = {setLlegada} />

            </div>

            <CampoForm 
            
                Etiqueta = 'Fecha Del Vuelo'
                Tipo = 'Date'
                Nombre = 'Fecha'
                Valor = {Fecha}
                Change = {setFecha}
            
            />

            <CampoForm 
            
                Etiqueta = 'Cantidad De Pasajeros'
                Tipo = 'Number'
                Nombre = 'Pasajeros'
                Valor = {Pasajeros}
                Change = {setPasajeros}
            
            />

            <button type = 'submit' className = 'btn btn-primary'>
                Reservar Vuelo
            </button>

        </form>
    )
} export default VueloForm