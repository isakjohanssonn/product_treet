import React from "react";
import "./Measurements.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LineChart, XAxis, Line, ResponsiveContainer} from 'recharts';

const Measurements = () => {

    const data = [
        {
          name: 'Mon', value: 4000,
        },
        {
          name: 'Tue', value: 3000,
        },
        {
          name: 'Wed', value: 2000,
        },
        {
          name: 'Thu', value: 2780,
        },
        {
          name: 'Fri', value: 1890,
        },
        {
          name: 'Sat', value: 2390,
        },
        {
          name: 'Sun', value: 3490,
        },
      ];

  return (
    <div>
      <div className="header">
        <h3>Measurements</h3>
      </div>
        <div className="topButtons">
        <Dropdown>
            <Dropdown.Toggle className="topButton" id="dropdown-basic">
                Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
        <Button className="topButton" id='allMeasurements'>All measurements</Button>
        </div>

        <div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 40, right: 30, left: 30, bottom: 0 }}>
              <XAxis dataKey="name"/>
              <Line dot={false} type="monotone" dataKey="value" stroke="#8884d8" color="black"/>
          </LineChart>
        </ResponsiveContainer>
        </div>

        <div>

          <Card border="secondary" className="streakCardMain">
            <Card.Header className="streakCardHeader">Streaks</Card.Header>
            <Card.Body className="streakCardBody">

              <Card border="secondary" className="streakCardWithin">
                <Card.Body>
                  <Card.Text>
                    X dagar
                  </Card.Text>
                  <Card.Text>
                    Current streak
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="streakCardWithin">
                <Card.Body>
                  <Card.Text>
                    X dagar
                  </Card.Text>
                  <Card.Text>
                    Longest streak
                  </Card.Text>
                </Card.Body>
              </Card>

            </Card.Body>
          </Card>

        </div>
    </div>
  );
}

export default Measurements;