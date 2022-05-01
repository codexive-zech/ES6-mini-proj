// Get the values that will take in effects and actions
const items = document.querySelectorAll('.number');
// updating the count of each element (span value)
const updateCount = (el) => {
  console.log(el);
};

// convert the returned nodeList into an Array using spread Operator
const spreadItems = [...items];
spreadItems.forEach((item) => {
  // iterate over each count element item
  updateCount(item);
});
