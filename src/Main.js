import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { Redirect } from 'react-router-dom';
import Intro from './Intro'
import Home from "./Home";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import Measurements from "./Components/Measurements";
import AllMeasurements from "./Components/AllMeasurements";
import AchivementPage from "./AchievementPage"
import GoalsPage from './Goals';
import DiabetesPage from './Diabetes';
import AddMedDataNew from "./AddMedDataNew";
import SuccessfullySaved from './SuccessfullySaved'
import Tree from './Tree'
// import History from './History'
import Forest from './Forest'
import { useAuth0 } from "@auth0/auth0-react";

//Main now makes sure no one can reach code if not loggedin (commented away for ease in dev).
//TESTER : to test: uncomment row 29-42 + 77. Now you cannot go anywhere else than /login if not loggedin
//upon login you come to /intro (Intro.js), here Matthew will implement a design that explains the App. 
// When you log out, you will be redirected to /login. Profile is still hidden behind loggin since it does not print relevant data without loggin token. 


const Main = () => {

  const [globalTitle, setGlobalTitle] = useState("Home");
  const history = createBrowserHistory();
  const [level, setLevel] = useState(3);

  return (
    <>
      <React.Fragment>
        <Router>
          <div>
            <Switch>
              <Route
                path='/'
                exact
                render={(props) => (
                  <Home {...props} level={level}/>
                )}
              />
              <Route path="/login" component={Login}/>
              <Route path="/intro" component={Intro}/>

              <Route
                path='/profile'
                render={(props) => (
                  <ProfilePage {...props} level={level} onClick={setLevel}/>
                )}
              />
              {/* <Route path="/newmeasurement" component={NewMeasurement} /> */}
              <Route path="/measurements" component={Measurements}/>
              <Route path="/allmeasurements" component={AllMeasurements}/>
              <Route path="/achievement" component={AchivementPage}/>
              <Route
                path='/collectibledemo'
                render={(props) => (
                  <AchivementPage {...props} level={level}/>
                )}
              />
              <Route path="/successfullysaved" component={SuccessfullySaved}/>
              <Route path="/Tree" component={Tree}/>
              {/* <Route path="/history" component={History} /> */}
              <Route path="/goals" component={GoalsPage}/>
              <Route path="/diabetes" component={DiabetesPage}/>
              <Route path="/forest" component={Forest}/>
              <Route path="/addmeddata" component={AddMedDataNew}/>
              <Route>
                <Redirect to="/"/>
                {/* Added this row so if a a route fails/doesn't exist it redirects us to homepage anyway.  */}
              </Route>
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>
        </Router>
      </React.Fragment>

    </>
  );
}

export default Main;