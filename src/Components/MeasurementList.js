import React from "react";
import "./MeasurementList.css";
import ListGroup from "react-bootstrap/ListGroup";
import {AiOutlineClockCircle,AiOutlineHeart} from "react-icons/all";
import {BsGraphUp, IoMdWalk, BsPlusCircleFill, FaCheckCircle, MdModeEdit, FaHeart} from "react-icons/all";
import {useHistory} from "react-router-dom";
import useRemainingMeasurements, {MeasurementsTypes} from "./useRemainingMeasurements";

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
    const {measurements} = useRemainingMeasurements();

    // Sorting function that makes sure all the none completed measurements end up first
    measurements.sort((a, b) => {
        if (!a.completed && b.completed) return -1;
    });

    return <div>
        <ListGroup className="ruta">
            {measurements.map((measurement, index) => {
                const {activity, time, completed, id, value} = measurement;

                const ActualIcon = IconTypes[activity];
                const header = getHeader(completed, activity);
                const StatusIcon = completed ? FaCheckCircle : BsPlusCircleFill;

                const goToAddMedData = () => history.push('/addmeddata', {activity, id, completed});

                const completedStyle = completed ? {backgroundColor: '#bdd8f1'} : null;

                return <ListGroup.Item
                    className="listItem"
                    key={'measurement' + index}
                    style={completedStyle}>

                    <h6><b>{header}</b></h6>
                    <div className="firstDivAlign">
                        <div className="time">
                            <div className={"activity"}>
                                <AiOutlineClockCircle className="icon"/>
                                {time}
                            </div>
                        </div>
                        <div>
                            <ActualIcon className={"activityIcon"}/> {activity}
                        </div>
                        <div style={{display: 'flex',marginTop:'10px'}}>
                             {value && value}
                        </div>
                    </div>
                    <div className="secondDivAlign">
                        <div>
                            {completed &&(
                                <div className="activity" style={{marginLeft:'42px'}}>
                                    <FaHeart style={{fontSize:"30px"}}/>
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
                            )}
                        </div>
                    </div>
                    {/* <div className="time">
                        <div className={"activity"}>
                            <AiOutlineClockCircle className="icon"/>
                            {time}
                        </div>
                        <div>
                            <div>
                            {completed &&(
                                <div className="activity">
                                    <p>Lawrence</p>
                                </div>
                            )}
                            </div>
                            <StatusIcon
                                onClick={!completed ? goToAddMedData : undefined}
                                className="statusIcon"
                            />
                        </div>
                    </div>
                    <div className="activity">
                        <div>
                            <ActualIcon className={"activityIcon"}/> {activity}
                        </div>
                        <div>
                            {completed &&(
                                <div className="activity">
                                    <p>Edit</p>
                                    <MdModeEdit
                                        onClick={completed ? goToAddMedData : undefined}
                                        className="statusIcon"/>
                                </div>
                            )}
                        </div>
                    </div> */}

                    
                </ListGroup.Item>
            })}
        </ListGroup>
    </div>
}


export default MeasurementList;