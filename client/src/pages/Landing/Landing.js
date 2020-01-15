import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <NavBar />
        <div>Dis be Landing Page</div>
      </div>
    );
  }
}

export default Landing;
