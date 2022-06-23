import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./../../resources/logo.png";
import "./Menu.css";
export default function Menu(props) {
  const handleClose = () => {
    let navbar = document.getElementById("basic-navbar-nav");
    console.log(navbar)
    navbar.className = "navbar-collapse collapsing "
  };

  return (
    <Navbar bg={props.background} expand="lg" variant={props.theme} collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="35" alt="Dar al Khayam General Trading LLC" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <button
            type="button"
            class="btn-close d-lg-none btn-close-white mt-3"
            aria-label="Close"
            style={{ float: "right" }}
            onClick={handleClose}
          ></button>
          <Nav className="me-auto">
            <Nav.Link href="/" className="px-4 ">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="px-4">
              About Us
            </Nav.Link>
            <Nav.Link href="/services" className="px-4">
              Services
            </Nav.Link>
            <Nav.Link href="/contact" className="px-4">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
