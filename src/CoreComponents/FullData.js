import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Fulldata(props) {
  const articleObj = props.location.state;

  let content = articleObj.content || articleObj.description || "";
  if (articleObj.content && articleObj.description) {
    content =
      articleObj.description.length > articleObj.content.length
        ? articleObj.description
        : articleObj.content;
  }
  return (
    <div className="fullpost px-4">
      <h3 style={{ fontSize: "2em", fontWeight: "200" }}>
        {articleObj.title.split(" - ")[0]}
      </h3>
      <p>
        {articleObj.publishedAt.slice(0, 10).split("-").reverse().join("-")}
      </p>
      <Row sm={1} md={2}>
        <Col sm={4}>
          <img
            className="rounded w-100 h-75"
            src={
              articleObj.urlToImage ||
              "https://newsapi.org/images/n-logo-border.png"
            }
            alt={articleObj.title}
          />
          <p className="mt-2">{articleObj.author ? articleObj.author : null}</p>
        </Col>
        <Col>
          <div>
            <p style={{ fontSize: "1.125em" }} className="mb-2 text-justify">
              {content.split("[+")[0]}
            </p>
            <a className="btn mt-4 align-self-end" href={articleObj.url}>
              Read more on {articleObj.source.name}
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(Fulldata);
