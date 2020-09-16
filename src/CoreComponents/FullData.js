import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

function Fulldata(articleObj) {
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
  return (
    <div className="d-flex justify-content-between">
      <div>
        <img
          className="modal-img"
          src={articleObj.urlToImage}
          alt={articleObj.title}
        />
        <small>
          {articleObj.publishedAt.slice(0, 10).split("-").reverse().join("-")}
        </small>
      </div>
      <p>${articleObj.author}</p>
      <p className="mb-1">${truncArticlecontent}...</p>
      <small>${articleObj.source.name}</small>
      <Button onclick="location.href = '${articleObj.url}'">
        Visit source
      </Button>
    </div>
  );
}

export default withRouter(Fulldata);
