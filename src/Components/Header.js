import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
function Header() {
  return (
    <Jumbotron className="bg-secondary">
      <Container>
        <h1 style={{ fontSize: "2.5rem" }}>Hi, This is NewsZ</h1>
        <p style={{ fontSize: "1.25rem" }}>One n only news you ever need.</p>
      </Container>
    </Jumbotron>
  );
}
export default Header;
