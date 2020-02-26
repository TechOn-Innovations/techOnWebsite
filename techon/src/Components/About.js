import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../App.css';

function About() {
  return (
    <Container fluid  className="about-us">
      <Row className="row row-about">
            <Col lg={6} className="text">
            {/* <h1>WE ARE TECHON</h1> */}
            <h2>What we do</h2>
            <p>
              By providing user-focused digital solutions
              that intersect technology and innovation,
              we assisit start-ups and SMME's to have 
              the edge and take full advantage of the 
              digital age. Solving problems is our philosophy;
              motivating us to use technology as a 
              tool to innovate and improve lives.
            </p>
            <h2>Why we do it</h2>
            <p>
             We make this possible by streamlining processes,
             making them better and faster. We belive in solving
             problems in real time, putting great effort into 
             making small differences that will have a sustainable
             impact in the future.
            </p>
        </Col>
        <Col lg={6} className="image">
            <Image className="about-img" src={require('../techOn.png')} style={{height:"100%", width: "100%"}} />
            </Col>
      </Row>
    </Container>
  );
}
export default About;
