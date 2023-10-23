
let valor1 = 5
let valor2 = 5

function suma (a = 0 , b = 0) {
    let resultado =  a + b 
    return resultado
}

console.log(`La suma de ${valor1} + ${valor2} es = ${suma(valor1,valor2)}`);

function resta (a = 0 , b = 0) {
    let resultado = a - b
    return resultado
}

console.log(`La resta de ${valor1} - ${valor2} es = ${resta(valor1,valor2)}`);

function multiplicacion (a = 0 , b = 0) {
    return a*b;
}

console.log(`La multiplicación de ${valor1} x ${valor2} es = ${multiplicacion(valor1,valor2)}`);

function division (a = 0 , b = 0) {
    return a/b;
}

console.log(`La división de ${valor1} / ${valor2} es = ${division(valor1,valor2)}`);

function residuo (a = 0 , b = 0) {
    return a%b;
}

console.log(`El residuo de la división entre ${valor1} y ${valor2} es = ${residuo(valor1,valor2)}`);

function whoIsBigger(firstNumber, secondNumber){
    if (firstNumber > secondNumber){
        return `${firstNumber} es el mayor`
    } else if (firstNumber < secondNumber){
        return`${secondNumber} es el mayor`
    } else {
        return "ambos numeros son iguales"
    }
}

let resultadoBigger = whoIsBigger(3,3);

console.log(resultadoBigger);

// Se recibira un numero par
// la funcion debe hacer una operacion matematica para determinar si el numero recibido es par o inpar

function esPar (numero){
    if (numero%2 == 0){
        return true;
    } else if (numero%2 !== 0){
        return false
    } else {
        return "Operacion invalida"
    }
}

console.log(esPar());