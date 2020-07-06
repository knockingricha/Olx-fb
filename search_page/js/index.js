
loadData();

/*
<div class="card" style="width: 18rem;">
  <div class="image_container">
    <img class="card-img-top" src="./image/book5.jpg" alt="Product name">
    <div class="card-body">
      <h5 class="card-title">Test's Name</h5>
      <h6 class="card-subtitle mb-2 text-muted">Rating</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">(A bootstrap button) View Item</a>
      <a href="#" class="card-link">(A bootstrap button) Add to Cart</a>
    </div>
  </div>
</div>

*/

function createProduct(imageSource) {
  // Container class
  var card = document.createElement('div');
  card.className = "card";
  card.style = "width: 18rem";

  // Binding all the elements together
  var image_container = document.createElement('div');
  image_container.className = "image_container";
  image_container.appendChild(child1(imageSource));
  image_container.appendChild(child2());

  card.appendChild(image_container);
  
  return card;

}

//<img class="card-img-top" src="./image/book5.jpg" alt="Product name"></img>
function child1(imageSource) {
  // Image tag
  var image = document.createElement('img');
  image.className = "card-img-top";
  image.src = imageSource;
  image.alt = "products name";  

  return image;
}
// Card body div
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
  rating.innerHTML = "Rating ";
  rating.innerHTML+=' <i class="fa fa-star text-warning" aria-hidden="true"></i>';
  element.appendChild(rating);

  // Something about the product
  var about = document.createElement('p');
  about.className = "card-text";
  about.innerHTML = "Lorem ipsum.Lorem ipsum.Lorem ipsum.";
  element.appendChild(about);

  // View product option
  var view = document.createElement('a');
  view.href="#";
  view.className = "card-link";
  view.append(viewItemBtn());
  //view.innerHTML = '<button type="button" class="btn btn-success">View Item</button>';
  element.appendChild(view);

  // Add to cart option
  var cart = document.createElement('a');
  cart.href="#";
  cart.className = "card-link";
  cart.append(addToCartBtn());
  //cart.innerHTML = '<button type="button" class="btn btn-success">View Item</button>';
  element.appendChild(cart)
  
  return element;

}
// Add to cart button
function addToCartBtn() {
  const type = "button";
  const classname = "btn btn-outline-warning";
  const text = "Add Item";
  var button = createButton(type, classname, text);
  button.style.opacity = "0.8";
  return button;
}

// View Item button
function viewItemBtn() {
  const type = "button";
  const classname = "btn btn-outline-success";
  const text = "View Item";
  var button = createButton(type, classname, text);
  button.style.opacity = "0.8";

  return button;
}
// Generalized function to create any button
function createButton(type, classname, text) {
  var button = document.createElement('button');
  button.type = type;
  button.className = classname;
  button.textContent = text;
  //console.log(button);
  return button;
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
