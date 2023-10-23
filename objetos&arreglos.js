let perro = {
    nombre : "Milaneso",
    color : "negro",
    edad : 10 , 
    raza : "Callerman",
    ladra : function(){console.log("guau");},
}
//deconstrucción
let {nombre, color, raza} = perro;

console.log(nombre, color, raza);

let nombreDelPerro = perro.nombre;

console.log(nombreDelPerro)

perro.color = "gris";
perro.rascar = function rascar(){console.log("se rasca");};

console.log(perro)

let dogsArray = [
    {
        nombre:"Loki",
        color : "negro",
        ladrar : function(){console.log("ladra");},
    },
    {
        nombre:"Zeus",
        color : "blanco",
        ladrar : function(){console.log("ladra");},
    },
    {
        nombre:"Ares",
        color : "gris",
        ladrar : function(){console.log("ladra");},
    }
]

let loki = dogsArray[0].nombre

console.log(loki);

