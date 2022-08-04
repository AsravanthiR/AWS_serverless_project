let endpoint =
  "https://w6r8w9lldk.execute-api.us-east-1.amazonaws.com/deploy/kanye";

let imageElement = document.querySelector("#imageDetails");

let kanyeQuote = document.querySelector(".quoteDetails");

fetch(endpoint)
  .then(function (response) {
    return response.json();

    //console.log(endpoint);
  })

  .then(function (jsonData) {
    imageElement.src = jsonData.url;

    kanyeQuote.textContent += jsonData.quote;
  });
