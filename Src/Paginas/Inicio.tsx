// Importando Componentes o Paginas

import Gastronomia from '../Componentes/Atomos/Gastronomia'
import Desplazate from '../Componentes/Atomos/Desplazate'
import Explorar from '../Componentes/Atomos/Explorar'
import Cerezo from '../Componentes/Atomos/Cerezo'

// Importando CSS

import '../Css/Paginas/Inicio.css'

function Inicio() {
    return (
        <section className = 'inicio'>
            <span className = 'kanji'>日本</span>
            <Cerezo />
            <div className = 'wrap contenido'>
                    
                <p className = 'etiqueta'> El Pais De Las Maravillas </p>

                <h1 className = 'titulo'>
                    <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Tokio</span>
                    <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>/</span>
                    <span style = {{ display: 'inline-block', marginRight: '0.25em'  }}>Japón</span>
                </h1>

                <p className = 'sub'>
                    La ciudad que cambia la perspectiva de mucha gente con su cultura o dominio.
                </p>
        
                <div className = 'acciones'>
                    <Explorar />
                    <Gastronomia />
                </div>
            </div>
            <Desplazate />
        </section>
    )
} export default Inicio