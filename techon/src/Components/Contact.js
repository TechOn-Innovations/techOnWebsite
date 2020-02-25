import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return <Container><Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control required type="email" placeholder="name@example.com" />
  </Form.Group>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control required type="text" placeholder="your name " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control required as="textarea" rows="3" minLength="25" maxLength="250"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></Container>;
}
export default Contact;
