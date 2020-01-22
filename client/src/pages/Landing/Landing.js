import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Monkey from "../../assets/img/RandomImages/Monkey.jpeg";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="container">
          <div className="row">
            <Col>
              <img src={Monkey} />
            </Col>
          </div>
        </div>
        <div>
          Landing!!!!!!!!! 5 more minute of this and I'm going to get mad! 25
          shmeckles? I-I-I-I don't even know what that- what is that? Is that a
          lot? Burgertime! Did you just come into the cafeteria through a
          portal? It's fine, everythings is fine. theres an infinite number of
          realities Morty, and in a few dozens of those i got lucky and turned
          everything back to normal. A price for everything. I do not have
          discolored butthole flaps. Is he keeping his shoulders square?
          Oooooooh he's tryin'! Nobody's killing me until after I catch my wife
          with another man. Your failures are your own, old man! I say, follow
          throooough! We don't whitewash it either, Morty. I mean, the pirates
          are really rapey. Slow down! Where are my testicles, Summer? Cause he
          roped me into this! Not today bitch! This aftershave made women want
          me, but it also made me impotent!
        </div>
      </div>
    );
  }
}

export default Landing;
