// Importando Componentes o Paginas

import Gastronomia from '../Componentes/Atomos/Botones/Gastronomia'
import Desplazate from '../Componentes/Atomos/Animaciones/Desplazate'
import Explorar from '../Componentes/Atomos/Botones/Explorar'
import Cerezo from '../Componentes/Atomos/Animaciones/Cerezo'
import LastForm from '../Componentes/Organismos/LastForm'

// Importando CSS

import '../Css/Paginas/Inicio.css'

function Inicio() {
    return (
        <section>
            <div className = 'inicio'>
                <span className = 'kanji'>日本</span>
                <Cerezo />
                <div className = 'wrap contenido'>
                        
                    <p className = 'etiqueta'> El Pais De Los Sueños </p>

                    <h1 className = 'titulo'>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Tokio</span>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>/</span>
                        <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Japón</span>
                    </h1>

                    <p className = 'sub'>
                        La ciudad que cambia la perspectiva de mucha gente con Su Cultura, Su Comida, Su Arte, 
                        Sus Historias, Sus Paisajes, Su Gente y muchas más como los diferentes lados de Japón.
                    </p>
            
                    <div className = 'acciones'>
                        <Explorar />
                        <Gastronomia />
                    </div>
                </div>
                <Desplazate />
            </div>

            <div className = 'inicio_2'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className = 'formulario_de_aceptacion'>
                    <LastForm />
                </div>
            </div>

        </section>
    )
} export default Inicio