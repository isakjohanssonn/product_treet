import React from "react";
import "./MeasurementList.css";
import ListGroup from "react-bootstrap/ListGroup";
import {AiOutlineClockCircle} from "react-icons/all";
import PropTypes from 'prop-types';

function MeasurementList(props) {
    const {data} = props;

    return <div>
        <ListGroup className="ruta">
            {data.map(measurement => {
                const {header, time, activity, icon, target} = measurement;
                const ActualIcon = icon;

                return <ListGroup.Item
                    style={{
                        "border": '1px solid lightgrey',
                        "borderRadius": 6,
                        "boxShadow": '0px 2px 6px lightgrey',
                        "backgroundColor": 'white',
                    }}
                    className="listItem"
                >
                    <h5>{header}</h5>
                    <div className="time">
                        <AiOutlineClockCircle className="icon"/>
                        {time}
                    </div>
                    <div className="activity">
                        <div>{activity}
                            <ActualIcon className={"activityIcon"}/>
                        </div>
                        <div style={{display: "flex"}}>
                            <p>Target: </p>
                            {target}
                        </div>
                    </div>
                </ListGroup.Item>
            })}
        </ListGroup>
    </div>
}

MeasurementList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired, // Data is a array of different datatypes
}

export default MeasurementList;