import { Link } from "react-router-dom"

function Boton() {
    return (
        <button className="btn btn-primary" style = {{ width : '100%' }}>
            <Link to = '/' style = {{ textDecoration : 'none' }}>
                Más Detalles
            </Link>
        </button>
    )
} export default Boton