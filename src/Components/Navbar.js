import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="nav" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand href="#home">NewsZ</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavbar;
