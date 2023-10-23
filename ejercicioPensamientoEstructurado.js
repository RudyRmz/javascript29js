let colores = ["amarillo", "azul", "rojo", "blanco", "verde"]
let colorRandom = Math.floor(Math.random()*colores.length)
let resultadoColorRand = colores[colorRandom]

let numeros = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
let numerosRandom = Math.floor(Math.random()*numeros.length)
let resultadoNumerosRand = numeros[numerosRandom]

console.log(resultadoColorRand);
console.log(resultadoNumerosRand);

function tombola (color = resultadoColorRand, numero = resultadoNumerosRand){
    if (color === "rojo" || numero === 7){
        return `Sacaste el color ${resultadoColorRand} y el numero ${resultadoNumerosRand}... Eres ganador del primer premio, felicidades!`
    }else if (color === "verde" || numero%2 !== 0){
        return `Sacaste el color ${resultadoColorRand} y el numero ${resultadoNumerosRand}... Eres ganador del segundo premio, felicidades!`
    }else{
        return `Sacaste el color ${resultadoColorRand} y el numero ${resultadoNumerosRand}... Lo sentimos, no resultaste ganador, vuelve a intentarlo.`
    }
}

// Eres ganador del segundo premio, felicidades! Lo sentimos, no resultaste ganador

console.log(tombola());

const PELOTAS_COLORES_NUMEROS = [
    {color:"azul" , numero: 1},
    {color:"verde" , numero: 2},
    {color:"amarillo" , numero: 3},
    {color:"negro" , numero: 5},
    {color:"rojo" , numero: 7},
    {color:"azul" , numero: 11},
    {color:"verde" , numero: 13},
    {color:"amarillo" , numero: 17},
    {color:"negro" , numero: 19},
    {color:"rojo" , numero: 23},
]

let pelotasRandom = Math.floor(Math.random()*PELOTAS_COLORES_NUMEROS.length)
let resultadoPelotasRand = PELOTAS_COLORES_NUMEROS[pelotasRandom]

console.log(resultadoPelotasRand);

function tombolaPelotas (pelota = resultadoPelotasRand){
    if (pelota.color === "rojo" && pelota.numero === 7){
        return `Sacaste la pelota con el color ${pelota.color} y el numero ${pelota.numero}... Eres ganador del primer premio, felicidades!`
    }else if (pelota.color === "verde" && pelota.numero%2 == 0){
        return `Sacaste la pelota con el color ${pelota.color} y el numero ${pelota.numero}... Eres ganador del segundo premio, felicidades!`
    }else{
        return `Sacaste la pelota con el color ${pelota.color} y el numero ${pelota.numero}... Lo sentimos, no resultaste ganador, vuelve a intentarlo.`
    }
}

console.log(tombolaPelotas())