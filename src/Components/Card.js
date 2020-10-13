import React from "react";
import { Card } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";

function myCard({ imgUrl, title, clickHandler }) {
  let validImgUrl = "/logo.png";
  let validTitle =
    title.split(" - ")[0].split(" ").slice(0, 8).join(" ") + "...";
  if (imgUrl) {
    validImgUrl = imgUrl.includes("http://")
      ? imgUrl.replace("http://", "https://")
      : imgUrl;
  }

  return (
    <Card style={{ maxWidth: "260px" }} className="h-100" bg="secondary">
      <Card.Img
        variant="top"
        style={{ height: "135px", minWidth: "140px" }}
        src={validImgUrl}
        onError={(e) => (e.target.src = "/logo.png")}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{validTitle}</Card.Title>
        <button className="btn w-100" onClick={clickHandler}>
          Read more <ArrowRightShort />
        </button>
      </Card.Body>
    </Card>
  );
}
export default myCard;
