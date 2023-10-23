/*
1.- Se requiere generar las iniciales de una persona usando su nombre completo.
        -> Israel Salinas Martínez
        <- I. S. M. 
*/

function inicialesNombre (nombreCompleto){
    let arrayNombres = nombreCompleto.split(" ")
    let iniciales = "";
    for (let i = 0; i < arrayNombres.length ; i++){
        iniciales += arrayNombres[i].charAt(0) + ". "
    }
    return iniciales;
}

console.log(inicialesNombre("Rodolfo Ramirez Morales"))

// 2.- Teniendo en cuenta el siguiente texto: "Si esperas a estar listo, esperarás toda la vida"
//         Queremos obtener una nueva frase que contenga sólo las palabras en posición non
//         -> "Esperas estar esperarás la "

function fraseNones (frase = "Si esperas a estar listo, esperarás toda la vida"){
    let arrayFrase = frase.split(" ")
    let palabrasNon = []

    for (let i = 0 ; i < arrayFrase.length ; i++){
        if (arrayFrase[i] %2 !== 0){
            palabrasNon += arrayFrase[i] + " "
        }
    }
    return palabrasNon
}

console.log(fraseNones("Si esperas a estar listo, esperarás toda la vida"))

// numero%2 !== 0






//     3.- Se requiere solicitar el nombre, edad, y correo de una persona, y crear una lista de personas