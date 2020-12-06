import React from "react";
import Streak from "./Components/Streak";
import MeasurementList from "./Components/MeasurementList";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import useRemainingMeasurements from './Components/useRemainingMeasurements'
import DateAndCalendar from "./Components/DateAndCalendar";
import { Card } from 'react-bootstrap'
import './Home.css'
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GrowingTree from "./Components/GrowingTree";

const Home = (props) => {
    const {setTreeAge, treeAge, setCurrentStreak, currentStreak } = props;
    const { remainingAmount } = useRemainingMeasurements();
    const text = remainingAmount === 0 ? "All done!" : remainingAmount + " remaining";

   

    return (
        <div className="homePage">
            <Navigationbar title={'Home'} />
            <div className="scrollable">
                <DateAndCalendar />
                <Streak {...props} />

                <div className="topDiv">
                    <h4>Today's measurements</h4>
                    <h4>{text}</h4>
                </div>
                {remainingAmount === 0 && (
                    <div className="allDoneDiv">
                        <h2 className="measurementCardHeader"><b>Wow! You have completed all tasks for the day!</b></h2>
                        <h3>Good job! New tasks will appear tomorrow, so remember to swing by then!</h3>
                    </div>

                )}
                <MeasurementList {...props} remainingAmount={remainingAmount}/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;