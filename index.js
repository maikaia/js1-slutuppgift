const url = "https://mock-data-api.firebaseio.com/webb21/products.json"

let totalArray = []

const productList = document.getElementById("productList")
const shoppingCart = document.getElementById("shoppingCartList")
const shoppingCartTitle =document.getElementById("shoppingCartTitle")

function renderProduct(product) {
    const productElement = document.createElement("div")

    const nameElement = document.createElement("h1")
    const imgElement = document.createElement("img")
    const descriptionElement = document.createElement("p")
    const infoElement = document.createElement("p")
    const buttonElement = document.createElement("button")
    

    // const ratingElement = document.createElement("p")
    // const stockElement = document.createElement("p")

    nameElement.innerText = product.name
    imgElement.src = product.images[0].src.small
    imgElement.alt = product.images[0].alt
    descriptionElement.innerText = product.description
    infoElement.innerText = `Price: ${product.price}\n Rating: ${product.rating}\n Stock: ${product.stock} kr`
    buttonElement.innerText = `Buy: ${product.name}`

    // ratingElement.innerText = `Rating: ${product.rating}`
    // stockElement.innerText = `Stock: ${product.stock}`

    productElement.appendChild(nameElement)
    productElement.appendChild(imgElement)
    productElement.appendChild(descriptionElement)
    productElement.appendChild(infoElement)
    productElement.appendChild(buttonElement)

    // productElement.appendChild(ratingElement)
    // productElement.appendChild(stockElement)

    productList.appendChild(productElement)
    
    function renderShoppingCartList() {
        shoppingCartTitle.innerText = "Varukorg"
        const shoppingCartElement = document.createElement("p")
        shoppingCartElement.innerText = `${product.name} - ${product.price} kr`
        shoppingCart.appendChild(shoppingCartElement)
        totalArray.push(product.price)
        document.getElementById("totalElement").innerText = `Total: ${sumOfArray()} kr`
    }

    buttonElement.addEventListener("click", function() {
        renderShoppingCartList()
      })

    imgElement.addEventListener("click", function() {
        renderShoppingCartList()
    })
}

function sumOfArray() {
    let sum = 0
    totalArray.forEach(item => {
        sum += item
    })
    return sum
}

function renderProductsList(productList) {
    productList.forEach(product => {
        renderProduct(product)
    })
}

fetch(url)
.then(res => res.json())
.then(data => {
    renderProductsList(data)
    console.log(data)
})


