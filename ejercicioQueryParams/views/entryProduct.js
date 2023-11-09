const PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";

let queryString = location.search;
// console.log(queryString);

let params = new URLSearchParams(queryString);
// console.log(params);

let productId = params.get("productId");
console.log(productId);

const getEntryById = async (entryId) => {
  let response = await fetch(`${PRODUCTS_ENDPOINT}/${entryId}`);
  // console.log(response);
  let data = await response.json();
  console.log(data);

  let {title, price, description, image} = data;

  // let title = data.title
  // console.log(title);
  // let price = data.price
  // console.log(price);
  // let description = data.description
  // console.log(description);
  // let image = data.image
  // console.log(image);

  // let cardImage = document.getElementById("entry-cover")
  // console.log(cardImage)
  //   cardImage.setAttribute("src",`${image}`)
  //   console.log(cardImage)

  //   let cardTitle = document.getElementById("entry-title")
  //   cardTitle.innerText = title;

  //   let cardPrice = document.getElementById("entry-author")
  //   cardPrice.innerText = `$${price}`

  //   let descriptionCard = document.getElementById("entry-content")
  //   descriptionCard.innerText = `${description}`

  if (data) {
    let {title, price, description, image} = data;
    document.getElementById("entry-cover").src = image;
    document.getElementById("entry-title").textContent = title;
    document.getElementById("entry-author").textContent = `$${price}`;
    document.getElementById("entry-content").textContent = description;
  } else {
    document.getElementById("detail-wrapper").innerHTML = `
    <div class="alert alert-secondary" role="alert">
  No se encontró el contenido de esta entrada
</div>
<img class="w-100" src="https://thumbs.dreamstime.com/z/page-not-found-error-hand-drawn-vector-doodle-illustration-internet-connection-problem-concept-cat-holds-computer-mouse-119417440.jpg" alt="" />
    `;
  }
};

getEntryById(productId);