import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./Accounting.css";

class Accounting extends Component {
  render() {
    return (
      <div className="Accounting">
        <NavBar />
        <div>Dis be Accounting Page</div>
      </div>
    );
  }
}

export default Accounting;
