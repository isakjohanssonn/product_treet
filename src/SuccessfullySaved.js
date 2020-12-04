import React from "react";
import "./Global.css";
import DateAndCalendar from "./Components/DateAndCalendar";
import Navigationbar from "./Components/Navigationbar";
import './SuccessfullySaved.css';
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";
import Streak from "./Components/Streak";
import Footer from './Components/Footer';
import { Card } from "react-bootstrap";


//IMPORTANT: how to import the graph components.
// For activitygraph <GraphActivity from={1} />
// For BloodsugarGraph <GraphBloodsugar from={1} />

export default function SuccessfullySaved(props) {

    const {state} = props.location;
    let value;

    if (state) {
        // State will determine how we got here. If state is undefined show error page
        // State is a measurement type, see Types in components/MeasurementList
        value = state.value;

    } else {
        // om state inte finns så har vi kommit till denna komponent på fel sätt.
        window.location = '/home'
    }
    const history = useHistory();

    const onClick = () => {
        history.push('/home');
    }


    return (
        <div className="savedMeasurementView scrollable" >
            <Navigationbar title={'Saved Measurement'}/>
            <DateAndCalendar/>

                You have successfully saved a new meausurement!



                <div style={{display: 'flex', width: '100%'}}>
                <Card className="savedMeasurementBox">
                        Saved
                        <p><pl>{value}</pl> unit </p>
                </Card>

                <div style={{display: 'flex', width: '5%'}}></div>

                <Card className="savedMeasurementBox">
                        Goal
                        <p><pl>XX</pl> unit</p>
                </Card>
                </div>


                You're not quite there,
                but getting close every day!

                <Streak {...props} />


                <Button className="measurementButtons" onClick={onClick}>FINISH</Button>

            <Footer/>
        </div>
    )
}