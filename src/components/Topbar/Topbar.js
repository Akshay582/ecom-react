import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Topbar extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark" sticky="top">
                <Navbar.Brand href="#">
                    <span className="nav-brand">ecommerce</span>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Products</Nav.Link>
                    <Nav.Link href="#">Add a product+</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#">John Doe</Nav.Link>
                    <Nav.Link href="#">fontawesome</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
