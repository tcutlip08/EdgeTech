import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import "./JoinOurTeam.css";

class JoinOurTeam extends Component {
  render() {
    return (
      <div className="JoinOurTeam">
        <NavBar />
        <div>
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default JoinOurTeam;
