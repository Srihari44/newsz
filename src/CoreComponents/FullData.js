import React from "react";
import { withRouter } from "react-router-dom";

function Fulldata(props) {
  const articleObj = props.location.state;
  console.log(articleObj);
  const content = articleObj.content || articleObj.description || "";
  return (
    <div className="fullpost m-3 d-flex flex-column justify-content-between">
      <div>
        <h3>{articleObj.title}</h3>
        <img
          style={{ maxWidth: "300px" }}
          className="w-100 h-75 rounded"
          src={
            articleObj.urlToImage ||
            "https://newsapi.org/images/n-logo-border.png"
          }
          alt={articleObj.title}
        />
        <small>
          {articleObj.publishedAt.slice(0, 10).split("-").reverse().join("-")}
        </small>
      </div>
      <p>{articleObj.author}</p>
      <p className="mb-2">{content.split("[+")[0]}</p>
      <small className="mb-4">{articleObj.source.name}</small>
      <a style={{ maxWidth: "300px" }} className="btn" href={articleObj.url}>
        Visit source
      </a>
    </div>
  );
}

export default withRouter(Fulldata);
