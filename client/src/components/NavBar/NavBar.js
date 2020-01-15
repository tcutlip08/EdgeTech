import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/" className="home">Home</Link></Nav.Link>
          <Nav.Link><Link to="/contact-us" className="contactUs">Contact Us</Link></Nav.Link>
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
