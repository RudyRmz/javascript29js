// function createEvenOddWords(word){

// }

// Haz una funcion que va a recibir una palabra como parametro
// esta palabra se tiene que iterar por cada una de sus letras
// tenemos que obtener de alguna manera las letras en pocision de numeros non y las letras que estan en pocision par
// tras iterar la palabra y obtener las letras en pocisiones non y par guardarlas en una variable para cada una respectivamente
// despues de guardar las letras pares y nones en cada una de las variables correspondientes retornar un enunciado que nos diga 
// "La palabra con nones oddWord y al palabra con pares es evenWord"



// function createEvenOddWords(word){
//     let oddWord = ""
//     let evenWord = ""
//     let chartCount = word.length

//     for (let i = 0; i < chartCount; i++) {
//         if (i % 2 == 0) {
//             evenWord += word[i]
//         } else {
//             oddWord += word[i]
//         }
//     }
//     return `La palabra con impares es ${oddWord} y al palabra con pares es ${evenWord}`
// }

// console.log(createEvenOddWords("Israel"))

function createWords (text){
    let chartCount = text.length;
    let oddWord = ""
    let evenWord = ""

    for (let i = 0 ; i <= chartCount; i++){
        let currentChart = text.charAt(i);
        i % 2 === 0 ? evenWord += currentChart : oddWord += currentChart;
    }

    console.log(`Las letras pares son ${evenWord}`)
    console.log(`Las letras inpares son ${oddWord}`)
}

createWords("gato");

// function textLimit (text, number){
//     let result = ""
//     if (number > text.length){
//         console.log("El numero es mayor, indicar un numero menor")
//     } else{
//         for (let i = 0 ; i <= number; i++){
//             return result += i; 
//         }
//     }
    
// }

// console.log(textLimit("hola", 3))

function getSubstring (txt, finalIndex){
    let result = ""
    txt.length > finalIndex ? result = txt.substring(0, finalIndex) : result = "El texto es más pequeño que el número indicado"
    return result;
}

let substringTest = getSubstring("Popocatepetl", 4);

console.log(substringTest);

function adultCounter(personsArray){
    let adults = 0;
    for (let i = 0; i<personsArray.length; i++){
        let age = personsArray[i].age;
        if (age > 18){
            adults += 1;
        }
    }
    return adults;
}


