import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./SocialLink.css";

const SocialLink = props => {
  return (
    <Link to={props.link}>
      <img src={props.image} />
    </Link>
  );
};

export default SocialLink;
