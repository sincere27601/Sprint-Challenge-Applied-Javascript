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
    .then((response) => {
        console.log(response);
        let cardsCont = document.querySelector(".cards-container");
        let arrayValues = Object.values(response.data.articles);
        arrayValues.forEach(element => {
            element.forEach(article => {
                cardsCont.appendChild(createCard(article));
                console.log("CreatedCard");
            })
        })
    })
    .catch((error) => {

    })

function createCard(object) {

    let div = document.createElement("div");
    div.classList.add("card");

    let div2 = document.createElement("div");
    div2.classList.add("headline");
    div2.innerHTML = object.headline;
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("author");
    div.appendChild(div3);

    let div4 = document.createElement("div");
    div4.classList.add("img-container");
    div3.appendChild(div4);

    let img = document.createElement("img");
    img.src = object.authorPhoto;
    div4.appendChild(img);

    let span = document.createElement("span");
    span.innerHTML = "By " + object.authorName;
    div3.appendChild(span);

    return div;

}