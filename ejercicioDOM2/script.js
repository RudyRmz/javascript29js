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

let user = []

buttonSave.addEventListener("click", ()=>{
    let inputName = document.getElementById("input-name")
    let inputEmail = document.getElementById("input-email")
    let inputPhoto = document.getElementById("input-photo")

    let userObjet = {
    id : Date.now(),
    name : `${inputName.value}`,
    email: `${inputEmail.value}`,
    photo : `${inputPhoto.value}`,
}
    user.push(userObjet)
    
    console.log(user)
})

