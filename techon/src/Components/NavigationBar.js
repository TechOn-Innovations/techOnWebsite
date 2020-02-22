import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../App.css'
import logo from '../logo.svg'


function NavBar () {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">
           <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/">TechOnInnovations</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default NavBar;