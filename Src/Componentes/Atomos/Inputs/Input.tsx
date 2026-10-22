type InputProp = {

    Tipo : string;
    Nombre : string;
    Valor : string;
    Change : (Valor : string) => void;

}

function Input({ Tipo, Nombre, Valor, Change } : InputProp) {
    return (
        <input 

            className = 'form-control'
            name = {Nombre}
            type = {Tipo} 

            value = {Valor}

            onChange = {(e) => Change(e.target.value)}
        
        />
    )
} export default Input