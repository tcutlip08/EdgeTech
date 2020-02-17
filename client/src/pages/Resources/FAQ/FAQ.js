import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Flip from "react-reveal/Flip";
import "./FAQ.css";

class FAQ extends Component {
  render() {
    return (
      <div className="FAQPage">
        <Container>
          <Row>
            <div id="firstP">
              My tea's gone cold. I'm wondering why I got out of bed at all. The
              morning rain clouds up my window. And I can't see at all. And even
              if I could it'd all be gray. But your picture on my wall. It
              reminds me that it's not so bad, it's not so bad.We're gonna rock
              this house until we knock it down. So turn the volume loud. 'Cause
              it's mayhem 'til the A.M.. So, baby, make just like K-Fed. And let
              yourself go, let yourself go. Say "Fuck it!" before we kick the
              bucket. Life's too short to not go for broke. So everybody,
              everybody, go berserk, grab your vial, yeah.When you walked
              through the door. It was clear to me (Clear to me). You’re the one
              they adore. Who they came to see (Who they came to see). You’re a
              rock star (Baby). Everybody wants you (Everybody wants you).
              Player, who can really blame you? (Who can really blame you?).
              We’re the ones who made you.
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FAQ;
