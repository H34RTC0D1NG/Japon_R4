import '../../Css/Formularios/Formulario_1.css'
import CampoForm from "../Moleculas/CampoForm"

function Formulario() {
    return (
        <form>

            <CampoForm
                Etiqueta = 'Nombre Completo'
                Tipo     = 'Text'
                Nombre   = 'Nombre'
            />

            <CampoForm
                Etiqueta = 'Correo Electronico'
                Tipo     = 'Email'
                Nombre   = 'Correo'
            />

            <CampoForm
                Etiqueta = 'Mensaje'
                Tipo     = 'Text'
                Nombre   = 'Mensaje'
            />

            <button type = 'submit' className = 'btn btn-primary'>
                Enviar Mensaje
            </button>

        </form>
    )
} export default Formulario