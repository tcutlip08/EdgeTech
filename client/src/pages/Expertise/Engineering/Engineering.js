import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./Engineering.css";

class Engineering extends Component {
  render() {
    return (
      <div className="Engineering">
        <NavBar />
        <div>Dis be Engineering Page</div>
      </div>
    );
  }
}

export default Engineering;
