import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <NavBar />
        <div>Dis be Blog Page</div>
      </div>
    );
  }
}

export default Blog;
