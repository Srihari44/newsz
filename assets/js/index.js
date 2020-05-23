let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let dataUrl =
  "http://newsapi.org/v2/top-headlines?country=in&apiKey=c085b3037a4d489b9887bdf45c143313";

$(document).ready(function () {
  $.get(proxyUrl + dataUrl, function (data) {
    let totalArticles = data.articles;
    totalArticles.forEach((article) => {
      if (article.content!=null){
      truncArticlecontent = article.content.split(" ").splice(0,25).join(" ");
      }
      else {truncArticlecontent = article.description}
      $(".js-news-container").append(
        `<div class="card" style="width:18rem;">
            <img class="card-img-top" src="${article.urlToImage}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${truncArticlecontent}...</p>
              <a href="${article.url}" class="btn btn-primary">Read more</a>
            </div>
          </div>
          <hr class="my-4">`
      );
    });
  });
});
