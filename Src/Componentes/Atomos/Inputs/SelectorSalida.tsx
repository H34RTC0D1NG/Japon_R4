type SelectorProp = {

    Nombre : string;
    Valor : string;
    Change : (Valor : string) => void;

}

function SelectorSalida({ Nombre, Valor, Change } : SelectorProp) {
    return (

        <select className = 'form_selector' name = {Nombre} value = {Valor} onChange = {(e) => Change(e.target.value)}>
            <option value = ''> Seleccione Una Opcion De Salida </option>
            <option value = 'Valparaiso'> Valparaiso </option>
            <option value = 'Mendoza'> Mendoza </option>
            <option value = 'Santiago'> Santiago </option>
            <option value = 'Los Lagos'> Los Lagos </option>
            <option value = 'New York'> New York </option>
            <option value = 'Andorra'> Andorra </option>
            <option value = 'Madrid'> Madrid </option>
        </select>

    )
} export default SelectorSalida