import React from 'react';
import Container from '@material-ui/core/Container';
import logo from '/home/tebogomothelo/Code/techOnWebsite/techon/src/Images/logo.jpg'


function Home(){
    return(
    <Container maxWidth="sm">
        <img src={logo} style={{height: '100%', width:'100%'}}alt="logo" /></Container>
    )
}

export default Home;