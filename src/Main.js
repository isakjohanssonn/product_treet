import React, { useState, Component, useEffect } from "react";
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
import Measurements from "./Components/Measurements";
import AllMeasurements from "./Components/AllMeasurements";
import CollectibleDemo from "./Components/CollectibleDemo";

const Main = () => {

  const [globalTitle, setGlobalTitle] = useState("Home");

  useEffect(() => {
    document.title = globalTitle;
  }, [globalTitle]);

  return (
    <>
      <React.Fragment>
        <Router>
          <Navigationbar globalTitle={globalTitle} setGlobalTitle={setGlobalTitle}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/medicaldata" component={MedicalData} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/AddMedData" component={AddMedData} />
            <Route path="/measurements" component={Measurements} />
            <Route path="/allmeasurements" component={AllMeasurements} />
            <Route path="/collectibledemo" component={CollectibleDemo} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer globalTitle={globalTitle} setGlobalTitle={setGlobalTitle}/>
        </Router>
      </React.Fragment>

    </>
  );
}

export default Main;