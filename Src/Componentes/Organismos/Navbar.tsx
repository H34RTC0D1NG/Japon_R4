import { FaToriiGate } from "react-icons/fa"
import '../../Css/Secciones/Seccion_0.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        
        <nav className = 'navbar navbar-expand bg-dark fixed-top'>
            <div className = 'container'>
                
                <span className = 'marca navbar-brand text-white'>
                    <FaToriiGate />
                    Japón
                </span>

                <div className = 'navbar-nav'>

                    <Link className = 'nav-link' to = '/'>
                        Inicio
                    </Link>

                    <Link className = 'nav-link' to = '/Estaciones'>
                        Estaciones
                    </Link>

                    <Link className = 'nav-link' to = '/Galeria'>
                        Galeria
                    </Link>

                    <Link className = 'nav-link' to = '/Gastronomia'>
                        Gastronomia
                    </Link>

                    <Link className = 'nav-link' to = '/Viajes'>
                        Viajes
                    </Link>

                    <Link className = 'nav-link' to = '/Contacto'>
                        Contacto
                    </Link>

                </div>
            </div>
        </nav>

    )
} export default Navbar