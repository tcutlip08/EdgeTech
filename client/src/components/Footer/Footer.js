import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-outer">
        <div className="container">
          <div className="row">
          <Col>Hello</Col>
          <Col>There</Col>
          <Col>Shorty</Col>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
