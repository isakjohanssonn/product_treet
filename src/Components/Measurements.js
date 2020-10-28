import React from "react";
import "./Measurements.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer } from 'recharts';

const Measurements = () => {

    const data = [
        {
          name: 'Mon', uv: 4000,
        },
        {
          name: 'Tue', uv: 3000,
        },
        {
          name: 'Wed', uv: 2000,
        },
        {
          name: 'Thu', uv: 2780,
        },
        {
          name: 'Fri', uv: 1890,
        },
        {
          name: 'Sat', uv: 2390,
        },
        {
          name: 'Sun', uv: 3490,
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
            <LineChart data={data} margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line dot={false} type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  );
}

export default Measurements;