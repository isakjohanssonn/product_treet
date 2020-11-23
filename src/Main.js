import React, {useState, Component, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history'
import {Redirect} from 'react-router-dom';
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


const Main = () => {

    const [globalTitle, setGlobalTitle] = useState("Home");
    const history = createBrowserHistory();
            

             

    return (
        <>
            <React.Fragment>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/profile" component={ProfilePage}/> {/** */}
                            {/* <Route path="/newmeasurement" component={NewMeasurement} /> */}
                            <Route path="/measurements" component={Measurements}/>
                            <Route path="/allmeasurements" component={AllMeasurements}/>
                            <Route path="/achievement" component={AchivementPage}/>
                            <Route path="/collectibledemo" component={AchivementPage}/>
                            <Route path="/successfullysaved" component={SuccessfullySaved}/>
                            <Route path="/Tree" component={Tree} />
                            {/* <Route path="/history" component={History} /> */}
                            <Route path="/goals" component={GoalsPage}/>
                            <Route path="/diabetes" component={DiabetesPage}/>
                            <Route path="/forest" component={Forest} />
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