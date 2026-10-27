import CampoForm from '../Moleculas/CampoForm'
import '../../Css/Formularios/LastForm.css'
import { useState } from 'react'

function LastForm() {

    const [Nombre, setNombre] = useState('')
    const [Nota, setNota] = useState('')
    const [Lugar, setLugar] = useState('')
    const [Opinion, setOpinion] = useState('')

    const Enviar = (e : React.SubmitEvent <HTMLFormElement> ) => {
        e.preventDefault()

        if (Nombre.trim() === '') {
            alert('Debe Ingresar Su Nombre')
            return
        } if (Nota === '' || Number(Nota) < 1 || Number(Nota) > 10) {
            alert('La Nota Debe Ser Del [1 a 10]')
            return
        } if (Lugar.trim() === '') {
            alert('Cuentanos Que Lugar Te Gustaria Visitar')
            return 
        } if (Opinion.trim() === '') {
            alert('Al Menos Escribe Algo')
            return
        } alert('Gracias Por Tu Opinion Sobre Japón')

    }

    return (
        
        <form onSubmit = {Enviar} noValidate className = 'last_form'>

            <CampoForm 
            
                Etiqueta = 'Nombre'
                Tipo = 'Text'
                Nombre = 'Nombre'
                Valor = {Nombre}
                Change = {setNombre}

            />

            <CampoForm 
            
                Etiqueta = 'Que Nota Le Das A Japón [1 a 10]'
                Tipo = 'Number'
                Nombre = 'Nota'
                Valor = {Nota}
                Change = {setNota}

            />

            <CampoForm 
            
                Etiqueta = 'Que Lugar De Japón Te Gustaria Visitar'
                Tipo = 'Text'
                Nombre = 'Lugar'
                Valor = {Lugar}
                Change = {setLugar}

            />

            <CampoForm 
            
                Etiqueta = 'Que Te Parece Japón'
                Tipo = 'Text'
                Nombre = 'Opinion'
                Valor = {Opinion}
                Change = {setOpinion}

            />

            <button type = 'submit' className = 'btn btn-primary'>
                Enviar Opinión
            </button>

        </form>

    )
} export default LastForm