import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
function Header() {
  return (
    <Jumbotron className="bg-secondary">
      <Container>
        <h1 className="display-4">Hi, This is NewsZ</h1>
        <p className="lead">One n only news you ever need.</p>
      </Container>
    </Jumbotron>
  );
}
export default Header;
