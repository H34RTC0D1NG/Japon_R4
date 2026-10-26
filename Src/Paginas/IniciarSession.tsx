import IniciarForm from '../Componentes/Organismos/IniciarForm'
import Cerezo from '../Componentes/Atomos/Animaciones/Cerezo'
import '../Css/Paginas/Entrada.css'

function IniciarSession() {
    return (
        <div className = 'InicioSesion'>
            <Cerezo />
            <div className = 'inicio_form'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <IniciarForm />
            </div>
        </div>
    )
} export default IniciarSession