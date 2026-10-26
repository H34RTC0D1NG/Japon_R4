import Desplazate from '../Componentes/Atomos/Animaciones/Desplazate'
import CardVuelo from '../Componentes/Moleculas/CardVuelo'

function Vuelo() {
    return (
        <section id = 'vuelo'>
            <div className = 'vuelo'>
                <div className = 'wrap contenido'>
                    <h1 className = 'titulo'>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Vuelos</span>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>a</span>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Japón</span>
                    </h1>

                    <p className = 'parrafo'>
                         
                    </p>
            
                </div>
                <Desplazate />
            </div>

            <div className = 'vuelos'>
                <div className = 'cartas'>
                    <CardVuelo 
                        ID = {1}
                        Titulo = 'Santiago a Osaka'
                        Descripcion = 'Viaja en un vuelo de 8 Horas hacia un nuevo destino'
                        Precio = {1200000}
                        Error = 'Imagen No Encontrada'
                        Imagen = '../../Public/Fondos/Fondo_18.jpg'
                    />
                </div>
            </div>

        </section>
    )
} export default Vuelo