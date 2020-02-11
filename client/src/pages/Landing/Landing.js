import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";
import staffMeetingP from "../../assets/img/RandomImages/staffMeetingP.jpg";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Jumbotron fluid id="jumbotronImageL">
          <img id="staffMeetingP" src={staffMeetingP} alt="staff meeting" />
        </Jumbotron>

        <br />
        <br />

        <div>
          <Container>
            <Row>
              <Col>
                <div id="firstPL">
                  Landing!!!!!!!!! 5 more minute of this and I'm going to get
                  mad! 25 shmeckles? I-I-I-I don't even know what that- what is
                  that? Is that a lot? Burgertime! Did you just come into the
                  cafeteria through a portal? It's fine, everythings is fine.
                  theres an infinite number of realities Morty, and in a few
                  dozens of those i got lucky and turned everything back to
                  normal. A price for everything. I do not have discolored
                  butthole flaps. Is he keeping his shoulders square? Oooooooh
                  he's tryin'! Nobody's killing me until after I catch my wife
                  with another man. Your failures are your own, old man! I say,
                  follow throooough! We don't whitewash it either, Morty. I
                  mean, the pirates are really rapey. Slow down! Where are my
                  testicles, Summer? Cause he roped me into this! Not today
                  bitch! This aftershave made women want me, but it also made me
                  impotent!
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <br />
        <br />

        <div>
          <Fade ssrFadeout up delay={1500} duration={1200}>
            <Jumbotron fluid id="jumbotronImageStudents">
              <Container id="fluidContainerL">
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
                <br />
                <p>
                  This is a modified jumbotron with a break in between the 2
                  sentences.
                </p>
              </Container>
            </Jumbotron>
          </Fade>
        </div>

        <br />
        <br />

        <div>
          <Container>
            <Row>
              <Col>
                <div id="secondPL">
                  Landing!!!!!!!!! 5 more minute of this and I'm going to get
                  mad! 25 shmeckles? I-I-I-I don't even know what that- what is
                  that? Is that a lot? Burgertime! Did you just come into the
                  cafeteria through a portal? It's fine, everythings is fine.
                  theres an infinite number of realities Morty, and in a few
                  dozens of those i got lucky and turned everything back to
                  normal. A price for everything. I do not have discolored
                  butthole flaps. Is he keeping his shoulders square? Oooooooh
                  he's tryin'! Nobody's killing me until after I catch my wife
                  with another man. Your failures are your own, old man! I say,
                  follow throooough! We don't whitewash it either, Morty. I
                  mean, the pirates are really rapey. Slow down! Where are my
                  testicles, Summer? Cause he roped me into this! Not today
                  bitch! This aftershave made women want me, but it also made me
                  impotent!
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <br />
        <br />

        <Container>
          <Row>
            <Col className="smallIconsL">
              <Flip ssrFadeout delay={900} duration={1000}>
                <i className="fas fa-chart-pie"></i>
              </Flip>
              <Fade ssrFadeout up delay={900} duration={1000}>
                <Row className="headerSmallIconsL">chart-pie</Row>
              </Fade>
              <Fade ssrFadeout up delay={900} duration={1000}>
                <Row className="insertSmallIconsL">
                  Something, Something, Something, Something, Something,
                  Something, Something, Something
                </Row>
              </Fade>
            </Col>
            <Col className="smallIconsL">
              <Flip ssrFadeout delay={1000} duration={1000}>
                <i className="fas fa-drafting-compass"></i>
              </Flip>
              <Fade ssrFadeout up delay={1000} duration={1000}>
                <Row className="headerSmallIconsL">drafting-compass</Row>
              </Fade>
              <Fade ssrFadeout up delay={1000} duration={1000}>
                <Row className="insertSmallIconsL">
                  Something, Something, Something, Something, Something,
                  Something, Something, Something
                </Row>
              </Fade>
            </Col>
            <Col className="smallIconsL">
              <Flip ssrFadeout delay={1100} duration={1000}>
                <i className="fas fa-prescription"></i>
              </Flip>
              <Fade ssrFadeout up delay={1100} duration={1000}>
                <Row className="headerSmallIconsL">prescription</Row>
              </Fade>
              <Fade ssrFadeout up delay={1100} duration={1000}>
                <Row className="insertSmallIconsL">
                  Something, Something, Something, Something, Something,
                  Something, Something, Something
                </Row>
              </Fade>
            </Col>
            <Col className="smallIconsL">
              <Flip ssrFadeout delay={1200} duration={1000}>
                <i className="fas fa-graduation-cap"></i>
              </Flip>
              <Fade ssrFadeout up delay={1200} duration={1000}>
                <Row className="headerSmallIconsL">graduation-cap</Row>
              </Fade>
              <Fade ssrFadeout up delay={1200} duration={1000}>
                <Row className="insertSmallIconsL">
                  Something, Something, Something, Something, Something,
                  Something, Something, Something
                </Row>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
