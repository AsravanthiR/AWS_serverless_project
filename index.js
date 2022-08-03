let endpoint =
  "https://w6r8w9lldk.execute-api.us-east-1.amazonaws.com/deploy/kanye";

let imageElement = document.querySelector("#unsplashImage");

let kanyeQuote = document.querySelector(".imageDetails");

fetch(endpoint)
  .then(function (response) {
    return response.json();

    //console.log(endpoint);
  })

  .then(function (jsonData) {
    imageElement.src = jsonData.url;

    kanyeQuote.textContent += jsonData.quote;
  });
