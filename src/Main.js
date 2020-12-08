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
import GetInfo from './openEHR/GetInfo';
import PostInfo from './openEHR/PostInfo';


import MeasurementData from "./Components/MeasurementData";
import CalcAchievements from './Components/CalcAchievements'
import CalcStreak from './Components/CalcStreak'
import GameSettings from './Components/GameSettings';
import Activity from './Components/Activity'
import { CalcTree } from "./Components/CalcTreeInfo";

//Main now makes sure no one can reach code if not loggedin (commented away for ease in dev).
//TESTER : to test: uncomment row 30-43 + 100. Now you cannot go anywhere else than /login if not loggedin
//upon login you come to /intro (Intro.js), here Matthew will implement a design that explains the App.
// When you log out, you will be redirected to /login. Profile is still hidden behind loggin since it does not print relevant data without loggin token.


const Main = () => {
    const [level, setLevel] = useState(2);
    //The current streak increases when a new measurment is entered in newmeasurment
    const [currentStreak, setCurrentStreak] = useState(24);
    const [longestStreak, setLongestStreak] = useState(24);
    //The achievements that have been reached.
    const [reachedAchievements, setReachedAchievements] = useState([0, 1, 2]);
    //Calculates if another achievement have been gained, then adds it to reachedachievements
    CalcAchievements(currentStreak, reachedAchievements, setReachedAchievements);
    //Calculates if the longest streak has changed
    CalcStreak(currentStreak, longestStreak, setLongestStreak);

   //Calculating start info for currentTree, to be used in the forest and tree
   const [currentTree, setCurrentTree] = useState(3);
   const [treeAge, setTreeAge] = useState(currentStreak);
   const [isSickTree, setIsSickTree] = useState(false);
   CalcTree(treeAge, currentTree, setCurrentTree, setTreeAge);

    // openEHR

    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {
            GetInfo(setLevel, setCurrentStreak, setLongestStreak, setCurrentTree, setTreeAge, setIsSickTree, setReachedAchievements);
            didMount.current = true;
        } else {
            PostInfo(level, currentStreak, longestStreak, currentTree, treeAge, isSickTree, reachedAchievements);
        }
    }, [level, currentStreak, longestStreak, currentTree, treeAge, isSickTree, reachedAchievements, didMount]);


 


    const { isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (!isAuthenticated) {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Login} />
                </Switch>
            </Router>
        );
    }
    if (isAuthenticated) {
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
                                        longestStreak = {longestStreak}
                                        is_sick = {isSickTree}
                                        tree = {currentTree}
                                        treeAge = {treeAge}
                                        />
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
                                <Route path="/activity" component={Activity} />
                                <Route
                                    path='/achievement'
                                    render={(props) => (
                                        <AchivementPage {...props} level={level}
                                        reachedAchievements = {reachedAchievements}
                                        currentStreak = {currentStreak}/>
                                    )}
                                />
                                <Route path="/successfullysaved" 
                                render={(props) => (
                                    <SuccessfullySaved {...props} 
                                    currentStreak = {currentStreak}
                                    setCurrentStreak = {setCurrentStreak}
                                    is_sick = {isSickTree}
                                    tree = {currentTree}
                                    treeAge = {treeAge}
                                    level={level}
                                    reachedAchievements = {reachedAchievements}/>
                                    )} />

                                <Route path="/Tree" component={Tree} />
                                {/* <Route path="/history" component={History} /> */}
                                <Route path="/goals" render = {(props) =>
                                    (<GoalsPage level = {level}/> )}/>
                                <Route path="/diabetes"
                                        render={(props) => (
                                        <DiabetesPage {...props} level={level}
                                        reachedAchievements = {reachedAchievements}
                                        currentStreak = {currentStreak}
                                        longestStreak = {longestStreak}
                                        is_sick = {isSickTree}
                                        tree = {currentTree}
                                        treeAge = {treeAge}/>
                                    )} />
                                
                                {/*<Route path="/forest" component={Forest} />*/}
                                <Route path="/forest"
                                    exact
                                    render={(props) => (
                                        <Forest {...props} is_sick={isSickTree} tree={currentTree} current_age={treeAge}/>
                                    )}
                                />
                                <Route path="/addmeddata" render={(props) =>
                                 (<AddMedDataNew {...props} 
                                    currentStreak = {currentStreak}
                                    setCurrentStreak = {setCurrentStreak} 
                                    treeAge = {treeAge}
                                    setTreeAge = {setTreeAge}           
                                     />)} />
                                     
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
   }
}

export default Main;