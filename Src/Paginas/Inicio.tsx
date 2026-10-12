import Banner from '../Componentes/Moleculas/Banner'
import { Img } from '../Datos'

function Inicio() {
    return (

        <div className = 'Caja'>
            <Banner
                Titulo = 'Japon'
                Imagen = {Img.Monte}
            />
        </div>

    )
} export default Inicio