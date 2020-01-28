import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrolltoTop from "./components/ScrolltoTop/ScrolltoTop";
import Accounting from "./pages/Expertise/Accounting/Accounting";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import JobPosting from "./pages/Careers/JobPosting/JobPosting";
import ContactUs from "./pages/ContactUs/ContactUs";
import Contract from "./pages/Service/Contract/Contract";
import ContractHire from "./pages/Service/ContractHire/ContractHire";
import DirectHire from "./pages/Service/DirectHire/DirectHire";
import E404 from "./pages/Error";
import Engineering from "./pages/Expertise/Engineering/Engineering";
import Finance from "./pages/Expertise/Finance/Finance";
import FindingTalent from "./pages/Careers/FindingTalent/FindingTalent";
import Healthcare from "./pages/Expertise/Healthcare/Healthcare";
import IT from "./pages/Expertise/IT/IT";
import JoinOurTeam from "./pages/Careers/JoinOurTeam/JoinOurTeam";
import Landing from "./pages/Landing/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrolltoTop>
        <NavBar />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/careers/job-josting" component={JobPosting} />
          <Route path="/careers/finding-talent" component={FindingTalent} />
          <Route path="/careers/join-our-team" component={JoinOurTeam} />
          <Route path="/expertise/accounting" component={Accounting} />
          <Route path="/expertise/engineering" component={Engineering} />
          <Route path="/expertise/finance" component={Finance} />
          <Route path="/expertise/healthcare" component={Healthcare} />
          <Route path="/expertise/IT" component={IT} />
          <Route path="/service/contract" component={Contract} />
          <Route path="/service/contract-to-hire" component={ContractHire} />
          <Route path="/service/direct-hire" component={DirectHire} />
          <Route path="/contact-us" component={ContactUs} />
          <Route exact path="/" component={Landing} />
          <Route path="*" component={E404} />
        </Switch>
        <Footer />
      </ScrolltoTop>
    </Router>
  );
}
export default App;
