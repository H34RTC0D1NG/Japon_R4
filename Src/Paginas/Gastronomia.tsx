import CardGastronomica from "../Componentes/Moleculas/CardGastronomica"
import { FaUtensils } from 'react-icons/fa'
import '../Css/Paginas/Gastronomia.css'

function Gastronomia() {
    return (
        <section id = 'gastronomia'>
            <div className = 'wrap'>

                <div className = 'encabezado'>
                    <p className = 'etiqueta'>
                        <FaUtensils />
                        Del Mostrador a la Mesa
                    </p>
                    <h2 className = 'titulo-gastronomia'>
                        Gastronomia
                    </h2>
                    <p className = 'suave'><strong><em>
                        La cocina japonesa se construye sobre el respeto al ingrediente: Temporada,
                        Textura y Presentación es como masterchef pero sin Ego, aqui importan tanto
                        el sabor. Del Sushi de mostrador al Ramen humeante de un local de barrio,
                        comer en Japón es tambien una forma de conocer el País.
                    </em></strong></p>   
                </div>

                <div className = 'contain row g-4'>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=16i63qXwlrI9XCwx1aV00s8ZRroiwpJkV&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Sushi Enrollado Corte Fino'
                            Titulo = 'Maki Rolls'
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=1BQZeJMVq2-LylvSf8wu5N9YnI8JwbucC&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Caldo Tonkatsu, Fideos al Huevo'
                            Titulo = 'Ramen'
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=1z5OSmMCpVLjH8cQ1TZGueYVdWm9xs5Ev&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Arroz Avinagrado, Corte a Mano'
                            Titulo = 'Nigiri De Salmon'
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=1hktEuK5Ns3cpL_SY8VOZyo8nA0iLnWTP&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Espeso y Suave'
                            Titulo = 'Curry Japonés'
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=1SqZ4b0VBI2iOWHudfFXm3t8H4K-Oqban&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Fritura Ligera, Camarón Crujiente'
                            Titulo = 'Tempura'
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=1eKLRWrSsqBKKb9mpGKApblVLrOcCSaAT&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Cerdo Empanizado, Salsa Espesa'
                            Titulo = 'Tonkatsu'
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=1IL0i_Rk-3k4R_IYa_7hvD4c5ZPIoY1Fz&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Pollo a las Brasas, en Brocheta'
                            Titulo = 'Yakitori'
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=1eHiOmrMd11tPKwYdpkH8t4HszXmDwRiU&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Empanadillas Selladas a la Plancha'
                            Titulo = 'Gyoza'
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-4'>
                        <CardGastronomica 
                            Enlace = 'https://drive.google.com/thumbnail?id=16i63qXwlrI9XCwx1aV00s8ZRroiwpJkV&sz=w1000'
                            Imagen = 'No Encontrada'
                            DesCrp = 'Bolas de Arroz en Alga Nori'
                            Titulo = 'Onigiri'
                        />
                    </div>
                </div>
            </div> 
        </section>
    )
} export default Gastronomia