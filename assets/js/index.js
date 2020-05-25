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
      $(conClass).append(
        `<div class="news-box">
        <div>
            <img class="news-img" src="${article.urlToImage}" alt="${
          article.title
        }">
            <div class="news-body">
              <h5 class="news-title">${article.title}</h5>
              </div>
              </div>
              <button class="btn" onclick="openArticle(${JSON.stringify(article)
                .split('"')
                .join("&quot;")})">Read more</a>
          </div>`
      );
    });
  });
};

let openArticle = (articleObj) => {
  $("#articleModal").modal("show");
  $(".js-Article-con").empty();
  if (articleObj.content != null) {
    truncArticlecontent = articleObj.content.split(" ").splice(0, 25).join(" ");
  } else {
    if (articleObj.description != null) {
      truncArticlecontent = articleObj.description
        .split(" ")
        .splice(0, 25)
        .join(" ");
    } else {
      truncArticlecontent = "";
    }
  }
  document.getElementById("articleTitle").innerText = articleObj.title;
  $(".js-Article-con").append(
    `<div class="d-flex justify-content-between">
      <img class="modal-img" src="${articleObj.urlToImage}" alt="${
      articleObj.title
    }">
        <small>${articleObj.publishedAt
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-")}</small>
        </div>
        <p>${articleObj.author}</p>
        <p class="mb-1">${truncArticlecontent}...</p>
      `
  );
  $(".js-Article-footer").empty();
  $(".js-Article-footer").append(
    `
      <small>${articleObj.source.name}</small>
      <button type="button" class="btn" onclick="location.href = '${articleObj.url}'">Visit source</button>
      `
  );
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
        <small>${article.publishedAt
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-")}</small>
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
