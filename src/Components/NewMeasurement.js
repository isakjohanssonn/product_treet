import React, { useState } from "react";
import "./NewMeasurement.css";
import Form from 'react-bootstrap/Form'
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useMeasurementHistory, { MeasurementsTypes } from "./useMeasurementHistory"
import GetGoogleFit from '../googleFit/getGoogleFit'


const HeaderTexts = {
  [MeasurementsTypes.BloodSugar]: "Blood sugar",
  [MeasurementsTypes.Activity]: "Walking distance",
};

const UnitTypes = {
  [MeasurementsTypes.BloodSugar]: "mmol/L",
  [MeasurementsTypes.Activity]: "steps",
};


function GetPreviousMeasurement(props) {
  const { type } = props;
  const { measurements } = useMeasurementHistory();
  var temp = measurements.length
  var i;

  for (i = temp; i > 0; i--) {
    if (measurements[i - 1].type === type) {
      return (measurements[i - 1].value)
    }
  }
}


function NewMeasurement(props) {
  const { type, id, setCompleted, from, time, completed, currentStreak, setCurrentStreak } = props;
  const [value, setValue] = useState("...");
  const history = useHistory();
  const { addMeasurement } = useMeasurementHistory();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //"from" determines from what page we came from. if 0 we come from /home and 1 is from /history.
  const onClick = () => {
    if (value) {
      setCompleted(id, value);
      if (from === 0 && !completed) {
        addMeasurement(time, new Date(), type, value);
        setCurrentStreak(currentStreak + 1);
      }
      from === 0 ? history.push('/successfullysaved', { value }) : history.push('/measurements');
    } else {
      setError('Value needed to submit form');
    }
  }


  return (
    <div className="newMeasurementView" style={{ textAlign: "center" }}>
      Please enter your measurement
      <Card className="NewMeasurementBox">
        <Card.Body className="hehe" >
          <Form.Group>
            <Form.Label >{HeaderTexts[type]}</Form.Label>
            <div className="EnterThings">
              <Form.Control placeholder={value} type={'number'} onChange={handleChange} />
              <p className="form-label">{UnitTypes[type]}</p>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </Form.Group>
          {type === "Activity" &&
            <GetGoogleFit value={value} setValue={setValue} />
          }
        </Card.Body>
      </Card>


      <div style={{ display: 'flex', width: '100%' }}>
        <Card className="savedMeasurementBox">
          Previous
                        <p><pl><GetPreviousMeasurement type={type} /></pl> {UnitTypes[type]} </p>
        </Card>

        <div style={{ display: 'flex', width: '5%' }}></div>

        <Card className="savedMeasurementBox">
          Goal
                        <p><pl>XX</pl> {UnitTypes[type]}</p>
        </Card>
      </div>



      <Button className="measurementButtons" onClick={onClick}>SAVE</Button>
    </div>
  )
}

export default NewMeasurement;