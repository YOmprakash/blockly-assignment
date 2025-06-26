

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Sun } from 'lucide-react';
import Logo from '../assets/logo.png';
const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-black  navbar-dark py-3 px-4">
      <Container fluid>
        
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
        <Navbar.Brand className="text-white fw-bold">ANISH KUMAR SINHA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="gap-4 text-white justify-content-center ">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#resume" className="text-white">Resume</Nav.Link>
            <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            <Sun className="text-white" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
