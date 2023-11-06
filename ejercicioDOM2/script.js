// let inputName = document.getElementById("input-name").value

// let inputEmail = document.getElementById("input-email")

// let inputPhoto = document.getElementById("input-photo")

// let buttonSave = document.getElementById("button-save")

// let userObjet = {
//     id : Date.now(),
//     name : `${inputName}`,
//     email: `${inputEmail.value}`,
//     photo : `${inputPhoto.value}`,
// }

let buttonSave = document.getElementById("button-save")

let buttonClean = document.getElementById("button-clean")

let inputName = document.getElementById("input-name")
let inputEmail = document.getElementById("input-email")
let inputPhoto = document.getElementById("input-photo")

let users = []

buttonSave.addEventListener("click", ()=>{
    // let inputName = document.getElementById("input-name")
    // let inputEmail = document.getElementById("input-email")
    // let inputPhoto = document.getElementById("input-photo")

    let userObjet = {
    id : Date.now(),
    name : `${inputName.value}`,
    email: `${inputEmail.value}`,
    photo : `${inputPhoto.value}`,
    }
    users.push(userObjet)
    console.log(users)
    // return users
    createUserCard()
    printCardUser()
    inputName.value = ""
    inputEmail.value = ""
    inputPhoto.value = ""
})

buttonClean.addEventListener("click", ()=>{
    inputName.value = ""
    inputEmail.value = ""
    inputPhoto.value = ""
})

const createUserCard = (usersArray = users)=>{
    let divCard = document.createElement("div")
    divCard.classList.add("col")

    let divCard1 = document.createElement("div")
    divCard1.classList.add("card", "h-100", "shadow-lg", "bg-body-tertiary", "rounded")

    let imgCard = document.createElement("img")
    imgCard.classList.add("card-img-top")
    imgCard.setAttribute("src", "...")

    let divCard2 = document.createElement("div")
    divCard2.classList.add("card-body")

    let cardtitle = document.createElement("h5")
    cardtitle.classList.add("card-title")
    cardtitle.innerText = "..."

    let paragraphEmail = document.createElement("p")
    paragraphEmail.classList.add("card-text")
    paragraphEmail.innerText = "..."

    let deleteButton = document.createElement("button")
    deleteButton.setAttribute("type","button")
    deleteButton.classList.add("btn","btn-danger")
    deleteButton.innerText = "Borrar"
    deleteButton.id = "delete-button"
    deleteButton.dataset.persona = "."
    
    

    usersArray.forEach((user, index) => {
        imgCard.setAttribute("src", `${user.photo}`)
        cardtitle.innerText = `${user.name}`
        paragraphEmail.innerText = `${user.email}`
        deleteButton.dataset.persona = `${index}`//`${user.id}` 
    });

    divCard2.append(cardtitle, paragraphEmail,deleteButton)
    divCard1.append(imgCard, divCard2)
    divCard.append(divCard1)

    deleteButton.addEventListener("click", (event)=>{
        // alert("diste click al boton borrar")
        const personToRemove = event.target.dataset.persona;
        users.splice(Number(personToRemove), 1)
        divCard.remove()
    })

    // deleteButton.addEventListener("click", (event, usersArray = users)=>{
    //     let personToRemove = event.target.dataset.persona
    //     console.log("le diste click a borrar")
    //     console.log(personToRemove)
    //     console.log(event)
    //     for (let i = 0; i < usersArray.length; i++) {
    //         if (usersArray[i].id === personToRemove) {
    //             usersArray.splice(i, 1);
    //             //break; // Detenemos el bucle una vez que se elimina el elemento
    //         }
    //     }
    //     divCard.remove()
    //     console.log(usersArray)
    // })
    // function eliminarYReemplazarPorId(array, idAEliminar) {
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i].id === idAEliminar) {
    //             array.splice(i, 1);
    //             break; // Detenemos el bucle una vez que se elimina el elemento
    //         }
    //     }
    // }
    
    
    return divCard
}



// createUserCard(users)


const printCardUser = () => {
    let cardContainer = document.getElementById("card-container");
    let cardEvent = createUserCard(users);
    cardContainer.append(cardEvent);
};



// const printAllUsers = (usersList = users) => {
//     let cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = "";
//     usersList.forEach((user) => {
//     printCardUser(user);
//     });
// };

