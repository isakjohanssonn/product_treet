import React, { useState, useEffect, useRef } from "react";
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
import GetGameLevel from './openEHR/GetGameLvl';
import PostGameLevel from './openEHR/PostGameLvl';


//Main now makes sure no one can reach code if not loggedin (commented away for ease in dev).
//TESTER : to test: uncomment row 30-43 + 100. Now you cannot go anywhere else than /login if not loggedin
//upon login you come to /intro (Intro.js), here Matthew will implement a design that explains the App. 
// When you log out, you will be redirected to /login. Profile is still hidden behind loggin since it does not print relevant data without loggin token. 


const Main = () => {
    const [level, setLevel] = useState(3);

    // openEHR
    // This works, in this case the level that is retrieved from openEHR is 1, so after fetch is complete the page rerenders to display game with level 1
    /*
    
    GetGameLevel(setLevel);

    const didMount = useRef(false);

    useEffect(() => {
        console.log(didMount.current);
        console.log(level);

        if (!didMount.current) {
            didMount.current = true;
        } else {
            PostGameLevel(level);
        }
    }, [level, didMount]);
    */

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
                                        <Home {...props} level={level} setLevel={setLevel}/>
                                    )}
                                />
                                <Route path="/login" component={Login} />
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
                                <Route path="/allmeasurements" component={AllMeasurements} />
                                <Route path="/achievement" component={AchivementPage} />
                                <Route
                                    path='/collectibledemo'
                                    render={(props) => (
                                        <AchivementPage {...props} level={level} />
                                    )}
                                />
                                <Route path="/successfullysaved" component={SuccessfullySaved} />
                                <Route path="/Tree" component={Tree} />
                                {/* <Route path="/history" component={History} /> */}
                                <Route path="/goals" component={GoalsPage} />
                                <Route path="/diabetes" component={DiabetesPage} />
                                <Route path="/forest" component={Forest} />
                                <Route path="/addmeddata" component={AddMedDataNew} />
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