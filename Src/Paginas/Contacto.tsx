import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import Desplazate from '../Componentes/Atomos/Animaciones/Desplazate'
import CardContacto from '../Componentes/Moleculas/CardContacto'
import Formulario from '../Componentes/Organismos/Formulario'
import { MdContacts } from 'react-icons/md'
import '../Css/Paginas/Contacto.css' 

function Contacto() {
    return (

        <section className = 'contacto'>
            <div className = 'wrap contenido_grid'>
                <div className = 'contenido'>
                    <h1 className = 'titulo_1' style = {{ display: 'inline-block', marginRight: '0.25em'  }}>
                        <span className = 'titulo_icono'> <MdContacts /> </span> Contacto
                    </h1>

                    <p className = 'sub_1'>
                        Contactame enviandome un mensaje o correo diciendo que mi pagina te gusto o mi resultado funciono.
                    </p>

                    <div className = 'tarjeta_contacto'>
                        <CardContacto 
                            Icono = {FaEnvelope}
                            Titulo = 'Correo'
                            Detalle = 'isa.mejias@duocuc.cl'
                        />
                        <CardContacto 
                            Icono = {FaPhone}
                            Titulo = 'Telefono'
                            Detalle = 'Ni En Tu Sueños'
                        />
                        <CardContacto 
                            Icono = {FaMapMarkerAlt}
                            Titulo = 'Ubicación'
                            Detalle = 'Santiago, Chile - Huechuraba'
                        />
                        <CardContacto 
                            Icono = {FaClock}
                            Titulo = 'Horario'
                            Detalle = 'Lunes a Sabado'
                        />
                    </div>
                </div>
                <div className = 'contacto_marco'>
                    <Formulario />
                    <span className = 'contacto_etiqueta'>
                        Escribeme y Te Respondo Pronto
                    </span>
                </div>
            </div>
            <Desplazate />
        </section>
        
    )
} export default Contacto