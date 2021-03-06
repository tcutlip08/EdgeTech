import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";
import AccountingImage from "../../../assets/img/RandomImages/AI-accounting-finance-blog-min.jpg";
// import "./Accounting.css";
import "../Expertise.css";

class Accounting extends Component {
  render() {
    return (
      <div className="AccountingPage">
      
        <br />
        <br />

        <Jumbotron fluid id="jumbotronImage">
          <img id="Image" src={AccountingImage} alt="accounting" />
        </Jumbotron>

        <br />
        <br />

        <Container>
          <Row>
            <div id="firstP">
              I'm Slim Shady, yes, I'm the real Shady. All you other Slim Shadys
              are just imitating. So won't the real Slim Shady please stand up.
              Please stand up, please stand up?. 'Cause I'm Slim Shady, yes, I'm
              the real Shady. All you other Slim Shadys are just imitating. So
              won't the real Slim Shady please stand up. Please stand up, please
              stand up?When you walked through the door. It was clear to me
              (Clear to me). You’re the one they adore. Who they came to see
              (Who they came to see). You’re a rock star (Baby). Everybody wants
              you (Everybody wants you). Player, who can really blame you? (Who
              can really blame you?). We’re the ones who made you.We're gonna
              rock this house until we knock it down. So turn the volume loud.
              'Cause it's mayhem 'til the A.M.. So, baby, make just like K-Fed.
              And let yourself go, let yourself go. Say "Fuck it!" before we
            </div>
          </Row>
        </Container>

        <br />
        <br />
        <br />
        <br />

          <Jumbotron fluid id="tabs">
              <Row>
                <Col className="smallIcons">
                  <Flip ssrFadeout delay={1200} duration={1000}>
                    <i className="far fa-money-bill-alt"></i>
                  </Flip>
                  <Row className="headerSmallIcons">MoneyBillAlt</Row>
                  <Row>
                    <h4>
                      I'm Slim Shady, yes, I'm the real Shady. All you other
                      Slim Shadys are just imitating. So won't the real Slim
                      Shady please stand up. Please stand up, please stand up?.
                      'Cause I'm Slim Shady, yes, I'm the real Shady.
                    </h4>
                  </Row>
                </Col>
                <Col className="smallIcons">
                  <Flip ssrFadeout delay={1500} duration={1000}>
                    <i className="fas fa-coins"></i>
                  </Flip>
                  <Row className="headerSmallIcons">Coins</Row>
                  <Row>
                    <h4>
                      I'm Slim Shady, yes, I'm the real Shady. All you other
                      Slim Shadys are just imitating. So won't the real Slim
                      Shady please stand up. Please stand up, please stand up?.
                      'Cause I'm Slim Shady, yes, I'm the real Shady.
                    </h4>
                  </Row>
                </Col>
              </Row>
          </Jumbotron>

        <br />
        <br />

        <Container id="HeaderWithBullets">
          <Row>
            <Col>
              <h1 id="splitheader">Header</h1>
              <p>
                I'm Slim Shady, yes, I'm the real Shady. All you other Slim
                Shadys are just imitating. So won't the real Slim Shady please
                stand up. Please stand up, please stand up?. 'Cause I'm Slim
                Shady, yes, I'm the real Shady. All you other Slim Shadys are
                just imitating. So won't the real Slim Shady please stand up.
                Please stand up, please stand up?When you walked through the
                door. It was clear to me (Clear to me). You’re the one they
                adore. Who they came to see (Who they came to see). You’re a
                rock star (Baby). Everybody wants you (Everybody wants you).
                Player, who can really blame you? (Who can really blame you?).
                We’re the ones who made you.We're gonna rock this house until we
                knock it down. So turn the volume loud. 'Cause it's mayhem 'til
                the A.M.. So, baby, make just like K-Fed. And let yourself go,
                let yourself go. Say "Fuck it!" before we kick the bucket.
                Life's too short to not go for broke. So everybody, everybody,
                go berserk, grab your vial, yeah.
              </p>
            </Col>

            <Col>
              <Row>
                <Col>
                  <h1 id="splitheader">Header</h1>
                  <ul>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                  </ul>
                </Col>
                <Col>
                  <h1 id="splitheader">Header</h1>
                  <ul>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 id="splitheader">Header</h1>
                  <ul>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                  </ul>
                </Col>
                <Col>
                  <h1 id="splitheader">Header</h1>
                  <ul>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                    <li id="pointsOfInterest">something</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Accounting;
