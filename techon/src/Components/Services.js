import React from 'react';
import { Container, Row, Col, Card, Button} from "react-bootstrap";

function Services() {
        return (
            <Container>
                <Row style={{display: "flex"}}>
                    <Col sm={4}>
                      <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                           <Card.Title>Development</Card.Title>
                           <Card.Text>
                           We help SME's move into the digital age by
                           providing innovative solutions that are custom
                           made to suit the needs of your business. We build
                           custom software, websites and web applications.
                           </Card.Text>
                           <Button variant="primary">MORE</Button>
                        </Card.Body>
                     </Card>
                    </Col>
                    <Col sm={4}>
                   <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                           <Card.Title>UX/UI</Card.Title>
                           <Card.Text>
                            At techOn, we understand the importance of UX.
                            We know that without the users, the product would
                            not exist. That is why we provide UX/UI design and
                            UX testing to our clients.
                           </Card.Text>
                           <Button variant="primary">MORE</Button>
                        </Card.Body>
                     </Card>
                    </Col>
                    <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                           <Card.Title>Design</Card.Title>
                           <Card.Text>
                           Coming soon....
                           </Card.Text>
                           <Button variant="primary">MORE</Button>
                        </Card.Body>
                     </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
export default Services;