import React, { useState, useEffect } from 'react';
import { Button, Alert } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PostEHR from "./openEHR/PostEHR"

const AddMedData = () => {
  const [showDate, setshowDate] = useState(true);
  const [date, setDate] = useState(new Date());
  const [showMedtype, setshowMedType] = useState(true);
  const [showInput, setshowInput] = useState(true);
  const [medType, setmedType] = useState("diabetes");
  const [showSummary, setshowSummary] = useState(true);
  const [input, setInput] = useState(null);
  const [success, setSuccess] = useState(false);

  // calendar date update
  const onChange = date => date = date;

  if (showDate) {
    return (
      <div>

        <Calendar
          onChange={onChange}
          showWeekNumbers
          value={date}
          Date
          maxDate={new Date()}

        />
        <Button onClick={() => setshowDate(false)}> next </Button>
      </div>
    );
  }
  if (showMedtype) {
    return (
      <div>
        <h1 >vad vill du lämna för data?</h1>
        <Button onClick={() => setshowMedType(false)}> next </Button>

      </div>
    );
  }
  if (showInput) {
    return (
      <div>
        <h1>{medType}</h1>
        <input onChange={(event) => setInput(event.target.value)} placeholder="fyll i här"></input>
        <Button onClick={() => setshowInput(false)}> next </Button>
      </div>
    );
  }
  if (showSummary) {
    return (
      <div className="summaryDiv">
        <h1>Summary</h1>
        {<h3>{date.toString().split(0, 3)}</h3>}
        <h3>{medType} : {input}</h3>
        <Button onClick={() => setSuccess(PostEHR(date, medType, input))}>Submit</Button>
        <Alert variant="success" show={success}>
          <Alert.Heading>Success</Alert.Heading>
          <p>Your data has been stored</p>
          <hr />
          <p className="mb-0">You can see all your data in</p>
        </Alert>
      </div>
    );
  }

}

export default AddMedData;