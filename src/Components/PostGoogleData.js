import React, { useState, Component } from "react";
import { Button, Alert, Card } from "react-bootstrap";
import PostEHR from "../openEHR/PostEHR"
import { Link } from "react-router-dom";



// imports date, and activity from google api, this function will be called in addmeddata->google api->this.

const PostGoogleData = () => {

  const [date, setDate] = useState("2020-11-01");
  const [activity, setActivity] = useState("10 km");
  const [submited, setSubmited] = useState(false);

  return (
    <div>
      {date != null && 



        <div>
        <h3>Data från Google fit</h3>

        <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title>{activity}</Card.Title>
            <Card.Subtitle className="mb-2 text">{date}</Card.Subtitle>
            <Card.Text>
              on {date} you walked {activity}, submit to show in your stats and keep your streak going.
            </Card.Text>
            <Button onClick={() => { setSubmited(true); setDate(""); PostEHR(date, activity) }}>submit</Button>
          </Card.Body>
          <Alert variant="success" show={submited}>
            <Alert.Heading>Success</Alert.Heading>
            <p>Your data has been stored</p>
            <hr />
            <p className="mb-0">You can see all your data in <Link to='/measurements'>measurements</Link></p>
          </Alert>
        </Card>
        </div>
      }

    </div>
  );

}

export default PostGoogleData;