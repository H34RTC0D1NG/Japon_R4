type SelectorProp = {

    Nombre : string;
    Valor : string;
    Change : (Valor : string) => void;

}

function SelectorLlegada({ Nombre, Valor, Change } : SelectorProp) {
    return (

        <select className = 'form_selector' name = {Nombre} value = {Valor} onChange = {(e) => Change(e.target.value)}>
            <option value = ''> Seleccione Una Opcion De Llegada </option>
            <option value = 'Valparaiso'> Osaka </option>
            <option value = 'Mendoza'> Tokio </option>
            <option value = 'Santiago'> Hiroshima </option>
        </select>

    )
} export default SelectorLlegada