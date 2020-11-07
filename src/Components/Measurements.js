import React from "react";
import "./Measurements.css";
import Streak from "./Streak";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { LineChart, XAxis, Line, ResponsiveContainer } from 'recharts';

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
        <Link to="/allmeasurements">
          <Button className="topButton" id='allMeasurements'>All measurements</Button>
        </Link>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 40, right: 30, left: 30, bottom: 0 }}>
            <XAxis dataKey="name" />
            <Line dot={false} type="monotone" dataKey="value" stroke="#8884d8" color="black" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <Streak />
      </div>


      <div className="bottomButtons">
        <Button className="bottomButton">Recent Measurements</Button>
        <Link to="/allmeasurements">
          <Button className="bottomButton">All Measurements</Button>
        </Link>
      </div>
    </div>
  );
}

export default Measurements;