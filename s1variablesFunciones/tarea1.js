// Las funciones son bloques de código que solucionan un problema específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.
// La declaración de una función declarativa está constituida por las siguientes partes:
// •	La palabra reservada function.
// •	El nombre de la función: el cual será guardado como referencia en memoria.
// •	Los parámetros: están envueltas en paréntesis (), son variables propias de la función y deberán utilizarse en el contenido. Hacen referencia a los argumentos en la invocación.
// •	El contenido: está envuelto por llaves {}, contendrá las líneas de código correspondientes a la lógica del problema.
// •	El valor retornado: es un único valor que devuelve la función cuando es llamada. Se lo especifica por la palabra reservada return. Si no existe, la función devolverá un valor undefined por defecto.
// Declaración
// function suma (a,b){
//     return a + b
// }
// La invocación o llamada es la manera que utilizamos las funciones para utilizar el valor de retorno (return) según ciertos argumentos. La invocación de la función declarativa está constituido por dos partes:
// •	El nombre de la función especificada en la declaración.
// •	Los argumentos, son los valores para cada uno de parámetros de la función envueltos entre paréntesis.
// Invocación
// suma(2,3)

let valor1 = 5
let valor2 = 5

function suma (a = 0 , b = 0) {
    return a+b;
}

console.log(`La suma de ${valor1} + ${valor2} es = ${suma(valor1,valor2)}`);

function resta (a = 0 , b = 0) {
    return a-b;
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