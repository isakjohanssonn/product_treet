import React, { useState, useEffect, useRef } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { Redirect } from 'react-router-dom';
import Intro from './Intro'
import Home from "./Home";
import Login from "./Login";
import GetGoogleFit from './googleFit/getGoogleFit'
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
import GetGameLevel from './openEHR/GetGameLvl';
import PostGameLevel from './openEHR/PostGameLvl';

import MeasurementData from "./Components/MeasurementData";
import CalcAchievements from './Components/CalcAchievements'
import CalcStreak from './Components/CalcStreak'
import GameSettings from './Components/GameSettings';

//Main now makes sure no one can reach code if not loggedin (commented away for ease in dev).
//TESTER : to test: uncomment row 30-43 + 100. Now you cannot go anywhere else than /login if not loggedin
//upon login you come to /intro (Intro.js), here Matthew will implement a design that explains the App.
// When you log out, you will be redirected to /login. Profile is still hidden behind loggin since it does not print relevant data without loggin token.


const Main = () => {

    const [level, setLevel] = useState(2);
    //The current streak increases when a new measurment is entered in newmeasurment
    const [currentStreak, setCurrentStreak] = useState(14);
    const [longestStreak, setLongestStreak] = useState(14);
    //The achievements that have been reached.
    const [reachedAchievements, setReachedAchievements] = useState([0, 1]);
    //Calculates if another achievement have been gained, then adds it to reachedachievements
    CalcAchievements(currentStreak, reachedAchievements, setReachedAchievements);
    //Calculates if the longest streak has changed
    CalcStreak(currentStreak, longestStreak, setLongestStreak);

    // openEHR
    GetGameLevel(setLevel);

    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
        } else {
            PostGameLevel(level);
        }
    }, [level, didMount]);


    // const { isAuthenticated, isLoading } = useAuth0();
    // if (isLoading) {
    //     return <div>Loading ...</div>;
    // }
    // if (!isAuthenticated) {
    //     return (
    //         <Router>
    //             <Switch>
    //                 <Route path='/' component={Login} />
    //             </Switch>
    //         </Router>
    //     );
    // }
    //if (isAuthenticated) {
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
                                        <Home {...props} level={level}
                                        reachedAchievements = {reachedAchievements}
                                        currentStreak = {currentStreak}
                                        longestStreak = {longestStreak}/>
                                    )}
                                />
                                <Route path="/login" component={Login} />
                                <Route path="/googleFit" component={GetGoogleFit} />
                                <Route path="/intro"
                                    exact
                                    render={(props) => (
                                        <Intro {...props} level={level} onClick={setLevel} />
                                    )}
                                />

                                <Route
                                    path='/profile'
                                    render={(props) => (
                                        <ProfilePage {...props} level={level} onClick={setLevel} />
                                    )}
                                />
                                {/* <Route path="/newmeasurement" component={NewMeasurement} /> */}
                                <Route path="/measurements" component={Measurements} />
                                <Route path="/allmeasurements" component={MeasurementData} />
                                <Route
                                    path='/achievement'
                                    render={(props) => (
                                        <AchivementPage {...props} level={level}
                                        reachedAchievements = {reachedAchievements}
                                        currentStreak = {currentStreak}/>
                                    )}
                                />
                                <Route path="/successfullysaved" component={SuccessfullySaved} />
                                <Route path="/Tree" component={Tree} />
                                {/* <Route path="/history" component={History} /> */}
                                <Route path="/goals" component={GoalsPage} />
                                <Route path="/diabetes" component={DiabetesPage} />
                                <Route path="/forest" component={Forest} />
                                <Route path="/addmeddata" render={(props) =>
                                 (<AddMedDataNew {...props} currentStreak = {currentStreak}
                                    setCurrentStreak = {setCurrentStreak} />)} />
                                     <Route
                                    path='/gamesettings'
                                    render={(props) => (
                                        <GameSettings {...props} level={level} onClick={setLevel} />
                                    )}/>
                                <Route>
                                    <Redirect to="/" />
                                    {/* Added this row so if a a route fails/doesn't exist it redirects us to homepage anyway.  */}
                                </Route>
                                {/* <Route component={NoMatch} /> */}
                            </Switch>
                        </div>
                    </Router>
                </React.Fragment>

            </>
        );
  //  }
}

export default Main;