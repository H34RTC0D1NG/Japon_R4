import { Link } from 'react-router-dom'
import '../../../Css/Botones/Btn.css'

interface BtnProp { 

    Texto : string;
    Ruta  : string;

} function Btn({ Texto, Ruta } : BtnProp) {
    return (
    
        <Link to = {Ruta} className = 'btn btn-primary'>
            {Texto}
        </Link>
    
    )
} export default Btn