function consejeroNombre (nombreEspecie){
    if (nombreEspecie === "perro"){
        return "El perro de llamara Milaneso"
    } else if (nombreEspecie === "gato"){
        return "El gato se llamara Michiflais"
    } else if (nombreEspecie === "ave"){
        return "El ave se llamara Piolin"
    } else{
        return "No conozco esa especie"
    }
}

function nombrePet (nombreEspecie){
    switch (nombreEspecie){
        case "perro":
        return "El perro de llamara Firulais"

        case "gato":
            return "El gato se llamara Felix"

        case "ave":
            return "El ave se llamara Abelardo"

        default: 
            return "No conozco esa especie"
    }
}

console.log(nombrePet("asda"))

console.log(consejeroNombre("perro"));

function dados (num1, num2){
    if ((num1 && num2 === 2) || (num1 && num2 === 1) || (num1 === 4 && num2 === 6 || num1 === 6 && num2 === 4)){
        return "Ganaste"
    } else {
        return "Perdiste"
    }
}

console.log(dados(0,4));