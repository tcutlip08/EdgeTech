import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import SocialLink from "../SocialLink/SocialLink";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="ct-footer">
        <div className="container">
          <ul className="ct-footer-list text-center-sm">
            <li>
              <h2 className="ct-footer-list-header">Careers</h2>
              <ul>
                <li>
                  <Link id="footer-link careers" to="/careers/careers">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link id="footer-link talent" to="/careers/finding-talent">
                    Find Talent
                  </Link>
                </li>
                <li>
                  <Link id="footer-link team" to="/careers/join-our-team">
                    Join our Team
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">Expertise</h2>
              <ul>
                <li>
                  <Link id="footer-link accounting" to="/expertise/accounting">
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    id="footer-link engineering"
                    to="/expertise/engineering"
                  >
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link id="footer-link finance" to="/expertise/finance">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link id="footer-link healthcare" to="/expertise/healthcare">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link id="footer-link it" to="/expertise/IT">
                    I.T.
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">Services</h2>
              <ul>
                <li>
                  <Link id="footer-link contract" to="/service/contract">
                    Contract
                  </Link>
                </li>
                <li>
                  <Link
                    id="footer-link contractHire"
                    to="/service/contract-to-hire"
                  >
                    Contract to Hire
                  </Link>
                </li>
                <li>
                  <Link id="footer-link directHire" to="/service/direct-hire">
                    Direct Hire
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">About</h2>
              <ul>
                <li>
                  <Link id="footer-link home" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link id="footer-link contact" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="ct-footer-meta text-center-sm">
            <div className="row">
              <Col>
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
              </Col>
              <Col>
                <SocialLink link="#" image="fab fa-facebook" />
                <SocialLink link="#" image="fab fa-instagram" />
                <SocialLink link="#" image="fab fa-youtube" />
                <SocialLink link="#" image="fab fa-twitter" />
                <SocialLink link="#" image="fab fa-linkedin" />
              </Col>
            </div>
          </div>
        </div>
        <div className="ct-footer-post">
          <div className="container">
            <div className="copy-right">
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
