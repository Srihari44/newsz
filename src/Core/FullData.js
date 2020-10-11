import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import moment from "moment";
import { Slide } from "react-reveal";

function Fulldata(props) {
  const totalData = props.location.state.totalData;
  const [index, indexHandler] = useState(props.location.state.itemIdx);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let article = totalData[index];

  let validContent = (content, description) => {
    let tempContent = content || description || "";
    if (content && description) {
      tempContent = description.length > content.length ? description : content;
    }
    return tempContent.split("[+")[0];
  };

  let validDateTime = (dateStr) => {
    let isNearDate = moment().diff(moment(dateStr), "days") <= 1;
    return isNearDate
      ? moment(dateStr).fromNow()
      : moment(dateStr).format("dddd, DD/MM/YYYY, hh:mm A");
  };

  let validImgUrl = (imgUrl) => {
    let validImgUrlStr = "/logo.png";
    if (imgUrl) {
      validImgUrlStr =
        imgUrl.indexOf("http://") !== -1
          ? imgUrl.replace("http://", "https://")
          : imgUrl;
    }
    return validImgUrlStr;
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
    <Slide left>
      <div className="fullpost px-4">
        <h3 style={{ fontSize: "2em", fontWeight: "200" }}>
          {validadedArticle.title}
        </h3>
        <p>{validadedArticle.publishedAt}</p>
        <Row sm={1} md={2}>
          <Col sm={4}>
            <img
              className="rounded w-100"
              style={{ height: "225px" }}
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
              <a
                className="btn mt-4 align-self-end"
                href={validadedArticle.url}
              >
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
              onMouseDown={(e) => e.preventDefault()}
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
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => indexHandler(index + 1)}
            >
              Next article
            </button>
          ) : (
            <button className="btn" style={{ visibility: "hidden" }}></button>
          )}
        </div>
      </div>
    </Slide>
  );
}

export default withRouter(Fulldata);
