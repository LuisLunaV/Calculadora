import { cajaDeTexto } from "./componentes.js";

//Funcioens con los algoritmos para realizar la operacion seleccionada.
const suma = ( acumulador ) =>{

return (acumulador.length != 0)? acumulador.reduce(( acc, num ) => acc + num ):'';
   

};

const resta = ( acumulador ) =>{
    
return (acumulador.length != 0)? acumulador.reduce(( acc,num ) =>  acc - num):'';

};

const multiplicacion = ( acumulador ) =>{

return (acumulador.length != 0)? acumulador.reduce(( acc,num ) =>  acc * num):0;
   
};

const division = ( acumulador ) =>{

return (acumulador[1] != 0)? acumulador.reduce(( acc,num ) =>  acc / num):'';

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