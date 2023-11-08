// let token = localStorage.getItem("token");
// let isLogged = token;

// // let message = document.getElementById("message");
// // let loginButton = document.getElementById("login-button");

// const setMessage = () => {
//   message.textContent = isLogged
//     ? "Sesión iniciada"
//     : "Tienes que iniciar sesión";

//   loginButton.textContent = isLogged ? "Log out" : "Log in";
// };

// setMessage();

// /*const toggleLogin = () => {
//   isLogged = !isLogged;
//   console.log(isLogged);
//   setMessage();
// }*/

// const login = () => {
//   /*aquí simulamos que nos  llegó un token*/
//   let token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjM3LCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImF2YXRhciI6InNvbWUgdXJsIn0.8QCJeN7GXddZduC4b-cOfSRSOpualiTQwNk-VmhD_gU";

//   localStorage.setItem("token", token);
// };

// const logout = () => {
//   localStorage.removeItem("token");
// };

// loginButton.addEventListener("click", login);

let token = localStorage.getItem("token");
let isLogged = token;

// const existToken = ()=>{
//     if (!token){
//         let listContainer = document.getElementById("logout-container")
// listContainer.classList.add("d-none")
//     }
// }

let loginButton = document.getElementById("login-button")

let logoutButton = document.getElementById("logout-button")

let formContainer = document.getElementById("form-container")

let listContainer = document.getElementById("logout-container")
// listContainer.classList.add("d-none")

const login = () => {
    /*aquí simulamos que nos  llegó un token*/
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjM3LCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImF2YXRhciI6InNvbWUgdXJsIn0.8QCJeN7GXddZduC4b-cOfSRSOpualiTQwNk-VmhD_gU";
  
    localStorage.setItem("token", token);

    
    // formContainer.innerHTML = ""
    // formContainer.classList.add("d-none")
    // listContainer.classList.remove("d-none")
};

loginButton.addEventListener("click", ()=>{
    // alert("diste click en el boton login")
    formContainer.classList.add("d-none")
    listContainer.classList.remove("d-none")
    login()
})

logoutButton.addEventListener("click", ()=>{
    // alert("diste click en el boton login")
    logout()
})

const logout = () => {
    localStorage.removeItem("token");
    // listContainer.innerHTML = ""
    listContainer.classList.add("d-none")
    formContainer.classList.remove("d-none")
};

// logoutButton.addEventListener("click", ()=>{
//     // alert("diste click en el boton login")
//     let formContainer = document.getElementById("form-container")
//     // formContainer.innerHTML = ""
//     formContainer.classList.add("d-none")
//     let listContainer = document.getElementById("logout-container")
//     listContainer.classList.remove("d-none")
//     login()
// })



// logoutButton.addEventListener("click", ()=>{
//     alert("diste click en el boton logout")
//     let listContainer = document.getElementById("logout-container")
//     listContainer.innerHTML = ""
// })

// const ocultar = () =>{
//     let formContainer = document.getElementById; //Reemplaza 'idDelDiv' con el ID de tu div

//   if (formContainer) {
//     formContainer.style.display = 'none';
//   }
// }

// allProducts = combinedProducts;
//     document.getElementById("products-alert").classList.add("d-none");
//     printProductCards(allProducts);
//   } else {
//     document.getElementById("products-alert").classList.remove("d-none");
//   }