import { Link } from 'react-router-dom'

interface BtnProp { ID : number }

function Btn({ ID } : BtnProp) {
    return (
    
        <Link to = {`/Vuelo/${ID}`} className = 'btn btn-primary'>
            Ver Vuelo
        </Link>
    
    )
} export default Btn