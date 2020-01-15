import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./Contract.css";

class Contract extends Component {
  render() {
    return (
      <div className="Contract">
        <NavBar />
        <div>Dis be Contract Page</div>
      </div>
    );
  }
}

export default Contract;
