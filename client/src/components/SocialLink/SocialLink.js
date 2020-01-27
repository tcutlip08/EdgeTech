import React from "react";
import { Link } from "react-router-dom";
import "./SocialLink.css";

const SocialLink = props => {
  return (
    <Link to={props.link}>
      <i className={props.image} id="social-media" />
    </Link>
  );
};

export default SocialLink;
