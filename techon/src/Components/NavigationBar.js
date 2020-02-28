import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import Footer from './Footer';
import Services from './Services';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../App.css";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import  '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Image } from 'react-bootstrap';

function NavBar() {
  return (
   <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Nav id="navbar" defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="about">
                        <NavText>
                            About
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="services">
                        <NavText>
                           Services
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contact">
                        <NavText>
                            Contact
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <Home />} />
                <Route path="/about" component={props => <About />} />
                <Route path="/services" component={props => <Services />} />
                <Route path="/contact" component={props => <Contact />} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
  );
}

export default NavBar;
