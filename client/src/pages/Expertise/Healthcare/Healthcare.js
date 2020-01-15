import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./Healthcare.css";

class Healthcare extends Component {
  render() {
    return (
      <div className="Healthcare">
        <NavBar />
        <div>Dis be Healthcare Page</div>
      </div>
    );
  }
}

export default Healthcare;
