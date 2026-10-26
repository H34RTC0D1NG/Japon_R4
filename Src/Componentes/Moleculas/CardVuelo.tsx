import Btn from '../Atomos/Botones/Btn'
import '../../Css/Cards/CardVuelo.css'

interface CardVueloProp {

    ID          : number;
    Titulo      : string;
    Descripcion : string;
    Precio      : number;
    Imagen      : string;
    Error       : string;

} 

function CardVuelo({ ID, Titulo, Descripcion, Precio, Imagen, Error } : CardVueloProp) {
    return (
        
        <div className = 'caja_vuelo container'>
            <div className = 'vuelo_container'>
                <div className = 'vuelo_article'>
                    <img
                        
                        style = {{ width : '20rem', height : '20rem' }} 
                        className = 'vuelo_img'
                        src = {Imagen} 
                        alt = {Error} 
                    />
                </div>

                <div className = 'vuelo_data'>
                
                    <h1 className = 'vuelo_titulo'> 
                        {Titulo} 
                    </h1>
                
                    <p className = 'vuelo_descripcion'> 
                        {Descripcion} 
                    </p>
                
                    <p className = 'vuelo_precio'> 
                        {Precio} 
                    </p>
                
                </div>

                <div className = 'vuelo_btn'>
                    <Btn Texto = 'Reservar Vuelo' Ruta = {`/Vuelo/${ID}`} />
                </div>

            </div>  
        </div>

    )
} export default CardVuelo