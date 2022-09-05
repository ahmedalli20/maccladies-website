function fetchProducts(){
  fetch("https://fakestoreapi.com/products")
  .then(resp => resp.json())
  .then(products => products.forEach(product => renderProduct(product)))
}

function renderProduct(product){
  const card = document.createElement("div")
  card.className = "card"
  card.innerHTML = `
    <h1 class="title">${product.title}</h1>
    <img src=${product.image} alt="image" class="images">
    <p>${product.description}</p>
    <p class="category">${product.category}</p>
    <p class="price">${product.price}</p> 
    <button class="buy">Add to Cart</button>
  `

  card.querySelector(".buy").addEventListener("click", ()=>{
    
    let items = parseInt(document.getElementById("myCart").textContent)
    items += 1
    document.getElementById("myCart").textContent = items
    
  })

  document.getElementById("products").appendChild(card)

}

fetchProducts()


function emailAddress(){
    let email=document.querySelector('#form')
    let p=document.createElement('p')
    p.className="thanks-p"
    
    email.addEventListener("submit",(e)=>{
        e.preventDefault()
        // console.log("done")
         

         p.textContent='Thank you for subscribing. Please check your Email for more informtion'
        email.reset()
        

    })
    
    document.querySelector('#form').append(p)
}
emailAddress()



