import React from 'react';
import { Container } from 'react-bootstrap';

class Layout extends React.Component {

    render(){
        return (
            <Container style={{backgroundColor: "black"}}>
                {this.props.children}
            </Container>
        )
    }
}
export default Layout;