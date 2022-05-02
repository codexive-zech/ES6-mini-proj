// assigning a new variable and making a copy of the product array using the spread operation
let filteredProduct = [...products];

// Selecting the HTML class that will take in action and effect
const productContainer = document.querySelector('.products-container');

// created a function expression so that the converted object can be iterated using the array method
const displayProduct = filteredProduct
  .map((product) => {
    // using Destructuring to select only the needed property from each of the product in the Object array
    const { id, title, image, price } = product;
    // dynamically displaying the products in the HTML and adding the Destructure property in the Object array of the product to the HTML
    return `<article class="product" data-id=${id}>
          <img
            src="${image}"
            class="img product-img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`;
  })
  .join('');

// merging the display Product function expression into the product container section in the HTML
productContainer.innerHTML = displayProduct;

// Selecting the HTML class that will take in action and effect
const companies = document.querySelector('.companies');
// created a function expression so that the converted object can be iterated using the array method
const displayCompany = filteredProduct
  .map((companyName) => {
    // using Destructuring to select only the company property from the converted products array
    const { company } = companyName;
    // dynamically displaying the Companies in the HTML and adding the Destructure property in the Object array of the product to the HTML
    return `<button class="company-btn">${company}</button>`;
  })
  .join('');

// merging the display company function expression into the companies section in the HTML
companies.innerHTML = displayCompany;
