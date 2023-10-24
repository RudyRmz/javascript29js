let koders = ["Angy", "Beto", "Carlos", "Diego"]

const printKodersInitial = (kodersArray) =>{
    kodersArray.forEach((koder, index, array) => {
        console.log(koder.charAt(0));
    });
}

printKodersInitial(koders);

let students = [
    {name:"Rodolfo", lastName: "Ramirez Morales"},
    {name:"Karla", lastName: "Hernandez Lorenzo"},
    {name:"Angela", lastName: "Garcia Garcia"},
    {name:"Armando", lastName: "García Miranda"},
    {name:"Raul", lastName: "Gomez Sotelo"},
    {name:"Jorge", lastName: "Juarez Reyes"},
    {name:"Ulises", lastName: "Flores Grande"},
    {name:"Anais", lastName: "Laguna Torres"},
];

const initialsLetter = (studentsArray) =>{
    let initials = []
    studentsArray.forEach((student, index, array)=>{
        initials.push(`${student.name.charAt(0) + "."} ${student.lastName.split(" ")[0].slice(0,1)+"."} ${student.lastName.split(" ")[1].slice(0,1)+"."}`)
    }) 
    console.log(initials)
    
}

initialsLetter(students)

let arrayNombres = nombreCompleto.split(" ")
    let iniciales = "";
    for (let i = 0; i < arrayNombres.length ; i++){
        iniciales += arrayNombres.charAt(0) + ". "
    }
    return iniciales;