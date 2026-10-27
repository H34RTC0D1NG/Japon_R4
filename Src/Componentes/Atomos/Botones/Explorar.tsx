import '../../../Css/Botones/Explorar.css'
import '../../../Css/Global/General.css'
import { Link } from "react-router-dom"

function Explorar() {
    return (
        <button className = 'btn rojo' style = {{ width : '20%', padding : '20px' }}>
            <Link to = '/Vuelos'>
                Empezar a Explorar
            </Link>
        </button>
    )
} export default Explorar