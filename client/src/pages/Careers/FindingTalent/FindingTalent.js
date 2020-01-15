import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import "./FindingTalent.css";

class FindingTalent extends Component {
  render() {
    return (
      <div className="FindingTalent">
        <NavBar />
        <div>Dis be FindingTalent Page</div>
      </div>
    );
  }
}

export default FindingTalent;
