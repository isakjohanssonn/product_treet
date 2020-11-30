import React from "react";
import Streak from "./Components/Streak";
import MeasurementList from "./Components/MeasurementList";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import useRemainingMeasurements from './Components/useRemainingMeasurements'
import DateAndCalendar from "./Components/DateAndCalendar";
import './Home.css'
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GrowingTree } from "./Components/GrowingTree";

const Home = (props) => {
    const {remainingAmount} = useRemainingMeasurements();
    const text = remainingAmount === 0 ? "All done!" : remainingAmount + " remaining";

    return (
        <div className="homePage">
            <Navigationbar title={'Home'}/>
                <div className="scrollable">
                <DateAndCalendar/>
                <Streak {...props} />

                <div className="topDiv">
                    <h4>Today's measurements</h4>
                    <h4>{text}</h4>
                </div>

                <MeasurementList/>
                </div>
            <Footer/>
        </div>
    );
}

export default Home;