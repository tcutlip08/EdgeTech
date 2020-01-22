import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/img/Logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light" id="navbar">
          <Col>
            <Navbar.Brand id="navBrand">
              <Link to="/">
                <img id="logo" src={Logo} />
              </Link>
            </Navbar.Brand>
          </Col>

          <Nav className="mr-auto" id="nav">
            <Nav.Link>
              <Link id="home" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link id="blog" to="/blog">Blog</Link>
            </Nav.Link>
            <NavDropdown title="Careers" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link id="careers" to="/careers/careers">Careers</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link id="talent" to="/careers/finding-talent">Find Talent</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link id="team" to="/careers/join-our-team">Join our Team</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Expertise" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link id="accounting" to="/expertise/accounting">Accounting</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link id="engineering" to="/expertise/engineering">Engineering</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link id="finance" to="/expertise/finance">Finance</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link id="healthcare" to="/expertise/healthcare">Healthcare</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link id="it" to="/expertise/IT">I.T.</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Service" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link id="contract" to="/service/contract">Contract</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link id="contractHire" to="/service/contract-to-hire">Contract to Hire</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link id="directHire" to="/service/direct-hire">Direct Hire</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link id="contact" to="/contact-us">Contact Us</Link>
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
