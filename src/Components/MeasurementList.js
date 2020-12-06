import React from "react";
import "./MeasurementList.css";
import ListGroup from "react-bootstrap/ListGroup";
import {AiOutlineClockCircle} from "react-icons/all";
import {BsGraphUp, IoMdWalk, BsPlusCircleFill, FaCheckCircle, MdModeEdit, SiGooglefit} from "react-icons/all";
import {useHistory} from "react-router-dom";
import useRemainingMeasurements from "./useRemainingMeasurements";
import {MeasurementsTypes} from "./useMeasurementHistory"

const IconTypes = {
    [MeasurementsTypes.BloodSugar]: BsGraphUp,
    [MeasurementsTypes.Activity]: IoMdWalk,
};

const UnitTypes = {
    [MeasurementsTypes.BloodSugar]: " mmol/L",
    [MeasurementsTypes.Activity]: " steps",
};

const Headers = {
    [MeasurementsTypes.BloodSugar]: 'Upcoming Measurement',
    [MeasurementsTypes.Activity]: 'Upcoming Activity',
}

function getHeader(completed, type) {
    let header = Headers[type];

    if (completed) {
        header = header.replace('Upcoming', 'Done');
    }
    return header;
}

function getTime (time) {
    let timeString = time+":00 ";

    if (time<10) {
        timeString = "0"+time+":00 ";
        return timeString;
    }
    return timeString;
}

// TODO: When the real data is in, make sure to sort data on:
//  1. Time first,
//  2. completed measurement second
function MeasurementList(props) {
    const {treeAge, current_tree, is_sick} = props;
    const history = useHistory();
    const {measurements, setCompleted} = useRemainingMeasurements();
    const {remainingAmount} = props;

    //sorting function that sorts by time
    measurements.sort((a, b) => {
        if (a.time  < b.time) return -1;
    });

    // Sorting function that makes sure all the none completed measurements end up first
    measurements.sort((a, b) => {
        if (!a.completed && b.completed) return -1;
    });

    return <div>
        <ListGroup className="ruta">
            {measurements.map((measurement, index) => {
                const {type, time, completed, id, value} = measurement;
                const ActualIcon = IconTypes[type];
                const header = getHeader(completed, type);
                const StatusIcon = completed ? FaCheckCircle : BsPlusCircleFill;
                const goToAddMedData = () => history.push('/addmeddata', {time, type, id, completed, from: 0});
                const completedStyle = completed ? {backgroundColor: 'rgb(201, 228, 255)'} : null;
                const unit = completed? value + UnitTypes[type] : null;
                const text = type===MeasurementsTypes.Activity ? "Go for a walk" : "Blood Sugar";
                const TimeString = getTime(time);

                return <ListGroup.Item
                    name="measurement"
                    className="listItem"
                    key={'measurement' + index}
                    style={completedStyle}
                    onClick={goToAddMedData}
                    
                >
                    <div className="measurementCardContent">
                        <div className="measurementCardContentLeft">
                            <h6 className="measurementCardHeader"><b>{header}</b></h6>
                            <div className="firstDivAlign">
                                <div className="time">
                                    <div className={"activity"}>
                                        <AiOutlineClockCircle className="icon"/>
                                        {TimeString}
                                    </div>
                                </div>
                                <div>
                                    <ActualIcon className={"activityIcon"}/> {text}
                                </div>
                                <div style={{display: 'flex',marginTop:'10px',marginLeft:'20px'}}>
                                    {unit}
                                </div>
                            </div>
                        </div>
                    <div className="secondDivAlign">
                        <div>
                            {completed &&(
                                <div className="activity" style={{marginLeft:'42px'}}>
                                    <SiGooglefit style={{fontSize:"30px"}}/>
                                </div>
                            )}
                        </div>
                        <div className="divDistance">
                            <StatusIcon style={{marginLeft:'40px'}}
                                onClick={!completed ? goToAddMedData : undefined}
                                className="statusIcon"
                            />
                        </div>
                        <div className="divDistance">
                            {completed &&(
                                <div className="activity">
                                    <MdModeEdit style={{marginLeft:'40px'}}
                                        onClick={completed ? goToAddMedData : undefined}
                                        className="statusIcon"/>
                                </div>
                            )}</div>
                    </div>
                    </div>
                </ListGroup.Item>
            })}
        </ListGroup>
    </div>
}


export default MeasurementList;