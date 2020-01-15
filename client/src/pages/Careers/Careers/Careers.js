import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./Careers.css";

class Careers extends Component {
  render() {
    return (
      <div className="Careers">
        <NavBar />
        <div>Dis be Careers Page</div>
      </div>
    );
  }
}

export default Careers;
