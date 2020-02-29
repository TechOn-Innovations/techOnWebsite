import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../App.css'
import logo from '../tech1.png'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Collapse>  
    <Nav className="mr-auto">
    </Nav>
    <Nav>
    <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/services">Solutions</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
export default NavBar;
