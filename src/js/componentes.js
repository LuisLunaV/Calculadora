import { division, limpiar, multiplicacion, reset, resta, suma } from "./operaciones";

const contButtons = document.querySelector('#cont-buttons'),
      cajaDeTexto = document.querySelector('input');
let   acumulador  = [],
      operacion;

//Creamos un evento click en el elemento div que contienen los botones.
contButtons.addEventListener('click',( event )=>{
    
    const element      = event.target.localName,
          boton        = event.target.innerText;

 //Validamos si hemos dado click sobre un elemento button.
    if( element === 'button'){
//Reseteamos los valores de la calculadora si hemos dado click en el boton 'C'.
        if(boton === 'C'){
            cajaDeTexto.value='';
            acumulador=[];
        }

//Los botones tienen que tener valores numericos para visualisarlos en la pantalla de la calculadora.
    (boton <= 9 || boton === '.')?
    cajaDeTexto.value += boton
    :'';

//Seleccionamos el simbolo de la operacion que vamos a realizar y asignamos el primervalor a la variable 'valorUno'.
if(cajaDeTexto.value >= 0){
    switch(boton){

    case '+':
        acumulador.push(parseFloat( cajaDeTexto.value ));
        operacion = '+';
        limpiar();
    break;

    case '-':
        acumulador.push(parseFloat( cajaDeTexto.value ));
        operacion = '-';
        limpiar();
    break;

    case 'x':
        acumulador.push(parseFloat( cajaDeTexto.value ));
        operacion = 'x';
        limpiar();
    break;

    case '/':
        acumulador.push(parseFloat( cajaDeTexto.value ));
        operacion = '/';
        limpiar();
    break;

//Asignamos el segundo valor a la variable 'valorDos'.
    case '=':
        (acumulador.length === 0)?'':
        acumulador.push(parseFloat( cajaDeTexto.value )),
        resolver(),

        acumulador=[]; //Limpiamos el arreglo para que solo almacene el valor del resultado.
    break;

    }
}

    }
})

//Enviamos las variables con sus valores para resolver la operacion.
const resolver=()=>{

    switch(operacion){

        case '+':
            limpiar();
            cajaDeTexto.value = suma( acumulador );
        break;

        case '-':
            limpiar();
            cajaDeTexto.value = resta( acumulador );
        
        break;
    
        case 'x':
            limpiar();
            cajaDeTexto.value = multiplicacion( acumulador );
        break;
    
        case '/':
            limpiar();
            cajaDeTexto.value = division( acumulador );
        break;
    } 
}

const init=()=>{}

export{ 
    init,
    cajaDeTexto
};