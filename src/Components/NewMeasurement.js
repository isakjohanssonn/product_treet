import React, {useState} from "react";
import "./NewMeasurement.css";
import Form from 'react-bootstrap/Form'
import {Button, Card} from "react-bootstrap";
import useRemainingMeasurements from "./useRemainingMeasurements";
import {useHistory} from "react-router-dom";
import useMeasurementHistory, {MeasurementsTypes} from "./useMeasurementHistory"

const HeaderTexts = {
  [MeasurementsTypes.BloodSugar]: "Enter blood sugar levels",
  [MeasurementsTypes.Activity]: "Enter walking distance",
};

const UnitTypes = {
  [MeasurementsTypes.BloodSugar]: "mmol/L",
  [MeasurementsTypes.Activity]: "steps",
};

function NewMeasurement(props) {
  const {type, id, setCompleted, from, time, completed} = props;
  const [value, setValue] = useState();
  const history = useHistory();
  const {measurements, addMeasurement} = useMeasurementHistory();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //"from" determines from what page we came from. if 0 we come from /home and 1 is from /history.
  const onClick = () => {
    if (from === 0 && !completed) {
      const date = new Date();
      const realDate = [date.getDate(), date.getMonth(), date.getFullYear()].join("/");
      addMeasurement(time, realDate, type, value);
    }
    from === 0 ? history.push('/successfullysaved', {value}) : history.push('/measurements');
    }


  return (
    <div className="test">
      <Card className="NewMeasurementBox">
        <Card.Body className="hehe">
          <Form.Group>
            <Form.Label>{HeaderTexts[type]}</Form.Label>
            <div className="EnterThings">
              <Form.Control placeholder="..." type={'number'} onChange={handleChange}/>
              <p className="form-label">{UnitTypes[type]}</p>
            </div>
          </Form.Group>
        </Card.Body>
      </Card>

      <Button onClick={onClick}>Save</Button>
    </div>
  )
}

export default NewMeasurement;