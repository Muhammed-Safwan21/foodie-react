import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
  return (
    <>
      <Navbar className="navbar" bg="primary" variant="light">
        <Container>
          <Navbar.Brand className="navbar-logo" as={Link} to="/">
            <h2>Foodie.</h2>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="nav-item" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-item" as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
