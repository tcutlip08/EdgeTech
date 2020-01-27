import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <Jumbotron fluid id="jumbotronImage">
            <img id="staffMeetingP" src={staffMeetingP} />
        </Jumbotron>

        <div className="container">
          <div className="row">
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
          </div>
        </div>

        <Jumbotron fluid id="jumbotronImageStudents">
          <Container id="fluidContainer">
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <hr />
            <p>
              This is a modified jumbotron with a divider in between the 2
              sentences.
            </p>
          </Container>
        </Jumbotron>

        <div className="container">
          <div className="row">
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
          </div>
        </div>

        <Container>
          <Row>
            <Col className="smallIcons">
              <i class="fab fa-battle-net"></i>
            </Col>
            <Col className="smallIcons">
              <i class="fas fa-atom"></i>
            </Col>
            <Col className="smallIcons">
              <i class="fas fa-biohazard"></i>
            </Col>
            <Col className="smallIcons">
              <i class="fas fa-graduation-cap"></i>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className="headerSmallIcons">Something</Col>
            <Col className="headerSmallIcons">Something</Col>
            <Col className="headerSmallIcons">Something</Col>
            <Col className="headerSmallIcons">Something</Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className="insertSmallIcons">
              Something, Something, Something, Something, Something, Something,
              Something, Something
            </Col>
            <Col className="insertSmallIcons">
              Something, Something, Something, Something, Something, Something,
              Something, Something
            </Col>
            <Col className="insertSmallIcons">
              Something, Something, Something, Something, Something, Something,
              Something, Something
            </Col>
            <Col className="insertSmallIcons">
              Something, Something, Something, Something, Something, Something,
              Something, Something
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
