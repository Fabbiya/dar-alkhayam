import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from './../../resources/logo.png'
import './Menu.css'
export default function Menu() {
  return (
    <Navbar bg="transparent" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="35" alt='Dar al Khayam General Trading LLC'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='px-4 '>Home</Nav.Link>
            <Nav.Link href="#about" className='px-4'>About Us</Nav.Link>
            <Nav.Link href="#services" className='px-4'>Services</Nav.Link>
            <Nav.Link href="#contact" className='px-4'>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
