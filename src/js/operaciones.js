import { cajaDeTexto } from "./componentes.js";

let respuesta;

//Funcioens con los algoritmos para realizar la operacion seleccionada.
const suma = ( num1 , num2 ) =>{
return respuesta = parseFloat( num1 ) + parseFloat( num2 );
};

const resta = ( num1 , num2 ) =>{
return respuesta = parseFloat( num1 ) - parseFloat( num2 );
};

const multiplicacion = ( num1 , num2 ) =>{
return respuesta = parseFloat( num1 ) * parseFloat( num2 );
};

const division = ( num1 , num2 ) =>{
return respuesta = parseFloat( num1 ) / parseFloat( num2 );
};

//Elimina los valores visibles dentro de la caja de texto.
const limpiar =()=>{
cajaDeTexto.value = '';
}


export{
    suma,
    resta,
    multiplicacion,
    division,
    limpiar,
}