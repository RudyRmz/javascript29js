let buttonSave = document.getElementById("button-save")
let buttonClean = document.getElementById("button-clean")
let inputName = document.getElementById("input-name")
let inputPrice = document.getElementById("input-price")
let inputPhoto = document.getElementById("input-photo")

const getAllProducts = async()=>{
    let response = await fetch(
        "https://javascript29js-default-rtdb.firebaseio.com/products/.json"
    );
    let data = await response.json();
    console.log(response)
    console.log(data)
    return data
}

let productExample = {
    id : Date.now(),
    name: "Microondas",
    price: 1500,
    photo: "imagen microondas"
}

const createProduct = async (productObjet) =>{
    let response = await fetch(
        "https://javascript29js-default-rtdb.firebaseio.com/products/.json", {
            method: "POST",
            body:JSON.stringify(productObjet)
        }
    );
    let data = await response.json();
    console.log(response)
    //console.log(data)
    return data
}

const deleteProduct = async (productId) =>{
    let response = await fetch(
        `https://javascript29js-default-rtdb.firebaseio.com/products/${productId}/.json`,
        {
            method: "DELETE"
        }
    )
    let data = await response.json();
    return data
}

let products = []

buttonSave.addEventListener("click",async ()=>{
    // let inputName = document.getElementById("input-name")
    // let inputPrice = document.getElementById("input-price")
    // let inputPhoto = document.getElementById("input-photo")

    let productObjet = {
    id : Date.now(),
    name : `${inputName.value}`,
    price: `${inputPrice.value}`,
    photo : `${inputPhoto.value}`,
    }

    createProduct(productObjet)
    // products.push(productObjet)
    // console.log(products)
    // return products
    createProductCard(productObjet)
    inputName.value = ""
    inputPrice.value = ""
    inputPhoto.value = ""
    printCardProduct()
})

buttonClean.addEventListener("click", ()=>{
    inputName.value = ""
    inputPrice.value = ""
    inputPhoto.value = ""
})

const createProductCard = (productData)=>{
    let {name,price,photo, id} = productData

    let divCard = document.createElement("div")
    divCard.classList.add("col")

    let divCard1 = document.createElement("div")
    divCard1.classList.add("card", "h-100", "shadow-lg", "bg-body-tertiary", "rounded")

    let imgCard = document.createElement("img")
    imgCard.classList.add("card-img-top")
    imgCard.setAttribute("src", `${photo}`)

    let divCard2 = document.createElement("div")
    divCard2.classList.add("card-body")

    let cardtitle = document.createElement("h5")
    cardtitle.classList.add("card-title")
    cardtitle.innerText = `${name}`

    let paragraphPrice = document.createElement("p")
    paragraphPrice.classList.add("card-text")
    paragraphPrice.innerText = `$ ${price}`

    let deleteButton = document.createElement("button")
    deleteButton.setAttribute("type","button")
    deleteButton.classList.add("btn","btn-danger")
    deleteButton.innerText = "Borrar"
    deleteButton.id = "delete-button"
    deleteButton.dataset.persona = "."
    
    let editButton = document.createElement("button")
    editButton.setAttribute("type","button")
    editButton.classList.add("btn","btn-secondary")
    editButton.innerText = "Editar"
    editButton.id = "edit-button"
    
    // Object.values(products).forEach((product) => {
    //     imgCard.setAttribute("src", `${product.photo}`)
    //     cardtitle.innerText = `${product.name}`
    //     paragraphPrice.innerText = `${product.price}`
    //     //deleteButton.dataset.persona = `${index}`//`${product.id}` 
    // });

    // productData.forEach( async (product) => {
    //     imgCard.setAttribute("src", `${product.photo}`)
    //     cardtitle.innerText = `${product.name}`
    //     paragraphPrice.innerText = `${product.price}`
    //     //deleteButton.dataset.persona = `${index}`//`${product.id}` 
    // });

    divCard2.append(cardtitle, paragraphPrice,deleteButton, editButton)
    divCard1.append(imgCard, divCard2)
    divCard.append(divCard1)

    deleteButton.addEventListener("click", (event)=>{
        alert("diste click al boton borrar")
        deleteProduct(id)
        // const productToRemove = event.target.dataset.persona;
        // products.splice(Number(productToRemove), 1)
        //divCard.remove()
    })


    return divCard
}



// createProductCard(products)


const printCardProduct = async () => {
    let products = await getAllProducts()
    console.log(products)
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""

    Object.values(products).forEach((product)=>{
        let cardEvent = createProductCard(product);
        cardContainer.append(cardEvent);
    })
};

printCardProduct()