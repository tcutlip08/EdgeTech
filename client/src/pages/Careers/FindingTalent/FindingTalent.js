import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardPost from "../../../components/CardPost/CardPost";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FindingTalent.css";
import axios from "axios";

class FindingTalent extends Component {
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
      .get("/api/LFJob")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container className="FindingTalent">
        <Row>
          <Col>
            <Link to="/careers/finding-talent/new-talent-post">
              Need a position filled?
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {this.state.posts ? (
            this.state.posts.map(card => {
              return (
                <CardPost
                  key={card.email}
                  title={`${card.first} ${card.last}`}
                  phone={card.phone}
                  email={card.email}
                  description={card.occupation}
                />
              );
            })
          ) : (
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </Row>
      </Container>
    );
  }
}

export default FindingTalent;
