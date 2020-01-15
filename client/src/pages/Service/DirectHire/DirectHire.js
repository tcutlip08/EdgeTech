import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./DirectHire.css";

class DirectHire extends Component {
  render() {
    return (
      <div className="DirectHire">
        <NavBar />
        <div>Dis be Direct Hire Page</div>
      </div>
    );
  }
}

export default DirectHire;
