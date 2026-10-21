import Input from "../Atomos/Inputs/Input"

type CampoProp = {

    Etiqueta : string;
    Tipo     : string;
    Nombre   : string;

}

function CampoForm({ Etiqueta, Tipo, Nombre } : CampoProp) {
    return (
        <div className = 'mb-3'>
            <label className = 'form-label'>
                {Etiqueta}
            </label>

            <Input Tipo = {Tipo} Nombre = {Nombre} />

        </div>
    )
} export default CampoForm