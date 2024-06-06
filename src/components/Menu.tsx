import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

type Props = {}

function Menu({}: Props) {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Sooyeon's Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">ABOUT ME</Nav.Link>
          <Nav.Link href="/projects">PROJECTS</Nav.Link>
          <Nav.Link href="/contact">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu