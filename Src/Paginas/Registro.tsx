import RegistroForm from '../Componentes/Organismos/RegistroForm'
import Cerezo from '../Componentes/Atomos/Animaciones/Cerezo'
import '../Css/Paginas/registro.css'

function Registro() {
    return (
        <div className = 'caja_registro_estilo'>
            <Cerezo />
            <div className = 'formulario_registro'>
                <RegistroForm />
            </div>
        </div>
    )
} export default Registro