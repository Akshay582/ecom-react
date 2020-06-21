import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Topbar extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark" sticky="top">
                <Navbar.Brand href="#">
                    <span className="nav-brand">ecommerce</span>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Navbar.Text>
                        <Link to="/">Products</Link>
                    </Navbar.Text>
                    &emsp;
                    <Navbar.Text>
                        <Link to="/add">Add a product +</Link>
                    </Navbar.Text>
                </Nav>
                <Nav>
                    <Nav.Link href="#">John Doe</Nav.Link>
                    <Nav.Link href="#"><i className="fas fa-user"></i></Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
