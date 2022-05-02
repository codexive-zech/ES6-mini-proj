// selecting the element that will take in action and effect
const toggleBtn = document.querySelector('.btn');
const articleContainer = document.querySelector('.articles');

// Adding the Event that is to take place when the toggle button is clicked
toggleBtn.addEventListener('click', () => {
  // referring to the HTML document element and adding the needed class to it
  document.documentElement.classList.toggle('dark-theme');
});

// using the map method to loop through the articles object
const articleData = articles
  .map((article) => {
    // using Destructuring to select only the needed property from each of the article in the Object array
    const { title, date, length, snippet } = article;
    // got the moment method added the data param and implemented the format to follow
    const formatDate = moment(date).format('MMMM Do, YYYY');
    // dynamically displaying the article in the HTML and adding the Destructure property in the Object array of the article to the HTML
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} Mins Read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join('');

// merging the articleData function expression into the article container section in the HTML
articleContainer.innerHTML = articleData;
