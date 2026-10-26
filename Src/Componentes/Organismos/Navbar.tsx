import '../../Css/Componentes/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (

        <nav className = 'navbar navbar-expand bg-dark fixed-top'>
            <div className = 'container'>
                <div className = 'navbar-nav'>
                    
                    <Link className = 'nav-link text-white' to = '/'>
                        Inicio
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Estaciones'>
                        Estaciones
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Galeria'>
                        Galeria
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Gastronomia'>
                        Gastronomia
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Vuelo'>
                        Vuelo
                    </Link>

                    <Link className = 'nav-link text-white' to = '/Contacto'>
                        Contacto
                    </Link>
                    
                </div>
            </div>
        </nav>
   
    )
} export default Navbar