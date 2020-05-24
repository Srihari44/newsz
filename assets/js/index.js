let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let dataUrl = "http://newsapi.org/v2/top-headlines?country=in";
const apiKey = "&apiKey=c085b3037a4d489b9887bdf45c143313";

$(document).on({
  ajaxStop: function () {
    $(".spinner-border").hide();
  },
});

$(document).ready(function () {
  getData("", "headlines");
  getData("&category=business", "business");
  getData("&category=entertainment", "entertainment");
  getData("&category=health", "health");
  getData("&category=science", "science");
  getData("&category=sports", "sports");
  getData("&category=technology", "technology");
});

let getData = (query, conName) => {
  let queryUrl = proxyUrl + dataUrl + query + apiKey;
  let conClass = ".js-" + conName + "-container";
  $.get(queryUrl, function (data) {
    let totalArticles = data.articles;
    totalArticles.forEach((article) => {
      if (article.content != null) {
        truncArticlecontent = article.content
          .split(" ")
          .splice(0, 20)
          .join(" ");
      } else {
        if (article.description != null) {
          truncArticlecontent = article.description
            .split(" ")
            .splice(0, 20)
            .join(" ");
        } else {
          truncArticlecontent = "";
        }
      }
      $(conClass).append(
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
  }).then(() => {
    console.log("Done " + conName);
  });
};

let searcharticles = () => {
  const inpValue = document.getElementById("queryInp").value;
  let searchUrl =
    proxyUrl +
    "https://newsapi.org/v2/everything?q=" +
    inpValue +
    "&page=1" +
    apiKey;
  $("#searchModal").modal("show");
  $(".js-Search-con").empty();
  document.getElementById("searchTitle").innerText =
    "Search results for " + inpValue;
  $(".js-Search-con").empty();
  $.get(searchUrl, (results) => {
    let totalArticles = results.articles;
    totalArticles.forEach((article) => {
      let truncArticlecontent = article.description
        .split(" ")
        .splice(0, 20)
        .join(" ");
      $(".js-Search-con").append(
        ` <a href="${
          article.url
        }" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${article.title}</h5>
        <small>${article.publishedAt.slice(0, 10)}</small>
        </div>
        <p class="mb-1">${truncArticlecontent}</p>
      <small>${article.source.name}</small>
      </a>`
      );
    });
  });
};

window.addEventListener("hashchange", function () {
  scrollBy(0, -50);
});
