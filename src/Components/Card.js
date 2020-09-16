import React from "react";
import { Card, Button } from "react-bootstrap";
function myCard({ imgUrl, title, clickHandler }) {
  return (
    <Card className="" style={{ width: "85%"}} bg="secondary">
      <Card.Img
        variant="top"
        style={{height:'135px'}}
        src={imgUrl || "https://newsapi.org/images/n-logo-border.png"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}
export default myCard;
