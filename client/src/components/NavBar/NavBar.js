import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/img/LogoLightGrey.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar id="navbar">
          <Col>
            <Navbar.Brand id="navBrand">
              <Link to="/">
                <img id="logo" src={Logo} alt="Logo" />
              </Link>
            </Navbar.Brand>
          </Col>

          <Nav className="mr-auto" id="nav">
            <Nav.Link id="home" href="/">
              Home
            </Nav.Link>
            <NavDropdown title="Resources">
              <NavDropdown.Item id="blog" href="/resources/blog">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item id="faq" href="/resources/faq">
                FAQ's
              </NavDropdown.Item>
              <NavDropdown.Item
                id="case-studies"
                href="/resources/case-studies"
              >
                Case Studies
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Careers">
              <NavDropdown.Item id="job-posting" href="/careers/job-posting">
                Job Posting
              </NavDropdown.Item>
              <NavDropdown.Item
                id="finding-talent"
                href="/careers/finding-talent"
              >
                Find Talent
              </NavDropdown.Item>
              <NavDropdown.Item
                id="join-our-team"
                href="/careers/join-our-team"
              >
                Join our Team
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Expertise">
              <NavDropdown.Item id="it" href="/expertise/IT">
                IT
              </NavDropdown.Item>
              <NavDropdown.Item id="engineering" href="/expertise/engineering">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Item id="healthcare" href="/expertise/healthcare">
                Healthcare
              </NavDropdown.Item>
              <NavDropdown.Item id="accounting" href="/expertise/accounting">
                Accounting
              </NavDropdown.Item>
              <NavDropdown.Item id="finance" href="/expertise/finance">
                Finance
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Service" id="service">
              <NavDropdown.Item id="contract" href="/service/contract">
                Contract
              </NavDropdown.Item>
              <NavDropdown.Item
                id="contract-hire"
                href="/service/contract-to-hire"
              >
                Contract to Hire
              </NavDropdown.Item>
              <NavDropdown.Item id="direct-hire" href="/service/direct-hire">
                Direct Hire
              </NavDropdown.Item>
            </NavDropdown>
            <Nav className="mr-auto">
              <Nav.Link id="contact-us" href="/contact-us">
                Contact Us
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar>
        <hr />
      </>
    );
  }
}

export default NavBar;
