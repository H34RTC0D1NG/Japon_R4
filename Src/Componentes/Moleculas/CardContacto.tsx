import type { ComponentType } from "react";

interface ContactoProps {

    Icono : ComponentType;
    Titulo : string;
    Detalle : string;

} 

function CardContacto({ Icono, Titulo, Detalle } : ContactoProps) {
    return (
        <div className = 'tarjeta_contacto'>
            <span className = 'tarjeta_icono'> <Icono /> </span>
            <strong> {Titulo} </strong>
            <small> {Detalle} </small>
        </div>
    )
} export default CardContacto