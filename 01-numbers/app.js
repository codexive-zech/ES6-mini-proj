// Get the values that will take in effects and actions
const items = document.querySelectorAll('.number');
// convert the returned nodeList into an Array using spread Operator
const spreadItems = [...items];
// updating the count of each element (span value)
const updateCount = (el) => {
  // getting the HTML data value attribute (used as a unique item identifier)
  const value = parseInt(el.dataset.value);
  //  incrementing each and every iteration
  const increment = Math.ceil(value / 1000);
  //   setting the initial count value to 0
  let initialValue = 0;

  //   a setInterval function for the increments of each count
  const incrementCount = setInterval(() => {
    //   adding the initial value (0) to the increment Math value
    initialValue += increment;
    // checking to see if the initial value after increment is greater than the value of the data-value attribute in the HTML
    if (initialValue > value) {
      // if that's the case let the displaying number in the HTML be the value (dataset.value)
      el.textContent = `${value}+`;
      //   clear/remove the increase count setInterval func expression
      clearInterval(incrementCount);
      return;
    }
    // displaying the initial Value in the Html
    el.textContent = `${initialValue}+`;
  }, 1);
};

// using the array method on the converted spreadItem array
spreadItems.forEach((item) => {
  // iterate over each count element item
  updateCount(item);
});
