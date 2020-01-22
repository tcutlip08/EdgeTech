import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./ContactUs.css";

class ContactUs extends Component {
  render() {
    return (
      <div className="ContactUs">
        <div className="container">
          <div className="contact-section">
            <h2 className="ct-section-head">CONTACT US</h2>
            <div className="row contact-fields">
              <div className="col-md-8 left-form">
                <form method="post" action="">
                  <div className="form-group">
                    <label className="sr-only" for="fname">
                      First Name *
                    </label>
                    <input
                      className="required form-control"
                      id="fname"
                      name="fname"
                      placeholder="First Name&nbsp;*"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="lname">
                      Last Name *
                    </label>
                    <input
                      className="required form-control"
                      id="lname"
                      name="lname"
                      placeholder="Last Name&nbsp;*"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="contactEmail">
                      Email *
                    </label>
                    <input
                      className="required form-control h5-email"
                      id="contactEmail"
                      name="contactEmail"
                      placeholder="Email&nbsp;*"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="contactPhone">
                      Phone *
                    </label>
                    <input
                      className="required form-control h5-phone"
                      id="contactPhone"
                      name="contactPhone"
                      placeholder="Phone&nbsp;*"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="comment">
                      Type your message here
                    </label>
                    <textarea
                      className="required form-control"
                      id="comment"
                      name="comment"
                      placeholder="Type your message here&nbsp;*"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <button className="btn btn-accent" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-4 contact-info">
                <div className="phone">
                  <h2>Call</h2>
                  <a href="tel:+5555555555">555.555.5555</a>
                </div>
                <div className="email">
                  <h2>Email</h2>
                  <a href="mailto:info@webcorpco.com">info@webcorpco.com</a>
                </div>
                <div className="location">
                  <h2>Visit</h2>
                  <p>
                    One Town Center <br />
                    123 Easy Street <br />
                    Suite 1000 <br />
                    Orlando, FL 32803
                    <br />
                    <a className="btn btn-accent" href="" target="_blank">
                      <img
                        src="https://www.solodev.com/assets/contact-us-page/map-marker.png"
                        alt="Map Marker"
                      />
                      Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
