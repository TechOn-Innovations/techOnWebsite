import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import logo from "../logo.png";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="custom-nav">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/" className="custom-link">
            TechOnInnovations
          </Nav.Link>
          <Nav.Link className="custom-link" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="custom-link" href="/services">
            Services
          </Nav.Link>
          <Nav.Link className="custom-link" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
