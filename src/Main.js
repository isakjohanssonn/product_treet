import React, { useState, Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import MedicalData from "./MedicalData";
import Contact from "./Contact";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import Navigationbar from "./Components/Navigationbar";
import Footer from "./Components/Footer";
import AddMedData from "./AddMedData";

class Main extends Component {
  

  render() {
    return (
      <>
        <React.Fragment>
          <Router>
            <Navigationbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/medicaldata" component={MedicalData} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/AddMedData" component={AddMedData} />


              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer />
          </Router>
        </React.Fragment>

      </>
    );
  }
}

export default Main;