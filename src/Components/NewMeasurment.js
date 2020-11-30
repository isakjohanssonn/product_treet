import React, { useState, useEffect } from "react";
import "./NewMeasurement.css";
import Form from 'react-bootstrap/Form'
import { Button, Card } from "react-bootstrap";
import useRemainingMeasurements, { MeasurementsTypes } from "./useRemainingMeasurements";
import { useHistory } from "react-router-dom";
import GetGoogleFit from '../googleFit/getGoogleFit'

const HeaderTexts = {
    [MeasurementsTypes.BloodSugar]: "Enter blood sugar levels",
    [MeasurementsTypes.Activity]: "Enter walking distance",
};

const UnitTypes = {
    [MeasurementsTypes.BloodSugar]: "mmol/L",
    [MeasurementsTypes.Activity]: "km",
};

function NewMeasurement(props) {
    const { activity, id } = props;
    const [value, setValue] = useState();
    const history = useHistory();
    const { currentStreak, setCurrentStreak } = props;
    const [steps, setSteps] = useState("...")

    // useEffect(() => {
    //     setValue(steps);
    //   }, [steps]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const onClick = () => {
        setCompleted(id, `${value} ${UnitTypes[activity]}`);

        history.push('/successfullysaved', { value });
        setCurrentStreak(currentStreak + 1);

    }

    const { setCompleted } = useRemainingMeasurements();

    return (
        <div className="test">
            <Card className="NewMeasurementBox">
                <Card.Body className="hehe">
                    <Form.Group>
                        <Form.Label>{HeaderTexts[activity]}</Form.Label>
                        <div className="EnterThings">
                            <Form.Control placeholder={steps} type={'number'} onChange={handleChange} />
                            <p className="form-label">{UnitTypes[activity]}</p>
                        </div>
                    </Form.Group>
                </Card.Body>
            </Card>

            <Button onClick={onClick}>Save</Button>
            <GetGoogleFit steps={steps} setSteps={setSteps} />
        </div>
    )
}

export default NewMeasurement;