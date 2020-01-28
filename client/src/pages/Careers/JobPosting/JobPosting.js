import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JobPosting.css";

class JobPosting extends Component {
  render() {
    return (
      <div className="JobPosting">
        <Link to="/careers/job-posting/new-job-post">New Post</Link>
        <div>
          I’m the American Dream. I’m the definiton of white trash ballin’. I’m
          right back on 'em. With a (chicka chicka chicka) I can’t call it. Same
          shit, different toilet. Oh, you got a nice ass, darling. Can’t wait to
          get you into my Benz, take you for a spin. What you mean we ain't
          fuckin’? You take me for a friend?. Let me tell you the whole story of
          Shady’s origin.Will the real Slim Shady please stand up?. I repeat,
          will the real Slim Shady please stand up?. We're gonna have a problem
          here. Y'all act like you never seen a white person before. Jaws all on
          the floor like Pam like Tommy just burst in the door. And started
          whoopin' her ass worse than before.I’m the American Dream. I’m the
          definiton of white trash ballin’. I’m right back on 'em. With a
          (chicka chicka chicka) I can’t call it. Same shit, different toilet.
          Oh, you got a nice ass, darling. Can’t wait to get you into my Benz,
          take you for a spin. What you mean we ain't fuckin’? You take me for a
          friend?. Let me tell you the whole story of Shady’s origin.
        </div>
      </div>
    );
  }
}

export default JobPosting;
