import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import staffMeetingP from "../../assets/img/RandomImages/staffMeetingP.jpg";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Jumbotron fluid id="jumbotronImageL">
          <img id="staffMeetingP" src={staffMeetingP} alt="staff meeting" />
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              <div id="firstPL">
                Landing!!!!!!!!! 5 more minute of this and I'm going to get mad!
                25 shmeckles? I-I-I-I don't even know what that- what is that?
                Is that a lot? Burgertime! Did you just come into the cafeteria
                through a portal? It's fine, everythings is fine. theres an
                infinite number of realities Morty, and in a few dozens of those
                i got lucky and turned everything back to normal. A price for
                everything. I do not have discolored butthole flaps. Is he
                keeping his shoulders square? Oooooooh he's tryin'! Nobody's
                killing me until after I catch my wife with another man. Your
                failures are your own, old man! I say, follow throooough! We
                don't whitewash it either, Morty. I mean, the pirates are really
                rapey. Slow down! Where are my testicles, Summer? Cause he roped
                me into this! Not today bitch! This aftershave made women want
                me, but it also made me impotent!
              </div>
            </Col>
          </Row>
        </Container>

        <Jumbotron fluid id="jumbotronImageStudents">
          <Container id="fluidContainerL">
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <br />
            <p>
              This is a modified jumbotron with a break in between the 2
              sentences.
            </p>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              <div id="secondPL">
                Landing!!!!!!!!! 5 more minute of this and I'm going to get mad!
                25 shmeckles? I-I-I-I don't even know what that- what is that?
                Is that a lot? Burgertime! Did you just come into the cafeteria
                through a portal? It's fine, everythings is fine. theres an
                infinite number of realities Morty, and in a few dozens of those
                i got lucky and turned everything back to normal. A price for
                everything. I do not have discolored butthole flaps. Is he
                keeping his shoulders square? Oooooooh he's tryin'! Nobody's
                killing me until after I catch my wife with another man. Your
                failures are your own, old man! I say, follow throooough! We
                don't whitewash it either, Morty. I mean, the pirates are really
                rapey. Slow down! Where are my testicles, Summer? Cause he roped
                me into this! Not today bitch! This aftershave made women want
                me, but it also made me impotent!
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className="smallIconsL">
              <i className="fab fa-battle-net"></i>
              <Row className="headerSmallIconsL">battle-net</Row>
              <Row className="insertSmallIconsL">
                Something, Something, Something, Something, Something,
                Something, Something, Something
              </Row>
            </Col>
            <Col className="smallIconsL">
              <i className="fas fa-atom"></i>
              <Row className="headerSmallIconsL">atom</Row>
              <Row className="insertSmallIconsL">
                Something, Something, Something, Something, Something,
                Something, Something, Something
              </Row>
            </Col>
            <Col className="smallIconsL">
              <i className="fas fa-biohazard"></i>
              <Row className="headerSmallIconsL">biohazard</Row>
              <Row className="insertSmallIconsL">
                Something, Something, Something, Something, Something,
                Something, Something, Something
              </Row>
            </Col>
            <Col className="smallIconsL">
              <i className="fas fa-graduation-cap"></i>
              <Row className="headerSmallIconsL">graduation-cap</Row>
              <Row className="insertSmallIconsL">
                Something, Something, Something, Something, Something,
                Something, Something, Something
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
