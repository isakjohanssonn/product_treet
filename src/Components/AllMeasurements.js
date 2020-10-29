import React from "react";
import "./AllMeasurements.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { LineChart, XAxis, Line, ResponsiveContainer} from 'recharts';

const AllMeasurements = () => {

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
        <Dropdown>
            <Dropdown.Toggle className="typeButton" id="dropdown-basic">
                Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <div className="dateButtons">

        </div>

    </div>
  );
}

export default AllMeasurements;