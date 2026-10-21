import '../../../Css/Botones/Explorar.css'
import '../../../Css/Global/General.css'
import { Link } from "react-router-dom"

function Explorar() {
    return (
        <button className = 'btn rojo'>
            <Link to = '/Vuelos'>
                Empezar a Explorar
            </Link>
        </button>
    )
} export default Explorar