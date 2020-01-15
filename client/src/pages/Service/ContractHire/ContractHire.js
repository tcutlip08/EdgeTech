import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./ContractHire.css";

class ContractHire extends Component {
  render() {
    return (
      <div className="ContractHire">
        <NavBar />
        <div>Dis be Contract to Hire Page</div>
      </div>
    );
  }
}

export default ContractHire;
