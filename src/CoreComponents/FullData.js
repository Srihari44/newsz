import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Fulldata(props) {
  const totalData = props.location.state.totalData;
  const [index, indexHandler] = useState(props.location.state.itemIdx);

  let article = totalData[index];

  let validContent = (content, description) => {
    let tempContent = content || description || "";
    if (content && description) {
      tempContent = description.length > content.length ? description : content;
    }
    return tempContent.split("[+")[0];
  };

  let validDateTime = (dateStr) => {
    let date = new Date(dateStr).toString();
    let timeStr = date.split(" ")[4].slice(0, 5);
    let H = timeStr.slice(0, 2);
    let h = H % 12 || 12;
    h = h < 10 ? "0" + h : h;
    let ampm = H < 12 || H === 24 ? "AM" : "PM";
    let timeVal = `${h}:${timeStr.slice(3, 5)} ${ampm}`;
    let dateVal = dateStr.slice(0, 10).split("-").reverse().join("/");
    return timeVal + ", " + dateVal;
  };

  let validImgUrl = (imgurl) => {
    return imgurl.indexOf("http://") !== -1
      ? imgurl.replace("http://", "https://")
      : imgurl;
  };

  let validadedArticle = {
    ...article,
    title: article.title.split(" - ")[0],
    content: validContent(article.content, article.description),
    publishedAt: validDateTime(article.publishedAt),
    urlToImage: validImgUrl(article.urlToImage),
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
            className="btn"
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
