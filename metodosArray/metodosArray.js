let koders = ["Angy", "Beto", "Carlos", "Diego"]

const printKodersInitial = (kodersArray) =>{
    kodersArray.forEach((koder, index, array) => {
        console.log(koder.charAt(0));
    });
}

printKodersInitial(koders);

let students = [
    {name:"Rodolfo Roman", lastName: "Ramirez Morales"},
    {name:"Karla", lastName: "Hernandez Lorenzo"},
    {name:"Angela", lastName: "Garcia Garcia"},
    {name:"Armando", lastName: "García Miranda"},
    {name:"Raul", lastName: "Gomez Sotelo"},
    {name:"Jorge", lastName: "Juarez Reyes"},
    {name:"Ulises", lastName: "Flores Grande"},
    {name:"Anais", lastName: "Laguna Torres"},
    {name:"Ricardo", lastName: "Gomez Duran"},
    {name:"Jose", lastName: "Sanchez Cruz"},
    {name:"Eduardo", lastName: "Montiel Luna"},
];

const initialsLetter = (studentsArray) =>{
    let initials = []
    studentsArray.forEach((student)=>{
        initials.push(`${student.name.charAt(0) + "."} ${student.lastName.charAt(0) + "."} ${student.lastName.split(" ")[1].slice(0,1) + "."}`)
    }) 
    console.log(initials)
}

let initials = initialsLetter(students);





