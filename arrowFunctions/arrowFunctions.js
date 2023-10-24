const addTwoNumbers = (number1, number2) => number1 + number2; //return implicito cuando solo retorna un resultado

console.log(addTwoNumbers(4,6))

// Quiero una funcion que tome un string, lo revierta, y despues extraiga un substring con los 3 primeros caracteres, y los convierta a mayusculas
// split combierte un string en un Array
// join junta los elementos del string y lo devuelce como string
// substring toma un segmento del string tomando dos parametros, el primero desde que indice iniciara y el segundo parametro de hasta donnde tomara el segmento
// toUpperCase convierte todas las letras del string en mayusculas

const stringTransform = (txt) => 
    txt.split("").reverse().join("").substring(0,3).toUpperCase();

console.log(stringTransform("Rodolfo"))

const getTriangleArea = (base, height) => base * height / 2;
console.log(getTriangleArea(10,5))

const checkIfIsEven = (number) => number %2 === 0;

console.log(checkIfIsEven(3))

let koders = ["Angela", "Armando","Oscar","Rodolfo", "Yair"]

const getRandomKoder = (kodersArray) => {
    let number = Math.floor(Math.random() * kodersArray.length);
    return kodersArray[number];
}

console.log(getRandomKoder(koders));

// function getRandomKoder(kodersArray) {
//     let number = Math.floor(Math.random() * kodersArray.length);
//     let koder = kodersArray[number];
//     return koder;
// }

// console.log(getRandomKoder(koders));


setTimeout(()=>{
    console.log("koders")
}, //callback
5000
)