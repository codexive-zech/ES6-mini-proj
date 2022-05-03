/***  Product Display ***/
// assigning a new variable and making a copy of the product array using the spread operation
let filteredProduct = [...products];

/***  Product Display ***/
// Selecting the HTML class that will take in action and effect
const productContainer = document.querySelector('.products-container');

// created a function expression so that the converted object can be iterated using the array method
const displayProducts = () => {
  // checking the length of the filtered product if it's less than 1 returned product
  if (filteredProduct.length < 1) {
    // dynamically displaying this into the HTML
    productContainer.innerHTML = `<h6>Sorry, No Product Matched Your Search</h6>`;
    return;
  }
  // dynamically displaying the Products into the product container section in the HTML and iterating over each product
  productContainer.innerHTML = filteredProduct
    .map(({ id, title, image, price }) => {
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
};
// invoking the product display function
displayProducts();
/***  End of Product Display ***/

/*** Form Search Display ***/
// Selecting the HTML class that will take in action and effect
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

// listening for a keyup event on the entire form section
form.addEventListener('keyup', () => {
  // getting the inputted value in the search bar
  const searchInputValue = searchInput.value;
  // filtering through every product in the Array and returning products which their title includes the words inputted in the search bar
  filteredProduct = products.filter((searchProduct) => {
    return searchProduct.title.toLowerCase().includes(searchInputValue);
  });
  // invoking the product display function to show only the filtered products
  displayProducts();
});

/***  Companies Display ***/
// Selecting the HTML class that will take in action and effect
const companies = document.querySelector('.companies');
const displayCompany = () => {
  // iterating over the products array to get only unique company names from the product array
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  // dynamically displaying the unique iterated button from the Product array into the HTML
  companies.innerHTML =
    // Iterating over the buttons in the product array to map out and display only the company names that are in the products array
    buttons
      .map((company) => {
        return `<button class="company-btn" data-id="${company}">${company}</button>`;
      })
      .join('');
};
// invoking the company display function to show only unique company name from the array object and not all.
displayCompany();
/***  End of Companies Display ***/

/*** Companies Filtering Display ***/
companies.addEventListener('click', (e) => {
  // getting the exact clicked target button
  const elementClicked = e.target;
  // checking to see if the clicked button has the class of (company-btn)
  if (elementClicked.classList.contains('company-btn')) {
    if (elementClicked.dataset.id === 'all') {
      // and also checking to see if the clicked element dataset-id is all
      // make a fresh copy of the entire product array and display that
      filteredProduct = [...products];
    } else {
      // filtering over the original products object array and assigned it as filterProduct value
      filteredProduct = products.filter((product) => {
        // returning only products that its's company property in the product original array object is the same as the elementClicked dataset-id attribute
        return product.company === elementClicked.dataset.id;
      });
    }
    // reset the search input to an empty string
    searchInput.value = '';
    // invoking the product display function to show the product all category or the category based on the clicked element (button) dataset-id attribute.
    displayProducts();
  }
});
/*** End of Companies Filtering Display ***/
