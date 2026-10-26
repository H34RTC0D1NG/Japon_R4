import { MdOutlineAccountCircle } from 'react-icons/md'
import '../../Css/Componentes/Footer.css'
import { Link } from 'react-router-dom'
import {
  FaToriiGate, FaCloudSun, FaUtensils, FaImages, FaPlane,
  FaCalendar, FaYenSign, FaLanguage,
  FaInstagram, FaYoutube, FaGithub,
} from 'react-icons/fa6'

function Footer() {
    return (
        <footer>
            <div className="wrap">
                <div className="pie-grid">
                    <div>
                        <span className="pie-marca">
                            <FaToriiGate /> 
                            <em>Japón</em>
                        </span>

                        <p className="pie-texto">
                            Este es un proy de Fullstack II en el que tenemos que migrar nuestro Proy de la Evaluación 
                            Número 1 creado con las herramientas HTML 5 a React, Este nuevo Proy tiene que tener cosas
                            como las Routes de Bootstrap, Pruebas Unitarias como todo Codigo tiene que tener, Props,
                            Componentes : Atomos, Moleculas, Organismos. 
                        </p>

                        <div className="redes">
                        <a href="https://www.instagram.com/h34rtf1r3/" target="_blank">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@thehearthfirevevo" target="_blank">
                            <FaYoutube />
                        </a>
                        <a href="https://github.com/H34RTC0D1NG" target="_blank">
                            <FaGithub />
                        </a>
                        <Link to = '/Registro'>
                            <MdOutlineAccountCircle />
                        </Link>
                        </div>
                    </div>

                    <div className="pie-col">
                        <h3>Explorar</h3>
                        <ul>
                            <li>
                                <Link to = '/'> 
                                    <FaToriiGate /> 
                                    Japón en una Mirada 
                                </Link>
                            </li>
                            <li>
                                <Link to = '/Estaciones'>
                                    <FaCloudSun /> 
                                    Las Cuatro Estaciones
                                </Link>    
                            </li>
                        </ul>
                    </div>

                    <div className="pie-col">
                        <h3>Descubre</h3>
                        <ul>
                            <li>
                                <Link to = '/Gastronomia'>
                                    <FaUtensils /> 
                                    Gastronomía
                                </Link>
                            </li>
                            <li>
                                <Link to = '/Galeria'>
                                    <FaImages /> 
                                    Galería
                                </Link>
                            </li>
                            <li>
                                <Link to = '/Viajar'>
                                    <FaPlane /> 
                                    Antes de viajar
                                </Link>
                            </li>
                            <li>
                                <Link to="/Vuelo">
                                    <FaCalendar /> 
                                    Reservar vuelo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="pie-col">
                        <h3>Datos rápidos</h3>
                        <ul>
                            
                            <li> 
                                <FaToriiGate /> 
                                Capital: Tokio
                            </li>
                            
                            <li> 
                                <FaYenSign /> 
                                Moneda: Yen [ ¥ ]
                            </li>
                            
                            <li> 
                                <FaLanguage /> 
                                Idioma: Japonés
                            </li>
                        
                        </ul>
                    </div>
                </div>
                <div className="pie-abajo">
                    <span>Creado x Isam Mejias</span>
                    <span>Desarrollado Solo y Para una Recomendación</span> 
                </div>
            </div>
        </footer>
    )
}

export default Footer