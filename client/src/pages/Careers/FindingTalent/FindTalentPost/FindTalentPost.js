import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./FindTalentPost.css";
import axios from "axios";

class FindTalentPost extends Component {
  state = {
    fname: "",
    lname: "",
    contactEmail: "",
    contactPhone: "",
    comment: "",
    template_params: {
      from_name: "",
      from_message: "",
      from_email: "",
      from_phone: ""
    },
    service_id: "tcutlip08",
    template_id: "template_8f4SePdi",
    user_id: "user_yUEQjWRM02YZWiH5bCVvZ"
  };

  componentDidMount() {}

  componentDidUpdate() {
    for (const property in this.state) {
      if (!this.state[property]) {
        return;
      }
      console.log(`${property}: ${this.state[property]}`);
    }
    // this.sendEmail();
    this.clearData();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  sendEmail() {
    axios
      .post("/api/LFEmp", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  clearData() {
    this.setState({});
  }

  render() {
    return (
      <div className="ContactUs">
        <div className="container">
          <div className="contact-section">
            <h2 className="ct-section-head">CONTACT US</h2>
            <div className="row contact-fields">
              <div className="col-md-8 left-form">
                <form method="post" id="contact" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only" for="fname">
                      First Name *
                    </label>
                    <input
                      className="required form-control"
                      id="fname"
                      name="fname"
                      placeholder="First Name&nbsp;*"
                      value={this.state.fname}
                      onChange={this.handleInputChange}
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
                      value={this.state.lname}
                      onChange={this.handleInputChange}
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
                      value={this.state.contactEmail}
                      onChange={this.handleInputChange}
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
                      value={this.state.contactPhone}
                      onChange={this.handleInputChange}
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
                      value={this.state.comment}
                      onChange={this.handleInputChange}
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
                  <a href="tel:1-800-867-5309">Call Now</a>
                </div>
                <div className="email">
                  <h2>Email</h2>
                  {/* <a href="#">info@webcorpco.com</a> */}
                  <a href="mailto:info@webcorpco.com">info@webcorpco.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindTalentPost;
