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
    divCard1.classList.add("card", "h-100")

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

    usersArray.forEach(user => {
        imgCard.setAttribute("src", `${user.photo}`)
        cardtitle.innerText = `${user.name}`
        paragraphEmail.innerText = `${user.email}`
    });

    divCard2.append(cardtitle, paragraphEmail,deleteButton)
    divCard1.append(imgCard, divCard2)
    divCard.append(divCard1)
    
    return divCard
}

// createUserCard(users)


const printCardUser = () => {
    let cardContainer = document.getElementById("card-container");
    let cardEvent = createUserCard(users);
    cardContainer.append(cardEvent);
};



