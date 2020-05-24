let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let dataUrl =
  "http://newsapi.org/v2/top-headlines?country=in&apiKey=c085b3037a4d489b9887bdf45c143313";

$(document).ready(function () {
  $.get(proxyUrl+dataUrl, function (data) {
    let totalArticles = data.articles;
    totalArticles.forEach((article) => {
      if (article.content!=null){
      truncArticlecontent = article.content.split(" ").splice(0,20).join(" ");
      }
      else {truncArticlecontent = article.description.split(" ").splice(0,20).join(" ")}
      $(".js-headlines-container").append(
        `<div class="news-box">
        <div>
            <img class="news-img" src="${article.urlToImage}" alt="Card image cap">
            <div class="news-body">
              <h5 class="news-title">${article.title}</h5>
              <p class="news-content">${truncArticlecontent}...</p>
              </div>
              </div>
              <a href="${article.url}" class="btn">Read more</a>
          </div>`
      );
    });
  });
});
