import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./JobPostForm.css";
import axios from "axios";

class JobPostForm extends Component {
  state = {
    first: "",
    last: "",
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
      .post("/api/LFJob", this.state)
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
                    <label className="sr-only" for="first">
                      First Name *
                    </label>
                    <input
                      className="required form-control"
                      id="first"
                      name="first"
                      placeholder="First Name *"
                      value={this.state.first}
                      onChange={this.handleInputChange}
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="last">
                      Last Name *
                    </label>
                    <input
                      className="required form-control"
                      id="last"
                      name="last"
                      placeholder="Last Name *"
                      value={this.state.last}
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
                  <button className="btn btn-accent" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-4 contact-info"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobPostForm;
