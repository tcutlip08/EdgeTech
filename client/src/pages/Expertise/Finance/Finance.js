import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Flip from "react-reveal/Flip";
import FinanceImage from "../../../assets/img/RandomImages/financeImage.jpg";
// import "./Finance.css";
import "../Expertise.css";

class Finance extends Component {
  render() {
    return (
      <div className="FinancePage">
        <br />
        <br />

        <Jumbotron fluid id="jumbotronImage">
          <img id="Image" src={FinanceImage} alt="financeImg" />
        </Jumbotron>

        <br />
        <br />

        <Container>
          <Row>
            <div id="firstP">
              Bagpipes from Baghdad. What's going through my mind. Half the
              time, when I rhyme, or blowing up like. Bagpipes from Baghdad.
              Somebody turn the vacancy sign on. 'Cause I'm gone, blowing on my.
              Bagpipes from Baghdad. I run the streets. And act like a madman
              holding a Glad.I'm beginning to feel like a Rap God, Rap God. All
              my people from the front to the back nod, back nod. The way I'm
              racing around the track, call me NASCAR, NASCAR. Dale Earnhardt of
              the trailer park, the White Trash God. Kneel before General Zod.
              This planet's Krypton – no, Asgard, Asgard.Feminist women love
              Eminem. "Chicka, chicka, chicka, Slim Shady, I'm sick of him. Look
              at him, walkin' around, grabbin' his you-know-what. Flippin' the
              you-know-who," "Yeah, but he's so cute though.". Yeah, I probably
              got a couple of screws up in my head loose.
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
                    <i className="fas fa-landmark"></i>
                  </Flip>
                  <Row className="headerSmallIcons">Landmark</Row>
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
                    <i className="fas fa-chart-pie"></i>
                  </Flip>
                  <Row className="headerSmallIcons">ChartPie</Row>
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

export default Finance;
