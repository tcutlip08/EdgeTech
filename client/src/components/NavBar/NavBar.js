import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <b>Home</b>
        </Link>
        &nbsp;
        <Link to="/contact-us">
          <b>Contact Us</b>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
