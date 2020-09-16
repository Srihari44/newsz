import React from "react";
import { Card, Button } from "react-bootstrap";
function myCard({ imgUrl, title, clickHandler }) {
  return (
    <Card
      style={{ width: "85%", maxWidth: "280px", height: "100%" }}
      bg="secondary"
    >
      <Card.Img
        variant="top"
        style={{ height: "135px" }}
        src={imgUrl || "https://newsapi.org/images/n-logo-border.png"}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{title.split(" - ")[0]}</Card.Title>
        <Button className="w-100" onClick={clickHandler}>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}
export default myCard;
