type InputProp = {

    Tipo : string;
    Nombre : string;

}

function Input({ Tipo, Nombre } : InputProp) {
    return (
        <input 

            className = 'form-control'
            name = {Nombre}
            type = {Tipo} 
        
        />
    )
} export default Input