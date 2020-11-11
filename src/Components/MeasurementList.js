import React from "react";
import "./MeasurementList.css";
import ListGroup from "react-bootstrap/ListGroup";
import {AiOutlineClockCircle} from "react-icons/all";
import {BsGraphUp, IoMdWalk, BsPlusCircleFill, FaCheckCircle, MdModeEdit} from "react-icons/all";
import {useHistory} from "react-router-dom";

export const Types = {
    Measurement: 0,
    Activity: 1,
};

const IconTypes = {
    [Types.Measurement]: BsGraphUp,
    [Types.Activity]: IoMdWalk,
};

const Headers = {
    [Types.Measurement]: 'Upcoming Measurement',
    [Types.Activity]: 'Upcoming Activity',
}

function getHeader(completed, type) {
    let header = Headers[type];

    if (completed) {
        header = header.replace('Upcoming', 'Done');
    }

    return header;
}


const data = [
    {time: '09:00', activity: 'Blood sugar', type: Types.Measurement, completed: false, target: '70-99mg/dl'},
    {time: '12:00', activity: 'Go for a walk', type: Types.Activity, completed: false, target: '30 min'},
    {time: '15:00', activity: 'Blood sugar', type: Types.Measurement, completed: false, target: '70-99mg/dl'},
    {time: '18:00', activity: 'Blood sugar', type: Types.Measurement, completed: true, target: '70-99mg/dl'}
];

// TODO: When the real data is in, make sure to sort data on:
//  1. Time first,
//  2. completed measurement second
function MeasurementList() {
    const history = useHistory();

    return <div>
        <ListGroup className="ruta">
            {data.map((measurement, index) => {
                const {time, activity, type, target, completed} = measurement;

                const ActualIcon = IconTypes[type];
                const header = getHeader(completed, type);
                const StatusIcon = completed ? FaCheckCircle : BsPlusCircleFill;
                const onClick = completed ? null : () => history.push('/AddMedData', {type});
                const completedStyle = completed ? {backgroundColor: '#f5faff'} : null;

                return <ListGroup.Item
                    className="listItem"
                    key={'measurement' + index}
                    style={completedStyle}
                >
                    <h5>{header}</h5>
                    <div className="time">
                        <div>
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
                        <div className="target">
                            <p>Target: </p>
                            {target}
                        </div>
                    </div>
                </ListGroup.Item>
            })}
        </ListGroup>
    </div>
}

/* TODO: Remove comment when we get data from api.
MeasurementList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired, // Data is a array of different datatypes
}*/

export default MeasurementList;