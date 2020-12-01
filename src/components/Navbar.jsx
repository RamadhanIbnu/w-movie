import { Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const MyNavbar = () =>{
    return (
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/">
        <Navbar.Brand>MovieTask</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/nowplaying">
            <Nav.Link>Now Playing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/myfav">
            <Nav.Link>My Favorite</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default MyNavbar;