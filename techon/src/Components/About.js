import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../App.css';

function About() {
  return (
    <Container fluid  className="about-us">
      <Row className="row row-about">
            <Col sm={4} className="text">
            <h1>WE ARE TECHON</h1>
            <h2>What we do</h2>
            <p>
              By providing user-focused digital solutions
              that intersect technology and innovation,
              we assisit start-ups and SMME's to have 
              the edge and take full advantage of the 
              digital age. Solving problems is our philosophy;
              motivationg us to use technology as a 
              tool to innovate and improve lives.
            </p>
            <h2>Why we do it</h2>
            <p>
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
        </Col>
        <Col sm={4} className="image">
            <Image className="about-img" src={require('../techOn.png')} style={{height:"100%", width: "100%"}} />
            </Col>
      </Row>
    </Container>
  );
}
export default About;
