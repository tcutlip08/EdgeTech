import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Employee1 from "../../../assets/img/RandomImages/employee1.png";
import Employee2 from "../../../assets/img/RandomImages/employee2.jpg";
import Employee3 from "../../../assets/img/RandomImages/employee3.jpg";
import TheBoss from "../../../assets/img/RandomImages/theBoss.png";
import "./JoinOurTeam.css";

class JoinOurTeam extends Component {
  render() {
    return (
      <div className="JoinOurTeam">
        <Container>
          When you walked through the door. It was clear to me (Clear to me).
          You’re the one they adore. Who they came to see (Who they came to
          see). You’re a rock star (Baby). Everybody wants you (Everybody wants
          you). Player, who can really blame you? (Who can really blame you?).
          We’re the ones who made you.I'm not afraid to take a stand. Everybody,
          come take my hand. We'll walk this road together, through the storm.
          Whatever weather, cold or warm. Just lettin' you know that you're not
          alone. Holla if you feel like you've been down the same road.I'm
          beginning to feel like a Rap God, Rap God. All my people from the
          front to the back nod, back nod. Now who thinks their arms are long
          enough to slap box, slap box?. Let me show you maintaining this shit
          ain't that hard, that hard. Everybody want the key and the secret. To
          rap immortality like I have got.
        </Container>
        <hr />
        <br />

        <Container id="boss">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={TheBoss} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>

        <br />
        <hr />
        <br />

        <CardColumns>
          <Card>
            <Card.Img variant="top" src={Employee2} />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>

          <Card>
            <Card.Img variant="top" src={Employee1} />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>

          <Card>
            <Card.Img variant="top" src={Employee3} />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default JoinOurTeam;
