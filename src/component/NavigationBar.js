import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./NavigationBar.module.css";

function NavigationBar({ setCategory }) {
  return (
    <Navbar
      expand="sm"
      defaultActiveKey="#home"
      className={`${classes.bar} bg-body-tertiary`}
      data-bs-theme="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Brand href="#home">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="tabs">
            <Nav.Link href="#home" onClick={() => setCategory("general")}>
              Home
            </Nav.Link>
            <Nav.Link href="#business" onClick={() => setCategory("business")}>
              Business
            </Nav.Link>
            <Nav.Link
              href="#entertainment"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </Nav.Link>
            <Nav.Link href="#science" onClick={() => setCategory("science")}>
              Science
            </Nav.Link>
            <Nav.Link href="#sports" onClick={() => setCategory("sports")}>
              Sports
            </Nav.Link>
            <Nav.Link
              href="#technology"
              onClick={() => setCategory("technology")}
            >
              Technology
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
