// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response);
    let topics = Object.values(response.data.articles)
    console.log(topics);

    topics.forEach(headline => {
      headline.forEach(card => {
        let newArticle = cardCreator(card);
        let parentElement = document.querySelector('.cards-container');
        parentElement.append(newArticle)
      });
    });
  })
  .catch(err => {
    console.log(err);
  });

  function cardCreator(topic) {
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    const span = document.createElement('span');

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imageDiv.classList.add("img-container");

    headlineDiv.textContent = topic.headline;
    image.src = topic.authorPhoto;
    span.textContent = topic.authorName;

    imageDiv.append(image);
    authorDiv.append(imageDiv);
    authorDiv.append(span);
    cardDiv.append(headlineDiv);
    cardDiv.append(authorDiv);

    return cardDiv;
  };