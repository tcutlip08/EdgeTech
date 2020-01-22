import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
// import SocialLink from "../SocialLink/SocialLink";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="ct-footer">
        <div className="container">
          <ul className="ct-footer-list text-center-sm">
            <li>
              <h2 className="ct-footer-list-header">Learn More</h2>
              <ul>
                <li>
                  <a href="">Company</a>
                </li>
                <li>
                  <a href="">Clients</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">Services</h2>
              <ul>
                <li>
                  <a href="">Design</a>
                </li>
                <li>
                  <a href="">Marketing</a>
                </li>
                <li>
                  <a href="">Sales</a>
                </li>
                <li>
                  <a href="">Programming</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">The Industry</h2>
              <ul>
                <li>
                  <a href="">Thought Leadership</a>
                </li>
                <li>
                  <a href="">Webinars</a>
                </li>
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">Sponsorships</a>
                </li>
                <li>
                  <a href="">Advisors</a>
                </li>
                <li>
                  <a href="">Training Program</a>
                </li>
                <li>
                  <a href="">Activities & Campaigns</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">Public Relations</h2>
              <ul>
                <li>
                  <a href="">WebCorpCo Blog</a>
                </li>
                <li>
                  <a href="">Hackathons</a>
                </li>
                <li>
                  <a href="">Videos</a>
                </li>
                <li>
                  <a href="">News Releases</a>
                </li>
                <li>
                  <a href="">Newsletters</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">About</h2>
              <ul>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Our Board</a>
                </li>
                <li>
                  <a href="">Our Staff</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="ct-footer-meta text-center-sm">
            <div className="row">
              <div className="col-sm-6 col-md-2">
                <img
                  alt="logo"
                  src="https://www.solodev.com/assets/footer/logo.png"
                />
              </div>
              <div className="col-sm-6 col-md-3">
                <address>
                  <span>
                    WebCorpCo
                    <br />
                  </span>
                  123 Easy Street
                  <br />
                  Orlando, Florida, 32801
                  <br />
                  <span>
                    Phone: <a href="tel:5555555555">(555) 555-8899</a>
                  </span>
                </address>
              </div>
              <Col>
                {/*<SocialLink
                  link="#"
                  image={
                    "https://www.solodev.com/assets/footer/facebook-white.png"
                  }
                />
                <SocialLink
                  link="#"
                  image={
                    "https://www.solodev.com/assets/footer/instagram-white.png"
                  }
                />
                <SocialLink
                  link="#"
                  image="https://www.solodev.com/assets/footer/youtube-white.png"
                />
                <SocialLink
                  link="#"
                  image={
                    "https://www.solodev.com/assets/footer/twitter-white.png"
                  }
                />*/}
                {/* <SocialLink link="#" image={LinkedIn} /> */}
              </Col>
            </div>
          </div>
        </div>
        <div className="ct-footer-post">
          <div className="container">
            <div className="inner-left">
              <ul>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="inner-right">
              <p>
                Copyright © 2016 WebCorpCo.&nbsp;<a href="">Privacy Policy</a>
              </p>
              <p>
                <a className="ct-u-motive-color" href="" target="_blank">
                  Web Design
                </a>
                by DigitalUs on
                <a href="" target="_blank">
                  Solodev CMS
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
