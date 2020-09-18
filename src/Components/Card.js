import React from "react";
import { Card } from "react-bootstrap";
function myCard({ imgUrl, title, clickHandler }) {
  return (
    <Card style={{ maxWidth: "260px" }} className="h-100" bg="secondary">
      <Card.Img
        variant="top"
        style={{ height: "135px", minWidth: "140px" }}
        src={imgUrl || "https://newsapi.org/images/n-logo-border.png"}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>
          {title.split(" - ")[0].split(" ").slice(0, 8).join(" ") + "..."}
        </Card.Title>
        <button className="btn w-100" onClick={() => clickHandler()}>
          Read more
        </button>
      </Card.Body>
    </Card>
  );
}
export default myCard;
