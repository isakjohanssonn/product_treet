import React from "react";
import "./MeasurementList.css";
import ListGroup from "react-bootstrap/ListGroup";
import {AiOutlineClockCircle} from "react-icons/all";
import {BsGraphUp, IoMdWalk, BsPlusCircleFill, FaCheckCircle, MdModeEdit} from "react-icons/all";
import {useHistory} from "react-router-dom";
import RemainingMeasurements, {MeasurementsTypes} from "./RemainingMeasurements";

const IconTypes = {
    [MeasurementsTypes.BloodSugar]: BsGraphUp,
    [MeasurementsTypes.Activity]: IoMdWalk,
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

// TODO: When the real data is in, make sure to sort data on:
//  1. Time first,
//  2. completed measurement second
function MeasurementList() {
    const history = useHistory();
    const remaining = RemainingMeasurements().remaining;

    // Sorting function that makes sure all the none completed measurements end up first
    remaining.sort((a, b) => {
        if (!a.completed && b.completed) return -1;
    });

    return <div>
        <ListGroup className="ruta">
            {remaining.map((measurement, index) => {
                const {activity, time, completed} = measurement;

                const ActualIcon = IconTypes[activity];
                const header = getHeader(completed, activity);
                const StatusIcon = completed ? FaCheckCircle : BsPlusCircleFill;
                const onClick = completed ? null : () => history.push('/addmeddata', {activity});
                const onClick2 = completed ? () => history.push('/addmeddata', {activity}) : null;
                const completedStyle = completed ? {backgroundColor: '#f5faff'} : null;


                return <ListGroup.Item
                    className="listItem"
                    key={'measurement' + index}
                    style={completedStyle}
                >
                    <h5>{header}</h5>
                    <div className="time">
                        <div className={"activity"}>
                            <AiOutlineClockCircle className="icon"/>
                            {time}
                        </div>
                        <div>
                            <StatusIcon
                                onClick={onClick}
                                className="statusIcon"
                            />
                        </div>
                    </div>
                    <div className="activity">
                        <div>{activity}
                            <ActualIcon className={"activityIcon"}/>
                        </div>
                        <div>
                            {completed && (
                                <div className="activity">
                                    <p>Edit</p>
                                    <MdModeEdit
                                        onClick={onClick2}
                                        className="statusIcon"/>
                                </div>
                            )}
                        </div>
                    </div>
                </ListGroup.Item>
            })}
        </ListGroup>
    </div>
}


export default MeasurementList;