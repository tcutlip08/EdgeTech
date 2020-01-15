import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./ContactUs.css";

class ContactUs extends Component {
  render() {
    return (
      <div className="ContactUs">
        <NavBar />
        <div>Dis be Contact Us Page</div>
      </div>
    );
  }
}

export default ContactUs;
