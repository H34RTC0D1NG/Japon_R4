import '../../Css/Secciones/Seccion_0.css'
import { Link } from 'react-router-dom'
import { 
    FaToriiGate, FaCloudSun, FaUtensils, FaImages, FaPlane,
    FaCalendar, FaYenSign, FaLanguage,
    FaInstagram, FaYoutube, FaGithub,
} from 'react-icons/fa'

function Footer() {
    return (
        <footer className = 'wrap'>
            <div className = 'pie-grid'>
                <div className = 'pie-marca'>
                    <p className = 'p'>
                        <FaToriiGate />
                        <em> Japón </em>
                    </p>

                    <p className = 'pie-texto'>
                        Esto es un proyecto de Fullstack II en el que tenemos que migrar el el trabajo de la evaluación 1 que fue en
                        HTML a React o como me gusta llamarlo R4, tiene que llevar Complementos, Pruebas Unitarias, Css Intermedio,
                        Manipulaciòn de paginas mediante Routes, tambien tiene que agrgar lo que no se agrego en la 1º Evaluación y 
                        tampoco tan compleja, con el Profesor Cristian Vega de la sección 001D.
                    </p>

                    <div className = 'redes'>
                        <a href = 'https://www.instagram.com/h34rtf1r3' target = '_blank'>
                            <FaInstagram />
                        </a>
                        
                        <a href = 'https://www.youtube.com/@thehearthfirevevo' target = '_blank'>
                            <FaYoutube />
                        </a>

                        <a href = 'https://github.com/H34RTC0D1NG' target = '_blank'>
                            <FaGithub />
                        </a>
                    </div>
                </div>

                <div className = 'pie-col'>
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

                <div className = 'pie-col'>
                    <h3>Descubre</h3>

                    <ul>
                        <li>
                            <Link to = '/Gastronomia'>
                                <FaUtensils />
                                Gastronomia
                            </Link>
                        </li>

                        <li>
                            <Link to = '/Galeria'>
                                <FaImages />
                                Galeria
                            </Link>
                        </li>

                        <li>
                            <Link to = '/Viajes'>
                                <FaPlane />
                                Antes De Viajar
                            </Link>
                        </li>

                        <li>
                            <Link to = '/Viajar'>
                            <FaCalendar />
                                Reservar Vuelo        
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className = 'pie-col'>
                    <h3>Datos Rapidos</h3>
                    <ul>
                        
                        <li>
                            <FaToriiGate />
                            Capital : Tokio
                        </li>

                        <li>
                            <FaYenSign />
                            Moneda : Yen [¥]
                        </li>

                        <li>
                            <FaLanguage />
                            Idioma : Japonés
                        </li>
                    </ul>
                </div>

                <div className = 'pie-abajo'>
                    <span>Creado x Isam Mejias</span>
                    <span>Desarrollado Solo y Para una Recomendaciòn</span>
                </div>

            </div>
        </footer>
    )
} export default Footer