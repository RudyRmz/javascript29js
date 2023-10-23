/*
1.- Entregar el promedio general del score de los koders
2.- Obtener una nueva lista que contenga únicamente aquellos koders cuyo score sea mayor que 9
3.- Saber cuantos koders hay de alguna generación específica:
1 -> no hay koders de esta generación
 9 -> hay 1 koder de la generación 9
12 -> hay 2 koders de la generación 12
*/

let koders = [
    {
      name: "Said Barrera",
      generation: 12,
      score: 9.2,
    },
    {
      name: "Helena Fuentes",
      generation: 8,
      score: 8.7,
    },
    {
      name: "Gerardo Cabrera",
      generation: 12,
      score: 9.9,
    },
    {
      name: "Brenda Guerrero",
      generation: 8,
      score: 8.4,
    },
    {
      name: "Alejandro Fuentes",
      generation: 7,
      score: 8.6,
    },
    {
      name: "Sandra Tellez",
      generation: 9,
      score: 9.9,
    },
];

let cantidadElementos = koders.length;

function promedioAlumnos (koders){
    let sumaScore = 0;
    
    for (let i= 0; i<cantidadElementos; i++){
        sumaScore += koders[i].score
    }
    let resultado = sumaScore / cantidadElementos
    let mensaje = `El promedio de score de todos los alumnos es: ${resultado}`
    return mensaje
}

let resultadoPromedio = promedioAlumnos(koders);
console.log(resultadoPromedio);


function mayorNuevo (koders){
    let nombres = [];
    for(let i = 0; i < cantidadElementos; i++){
        if(koders[i].score > 9){
            nombres.push(koders[i].name) 
        }
    }
    let mensaje = `Estos son los alumnos con un score mayor a 9: ${nombres}`
    return mensaje
}

let alumnosNueve = mayorNuevo(koders);

console.log(alumnosNueve);

function alumnosGeneracion (alumnos, generación){
    let cantidadAlumnos = []
    let numeroAlumnos;
    let numeroGeneracion = generación;
    let mensaje = "No hay koders de esta generación"; 

    for (let i = 0 ; i < cantidadElementos; i++){
        if (alumnos[i].generation === generación){
            cantidadAlumnos.push(alumnos[i].name)
            numeroAlumnos = cantidadAlumnos.length;
            mensaje = `Hay ${numeroAlumnos} koder de la generación ${numeroGeneracion}`;
        }
    }
    return mensaje
}

console.log(alumnosGeneracion(koders, 8));
