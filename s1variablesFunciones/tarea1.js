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