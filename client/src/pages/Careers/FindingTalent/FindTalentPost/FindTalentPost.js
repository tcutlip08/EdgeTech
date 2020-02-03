import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./FindTalentPost.css";
import axios from "axios";

class FindTalentPost extends Component {
  state = {
    company: "",
    jobTitle: "",
    detail: "",
    email: "",
    phone: ""
  };

  componentDidMount() {}

  componentDidUpdate() {
    for (const property in this.state) {
      if (!this.state[property]) {
        return;
      }
      // console.log(`${property}: ${this.state[property]}`);
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.sendPost();
  };

  sendPost() {
    axios
      .post("/api/LFEmp", this.state)
      .then(res => {
        console.log(res);
        this.clearData();
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
                    <label className="sr-only" for="company">
                      Company Name *
                    </label>
                    <input
                      className="required form-control"
                      id="company"
                      name="company"
                      placeholder="Company Name *"
                      value={this.state.company}
                      onChange={this.handleInputChange}
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="phone">
                      Contact Number
                    </label>
                    <input
                      className="required form-control h5-phone"
                      id="phone"
                      name="phone"
                      placeholder="Contact Number *"
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="email">
                      Contact Email *
                    </label>
                    <input
                      className="required form-control h5-email"
                      id="email"
                      name="email"
                      placeholder="Contact Email *"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="jobTitle">
                      Job Title *
                    </label>
                    <input
                      className="required form-control"
                      id="jobTitle"
                      name="jobTitle"
                      placeholder="Job Title *"
                      value={this.state.jobTitle}
                      onChange={this.handleInputChange}
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="detail">
                      Job Description
                    </label>
                    <textarea
                      className="required form-control"
                      id="detail"
                      name="detail"
                      placeholder="Type the Job Description here *"
                      value={this.state.detail}
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
                {/* <div className="phone">
                  <h2>Call</h2>
                  <a href="tel:1-800-867-5309">Call Now</a>
                </div>
                <div className="email">
                  <h2>Email</h2>
                  <a href="#">info@webcorpco.com</a>
                  <a href="mailto:info@webcorpco.com">info@webcorpco.com</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindTalentPost;
