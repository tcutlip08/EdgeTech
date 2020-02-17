import React from "react";
// import { Link } from "react-router-dom";
import "./CardPost.css";
import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

const CardPost = props => {
  return (
    <Col className="cardPost" xs={3}>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.email}</div>
      <div>{props.phone}</div>
    </Col>
  );
};

export default CardPost;
