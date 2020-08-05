class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    this.crrConvereted;
    this.url = "https://api.exchangeratesapi.io/latest?base" + currency;
    fetch(this.url)
      .then((response) => response.json())
      .then((ccr) => {
        console.log(ccr);
        this.crrConvereted = this.price / ccr.rates.DKK;
        return console.log(this.crrConvereted);
      });
  }
}
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(product) {
    this.products = this.products.filter((p) => p != product);
  }
  searchProduct(productName) {
    return this.products.filter(
      (product) => product.name.toLowerCase() === productName.toLowerCase()
    );
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total = total + this.products[i].price;
    }
    return total;
  }
  renderProducts() {
    const t = document.getElementById("products");
    t.innerHTML = "";
    this.products.forEach((product) => {
      t.innerHTML += `<tr>
      <td>${product.name}</td>
      <td>$ ${product.price}</td>
      </tr>`;
      document.body.appendChild(t);
    });
    const totalPrice = document.getElementById("price");
    totalPrice.innerHTML = `total price: $ ${this.total}`;
    document.body.appendChild(totalPrice);
  }
  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const name = document.getElementById("cart-name");
        name.innerHTML = `${data.name}`;
        document.body.appendChild(name);
      });
  }
}
const shoppingCart = new ShoppingCart();
console.log(shoppingCart.getUser());
const flatscreen = new Product("flat-screen", 5000);
const widescreen = new Product("wide-screen", 500);
const mobile = new Product("mobile", 300);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(widescreen);
shoppingCart.addProduct(mobile);
console.log(shoppingCart.products);

shoppingCart.removeProduct(flatscreen);
console.log(shoppingCart.products);

console.log(shoppingCart.getTotal());

const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("USD"));

shoppingCart.renderProducts();

console.log(shoppingCart.searchProduct("mobile"));
