import '../../Css/Botones/Gastronomia.css'
import { Link } from "react-router-dom"

function Gastronomia() {
    return (
        <button className = 'btn btn-borde'>
            <Link to = '/Gastronomia'>
                Ver Gastronomia
            </Link>
        </button>
    )
} export default Gastronomia