import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./ContactUs.css";
import SocialLink from "../../components/SocialLink/SocialLink";
import Facebook from "../../assets/img/png/facebook.png";
import Instagram from "../../assets/img/png/instagram.png";
import Youtube from "../../assets/img/png/youtube.png";
import Twitter from "../../assets/img/png/twitter.png";
import LinkedIn from "../../assets/img/png/linkedin.png";

class ContactUs extends Component {
  render() {
    return (
      <div className="ContactUs">
        <NavBar />
        <div>Insert Form Here</div>
        <SocialLink link="#" image={Facebook} />
        <SocialLink link="#" image={Instagram} />
        <SocialLink link="#" image={Youtube} />
        <SocialLink link="#" image={Twitter} />
        <SocialLink link="#" image={LinkedIn} />
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
