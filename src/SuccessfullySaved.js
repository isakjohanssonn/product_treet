import React from "react";
import DateAndCalendar from "./Components/DateAndCalendar";
import Navigationbar from "./Components/Navigationbar";
import './SuccessfullySaved.css';
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";

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
        <div>
            <Navigationbar title={'Saved Measurement'}/>
            <DateAndCalendar/>
            <div className="container">
                You have successfully saved a new meausurement!

                <div style={{display: 'flex', width: '100%'}}>
                    <div className={'box'}>
                        <p>Saved</p>
                        <p>{value}</p>
                    </div>
                    <div className={'box'}>
                        <p>Saved</p>
                        <p>XX unit</p>
                    </div>
                </div>

                You're not quite there,
                but getting close every day

                <div style={{display: 'flex', width: '100%'}}>
                    <div className={'box'}>
                        <p>Träd</p>
                        <p>Träd</p>
                    </div>
                    <div className={'box'}>
                        <p>Saved</p>
                        <p>XX unit</p>
                    </div>
                </div>

                <Button onClick={onClick}>Finish</Button>
            </div>
        </div>
    )
}