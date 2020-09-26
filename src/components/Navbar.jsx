import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const MyNavbar = () =>{
    return (
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">WMovie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="NowPlaying">
                <Nav.Link>Now Playing</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#"></Nav.Link>
            <Nav.Link eventKey={2} href="#"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default MyNavbar;