import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Fulldata(props) {
  const totalData = props.location.state.totalData;
  const [index, indexHandler] = useState(props.location.state.itemIdx);

  let content = totalData[index].content || totalData[index].description || "";
  if (totalData[index].content && totalData[index].description) {
    content =
      totalData[index].description.length > totalData[index].content.length
        ? totalData[index].description
        : totalData[index].content;
  }
  return (
    <div className="fullpost px-4">
      <h3 style={{ fontSize: "2em", fontWeight: "200" }}>
        {totalData[index].title.split(" - ")[0]}
      </h3>
      <p>
        {totalData[index].publishedAt
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-")}
      </p>
      <Row sm={1} md={2}>
        <Col sm={4}>
          <img
            className="rounded w-100 h-75"
            src={
              totalData[index].urlToImage ||
              "https://newsapi.org/images/n-logo-border.png"
            }
            alt={totalData[index].title}
          />
          <p className="mt-2">
            {totalData[index].author ? totalData[index].author : null}
          </p>
        </Col>
        <Col>
          <div>
            <p style={{ fontSize: "1.125em" }} className="mb-2 text-justify">
              {content.split("[+")[0]}
            </p>
            <a className="btn mt-4 align-self-end" href={totalData[index].url}>
              Read more on {totalData[index].source.name}
            </a>
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-between mt-4">
        {totalData[index - 1] ? (
          <button
            id="btn-nav"
            className="btn"
            onClick={() => indexHandler(index - 1)}
          >
            Previous article
          </button>
        ) : null}
        {totalData[index + 1] ? (
          <button
            id="btn-nav"
            className="btn btn-nav"
            onClick={() => indexHandler(index + 1)}
          >
            Next article
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Fulldata);
