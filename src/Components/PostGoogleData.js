import React, { useState, Component } from "react";
import { Button, Alert, Card } from "react-bootstrap";
import PostEHR from "../openEHR/PostEHR"


// imports date, and activity from google api, this function will be called in addmeddata->google api->this.

const PostGoogleData = (Gdate, Gactivity) => {

  const [date, setDate] = useState(Gdate);
  const [activity, setActivity] = useState(Gactivity);
  const [submited, setSubmited] = useState(false);

  return (
    <div>
      {date != null &&
        <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title>{activity}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            <Card.Text>
              on {date} you walked {activity}, submit to show in your stats and keep your streak going.
            </Card.Text>
            <Button onClick={()=> {setDate(""); PostEHR(date, activity)}}>submit</Button>
          </Card.Body>
        </Card>
      }


    </div>
  );

}

export default PostGoogleData;