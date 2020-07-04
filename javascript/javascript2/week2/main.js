console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

let productNameInput = document.getElementById("searchBar");
let maxValueInput = document.getElementById("max-price");
productNameInput.addEventListener("keyup", () => {
  let productName = document.getElementById("searchBar").value.toLowerCase();
  let maxValue = document.getElementById("max-price").value;
  const filteredValue = products.filter((product) => {
    if (product.price === "") {
      if (
        product.name.toLowerCase().includes(productName) &&
        product.price < maxValue
      ) {
        return product;
      }
    } else {
      return product.name.toLowerCase().includes(productName);
    }
  });
  productsUl.innerHTML = " ";
  renderProducts(filteredValue);
});
maxValueInput.addEventListener("keyup", () => {
  let productName = document.getElementById("searchBar").value.toLowerCase();
  let maxValue = document.getElementById("max-price").value;
  const filteredValue = products.filter((product) => {
    if (
      product.name.toLowerCase().includes(productName) &&
      product.price < maxValue
    ) {
      return product;
    }
  });
  productsUl.innerHTML = " ";
  renderProducts(filteredValue);
});

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}
renderProducts(products);
