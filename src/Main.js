import React, { useState, Component, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'

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
import AchivementPage from "./AchievementPage"
import CollectibleDemo from "./Components/CollectibleDemo";
// import successfullysaved from './Components/successfullysaved'
// import TreeInfo from './Components/TreeInfo'
// import History from './History'
// import Goals from './Goals'
// import Diabetes from './Diabetes'
// import Forest from './Components/Forest'
// import NewMeasurement from './Components/NewMeasurement'


const Main = () => {

  const [globalTitle, setGlobalTitle] = useState("Home");
  const history = createBrowserHistory();

  useEffect(() => {
    document.title = globalTitle;
  }, [globalTitle]);

  return (
    <>
      <React.Fragment>
        <Router>
          <div>
<<<<<<< src/Main.js
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/medicaldata" component={MedicalData} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/AddMedData" component={AddMedData} />
              <Route path="/measurements" component={Measurements} />
              <Route path="/allmeasurements" component={AllMeasurements} />
              <Route path="/achievement" component={AchivementPage} />
              <Route path="/collectibledemo" component={CollectibleDemo} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
=======
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/medicaldata" component={MedicalData} />
            <Route path="/profile" component={ProfilePage} /> {/** */}
            {/* <Route path="/newmeasurement" component={NewMeasurement} /> */}
            <Route path="/measurements" component={Measurements} />
            <Route path="/allmeasurements" component={AllMeasurements} />
            <Route path="/achievement" component={AchivementPage} />
            <Route path="/collectibledemo" component={AchivementPage} />
            {/* <Route path="/successfullysaved" component={SuccessfullySaved} /> */}
            {/* <Route path="/TreeInfo" component={TreeInfo} /> */}
            {/* <Route path="/history" component={History} /> */}
            {/* <Route path="/goals" component={Goals} /> */}
            {/* <Route path="/diabetes" component={Diabetes} /> */}
            {/* <Route path="/forest" component={Forest} /> */}
            <Route path="/collectibledemo" component={AchivementPage} />






            {/* <Route component={NoMatch} /> */}
          </Switch>
>>>>>>> src/Main.js
          </div>
        </Router>
      </React.Fragment>

    </>
  );
}

export default Main;