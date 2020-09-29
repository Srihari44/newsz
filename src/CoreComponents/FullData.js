import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Fulldata(props) {
  const totalData = props.location.state.totalData;
  const [index, indexHandler] = useState(props.location.state.itemIdx);

  let article = totalData[index];
  let validContent = article.content || article.description || "";
  if (article.content && article.description) {
    validContent =
      article.description.length > article.content.length
        ? article.description
        : article.content;
  }

  let validadedArticle = {
    ...article,
    title: article.title.split(" - ")[0],
    content: validContent.split("[+")[0],
    publishedAt: article.publishedAt
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("-"),
    urlToImage:
      article.urlToImage || "https://newsapi.org/images/n-logo-border.png",
    prevArticle: totalData[index - 1],
    nextArticle: totalData[index + 1],
  };

  return (
    <div className="fullpost px-4">
      <h3 style={{ fontSize: "2em", fontWeight: "200" }}>
        {validadedArticle.title}
      </h3>
      <p>{validadedArticle.publishedAt}</p>
      <Row sm={1} md={2}>
        <Col sm={4}>
          <img
            className="rounded w-100 h-75"
            src={validadedArticle.urlToImage}
            alt={validadedArticle.title}
          />
          {validadedArticle.author ? (
            <p className="mt-2">{validadedArticle.author}</p>
          ) : null}
        </Col>
        <Col>
          <div>
            <p style={{ fontSize: "1.125em" }} className="mb-2 text-justify">
              {validadedArticle.content}
            </p>
            <a className="btn mt-4 align-self-end" href={validadedArticle.url}>
              Read more on {validadedArticle.source.name}
            </a>
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-between mt-4">
        {validadedArticle.prevArticle ? (
          <button
            id="btn-nav"
            className="btn"
            onClick={() => indexHandler(index - 1)}
          >
            Previous article
          </button>
        ) : (
          <button className="btn" style={{ visibility: "hidden" }}></button>
        )}
        {validadedArticle.nextArticle ? (
          <button
            id="btn-nav"
            className="btn btn-nav"
            onClick={() => indexHandler(index + 1)}
          >
            Next article
          </button>
        ) : (
          <button className="btn" style={{ visibility: "hidden" }}></button>
        )}
      </div>
    </div>
  );
}

export default withRouter(Fulldata);
