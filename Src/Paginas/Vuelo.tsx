import Desplazate from '../Componentes/Atomos/Animaciones/Desplazate'
import VueloForm from '../Componentes/Organismos/VueloForm'
import CardVuelo from '../Componentes/Moleculas/CardVuelo'
import '../Css/Paginas/Vuelo.css'

function Vuelo() {
    return (
        <section id = 'vuelo'>
            <div className = 'vuelo'>
                <div className = 'wrap contenido'>
                    <p className = 'etiqueta'> Un Nuevo Destino a Descubrir </p>
                    <h1 className = 'titulo'>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Vuelos</span>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>a</span>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Japón</span>
                    </h1>

                    <p className = 'parrafo'>
                         ¡Viajar a Japón es una experiencia inolvidable, y planificar tus vuelos con tiempo marca completamente la diferencia! 
                         Para conseguir la mejor tarifa y rutas cómodas, te sugiero buscar vuelos con al menos tres a seis meses de anticipación, 
                         priorizando aerolíneas con excelente servicio a bordo para que las horas de escala se pasen volando. Si buscas comodidad, 
                         las opciones con una sola escala a través de grandes centros de conexión suelen ser la mejor combinación entre precio y descanso. 
                         Además, te recomiendo considerar llegar por Tokio (ya sea al Aeropuerto Internacional de Haneda o Narita) para empezar explorando 
                         la metrópoli, y si tu itinerario lo permite, evaluar regresar desde Osaka para aprovechar al máximo tu tiempo sin tener que desandarte. 
                         ¡Un buen vuelo es solo el comienzo de una aventura increíble en la tierra del sol naciente!
                    </p>
            
                </div>
                <Desplazate />
            </div>

            <div className = 'vuelos'>
                <div className = 'cartas'>
                    <CardVuelo 
                        ID = {1}
                        Titulo = 'Santiago a Osaka'
                        Descripcion = 'Horas Aprox : 7 - Escalable'
                        Precio = {1200000}
                        Error = 'Imagen No Encontrada'
                        Imagen = '../../Public/Fondos/Fondo_23.jpg'
                    />
                    <CardVuelo 
                        ID = {1}
                        Titulo = 'Santiago a Hiroshima'
                        Descripcion = 'Horas Aprox : 9'
                        Precio = {7200000}
                        Error = 'Imagen No Encontrada'
                        Imagen = '../../Public/Fondos/Fondo_18.jpg'
                    />
                    <CardVuelo 
                        ID = {1}
                        Titulo = 'Santiago a Tokio'
                        Descripcion = 'Horas Aprox : 8.5'
                        Precio = {3200000}
                        Error = 'Imagen No Encontrada'
                        Imagen = '../../Public/Fondos/Fondo_19.jpg'
                    />
                    <CardVuelo 
                        ID = {1}
                        Titulo = 'Madrid a Osaka'
                        Descripcion = 'Horas Aprox : 4'
                        Precio = {6200000}
                        Error = 'Imagen No Encontrada'
                        Imagen = '../../Public/Fondos/Fondo_23.jpg'
                    />
                    <CardVuelo 
                        ID = {1}
                        Titulo = 'Andorra a Tokio'
                        Descripcion = 'Horas Aprox : 3'
                        Precio = {4200000}
                        Error = 'Imagen No Encontrada'
                        Imagen = '../../Public/Fondos/Fondo_19.jpg'
                    />
                    <CardVuelo 
                        ID = {1}
                        Titulo = 'New York a Kioto'
                        Descripcion = 'Horas Aprox : 8.5 Aprox'
                        Precio = {3850000}
                        Error = 'Imagen No Encontrada'
                        Imagen = '../../Public/Fondos/Fondo_22.jpeg'
                    />
                </div>
            </div>
            <div className = 'apartado'>
                <div className = 'vuelo_form'>
                    <VueloForm />
                    <span className = 'vuelo_etiqueta'>
                        Reserva Un Vuelo Ahora
                    </span>
                </div>
            </div>
        </section>
    )
} export default Vuelo