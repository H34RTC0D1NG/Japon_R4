import '../../Css/Cards/CardGastronomica.css'
import Boton from "../Atomos/Botones/Boton"

interface CardProps {

    Enlace : string;
    Imagen : string,
    DesCrp : string;
    Titulo : string;

}

function CardGastronomica({ Enlace, Imagen, DesCrp, Titulo } : CardProps) {
    return (
        
        <div className = 'caja container'>
            <div className = 'card_container'>
                <div className = 'card_article'>

                    <img 
                        style = {{ height : '340px', borderRadius : '4px' }}
                        className = 'card_img'
                        src = {Enlace} 
                        alt = {Imagen} 
                    />
                    
                    <div className = 'card_data'>
                        <span className = 'card_description'> {DesCrp} </span>
                        <h2 className = 'card_title'><strong>
                            {Titulo}
                        </strong></h2>
                        <div className = 'mt-auto'>
                            <Boton />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
} export default CardGastronomica