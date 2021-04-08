import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="menu">
      <Container>
        <Navbar.Brand className="logo">
          <Link className="p-3" to="/">
            <img src={require('../../logo.png').default} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto menu__items">
            <Link className="menu-links" to="/">
              Home
            </Link>
            <Link className="menu-links" to="/donation">
              Donation
            </Link>
            <Link className="menu-links" to="/addEvent">
              Add Events
            </Link>
            <Link className="menu-links" to="/blog">
              Blog
            </Link>
            <Button className="button button--login">
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="button button--admin ml-2">
              <Link to="/admin">Admin</Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
