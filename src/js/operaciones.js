import { cajaDeTexto } from "./componentes.js";

let respuesta;

//Funcioens con los algoritmos para realizar la operacion seleccionada.
const suma = ( acumulador ) =>{
    
return acumulador.reduce((acc, num)=> acc + num );

};

const resta = ( acumulador ) =>{
    
return acumulador.reduce(( acc,num )=>  acc - num);

};

const multiplicacion = ( acumulador ) =>{

return acumulador.reduce(( acc,num )=>  acc * num);
   
};

const division = ( acumulador ) =>{

    return (acumulador[1] != 0)?acumulador.reduce(( acc,num )=>  acc / num):'';

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