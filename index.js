const productUrl = "https://fakestoreapi.com/products"

  const product = document.querySelector(".products")

  fetch(productUrl)
    .then((data) => {
    // console.log(data);
    return data.json();
})

.then((response)=>{
    //   console.log(response); 
 let item1=""; 
  response.map((values)=>{
    item1+=` <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src=${values.image} alt="image" class="images">
          <p>${values.description}</p>
          <p class="category">${values.category}</p>
          <p class="price">${values.price}</p> 
    </div>`
  });
  document.getElementById("products").innerHTML =item1;

}).catch((err)=>{

    console.log(err);

}) 