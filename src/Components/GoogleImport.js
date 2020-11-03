import React, { useState, Component } from "react";
import { Button, Alert, Card } from "react-bootstrap";
import PostEHR from "../openEHR/PostEHR"



const GoogleImport = () => {

  const [date, setDate] = useState();
  const [activity, setActivity] = useState("10 km");
  const [submited, setSubmited] = useState(false);

  const googleFit = () => {
    alert("start google fit component");
    
    }

  return (
    <div>
      <Button onClick={() => setDate("20200101")}>Import data from Google fit</Button>
      {date != null &&
        <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title>{activity}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            <Card.Text>
              on {date} you walked {activity}, submit to show in your stats and keep your streak going.
            </Card.Text>
            <Button onClick={()=> PostEHR(date, activity)}>submit</Button>
          </Card.Body>
        </Card>
      }


    </div>
  );

}

export default GoogleImport;