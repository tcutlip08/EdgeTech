import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Col>
          <Navbar.Brand>
            <Link to="/">Logo Goes Here</Link>
          </Navbar.Brand>
        </Col>

        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact-us">Contact Us</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/blog">Blog</Link>
          </Nav.Link>
          <NavDropdown title="Careers" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/careers/careers">Careers</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/careers/finding-talent">Find Talent</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/careers/join-our-team">Join our Team</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Expertise" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/expertise/accounting">Accounting</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/expertise/engineering">Engineering</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/expertise/finance">Finance</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/expertise/healthcare">Healthcare</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/expertise/IT">I.T.</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Service" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/service/contract">Contract</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/service/contract-to-hire">Contract to Hire</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/service/direct-hire">Direct Hire</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;

// <nav className="navbar">
//         <Link to="/">
//           <b>Home</b>
//         </Link>
//         &nbsp;
//         <Link to="/contact-us">
//           <b>Contact Us</b>
//         </Link>
//       </nav>
