const PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";

let cardContainer = document.getElementById("cardContainer")

const getAllProducts = async() => {
    let response = await fetch(`${PRODUCTS_ENDPOINT}`);
    let data = await response.json();
    return data
}
const createCardProduct = (productsData) => {
    let {id, title, price, description, image} = productsData;

    let divCardCol = document.createElement("div")
    divCardCol.classList.add("col")

    let divCard = document.createElement("div")
    divCard.classList.add("card")

    let cardImage = document.createElement("img")
    cardImage.classList.add("card-img-top", "h-100", "img-fluid")
    cardImage.setAttribute("src",image)

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let cardTitle = document.createElement("h4")
    cardTitle.innerText = title;

    let cardPrice = document.createElement("h5")
    cardPrice.innerText = `$${price}`

    let descriptionCard = document.createElement("p")
    descriptionCard.classList.add("card-text")
    descriptionCard.innerText = description

    divCardCol.addEventListener("click", () => {
        window.open(`views/entry-detail.html?productId=${id}`, "_blank");
    });
    
    cardBody.append(cardTitle, cardPrice, descriptionCard)
    divCard.append(cardImage, cardBody)
    divCardCol.append(divCard)

    return divCardCol
}
const printCards = async () => {
    cardContainer.innerHTML= "";
    let products = await getAllProducts()
    products.forEach(entry => {
        let entryCard = createCardProduct(entry)
        cardContainer.append(entryCard)
    });
}

printCards()