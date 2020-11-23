import React from "react";
import NewMeasurement from "./Components/NewMeasurment";
import DateAndCalendar from "./Components/DateAndCalendar";
import Navigationbar from "./Components/Navigationbar";

export default function AddMedDataNew(props) {

    const {state} = props.location;
    let activity;
    let id;
    let completed;

    if (state) {
        // State will determine how we got here. If state is undefined show error page
        // State is a measurement type, see Types in components/MeasurementList
        id = state.id;
        activity = state.activity;
        completed = state.completed;
    } else {
        // om state inte finns så har vi kommit till denna komponent på fel sätt.
        window.location = '/home'
    }

    const title = completed ? "Edit Measurement" : 'New Measurement';

    return(
        <div>
            <Navigationbar title={title}/>
            <DateAndCalendar/>
            <NewMeasurement id={id} activity={activity}/>
        </div>
    )
}