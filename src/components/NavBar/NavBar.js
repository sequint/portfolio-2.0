import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/portfolio-logo.png'
import './NavBar.css'

const NavBar = () => {
  return(
    <Navbar className="navbar-container"expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Steven Quintana logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Philosophy</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Toolbealt</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  
}

export default NavBar
