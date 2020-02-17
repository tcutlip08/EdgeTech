import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Flip from "react-reveal/Flip";
import HealthCareImage from "../../../assets/img/RandomImages/healthCare.png";
// import "./Healthcare.css";
import "../Expertise.css";

class Healthcare extends Component {
  render() {
    return (
      <div className="HealthCarePage">
        <br />
        <br />

        <Jumbotron fluid id="jumbotronImage">
          <img id="Image" src={HealthCareImage} alt="healthcare" />
        </Jumbotron>

        <br />
        <br />

        <Container>
          <Row>
            <div id="firstP">
              I was gonna take the time to sit down and write you a little
              letter. But I thought a song would probably be a little better.
              Instead of a ,letter. That you'd probably just shred up--yeah. I
              stumbled on your picture yesterday and it made me stop and think
              of. How much of a waste it'd ,be for me to put some ink to, a
              stupid piece a. Paper, I'd rather let you see how. Much I fucking
              hate you in a freestyle.I’m the American Dream. I’m the definiton
              of white trash ballin’. I’m right back on 'em. With a (chicka
              chicka chicka) I can’t call it. Same shit, different toilet. Oh,
              you got a nice ass, darling. Can’t wait to get you into my Benz,
              take you for a spin. What you mean we ain't fuckin’? You take me
              for a friend?. Let me tell you the whole story of Shady’s
              origin.I'm not afraid to take a stand. Everybody, come take my
            </div>
          </Row>
        </Container>

        <br />
        <br />
        <br />
        <br />

        <div>
          <Jumbotron fluid id="tabs">
            <Container>
              <Row>
                <Col className="smallIcons">
                  <Flip ssrFadeout delay={1200} duration={1000}>
                    <i className="fas fa-prescription"></i>
                  </Flip>
                  <Row className="headerSmallIcons">Prescription</Row>
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
                    <i className="fas fa-heartbeat"></i>
                  </Flip>
                  <Row className="headerSmallIcons">HeartBeat</Row>
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
            </Container>
          </Jumbotron>
        </div>

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

export default Healthcare;
