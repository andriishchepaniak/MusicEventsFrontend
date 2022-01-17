import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";


const Header = (props) => {
    var state = useSelector(state => state.auth);

    var text = state.user === null ? "Not signed" : `Signed in as: ${state.user.username}`;

    return (
        <Navbar className="mb-3" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/profile"
                        style={
                            {color: '#FFF'}
                    }>App</Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/login"
                            style={
                                {color: '#FFF'}
                        }>Login</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/register"
                            style={
                                {color: '#FFF'}
                        }>Register</Link>
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={
                            {color: '#FFF'}}>
                         {text}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
