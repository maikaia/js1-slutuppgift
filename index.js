const url = "https://mock-data-api.firebaseio.com/webb21/products.json"

let totalArray = []

const productList = document.getElementById("productList")
const shoppingCart = document.getElementById("shoppingCartList")
const shoppingCartTitle =document.getElementById("shoppingCartTitle")
const input = document.getElementById("input")
const inputButton = document.getElementById("inputButton")
const buttonReverse = document.getElementById("buttonReverse")

function renderProduct(product) {
    const productElement = document.createElement("div")

    const nameElement = document.createElement("h1")
    const imgElement = document.createElement("img")
    const descriptionElement = document.createElement("p")
    const infoElement = document.createElement("p")
    const buttonElement = document.createElement("button")

    nameElement.innerText = product.name
    imgElement.src = product.images[0].src.small
    imgElement.alt = product.images[0].alt
    descriptionElement.innerText = product.description
    infoElement.innerText = `Price: ${product.price} kr\n Rating: ${product.rating}\n Stock: ${product.stock}`
    buttonElement.innerText = `Buy: ${product.name}`
    

    productElement.appendChild(nameElement)
    productElement.appendChild(imgElement)
    productElement.appendChild(descriptionElement)
    productElement.appendChild(infoElement)
    productElement.appendChild(buttonElement)

    productList.appendChild(productElement)
    
    function renderShoppingCartList() {
        shoppingCartTitle.innerText = "Shopping cart"
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

    inputButton.addEventListener("click", function() {
        if(input.value > product.rating) {
            productElement.innerText = ""
        }
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