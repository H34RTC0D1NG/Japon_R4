import Input from "../Atomos/Inputs/Input"

type CampoProp = {

    Etiqueta : string;
    Tipo     : string;
    Nombre   : string;
    Valor    : string;
    Change   : (Valor : string) => void;

}

function CampoForm({ Etiqueta, Tipo, Nombre, Valor, Change } : CampoProp) {
    return (
        <div className = 'mb-3'>
            <label className = 'form-label'>
                {Etiqueta}
            </label>

            <Input Tipo = {Tipo} Nombre = {Nombre} Valor = {Valor} Change = {Change} />

        </div>
    )
} export default CampoForm