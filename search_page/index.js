
loadData();

/*
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card" style="width: 18rem;">
          
          <img class="card-img-top" src="./image/book2.jpg" alt="Product name">

          <div class="card-body">
            <h5 class="card-title">Book's Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">Rating</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">View Item</a>
            <a href="#" class="card-link">Add to Cart</a>
          </div>

</div>

*/
function child2() {
  // Body element
  var element = document.createElement('div');
  element.className = "card-body";

  // Book's name
  var product_name = document.createElement('h5');
  product_name.className = "card-title";
  product_name.innerText = "Book's Name";
  element.appendChild(product_name);

  // Book's rating
  var rating = document.createElement('h6');
  rating.className = "card-subtitle mb-2 text-muted";
  rating.innerHTML = "Rating";
  element.appendChild(rating);

  // Something about the product
  var about = document.createElement('p');
  about.className = "card-text";
  about.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  element.appendChild(about);

  // View product option
  var view = document.createElement('a');
  view.href="#";
  view.className = "card-link";
  view.innerHTML = "View Item";
  element.appendChild(view);

  // Add to cart option
  var cart = document.createElement('a');
  cart.href="#";
  cart.className = "card-link";
  cart.innerHTML = "Add to Cart";
  element.appendChild(cart)
  
  return element;

}

function createProduct(imageSource) {
    // Container class
    var card = document.createElement('div');
    card.className = "card";
    card.style = "width: 18rem";

    // Binding all the elements together
    card.appendChild(child1(imageSource));
    card.appendChild(child2());
    
    return card;

}
function child1(imageSource) {
  // Image tag
  var image = document.createElement('img');
  image.className = "card-img-top";
  image.src = imageSource;
  image.alt = "products name";  

  return image;
}

function loadData() {
    var products = document.getElementById('products');
    if(products === null) return;
    for(var i = 1; i < 9; i++) {
        var imageSource = "./image/book" + i + ".jpg";
        var product = createProduct(imageSource);
        products.appendChild(product);
        
    }

}

