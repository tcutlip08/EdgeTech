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
              <h2 className="ct-footer-list-header">Expertise</h2>
              <ul>
                <li>
                  <Link id="footer-link it" to="/expertise/IT">
                    IT
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
                  <Link id="footer-link healthcare" to="/expertise/healthcare">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link id="footer-link accounting" to="/expertise/accounting">
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link id="footer-link finance" to="/expertise/finance">
                    Finance
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
                    id="footer-link contract-to-hire"
                    to="/service/contract-to-hire"
                  >
                    Contract to Hire
                  </Link>
                </li>
                <li>
                  <Link id="footer-link direct-hire" to="/service/direct-hire">
                    Direct Hire
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">Careers</h2>
              <ul>
                <li>
                  <Link id="footer-link job-posting" to="/careers/job-posting">
                    Job Posting
                  </Link>
                </li>
                <li>
                  <Link
                    id="footer-link finding-talent"
                    to="/careers/finding-talent"
                  >
                    Find Talent
                  </Link>
                </li>
                <li>
                  <Link
                    id="footer-link join-our-team"
                    to="/careers/join-our-team"
                  >
                    Join our Team
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="ct-footer-list-header">Resources</h2>
              <ul>
                <li>
                  <Link id="footer-link blog" to="/resources/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link id="footer-link faq" to="/resources/faq">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link
                    id="footer-link case-studies"
                    to="/resources/case-studies"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link id="footer-link contact-us" to="/contact-us">
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
              <p>Copyright © 2016 WebCorpCo. Privacy Policy</p>
              <p>Web Design by DigitalUs on Solodev CMS</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
