import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Star Wars</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features">Species</Nav.Link>
                        <Nav.Link href="#pricing">ProfilePage</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavBar;
