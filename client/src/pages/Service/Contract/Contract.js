import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import "./Contract.css";

class Contract extends Component {
  render() {
    return (
      <div className="Contract">
        <NavBar />
        <div>
          I was gonna take the time to sit down and write you a little letter.
          But I thought a song would probably be a little better. Instead of a
          ,letter. That you'd probably just shred up--yeah. I stumbled on your
          picture yesterday and it made me stop and think of. How much of a
          waste it'd ,be for me to put some ink to, a stupid piece a. Paper, I'd
          rather let you see how. Much I fucking hate you in a
          freestyle.Feminist women love Eminem. "Chicka, chicka, chicka, Slim
          Shady, I'm sick of him. Look at him, walkin' around, grabbin' his
          you-know-what. Flippin' the you-know-who," "Yeah, but he's so cute
          though.". Yeah, I probably got a couple of screws up in my head loose.
          But no worse than what's goin' on in your parents' bedrooms.Feminist
          women love Eminem. "Chicka, chicka, chicka, Slim Shady, I'm sick of
          him. Look at him, walkin' around, grabbin' his you-know-what. Flippin'
          the you-know-who," "Yeah, but he's so cute though.". Yeah, I probably
          got a couple of screws up in my head loose. But no worse than what's
          goin' on in your parents' bedrooms.
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contract;
