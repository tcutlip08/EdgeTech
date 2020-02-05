import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardPost from "../../../components/CardPost/CardPost";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./JobPosting.css";
import axios from "axios";

class JobPosting extends Component {
  state = {
    posts: ""
  };

  componentDidMount() {
    this.getPost();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  getPost() {
    axios
      .get("/api/LFEmp")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container className="JobPosting">
        <Row>
          <Col>
            <Link to="/careers/job-posting/new-job-post">Future Employee</Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {this.state.posts ? (
            this.state.posts.map(card => {
              return <CardPost title={`${card.company}`} />;
            })
          ) : (
            <>Loading</>
          )}
        </Row>
      </Container>
    );
  }
}

export default JobPosting;
