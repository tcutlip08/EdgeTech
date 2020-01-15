import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./IT.css";

class IT extends Component {
  render() {
    return (
      <div className="IT">
        <NavBar />
        <div>Dis be IT Page</div>
      </div>
    );
  }
}

export default IT;
