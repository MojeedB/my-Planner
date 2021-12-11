import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/home">myPlanner</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="bg-primary mt-sm-1 ms-auto">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/task">
                                    Task
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/calendar">
                                    Calender
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about-us">
                                    About Us
                                </NavLink>
                            </li>
                            {/* Route to landing for testing */}
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/landing">
                                    Landing
                                </NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Navigation
