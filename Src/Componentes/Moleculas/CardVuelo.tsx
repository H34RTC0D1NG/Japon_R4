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
        
        <div className = 'caja container'>
            <div className = 'card_container'>
                <div className = 'card_article'>
                    <img
                        
                        style = {{ width : '20rem', height : '20rem' }} 
                        className = 'card_img'
                        src = {Imagen} 
                        alt = {Error} 
                    />
                </div>

                <div className = 'card_data'>
                
                    <h1 className = 'card_titulo'> 
                        {Titulo} 
                    </h1>
                
                    <p className = 'card_descripcion'> 
                        {Descripcion} 
                    </p>
                
                    <p className = 'card_precio'> 
                        {Precio} 
                    </p>
                
                </div>

                <div className = 'mt-auto'>
                    <Btn ID = {ID} />
                </div>

            </div>  
        </div>

    )
} export default CardVuelo