import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="nav" variant="dark" sticky="top" expand="lg">
      <NavLink to="/" exact>NewsZ</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/business">Business</NavLink>
          <NavLink to="/entertainment">Entertainment</NavLink>
          <NavLink to="/health">Health</NavLink>
          <NavLink to="/science">Science</NavLink>
          <NavLink to="/sports">Sports</NavLink>
          <NavLink to="/technology">Technology</NavLink>
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
