import React from "react";
import Streak from "./Components/Streak";
import MeasurementList from "./Components/MeasurementList";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import useRemainingMeasurements from './Components/useRemainingMeasurements'
import DateAndCalendar from "./Components/DateAndCalendar";
import './Home.css'


const Home = () => {
    const {remainingAmount} = useRemainingMeasurements();
    const text = remainingAmount === 0 ? "All done!" : remainingAmount + " remaining";

    return (
        <div>
            <Navigationbar title={'Home'}/>
            <DateAndCalendar/>
            <Streak/>

            <div className="topDiv">
                <h4>Today's measurements</h4>
                <h4>{text}</h4>
            </div>

            <MeasurementList/>
            <Footer/>
        </div>
    );
}

export default Home;