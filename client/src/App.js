import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// react-reveal server-side rendering to prevent flickering
// import config from 'react-reveal/globals';
// config({ ssrFadeout: true });
// Components
import NavBar from "./components/NavBar/NavBar";
// import NavBarBurger from "./components/NavBarBurger/NavBarBurger";
import Footer from "./components/Footer/Footer";
import ScrolltoTop from "./components/ScrolltoTop/ScrolltoTop";
// Pages Organized by NavBar Tabs
import Landing from "./pages/Landing/Landing";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
// Careers
import JobPosting from "./pages/Careers/JobPosting/JobPosting";
import JobPostForm from "./pages/Careers/JobPosting/JobPostForm/JobPostForm";
import FindTalentPost from "./pages/Careers/FindingTalent/FindTalentPost/FindTalentPost";
import FindingTalent from "./pages/Careers/FindingTalent/FindingTalent";
import JoinOurTeam from "./pages/Careers/JoinOurTeam/JoinOurTeam";
// Expertise
import Accounting from "./pages/Expertise/Accounting/Accounting";
import Engineering from "./pages/Expertise/Engineering/Engineering";
import Finance from "./pages/Expertise/Finance/Finance";
import Healthcare from "./pages/Expertise/Healthcare/Healthcare";
import IT from "./pages/Expertise/IT/IT";
// Services
import Contract from "./pages/Service/Contract/Contract";
import ContractHire from "./pages/Service/ContractHire/ContractHire";
import DirectHire from "./pages/Service/DirectHire/DirectHire";
// Error
import E404 from "./pages/Error";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrolltoTop>
        <NavBar />
        {/*<NavBarBurger />*/}
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Landing} />

          {/* Blog */}
          <Route path="/blog" component={Blog} />

          {/* Careers */}
          <Route
            path="/careers/job-posting/new-job-post"
            component={JobPostForm}
          />
          <Route path="/careers/job-posting" component={JobPosting} />
          <Route
            path="/careers/finding-talent/new-talent-post"
            component={FindTalentPost}
          />
          <Route path="/careers/finding-talent" component={FindingTalent} />
          <Route path="/careers/join-our-team" component={JoinOurTeam} />

          {/* Expertise */}
          <Route path="/expertise/accounting" component={Accounting} />
          <Route path="/expertise/engineering" component={Engineering} />
          <Route path="/expertise/finance" component={Finance} />
          <Route path="/expertise/healthcare" component={Healthcare} />
          <Route path="/expertise/IT" component={IT} />

          {/* Services */}
          <Route path="/service/contract" component={Contract} />
          <Route path="/service/contract-to-hire" component={ContractHire} />
          <Route path="/service/direct-hire" component={DirectHire} />

          {/* Contact Us */}
          <Route path="/contact-us" component={ContactUs} />

          {/* Error */}
          <Route path="*" component={E404} />
        </Switch>
        <Footer />
      </ScrolltoTop>
    </Router>
  );
}
export default App;
