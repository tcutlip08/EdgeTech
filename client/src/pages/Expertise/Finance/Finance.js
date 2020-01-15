import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./Finance.css";

class Finance extends Component {
  render() {
    return (
      <div className="Finance">
        <NavBar />
        <div>Dis be Finance Page</div>
      </div>
    );
  }
}

export default Finance;
